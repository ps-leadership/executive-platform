import Link from "next/link";

const leadershipAreas = [
  "Customer Organization Leadership",
  "Technical Account Management",
  "Organizational Transformation",
  "Operating Model Design",
  "Technical Program Leadership",
  "Enterprise Technology",
  "Software Security",
  "AI & Emerging Technology",
];

const careerHighlights = [
  {
    period: "Current",
    title: "Senior Manager, Technical Account Management",
    scope:
      "Global customer and shared-services leadership",
    description:
      "Leading customer-facing capability development at the intersection of technology, customer outcomes, organizational capability and scale.",
  },
  {
    period: "Previous",
    title: "Principal Technical & Program Leadership",
    scope:
      "Engineering, technical programs and enterprise technology",
    description:
      "Led complex technical initiatives across products and engineering organizations, connecting technical execution with broader organizational outcomes.",
  },
  {
    period: "Earlier",
    title: "Engineering & Technology Leadership",
    scope:
      "Enterprise technology and cross-functional delivery",
    description:
      "Built a broad technical foundation through engineering and technology leadership roles across complex enterprise environments.",
  },
];

const credentials = [
  {
    title: "ISB",
    subtitle: "Global Management Programme",
  },
  {
    title: "Engineering",
    subtitle: "Technical Foundation",
  },
  {
    title: "PMP",
    subtitle: "Project Management Professional",
  },
  {
    title: "CSM",
    subtitle: "Certified ScrumMaster",
  },
  {
    title: "ITIL",
    subtitle: "IT Service Management",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* Header */}
      <section className="mx-auto max-w-6xl px-8 pb-16 pt-20 md:px-10 md:pt-24">

        <Link
          href="/about"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Executive Profile
        </Link>

        <div className="mt-16 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Professional Profile
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-[#172033] md:text-6xl">
            Priyanshu Shrivastava
          </h1>

          <p className="mt-5 text-2xl font-medium text-[#34425a] md:text-3xl">
            Technology · Customers · Transformation
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#667085]">
            Technology and customer organization leader with nearly two
            decades of experience spanning engineering, technical leadership,
            customer-facing organizations, transformation and organizational
            capability building.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white">
              Global Customer Leadership
            </span>

            <span className="rounded-full border border-[#172033]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#34425a]">
              Technical Account Management
            </span>

            <span className="rounded-full border border-[#172033]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#34425a]">
              Organizational Transformation
            </span>
          </div>

        </div>
      </section>

      {/* Executive Summary */}
      <section className="border-y border-[#172033]/10 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
                Executive Summary
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033]">
                Building capability around technology and customers.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#667085]">
              <p>
                My career has expanded from engineering and technical
                execution into customer leadership, organizational
                transformation and capability building.
              </p>

              <p>
                I work particularly well in environments where the problem is
                larger than a single function — where technology, customers,
                people, processes and business outcomes need to be brought
                together.
              </p>

              <p>
                My leadership focus is on building practical organizations and
                operating systems that can deliver value consistently and
                scale as the business evolves.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership Areas */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Leadership Areas
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#172033]">
            Areas where experience meets leadership scope.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {leadershipAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#172033]/10 bg-white px-5 py-3 text-sm font-medium text-[#34425a]"
              >
                {area}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Career */}
      <section className="bg-[#172033] text-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
            Career
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            A career of expanding scope.
          </h2>

          <div className="mt-12 space-y-5">
            {careerHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 md:p-8"
              >
                <div className="grid gap-5 md:grid-cols-[120px_1fr]">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f4b942]">
                    {item.period}
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-white/50">
                      {item.scope}
                    </p>

                    <p className="mt-5 max-w-3xl leading-7 text-white/65">
                      {item.description}
                    </p>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Selected Scope */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
              Selected Scope
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033]">
              Experience across technology, customers and organizational
              change.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#667085]">
              The detailed scope of individual roles varies by opportunity.
              This profile represents the broader leadership experience behind
              those roles.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-7">
              <h3 className="text-xl font-semibold text-[#172033]">
                Customer Organizations
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Customer adoption, technical success, value realization,
                customer engagement and scalable customer-facing capabilities.
              </p>
            </div>

            <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-7">
              <h3 className="text-xl font-semibold text-[#172033]">
                Organizational Capability
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Building teams, operating models, governance and repeatable
                mechanisms for organizations that need to scale.
              </p>
            </div>

            <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-7">
              <h3 className="text-xl font-semibold text-[#172033]">
                Technology Leadership
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Technical depth across enterprise technology, software,
                software security and complex technical programs.
              </p>
            </div>

            <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-7">
              <h3 className="text-xl font-semibold text-[#172033]">
                Transformation
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Connecting strategy, technology, people and execution to move
                organizations toward scalable outcomes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Education & Credentials */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Education & Credentials
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#172033]">
            Technical foundation with business and professional depth.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <div
                key={credential.title}
                className="rounded-3xl border border-[#172033]/10 bg-white p-7"
              >
                <h3 className="text-2xl font-semibold text-[#172033]">
                  {credential.title}
                </h3>

                <p className="mt-3 leading-7 text-[#667085]">
                  {credential.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/credentials"
              className="text-sm font-semibold text-[#2563eb] transition hover:text-[#172033]"
            >
              Explore credentials →
            </Link>
          </div>

        </div>
      </section>

      {/* Insights */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
              Thought Leadership
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">
              The broader thinking sits beyond the resume.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              Articles and perspectives explore leadership, customer
              organizations, technology, AI and business transformation.
            </p>

            <Link
              href="/insights"
              className="mt-7 inline-flex rounded-full bg-[#172033] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
            >
              Explore Insights →
            </Link>

          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 pb-24 md:px-10">

          <div className="rounded-3xl bg-[#172033] p-8 text-white md:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
              Professional Profile
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-4xl">
              The right leadership challenge is worth exploring.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#172033] transition hover:bg-[#f4b942]"
              >
                Let's Talk →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Executive Profile
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}