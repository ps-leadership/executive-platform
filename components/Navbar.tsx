import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <span className="text-sm font-semibold tracking-wide">
                        P/S
                    </span>
            </div>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/insights" className="hover:text-slate-900">
            Insights
          </Link>

          <Link href="/frameworks" className="hover:text-slate-900">
            Frameworks
          </Link>

          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>

          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}