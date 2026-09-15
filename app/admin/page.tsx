import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/session";

export default async function AdminDashboardPage() {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#172033]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Admin
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Executive Platform
          </h1>

          <p className="mt-4 max-w-2xl text-[#667085]">
            Manage content, protected resources, and access requests from one
            place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/admin/articles"
            className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
              Content
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Manage Content
            </h2>

            <p className="mt-3 text-[#667085]">
              Create articles, frameworks, playbooks, research, assessments,
              case studies, and protected documents.
            </p>

            <span className="mt-6 inline-block font-semibold text-[#172033] group-hover:text-[#2563eb]">
              Open Content →
            </span>
          </Link>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
              Access
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Access Requests
            </h2>

            <p className="mt-3 text-[#667085]">
              Review protected-content requests and approve or reject access.
            </p>

            <span className="mt-6 inline-block font-semibold text-slate-400">
              Coming next
            </span>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
              Overview
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Dashboard
            </h2>

            <p className="mt-3 text-[#667085]">
              Content counts, publishing status, and access activity will
              appear here.
            </p>

            <span className="mt-6 inline-block font-semibold text-slate-400">
              Coming next
            </span>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
              Configuration
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Settings
            </h2>

            <p className="mt-3 text-[#667085]">
              Platform, licensing, terms, and administrator settings will live
              here.
            </p>

            <span className="mt-6 inline-block font-semibold text-slate-400">
              Coming next
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}