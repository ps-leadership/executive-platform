import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { createArticle, type MongoArticle } from "@/lib/articles";
import { getCurrentSession } from "@/lib/session";

const DATABASE_NAME = "executive_platform";
const COLLECTION_NAME = "articles";

export async function GET() {
  const session = await getCurrentSession();

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized." },
      { status: 401 }
    );
  }

  try {
    const client = await clientPromise;

    const articles = await client
      .db(DATABASE_NAME)
      .collection<MongoArticle>(COLLECTION_NAME)
      .find({})
      .sort({ updatedAt: -1 })
      .toArray();

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Failed to fetch content:", error);

    return NextResponse.json(
      { error: "Failed to fetch content." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getCurrentSession();

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      date,
      category,
      readingTime,
      sourceUrl,
      content,
      contentType,
      status,
      accessLevel,
      requiresApproval,
      featured,
      licenseEnabled,
      licenseType,
      termsVersion,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 }
      );
    }

    const article = await createArticle({
      title,
      slug,
      excerpt: excerpt || "",
      date: date || "",
      category: category || "",
      readingTime: readingTime || "",
      sourceUrl: sourceUrl || "",
      content,
      contentType: contentType || "article",
      featured: Boolean(featured),
      status: status || "draft",
      access: {
        level: accessLevel || "public",
        requiresApproval: Boolean(requiresApproval),
      },
      licensing: {
        enabled: Boolean(licenseEnabled),
        licenseType: licenseType || undefined,
        termsVersion: termsVersion || undefined,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Failed to create content:", error);

    return NextResponse.json(
      { error: "Failed to create content." },
      { status: 500 }
    );
  }
}