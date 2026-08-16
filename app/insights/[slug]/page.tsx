import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "data",
    "articles",
    article.contentFile
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");
  return (
  <main className="min-h-screen bg-white text-slate-900">
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">

      {/* Article header */}
      <header className="max-w-3xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          {article.category}
        </p>

        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-600 md:text-2xl md:leading-9">
          {article.excerpt}
        </p>

        <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">

          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>
      </header>

      {/* Divider */}
      <div className="my-14 h-px bg-slate-200" />

      {/* Article */}
      <article
        className="
            max-w-2xl
            text-[18px]
            leading-[1.9]
            text-slate-700

            [&_p]:mb-7

            [&_h2]:mb-5
            [&_h2]:mt-14
            [&_h2]:text-2xl
            [&_h2]:font-semibold
            [&_h2]:leading-tight
            [&_h2]:text-slate-900

            [&_h3]:mb-4
            [&_h3]:mt-10
            [&_h3]:text-xl
            [&_h3]:font-semibold
            [&_h3]:text-slate-900

            [&_strong]:font-semibold
            [&_strong]:text-slate-900

            [&_ul]:my-8
            [&_ul]:space-y-3
            [&_ul]:pl-6

            [&_li]:pl-2

            [&_blockquote]:my-10
            [&_blockquote]:border-l-2
            [&_blockquote]:border-slate-300
            [&_blockquote]:pl-6
            [&_blockquote]:italic
            [&_blockquote]:text-slate-500 "
        >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>

      {/* Source */}
       <div className="mt-20 max-w-2xl border-t border-slate-200 pt-7">
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 transition hover:text-slate-900"
        >
          Originally published on Medium →
        </a>
      </div>
    </div>
  </main>
);

}