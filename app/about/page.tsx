import Link from "next/link";

const leadershipThemes = [
  {
    number: "01",
    title: "Build",
    description:
      "Create teams, capabilities and operating structures where there is no established model — turning ambiguity into something that can operate.",
    accent: "text-[#2563eb]",
  },
  {
    number: "02",
    title: "Transform",
    description:
      "Take complex, fragmented or evolving environments and create clearer ways of working, stronger capabilities and better alignment around outcomes.",
    accent: "text-[#f97360]",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Bridge engineering, customers, business and leadership so that technical decisions translate into customer value and organizational outcomes.",
    accent: "text-[#b88900]",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Turn successful approaches into repeatable systems, operating models and capabilities that can work across teams, regions and customer environments.",
    accent: "text-[#2563eb]",
  },
];

const careerEvolution = [
  {
    number: "01",
    title: "Engineering Foundation",
    text:
      "Started with a strong engineering and technology foundation, developing the technical depth that continues to shape how I approach complex problems.",
  },
  {
    number: "02",
    title: "Technical & Program Leadership",
    text:
      "Progressed into senior technical and program leadership, working across products, engineering organizations and complex cross-functional initiatives.",
  },
  {
    number: "03",
    title: "Customer & Technical Leadership",
    text:
      "Moved closer to customers, connecting technical expertise with adoption, technical success, value realization and business outcomes.",
  },
  {
    number: "04",
    title: "Organization & Capability Building",
    text:
      "Expanded from delivering within existing structures to designing teams, capabilities and operating models that allow organizations to scale.",
  },
  {
    number: "05",
    title: "Global Customer Leadership",
    text:
      "Today, my work sits at the intersection of customer leadership, technology and organizational scale, including global Technical Account Management and shared-services capability building.",
  },
];

const experienceDomains = [
  "Technology Leadership",
  "Customer Organizations",
  "Technical Account Management",
  "Operating Model Design",
  "Organizational Transformation",
  "Technical Program Leadership",
  "Enterprise SaaS",
  "Software Security",
  "AI & Emerging Technology",
];

const industries = [
  "Software & Enterprise Technology",
  "Software Security",
  "Telecommunications",
  "Enterprise Technology",
  "Supply Chain",
  "Customer-facing Technology Organizations",
];

