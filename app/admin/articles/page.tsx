"use client";

import { FormEvent, useState } from "react";

export default function AdminArticlesPage() {
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const form = new FormData(event.currentTarget);

    const article = {
      title: form.get("title"),
      slug: form.get("slug"),
      excerpt: form.get("excerpt"),
      date: form.get("date"),
      category: form.get("category"),
      readingTime: form.get("readingTime"),
      content: form.get("content"),
      sourceUrl: form.get("sourceUrl"),
      featured: form.get("featured") === "on",
      status: form.get("status"),
      access: {
        level: form.get("accessLevel"),
        requiresApproval: form.get("requiresApproval") === "on",
      },
      licensing: {
        enabled: form.get("accessLevel") === "licensed",
      },
    };

    try {
      const response = await fetch("/api/admin/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create article");
      }

      setMessage("Article created successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#172033]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
            Admin
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Create Article
          </h1>

          <p className="mt-4 max-w-2xl text-[#667085]">
            Create and publish an article without editing the website code.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold">Article details</h2>

            <div className="mt-8 grid gap-6">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Title</span>
                <input
                  name="title"
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Article title"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Slug</span>
                <input
                  name="slug"
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="article-url-slug"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Excerpt</span>
                <textarea
                  name="excerpt"
                  required
                  rows={3}
                  className="rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Short description shown on the insights page"
                />
              </label>

              <div className="grid gap-6 md:grid-cols-3">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Date</span>
                  <input
                    name="date"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="September 2026"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Category</span>
                  <input
                    name="category"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="AI & Leadership"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold">
                    Reading time
                  </span>
                  <input
                    name="readingTime"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="5 min read"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">
                  Source URL
                </span>
                <input
                  name="sourceUrl"
                  type="url"
                  className="rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="https://medium.com/..."
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold">Content</h2>

            <label className="mt-8 grid gap-2">
              <span className="text-sm font-semibold">
                Article content
              </span>

              <textarea
                name="content"
                required
                rows={20}
                className="rounded-xl border border-slate-300 px-4 py-4 font-mono text-sm leading-7"
                placeholder="# Your article

Write your article in Markdown..."
              />
            </label>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold">Access & publishing</h2>

            <div className="mt-8 grid gap-6">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Status</span>

                <select
                  name="status"
                  defaultValue="draft"
                  className="rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">
                  Access level
                </span>

                <select
                  name="accessLevel"
                  defaultValue="public"
                  className="rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option value="public">Public</option>
                  <option value="protected">Protected</option>
                  <option value="licensed">Licensed</option>
                </select>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="requiresApproval"
                  className="h-4 w-4"
                />

                <span className="text-sm font-medium">
                  Require approval for access
                </span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="featured"
                  className="h-4 w-4"
                />

                <span className="text-sm font-medium">
                  Feature this article
                </span>
              </label>
            </div>
          </section>

          <div className="flex items-center justify-between gap-6">
            {message ? (
              <p className="text-sm font-medium text-slate-600">
                {message}
              </p>
            ) : (
              <span />
            )}

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#172033] px-7 py-3 font-semibold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Create Article"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}