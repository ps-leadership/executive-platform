"use client";

import { FormEvent, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to send sign-in link.");
        return;
      }

      setMessage(
        "Check your email. If the address is valid, you will receive a secure sign-in link."
      );
    } catch {
      setError("Unable to send the sign-in link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-md">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Secure Access
          </p>

          <h1 className="text-4xl font-semibold tracking-tight">
            Sign in
          </h1>

          <p className="mt-4 text-slate-300">
            Enter your email address and we&apos;ll send you a secure sign-in
            link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
        >
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send secure sign-in link"}
          </button>

          {message && (
            <p className="mt-4 rounded-lg bg-emerald-950/50 p-3 text-sm text-emerald-300">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-4 rounded-lg bg-red-950/50 p-3 text-sm text-red-300">
              {error}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}