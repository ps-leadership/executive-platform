import crypto from "crypto";
import { cookies } from "next/headers";
import clientPromise from "@/lib/mongodb";

const DATABASE_NAME = "executive_platform";
const SESSION_COLLECTION = "sessions";

function hashSession(sessionToken: string) {
  return crypto
    .createHash("sha256")
    .update(sessionToken)
    .digest("hex");
}

export async function getCurrentSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("executive_session")?.value;

  if (!sessionToken) {
    return null;
  }

  const sessionTokenHash = hashSession(sessionToken);

  const client = await clientPromise;

  const session = await client
    .db(DATABASE_NAME)
    .collection(SESSION_COLLECTION)
    .findOne({
      sessionTokenHash,
      expiresAt: { $gt: new Date() },
    });

  if (!session) {
    return null;
  }

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const sessionEmail = String(session.email || "").toLowerCase().trim();

  if (!adminEmail || sessionEmail !== adminEmail) {
    return null;
  }

  return {
    email: sessionEmail,
    expiresAt: session.expiresAt,
  };
}