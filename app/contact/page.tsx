import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3]">
      <section className="mx-auto max-w-5xl px-8 py-24 md:px-10 md:py-32">
        <Link
          href="/"
          className="text-sm font-semibold text-[#667085] transition hover:text-[#2563eb]"
        >
          ← Back to Home
        </Link>

        <div className="mt-20 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97360]">
            Let's Talk
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] text-[#172033] md:text-7xl">
            Have a complex challenge worth discussing?
          </h1>

          <p className="mt-8 text-xl leading-9 text-[#667085] md:text-2xl">
            I enjoy conversations at the intersection of technology,
            customers, leadership and organizational transformation.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#book-time"
              className="rounded-full bg-[#172033] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
            >
              Book Time →
            </a>

            <Link
              href="/resume"
              className="rounded-full border border-[#172033]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#172033] transition hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              View Executive Profile
            </Link>
          </div>
        </div>

        <div
          id="book-time"
          className="mt-24 rounded-3xl bg-[#172033] p-8 text-white md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f4b942]">
            Book Time
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Let's find a time to talk.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            A scheduling link will be available here. This can later connect
            directly to the calendar and booking service you choose.
          </p>

          <button
            type="button"
            disabled
            className="mt-8 cursor-not-allowed rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white/50"
          >
            Booking link coming soon
          </button>
        </div>
      </section>
    </main>
  );
}