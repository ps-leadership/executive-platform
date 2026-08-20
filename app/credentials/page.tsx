import Link from "next/link";

const education = [
  {
    title: "ISB",
    name: "Global Management Programme",
    description:
      "Business leadership education supporting the transition from technical leadership into broader organizational, strategic and business thinking.",
  },
  {
    title: "Engineering",
    name: "Engineering Foundation",
    description:
      "Technical foundation supporting a career spanning software, enterprise technology, technical programs and customer-facing leadership.",
  },
];

const certifications = [
  {
    title: "PMP",
    name: "Project Management Professional",
    area: "Program & Project Leadership",
  },
  {
    title: "CSM",
    name: "Certified ScrumMaster",
    area: "Agile Leadership",
  },
  {
    title: "ITIL",
    name: "IT Service Management",
    area: "Service Management",
  },
];

const credentialPrinciples = [
  {
    number: "01",
    title: "Evidence, not decoration.",
    description:
      "Credentials are included as supporting evidence of professional development rather than as a substitute for experience.",
  },
  {
    number: "02",
    title: "Context matters.",
    description:
      "The value of a certification comes from how it has been applied across real technology, customer and organizational problems.",
  },
  {
    number: "03",
    title: "Controlled access.",
    description:
      "Certificate evidence can be made available when verification is relevant without making personal documents openly downloadable.",
  },
];

export default function CredentialsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* Header */}
      <section className="mx-auto max-w-6xl px-8 pb-20 pt-20 md:px-10 md:pt-24">

        <Link
          href="/resume"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Professional Profile
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Education & Credentials
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#172033] md:text-6xl">
            A technical foundation.
            <br />
            Business leadership.
            <br />
            Continuous learning.
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-[#667085]">
            Education and professional certifications supporting a career
            across technology, customer organizations, program leadership and
            organizational transformation.
          </p>
        </div>

      </section>

      {/* Education */}
      <section className="border-y border-[#172033]/10 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
            Education
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033]">
            Formal foundations.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8"
              >
                <p className="text-3xl font-semibold text-[#172033]">
                  {item.title}
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-[#172033]">
                  {item.name}
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b88900]">
            Professional Certifications
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#172033]">
            Professional disciplines that complement the experience.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {certifications.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#172033]/10 bg-white p-8"
              >
                <p className="text-3xl font-semibold text-[#172033]">
                  {item.title}
                </p>

                <h3 className="mt-5 text-xl font-semibold text-[#172033]">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-[#667085]">
                  {item.area}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#172033] text-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
              How I Treat Credentials
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Credentials support the story.
              <br />
              They don't replace it.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {credentialPrinciples.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-[#f4b942]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Evidence / Controlled Access */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-10">

          <div className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Credential Evidence
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-[#172033] md:text-4xl">
              Certificate evidence can be provided when verification is
              required.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              Original certificate documents are intentionally not exposed as
              open public downloads. Verification copies can be made available
              through a controlled request process.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#172033] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
            >
              Request Credential Verification →
            </Link>

          </div>

        </div>
      </section>

      {/* Back */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-6xl px-8 pb-24 md:px-10">

          <Link
            href="/about"
            className="text-sm font-semibold text-[#2563eb] transition hover:text-[#172033]"
          >
            ← Back to Executive Profile
          </Link>

        </div>
      </section>

    </main>
  );
}