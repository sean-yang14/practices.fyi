'use client'

import { useState } from 'react'

// Suggested path: app/(marketing)/contact/page.tsx
// Minimal, dependency‑free page using only React + Tailwind (no external UI components)

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="h-2" aria-hidden />
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: Company Info */}
          <div className="rounded-2xl p-8 bg-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-grey-700 text-lg">Leave us your message and we&apos;ll get back to you ASAP</p>
            <div className="mt-6 text-slate-800">
              <div className="text-sm uppercase text-slate-500">Email</div>
              <div className="mt-1 text-lg font-medium select-all">info@practices.fyi</div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white">
            <form onSubmit={onSubmit} className="space-y-4">

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name *</label>
                  <input
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700">Website</label>
                  <input
                    id="website"
                    name="website"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="url"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-11 px-6 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60 text-base cursor-pointer"
              >
                {status === 'loading' ? 'Submitting…' : 'Send message'}
              </button>

              {status === 'success' && (
                <p className="text-green-700 text-sm">Thanks! We&apos;ll get back to you shortly.</p>
              )}
              {status === 'error' && (
                <p className="text-red-700 text-sm">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/**
       * ---------------- Optional API route (wire up later) ----------------
       * File: app/api/contact/route.ts
       *
       * import { NextResponse } from 'next/server'
       * export async function POST(req: Request) {
       *   const body = await req.json()
       *   // TODO: validate inputs and send an email via Resend/SMTP
       *   return NextResponse.json({ ok: true })
       * }
       * -------------------------------------------------------------------
       */}
    </main>
  )
}
