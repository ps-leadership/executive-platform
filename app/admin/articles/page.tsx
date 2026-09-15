"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

type ContentItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  sourceUrl?: string;
  content: string;
  featured?: boolean;
  contentType:
    | "article"
    | "framework"
    | "playbook"
    | "assessment"
    | "research"
    | "case-study"
    | "document";
  status: "draft" | "published" | "archived";
  access: {
    level: "public" | "protected" | "licensed";
    requiresApproval: boolean;
  };
  licensing?: {
    enabled: boolean;
    licenseType?: string;
    termsVersion?: string;
  };
};

const contentTypeLabels: Record<ContentItem["contentType"], string> = {
  article: "Article",
  framework: "Framework",
  playbook: "Playbook",
  assessment: "Assessment",
  research: "Research",
  "case-study": "Case Study",
  document: "Document",
};

export default function AdminArticlesPage() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const [typeFilter, setTypeFilter] = useState("all");
  const [accessFilter, setAccessFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [contentType, setContentType] = useState("article");
  const [accessLevel, setAccessLevel] = useState("public");

  async function loadContent() {
    try {
      setLoading(true);

      const response = await fetch("/api/admin/articles", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load content");
      }

      setItems(data);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to load content."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContent();
  }, []);

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
      contentType: form.get("contentType"),
      featured: form.get("featured") === "on",
      status: form.get("status"),
      accessLevel: form.get("accessLevel"),
      requiresApproval: form.get("requiresApproval") === "on",
      licenseEnabled: form.get("accessLevel") === "licensed",
      licenseType: form.get("licenseType"),
      termsVersion: form.get("termsVersion"),
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
        throw new Error(data.error || "Failed to create content");
      }

      setMessage("Content created successfully.");
      event.currentTarget.reset();
      setContentType("article");
      setAccessLevel("public");
      setShowCreate(false);

      await loadContent();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesType =
        typeFilter === "all" || item.contentType === typeFilter;

      const matchesAccess =
        accessFilter === "all" || item.access.level === accessFilter;

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesType && matchesAccess && matchesStatus;
    });
  }, [items, typeFilter, accessFilter, statusFilter]);

  async function archiveContent(slug: string) {
    const confirmed = window.confirm(
      "Archive this content? It will no longer be treated as published content."
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/articles/${encodeURIComponent(slug)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "archived",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to archive content");
      }

      setMessage("Content archived.");
      await loadContent();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to archive content."
      );
    }
  }

  async function deleteContent(slug: string) {
    const confirmed = window.confirm(
      "Permanently delete this content? This cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/articles/${encodeURIComponent(slug)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete content");
      }

      setMessage("Content deleted.");
      await loadContent();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to delete content."
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#172033]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Link
              href="/admin"
              className="text-sm font-semibold text-[#2563eb]"
            >
              ← Admin Dashboard
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Content
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Content Library
            </h1>

            <p className="mt-4 max-w-2xl text-[#667085]">
              Create and manage articles, frameworks, playbooks, research,
              assessments, case studies, and protected documents.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowCreate((value) => !value)}
            className="rounded-xl bg-[#172033] px-6 py-3 font-semibold text-white transition hover:bg-[#2563eb]"
          >
            {showCreate ? "Close" : "+ Create Content"}
          </button>
        </div>

        {message && (
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-600">
            {message}
          </div>
        )}

        {showCreate && (
          <form onSubmit={handleSubmit} className="mb-12 space-y-8">
            <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-semibold">Create Content</h2>

              <div className="mt-8 grid gap-6">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Content type</span>

                  <select
                    name="contentType"
                    value={contentType}
                    onChange={(event) =>
                      setContentType(event.target.value)
                    }
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option value="article">Article</option>
                    <option value="framework">Framework</option>
                    <option value="playbook">Playbook</option>
                    <option value="assessment">Assessment</option>
                    <option value="research">Research</option>
                    <option value="case-study">Case Study</option>
                    <option value="document">Document</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Title</span>
                  <input
                    name="title"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="Content title"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Slug</span>
                  <input
                    name="slug"
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="content-url-slug"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Excerpt</span>
                  <textarea
                    name="excerpt"
                    required
                    rows={3}
                    className="rounded-xl border border-slate-300 px-4 py-3"
                    placeholder="Short description shown on the site"
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
                      placeholder="Customer Success"
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
                    placeholder="https://..."
                  />
                </label>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-semibold">Content Body</h2>

              <label className="mt-8 grid gap-2">
                <span className="text-sm font-semibold">
                  Markdown content
                </span>

                <textarea
                  name="content"
                  required
                  rows={20}
                  className="rounded-xl border border-slate-300 px-4 py-4 font-mono text-sm leading-7"
                  placeholder={`# Your content

Write your content in Markdown...`}
                />
              </label>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-semibold">
                Access & Publishing
              </h2>

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
                    value={accessLevel}
                    onChange={(event) =>
                      setAccessLevel(event.target.value)
                    }
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  >
                    <option value="public">Public</option>
                    <option value="protected">Protected</option>
                    <option value="licensed">Licensed</option>
                  </select>
                </label>

                {(accessLevel === "protected" ||
                  accessLevel === "licensed") && (
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="requiresApproval"
                      defaultChecked={accessLevel === "protected"}
                      className="h-4 w-4"
                    />

                    <span className="text-sm font-medium">
                      Require approval for access
                    </span>
                  </label>
                )}

                {accessLevel === "licensed" && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">
                        License type
                      </span>

                      <input
                        name="licenseType"
                        className="rounded-xl border border-slate-300 px-4 py-3"
                        placeholder="Individual use"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">
                        Terms version
                      </span>

                      <input
                        name="termsVersion"
                        defaultValue="1.0"
                        className="rounded-xl border border-slate-300 px-4 py-3"
                        placeholder="1.0"
                      />
                    </label>
                  </div>
                )}

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    className="h-4 w-4"
                  />

                  <span className="text-sm font-medium">
                    Feature this content
                  </span>
                </label>
              </div>
            </section>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-[#172033] px-7 py-3 font-semibold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Create Content"}
              </button>
            </div>
          </form>
        )}

        <section>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold">All Content</h2>

            <p className="text-sm text-slate-500">
              {filteredItems.length} item
              {filteredItems.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="mb-6 grid gap-4 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-3">
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="all">All Content Types</option>
              {Object.entries(contentTypeLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>

            <select
              value={accessFilter}
              onChange={(event) => setAccessFilter(event.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="all">All Access Levels</option>
              <option value="public">Public</option>
              <option value="protected">Protected</option>
              <option value="licensed">Licensed</option>
            </select>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="all">All Statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm">
              Loading content...
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
              <h3 className="text-xl font-semibold">
                No content found
              </h3>

              <p className="mt-2 text-slate-500">
                Create your first piece of managed content.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="hidden border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 md:grid md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:gap-4">
                <span>Content</span>
                <span>Type</span>
                <span>Access</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {filteredItems.map((item) => (
                <div
                  key={item.slug}
                  className="grid gap-4 border-b border-slate-200 px-6 py-6 last:border-b-0 md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.category}
                    </p>
                  </div>

                  <div className="text-sm font-medium">
                    {contentTypeLabels[item.contentType]}
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize">
                      {item.access.level}
                    </span>
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/insights/${item.slug}`}
                      target="_blank"
                      className="text-sm font-semibold text-[#2563eb]"
                    >
                      View
                    </Link>

                    {item.status !== "archived" && (
                      <button
                        type="button"
                        onClick={() => archiveContent(item.slug)}
                        className="text-sm font-semibold text-slate-600 hover:text-[#2563eb]"
                      >
                        Archive
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => deleteContent(item.slug)}
                      className="text-sm font-semibold text-slate-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}