import FeaturedThinking from "@/components/FeaturedThinking";
import FrameworkLibrary from "@/components/FrameworkLibrary";
import HeroVisual from "@/components/HeroVisual";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-20 md:px-10 md:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Technology · Customers · Transformation
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#172033] md:text-7xl">
              Priyanshu
              <br />
              Shrivastava
            </h1>

            <h2 className="mt-8 max-w-2xl text-2xl font-medium leading-snug text-[#34425a] md:text-3xl">
              Building, transforming & scaling customer organizations.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667085]">
              Technology leader connecting deep technical expertise,
              customer value, organizational capability and transformation
              to turn complex problems into scalable outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about"
                className="rounded-full bg-[#172033] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
              >
                Executive Profile →
              </a>

              <a
                href="/resume"
                className="rounded-full border border-[#172033]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#172033] transition hover:-translate-y-0.5 hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                View Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#667085]">
              <span>● Leadership</span>
              <span>● Transformation</span>
              <span>● Customer Organizations</span>
              <span>● AI & Technology</span>
            </div>
          </div>

          {/* Right side visual */}
<HeroVisual
  src="/images/hero-right-ai.png"
  alt="Vibrant marketplace at golden hour"
/>

        </div>
      </section>

            {/* Selected Impact */}
      <section className="bg-[#172033] text-white">
        <div className="mx-auto max-w-7xl px-8 py-24 md:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
              Selected Impact
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Turning ideas into organizations, systems and outcomes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              A selection of leadership work spanning customer organizations,
              operating models, technology programs and organizational
              transformation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">

            <article className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <span className="text-sm font-semibold tracking-[0.15em] text-[#f4b942]">
                01
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Customer Organization Design
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Building scalable customer-facing organizations and
                capabilities around adoption, value realization and business
                outcomes.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <span className="text-sm font-semibold tracking-[0.15em] text-[#2563eb]">
                02
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Operating Model & Transformation
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Designing practical operating models that turn complex
                organizational challenges into repeatable execution.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <span className="text-sm font-semibold tracking-[0.15em] text-[#f97360]">
                03
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Technology & Customer Outcomes
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Connecting deep technical expertise with customer value across
                enterprise software and technology environments.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <span className="text-sm font-semibold tracking-[0.15em] text-[#f4b942]">
                04
              </span>

              <h3 className="mt-10 text-2xl font-semibold">
                Leadership & Scale
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Building teams, developing leaders and creating systems that
                enable organizations to scale sustainably.
              </p>
            </article>

          </div>
        </div>
      </section>
      {/* Existing sections */}
      <FeaturedThinking />
      <FrameworkLibrary />

    </main>
  );
}