import crypto from "crypto";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { consumeMagicLink } from "@/lib/magic-link";

const DATABASE_NAME = "executive_platform";
const SESSION_COLLECTION = "sessions";

const SESSION_EXPIRY_DAYS = 30;

function hashSession(sessionToken: string) {
  return crypto
    .createHash("sha256")
    .update(sessionToken)
    .digest("hex");
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/auth/signin?error=invalid-link", request.url)
      );
    }

    const result = await consumeMagicLink(token);

    if (!result) {
      return NextResponse.redirect(
        new URL("/auth/signin?error=expired-link", request.url)
      );
    }

    const sessionToken = crypto.randomBytes(32).toString("hex");
    const sessionTokenHash = hashSession(sessionToken);

    const client = await clientPromise;

    await client
      .db(DATABASE_NAME)
      .collection(SESSION_COLLECTION)
      .insertOne({
        email: result.email,
        sessionTokenHash,
        createdAt: new Date(),
        expiresAt: new Date(
          Date.now() + SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000
        ),
      });

    const response = NextResponse.redirect(
      new URL("/admin", request.url)
    );

    response.cookies.set("executive_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_EXPIRY_DAYS * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Magic link verification failed:", error);

    return NextResponse.redirect(
      new URL("/auth/signin?error=verification-failed", request.url)
    );
  }
}