const leadershipLessons = [
  {
    number: "01",
    title: "Capability matters more than activity.",
    description:
      "Busy organizations do not necessarily create value. Sustainable outcomes come from building the capabilities, systems and ownership required to repeatedly solve the right problems.",
    accent: "text-[#2563eb]",
  },
  {
    number: "02",
    title: "Technology needs an operating system around it.",
    description:
      "Tools and platforms create possibility. People, processes, leadership and governance determine whether that possibility becomes an organizational outcome.",
    accent: "text-[#f97360]",
  },
  {
    number: "03",
    title: "Scaling is different from repeating.",
    description:
      "What works for one team or situation does not automatically scale. Real scale requires intentional design — clear ownership, repeatable mechanisms and the ability to adapt across contexts.",
    accent: "text-[#b88900]",
  },
  {
    number: "04",
    title: "The best transformation starts with understanding the problem.",
    description:
      "Transformation is not about introducing change for its own sake. It starts by understanding the customer, organization and constraints before deciding what needs to change.",
    accent: "text-[#2563eb]",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* =========================================================
          1. EXECUTIVE IDENTITY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-20 md:px-10 md:pt-28">
        <Link
          href="/"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Back to Home
        </Link>

        <div className="mt-20 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Executive Profile
          </p>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#172033] md:text-7xl">
            Build where needed.
            <br />
            Transform where possible.
            <br />
            Scale what works.
          </h1>

          <p className="mt-9 max-w-4xl text-2xl font-medium leading-snug text-[#34425a] md:text-3xl">
            I build organizations, customer capabilities and operating models
            at the intersection of technology and business outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-[#667085]">
            <span>Global Customer & Shared Services Leadership</span>
            <span className="text-[#b0b7c3]">·</span>
            <span>Senior Manager, Technical Account Management</span>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#667085]">
            My career spans nearly two decades across engineering, technical
            leadership, customer organizations and organizational
            transformation. The common thread has been solving problems that
            sit between technology, people and business outcomes.
          </p>
        </div>
      </section>

      {/* =========================================================
          2. HOW I THINK
      ========================================================= */}
      <section className="border-y border-[#172033]/10 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
                How I Think
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#172033] md:text-5xl">
                Technology creates possibility.
                <br />
                Organizations create outcomes.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#667085]">
              <p>
                Technology has always been an important part of my career, but
                I have learned that technology alone rarely determines whether
                an organization succeeds.
              </p>

              <p>
                Outcomes depend on the system around the technology — the
                people, operating model, customer engagement, leadership,
                governance, incentives and ability to execute.
              </p>

              <p>
                That perspective has shaped the kind of problems I enjoy
                solving: problems where the answer requires more than a
                technical solution and where sustainable results depend on
                bringing technology, customers and organizations together.
              </p>

              <p>
                I am particularly interested in building capabilities from
                scratch, transforming organizations that need to evolve, and
                scaling approaches that have demonstrated value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHAT DEFINES MY WORK
      ========================================================= */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              What Defines My Work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
              Four ways I create organizational value.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#667085]">
              Different roles have carried different titles. The underlying
              leadership problems have been remarkably consistent.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadershipThemes.map((theme) => (
              <article
                key={theme.number}
                className="rounded-3xl border border-[#172033]/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className={`text-sm font-semibold tracking-[0.15em] ${theme.accent}`}
                >
                  {theme.number}
                </span>

                <h3 className="mt-7 text-3xl font-semibold text-[#172033]">
                  {theme.title}
                </h3>

                <p className="mt-4 max-w-xl text-lg leading-8 text-[#667085]">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. CAREER EVOLUTION
      ========================================================= */}
      <section className="bg-[#172033] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
              Career Evolution
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              From technical depth to organizational leadership.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              My career has not been a straight move from one function to
              another. It has been an expansion of the problems I am able to
              solve.
            </p>
          </div>

          <div className="mt-16 space-y-5">
            {careerEvolution.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-7 md:grid-cols-[100px_280px_1fr] md:items-start md:p-8"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-[#f4b942]">
                  {stage.number}
                </span>

                <h3 className="text-2xl font-semibold">
                  {stage.title}
                </h3>

                <p className="leading-7 text-white/65">
                  {stage.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          5. BREADTH OF EXPERIENCE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
                Breadth of Experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
                A career built across functions, technologies and customers.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#667085]">
                My experience is intentionally broader than any single job
                title. It spans technical delivery, customer leadership,
                organizational design and emerging technology.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {experienceDomains.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#172033]/10 bg-[#fffaf3] px-5 py-3 text-sm font-medium text-[#34425a]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          6. WHAT I HAVE LEARNED
      ========================================================= */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
              What I Have Learned
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
              The hardest organizational problems rarely belong to one
              function.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#667085]">
              Years of working across technology, customers and organizational
              change have shaped a few principles that continue to influence
              how I lead.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadershipLessons.map((lesson) => (
              <article
                key={lesson.number}
                className="rounded-3xl border border-[#172033]/10 bg-white p-8"
              >
                <span
                  className={`text-sm font-semibold tracking-[0.15em] ${lesson.accent}`}
                >
                  {lesson.number}
                </span>

                <h3 className="mt-7 text-2xl font-semibold text-[#172033]">
                  {lesson.title}
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  {lesson.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          7. EDUCATION & CREDENTIALS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Education & Credentials
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
              Technical foundation. Business leadership. Continuous learning.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <article className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2563eb]">
                Business Leadership
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-[#172033]">
                ISB — Global Management Programme
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Business leadership education that complements a technical
                career with broader organizational, strategic and business
                thinking.
              </p>
            </article>

            <article className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f97360]">
                Technical Foundation
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-[#172033]">
                Engineering
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                An engineering foundation supporting a career spanning
                technology, software, technical programs and customer-facing
                leadership.
              </p>
            </article>

            <article className="rounded-3xl border border-[#172033]/10 bg-[#fffaf3] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#b88900]">
                Professional Certifications
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-[#172033]">
                PMP · CSM · ITIL
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Professional certifications supporting program delivery, agile
                practices and IT service management.
              </p>
            </article>

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

      {/* =========================================================
          8. THINKING
      ========================================================= */}
      <section className="bg-[#fffaf3]">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                Thinking & Research
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
                Writing is another way of making experience useful.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#667085]">
                I use writing to explore leadership, technology, customer
                organizations, transformation and the organizational
                conditions that determine whether technology creates value.
              </p>
            </div>

            <Link
              href="/insights"
              className="rounded-full border border-[#172033]/15 px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              Explore Insights →
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          9. RESUME / CONTACT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-24 md:px-10">

          <div className="rounded-3xl bg-[#172033] p-8 text-white md:p-12">

            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
                Go Deeper
              </p>

              <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
                The profile tells the story.
                <br />
                The resume provides the detail.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                The executive profile represents the broader body of work.
                Individual resumes can then be tailored to the opportunity,
                emphasizing the experience most relevant to a particular
                leadership challenge.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/resume"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#172033] transition hover:bg-[#f4b942]"
                >
                  View Resume →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
                >
                  Let's Talk
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}