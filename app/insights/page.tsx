import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function InsightsPage() {
  const articles = [
    {
      title: "From Invisible Effort to Intentional Investment",
      category: "Leadership",
    },
    {
      title: "Free Work Is Not Free",
      category: "Leadership",
    },
    {
      title: "Why Readiness Beats Technology in Digital Success",
      category: "Digital Transformation",
    },
    {
      title: "Building Organizational Capabilities for Emerging Technologies",
      category: "Strategy",
    },
    {
      title: "Frameworks for Adoption of AI, Blockchain & IoT",
      category: "AI",
    },
    {
      title: "How AI Reduces the Long-Standing R&D Problems",
      category: "AI",
    },
    {
      title: "Rethinking Customer Experience Delivery",
      category: "Customer Success",
    },
    {
      title: "The Quiet AI Advantage",
      category: "AI",
    },
  ];

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-6xl px-8 py-20">
      <Link href="/"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900">
        ← Back to Home
      </Link>

      <h1 className="text-5xl font-bold">Insights</h1>

      <p className="mt-6 max-w-3xl text-xl text-slate-600">
        Articles and perspectives on leadership, customer organizations,
        enterprise technology, AI and business transformation.
      </p>

      <div className="mt-14 space-y-6">
        {articles.map((article) => (
          <div
            key={article.title}
            className="rounded-2xl border border-slate-200 p-8 hover:shadow-md transition"
          >
            <div className="text-sm text-slate-500">
              {article.category}
            </div>

            <h2 className="mt-2 text-2xl font-semibold">
              {article.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}