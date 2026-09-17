import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import {
  updateAccessRequestStatus,
  createAccessGrant,
  type AccessRequest,
} from "@/lib/access";
import { getCurrentSession } from "@/lib/session";

const DATABASE_NAME = "executive_platform";
const COLLECTION_NAME = "access_requests";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  request: Request,
  context: RouteContext
) {
  const session = await getCurrentSession();

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized." },
      { status: 401 }
    );
  }

  try {
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid access request ID." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const status = body.status;

    if (status !== "approved" && status !== "rejected") {
      return NextResponse.json(
        {
          error:
            'Status must be either "approved" or "rejected".',
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const accessRequest = await client
      .db(DATABASE_NAME)
      .collection<AccessRequest>(COLLECTION_NAME)
      .findOne({
        _id: new ObjectId(id),
      });

    if (!accessRequest) {
      return NextResponse.json(
        { error: "Access request not found." },
        { status: 404 }
      );
    }

    if (accessRequest.status !== "pending") {
      return NextResponse.json(
        {
          error: `This request has already been ${accessRequest.status}.`,
        },
        { status: 409 }
      );
    }

    const updatedRequest = await updateAccessRequestStatus(
      accessRequest.email,
      accessRequest.articleSlug,
      status
    );

    if (!updatedRequest) {
      return NextResponse.json(
        { error: "Unable to update access request." },
        { status: 500 }
      );
    }

    let accessGrant = null;

    if (status === "approved") {
      accessGrant = await createAccessGrant({
        email: accessRequest.email,
        articleSlug: accessRequest.articleSlug,
        accessLevel: "protected",
      });
    }

    return NextResponse.json({
      success: true,
      request: updatedRequest,
      grant: accessGrant,
    });
  } catch (error) {
    console.error("Failed to update access request:", error);

    return NextResponse.json(
      { error: "Failed to update access request." },
      { status: 500 }
    );
  }
}