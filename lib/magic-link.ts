import crypto from "crypto";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";

const DATABASE_NAME = "executive_platform";
const TOKEN_COLLECTION = "magic_link_tokens";

const TOKEN_EXPIRY_MINUTES = 15;

function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function getBaseUrl() {
  return (
    process.env.NEXTAUTH_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
  );
}

function getMailer() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT || 465),
    secure: Number(process.env.EMAIL_SERVER_PORT || 465) === 465,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });
}

export async function createMagicLink(email: string) {
  const normalizedEmail = email.toLowerCase().trim();

  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);

  const client = await clientPromise;

  await client.db(DATABASE_NAME).collection(TOKEN_COLLECTION).insertOne({
    email: normalizedEmail,
    tokenHash,
    expiresAt: new Date(
      Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000
    ),
    createdAt: new Date(),
  });

  const baseUrl = getBaseUrl();
  const magicLink =
    `${baseUrl}/api/auth/verify?token=${encodeURIComponent(token)}`;

  const transporter = getMailer();

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: normalizedEmail,
    subject: "Sign in to Priyanshu Shrivastava",
    text: `Use the following link to sign in. This link expires in 15 minutes and can only be used once:

${magicLink}

If you did not request this email, you can safely ignore it.`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Sign in</h2>

        <p>Use the button below to securely sign in.</p>

        <p>
          <a
            href="${magicLink}"
            style="
              display:inline-block;
              padding:12px 20px;
              background:#1d4ed8;
              color:#ffffff;
              text-decoration:none;
              border-radius:6px;
            "
          >
            Sign in securely
          </a>
        </p>

        <p>
          This link expires in <strong>15 minutes</strong> and can only be
          used once.
        </p>

        <p>
          If you did not request this email, you can safely ignore it.
        </p>
      </div>
    `,
  });

  return true;
}

export async function consumeMagicLink(token: string) {
  const tokenHash = hashToken(token);

  const client = await clientPromise;
  const collection = client
    .db(DATABASE_NAME)
    .collection(TOKEN_COLLECTION);

  const record = await collection.findOne({
    tokenHash,
    expiresAt: { $gt: new Date() },
  });

  if (!record) {
    return null;
  }

  // Delete immediately so the token is single-use.
  await collection.deleteOne({
    _id: record._id,
  });

  return {
    email: record.email as string,
  };
}