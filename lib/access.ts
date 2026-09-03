import clientPromise from "@/lib/mongodb";

export type User = {
  email: string;
  name?: string;
  organization?: string;
  role?: string;
  createdAt: Date;
  lastLoginAt?: Date;
};

export type AccessRequestStatus = "pending" | "approved" | "rejected";

export type AccessRequest = {
  email: string;
  articleSlug: string;
  name?: string;
  organization?: string;
  role?: string;
  message?: string;
  status: AccessRequestStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type AccessGrant = {
  email: string;
  articleSlug: string;
  accessLevel: "protected" | "licensed";
  status: "active" | "revoked" | "expired";
  grantedAt: Date;
  expiresAt?: Date;
  termsVersion?: string;
  licenseTermsVersion?: string;
};

export type TermsAcceptance = {
  email: string;
  termsType: "terms" | "privacy" | "content-license";
  termsVersion: string;
  acceptedAt: Date;
};

const DATABASE_NAME = "executive_platform";

async function getDatabase() {
  const client = await clientPromise;
  return client.db(DATABASE_NAME);
}

/*
 * Find or create a user.
 */
export async function findUserByEmail(email: string) {
  const db = await getDatabase();

  return db.collection<User>("users").findOne({
    email: email.toLowerCase().trim(),
  });
}

export async function createUser(
  user: Omit<User, "createdAt">
) {
  const db = await getDatabase();

  const document: User = {
    ...user,
    email: user.email.toLowerCase().trim(),
    createdAt: new Date(),
  };

  await db.collection<User>("users").insertOne(document);

  return document;
}

/*
 * Create an access request.
 */
export async function createAccessRequest(
  request: Omit<AccessRequest, "createdAt" | "updatedAt" | "status">
) {
  const db = await getDatabase();

  const now = new Date();

  const document: AccessRequest = {
    ...request,
    email: request.email.toLowerCase().trim(),
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };

  await db
    .collection<AccessRequest>("access_requests")
    .insertOne(document);

  return document;
}

/*
 * Find an existing request for an article and email.
 */
export async function findAccessRequest(
  email: string,
  articleSlug: string
) {
  const db = await getDatabase();

  return db.collection<AccessRequest>("access_requests").findOne({
    email: email.toLowerCase().trim(),
    articleSlug,
  });
}

/*
 * Grant access to an article.
 */
export async function createAccessGrant(
  grant: Omit<AccessGrant, "grantedAt" | "status">
) {
  const db = await getDatabase();

  const document: AccessGrant = {
    ...grant,
    email: grant.email.toLowerCase().trim(),
    status: "active",
    grantedAt: new Date(),
  };

  await db.collection<AccessGrant>("access_grants").insertOne(document);

  return document;
}

/*
 * Check whether a user currently has access.
 */
export async function hasArticleAccess(
  email: string,
  articleSlug: string
) {
  const db = await getDatabase();

  const grant = await db
    .collection<AccessGrant>("access_grants")
    .findOne({
      email: email.toLowerCase().trim(),
      articleSlug,
      status: "active",
    });

  if (!grant) {
    return false;
  }

  if (grant.expiresAt && grant.expiresAt < new Date()) {
    await db.collection<AccessGrant>("access_grants").updateOne(
      { _id: grant._id },
      {
        $set: {
          status: "expired",
        },
      }
    );

    return false;
  }

  return true;
}

/*
 * Record acceptance of a specific version of a policy.
 */
export async function recordTermsAcceptance(
  acceptance: Omit<TermsAcceptance, "acceptedAt">
) {
  const db = await getDatabase();

  const document: TermsAcceptance = {
    ...acceptance,
    email: acceptance.email.toLowerCase().trim(),
    acceptedAt: new Date(),
  };

  await db
    .collection<TermsAcceptance>("terms_acceptance")
    .insertOne(document);

  return document;
}