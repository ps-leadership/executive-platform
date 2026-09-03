import { NextResponse } from "next/server";
import { createArticle } from "@/lib/articles";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "title",
      "slug",
      "excerpt",
      "date",
      "category",
      "readingTime",
      "content",
      "status",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (!["draft", "published", "archived"].includes(body.status)) {
      return NextResponse.json(
        { error: "Invalid article status" },
        { status: 400 }
      );
    }

    if (
      !body.access?.level ||
      !["public", "protected", "licensed"].includes(body.access.level)
    ) {
      return NextResponse.json(
        { error: "Invalid access level" },
        { status: 400 }
      );
    }

    const article = await createArticle({
      slug: body.slug.trim(),
      title: body.title.trim(),
      excerpt: body.excerpt.trim(),
      date: body.date.trim(),
      category: body.category.trim(),
      readingTime: body.readingTime.trim(),
      sourceUrl: body.sourceUrl?.trim() || "",
      content: body.content,
      featured: Boolean(body.featured),
      status: body.status,
      access: {
        level: body.access.level,
        requiresApproval: Boolean(body.access.requiresApproval),
      },
      licensing: {
        enabled: body.access.level === "licensed",
      },
    });

    return NextResponse.json(
      {
        message: "Article created successfully",
        article: {
          slug: article.slug,
          title: article.title,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create article error:", error);

    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}