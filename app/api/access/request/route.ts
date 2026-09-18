import { NextResponse } from "next/server";
import {
  createAccessRequest,
  findAccessRequest,
  hasArticleAccess,
} from "@/lib/access";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").toLowerCase().trim();
    const articleSlug = String(body.articleSlug || "").trim();
    const name = String(body.name || "").trim();
    const organization = String(body.organization || "").trim();
    const role = String(body.role || "").trim();
    const message = String(body.message || "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!articleSlug) {
      return NextResponse.json(
        { error: "Article slug is required." },
        { status: 400 }
      );
    }

    const alreadyHasAccess = await hasArticleAccess(
      email,
      articleSlug
    );

    if (alreadyHasAccess) {
      return NextResponse.json(
        {
          error: "You already have access to this content.",
        },
        { status: 409 }
      );
    }

    const existingRequest = await findAccessRequest(
      email,
      articleSlug
    );

    if (existingRequest?.status === "pending") {
      return NextResponse.json({
        success: true,
        status: "pending",
        message:
          "Your access request is already pending review.",
      });
    }

    if (existingRequest?.status === "approved") {
      return NextResponse.json(
        {
          error:
            "Your request has already been approved, but access is not currently active.",
        },
        { status: 409 }
      );
    }

    const accessRequest = await createAccessRequest({
      email,
      articleSlug,
      name: name || undefined,
      organization: organization || undefined,
      role: role || undefined,
      message: message || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        status: accessRequest.status,
        message:
          "Your access request has been submitted for review.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create access request:", error);

    return NextResponse.json(
      { error: "Unable to submit access request." },
      { status: 500 }
    );
  }
}