import Link from "next/link";
import { articles } from "@/data/articles";

export default function InsightsPage() {
  const featured = articles.find((article) => article.featured) ?? articles[0];

  const remaining = articles.filter(
    (article) => article.slug !== featured.slug
  );

  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* Header */}
      <section className="mx-auto max-w-6xl px-8 pb-20 pt-20 md:px-10 md:pt-24">
        <Link
          href="/"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Back to Home
        </Link>

        <div className="mt-20 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Insights
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#172033] md:text-7xl">
            Ideas from the intersection of technology, customers and
            organizations.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#667085] md:text-2xl md:leading-9">
            Writing and perspectives on leadership, customer organizations,
            enterprise technology, AI and transformation.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="border-y border-[#172033]/10 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
            Featured
          </p>

          <Link
            href={`/insights/${featured.slug}`}
            className="group mt-8 block rounded-3xl bg-[#172033] p-8 text-white transition duration-300 hover:-translate-y-1 md:p-12"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-[#f4b942]">
                {featured.category}
              </span>

              <span className="text-white/30">·</span>

              <span className="text-white/55">
                {featured.date}
              </span>

              <span className="text-white/30">·</span>

              <span className="text-white/55">
                {featured.readingTime}
              </span>
            </div>

            <h2 className="mt-7 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
              {featured.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              {featured.excerpt}
            </p>

            <div className="mt-8 text-sm font-semibold text-[#f4b942]">
              Read article →
            </div>
          </Link>
        </div>
      </section>

      {/* Article List */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                All Insights
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033]">
                Writing and perspectives.
              </h2>
            </div>

            <span className="hidden text-sm font-medium text-[#667085] md:block">
              {articles.length} published pieces
            </span>
          </div>

          <div className="mt-10 border-t border-[#172033]/10">

            {remaining.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block border-b border-[#172033]/10 py-8 transition hover:bg-white md:px-5"
              >
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">

                  {/* Main */}
                  <div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]">
                      <span>{article.category}</span>
                    </div>

                    <h3 className="mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-[#172033] transition group-hover:text-[#2563eb]">
                      {article.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-[#667085]">
                      {article.excerpt}
                    </p>

                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 whitespace-nowrap text-sm text-[#98a2b3] md:flex-col md:items-end md:gap-2">

                    <span>{article.date}</span>

                    <span className="md:hidden">·</span>

                    <span>{article.readingTime}</span>

                    <span className="mt-1 hidden font-semibold text-[#2563eb] transition group-hover:translate-x-1 md:block">
                      Read →
                    </span>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}