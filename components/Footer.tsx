import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#172033]/10 bg-[#fffaf3]">
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-10">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-[#172033]"
            >
              Priyanshu Shrivastava
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#667085]">
              Technology, customer organizations and transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">

            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-[#667085] transition hover:text-[#2563eb]"
              >
                Executive Profile
              </Link>

              <Link
                href="/resume"
                className="text-[#667085] transition hover:text-[#2563eb]"
              >
                Resume
              </Link>

              <Link
                href="/insights"
                className="text-[#667085] transition hover:text-[#2563eb]"
              >
                Insights
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/frameworks"
                className="text-[#667085] transition hover:text-[#f97360]"
              >
                Perspectives
              </Link>

              <Link
                href="/contact"
                className="text-[#667085] transition hover:text-[#f97360]"
              >
                Contact
              </Link>
            </div>

          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#172033]/10 pt-6 text-xs text-[#98a2b3] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Priyanshu Shrivastava. All rights
            reserved.
          </p>

          <p>
            Leadership · Transformation · Technology
          </p>
        </div>

      </div>
    </footer>
  );
}