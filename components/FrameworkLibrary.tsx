import Link from "next/link";
import { articles } from "@/data/articles";

const selectedSlugs = [
  "quiet-ai-advantage",
  "ai-rd-problems",
  "building-organizational-capabilities",
];

export default function FrameworkLibrary() {
  const selectedArticles = selectedSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article) => article !== undefined);

  return (
    <section className="bg-[#fffaf3]">
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
            Perspectives & Research
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
            Thinking shaped by experience.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#667085]">
            Selected perspectives on technology, organizations, AI and
            transformation. The public articles share the thinking without
            exposing the underlying models, playbooks or proprietary work.
          </p>
          <Link  href="/insights" className="inline-flex shrink-0 rounded-full border border-[#172033]/20 bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-[#f97360] hover:text-[#f97360]">
              Explore all insights →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {selectedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-[#172033]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f97360]">
                  {article.category}
                </span>

                <span className="text-lg text-[#172033]/30 transition group-hover:translate-x-1 group-hover:text-[#f97360]">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#172033]">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-base leading-7 text-[#667085]">
                {article.excerpt}
              </p>

              <div className="mt-8 text-sm font-semibold text-[#172033] transition group-hover:text-[#f97360]">
                Read perspective →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}