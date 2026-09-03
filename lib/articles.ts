import clientPromise from "@/lib/mongodb";

export type ArticleAccess = "public" | "protected" | "licensed";
export type ArticleStatus = "draft" | "published" | "archived";

export type MongoArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  sourceUrl?: string;
  content: string;
  featured?: boolean;

  status: ArticleStatus;

  access: {
    level: ArticleAccess;
    requiresApproval: boolean;
  };

  licensing?: {
    enabled: boolean;
    licenseType?: string;
    termsVersion?: string;
  };

  createdAt: Date;
  updatedAt: Date;
};

const DATABASE_NAME = "executive_platform";
const COLLECTION_NAME = "articles";

async function getArticlesCollection() {
  const client = await clientPromise;

  return client
    .db(DATABASE_NAME)
    .collection<MongoArticle>(COLLECTION_NAME);
}

export async function getPublishedArticles() {
  const collection = await getArticlesCollection();

  return collection
    .find({
      status: "published",
      "access.level": "public",
    })
    .sort({ createdAt: -1 })
    .toArray();
}

export async function getArticleBySlug(slug: string) {
  const collection = await getArticlesCollection();

  return collection.findOne({
    slug,
    status: "published",
  });
}

export async function createArticle(
  article: Omit<MongoArticle, "createdAt" | "updatedAt">
) {
  const collection = await getArticlesCollection();

  const now = new Date();

  const document: MongoArticle = {
    ...article,
    createdAt: now,
    updatedAt: now,
  };

  await collection.insertOne(document);

  return document;
}
