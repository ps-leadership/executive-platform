import { NextResponse } from "next/server";
import { createMagicLink } from "@/lib/magic-link";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").toLowerCase().trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await createMagicLink(email);

    return NextResponse.json({
      success: true,
      message:
        "If the email address is valid, a sign-in link has been sent.",
    });
  } catch (error) {
    console.error("Magic link request failed:", error);

    return NextResponse.json(
      { error: "Unable to send the sign-in link." },
      { status: 500 }
    );
  }
}