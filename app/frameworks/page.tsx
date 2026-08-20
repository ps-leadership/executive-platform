import Link from "next/link";

const frameworks = [
  {
    number: "01",
    category: "CUSTOMER ORGANIZATIONS",
    title: "Customer Health Intelligence",
    description:
      "A way of thinking about customer health beyond isolated signals—connecting adoption, technical success, engagement, value realization and renewal readiness.",
    perspective:
      "Customer health becomes more useful when it helps leaders understand where intervention can create the greatest customer and business impact.",
    accent: "text-[#2563eb]",
  },
  {
    number: "02",
    category: "OPERATING MODELS",
    title: "Capability Before Scale",
    description:
      "A perspective on building organizational capabilities before attempting to scale them across teams, regions or customer environments.",
    perspective:
      "Scaling a weak operating model only makes the underlying problem larger. The capability needs to work before the organization tries to multiply it.",
    accent: "text-[#f97360]",
  },
  {
    number: "03",
    category: "TRANSFORMATION",
    title: "Readiness Before Technology",
    description:
      "A framework for thinking about transformation through organizational readiness, leadership, culture, learning capacity and execution—not technology alone.",
    perspective:
      "Technology creates possibility. Organizational readiness determines whether that possibility becomes an outcome.",
    accent: "text-[#b88900]",
  },
  {
    number: "04",
    category: "LEADERSHIP & SCALE",
    title: "Build → Transform → Scale",
    description:
      "A leadership lens for understanding three different organizational problems: creating something new, changing something that exists, and scaling what has demonstrated value.",
    perspective:
      "The leadership approach should change depending on whether the organization is building, transforming or scaling.",
    accent: "text-[#2563eb]",
  },
];

export default function FrameworksPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-8 pb-20 pt-20 md:px-10 md:pt-24">

        <Link
          href="/"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Back to Home
        </Link>

        <div className="mt-20 max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Selected Perspectives
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#172033] md:text-7xl">
            Frameworks for thinking about organizations, customers and change.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#667085] md:text-2xl md:leading-9">
            Selected models and perspectives developed through work across
            technology, customer organizations, operating models and
            organizational transformation.
          </p>

        </div>
      </section>

      {/* Frameworks */}
      <section className="border-y border-[#172033]/10 bg-white">

        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="grid gap-6 md:grid-cols-2">

            {frameworks.map((framework) => (
              <article
                key={framework.number}
                className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8 md:p-10"
              >

                <div className="flex items-start justify-between">

                  <span
                    className={`text-sm font-semibold tracking-[0.15em] ${framework.accent}`}
                  >
                    {framework.number}
                  </span>

                  <span className="text-xs font-semibold tracking-[0.16em] text-[#98a2b3]">
                    {framework.category}
                  </span>

                </div>

                <h2 className="mt-10 text-3xl font-semibold tracking-tight text-[#172033]">
                  {framework.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#667085]">
                  {framework.description}
                </p>

                <div className="mt-8 border-t border-[#172033]/10 pt-7">

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#667085]">
                    Perspective
                  </p>

                  <p className="mt-3 leading-7 text-[#172033]">
                    {framework.perspective}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Controlled Access */}
      <section className="bg-[#fffaf3]">

        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="rounded-3xl bg-[#172033] p-8 text-white md:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
              Deeper Material
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-4xl">
              Some of the work goes deeper than the public view.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
              Detailed methodologies, operating mechanisms, implementation
              guides and working artifacts are intentionally kept outside
              the public layer. Selected material may be shared in the
              context of relevant professional conversations.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#172033] transition hover:bg-[#f4b942]"
            >
              Start a Conversation →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}