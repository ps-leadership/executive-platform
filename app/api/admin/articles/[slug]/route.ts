import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import type { MongoArticle } from "@/lib/articles";

const DATABASE_NAME = "executive_platform";
const COLLECTION_NAME = "articles";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  _request: Request,
  context: RouteContext
) {
  try {
    const { slug } = await context.params;

    const client = await clientPromise;

    const article = await client
      .db(DATABASE_NAME)
      .collection<MongoArticle>(COLLECTION_NAME)
      .findOne({ slug });

    if (!article) {
      return NextResponse.json(
        { error: "Content not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Failed to fetch content:", error);

    return NextResponse.json(
      { error: "Failed to fetch content." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  context: RouteContext
) {
  try {
    const { slug } = await context.params;
    const body = await request.json();

    const client = await clientPromise;

    const updates = {
      ...body,
      updatedAt: new Date(),
    };

    delete updates._id;
    delete updates.createdAt;
    delete updates.slug;

    const result = await client
      .db(DATABASE_NAME)
      .collection<MongoArticle>(COLLECTION_NAME)
      .updateOne(
        { slug },
        {
          $set: updates,
        }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Content not found." },
        { status: 404 }
      );
    }

    const updatedArticle = await client
      .db(DATABASE_NAME)
      .collection<MongoArticle>(COLLECTION_NAME)
      .findOne({ slug });

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error("Failed to update content:", error);

    return NextResponse.json(
      { error: "Failed to update content." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  context: RouteContext
) {
  try {
    const { slug } = await context.params;

    const client = await clientPromise;

    const result = await client
      .db(DATABASE_NAME)
      .collection<MongoArticle>(COLLECTION_NAME)
      .deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Content not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Content deleted.",
    });
  } catch (error) {
    console.error("Failed to delete content:", error);

    return NextResponse.json(
      { error: "Failed to delete content." },
      { status: 500 }
    );
  }
}