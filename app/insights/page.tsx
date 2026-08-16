import Link from "next/link";
import { articles } from "@/data/articles";

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
      >
        ← Back to Home
      </Link>

      <h1 className="mt-8 text-5xl font-bold text-slate-900">
        Insights
      </h1>

      <p className="mt-6 max-w-3xl text-xl text-slate-600">
        Articles and perspectives on leadership, customer organizations,
        enterprise technology, AI and business transformation.
      </p>

      <div className="mt-14 space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group block rounded-2xl border border-slate-200 p-8 transition hover:border-slate-300 hover:shadow-md"
          >
            <div className="text-sm font-medium text-slate-500">
              {article.category}
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900 group-hover:text-slate-600">
              {article.title}
            </h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              {article.excerpt}
            </p>

            <div className="mt-5 flex gap-3 text-sm text-slate-500">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readingTime}</span>
            </div>

            <div className="mt-5 text-sm font-medium text-slate-900">
              Read article →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}