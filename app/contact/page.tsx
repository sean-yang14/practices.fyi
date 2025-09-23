'use client'

import { useState } from 'react'

// Suggested path: app/(marketing)/contact/page.tsx
// Minimal, dependency‑free page using only React + Tailwind (no external UI components)

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: if bots fill this, we just succeed silently
    if ((data.get('company') as string)?.length) {
      setStatus('success')
      form.reset()
      return
    }

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      practice: data.get('practice'),
      position: data.get('position'),
      city: data.get('city'),
      state: data.get('state'),
      message: data.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setError(err?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="inline-flex items-center rounded-full bg-orange-50 text-orange-900 px-3 py-1 text-sm font-medium">Contact</span>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Get in touch
        </h1>
        <div className="mt-3 h-1 w-40 bg-orange-500 rounded" aria-hidden />
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: Company Info */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white">
            <h2 className="text-2xl font-semibold">Practices.fyi</h2>
            <p className="mt-2 text-slate-700">We'd love to hear from you.</p>
            <div className="mt-6 text-slate-800">
              <div className="text-sm uppercase text-slate-500">Email</div>
              <div className="mt-1 text-lg font-medium select-all">info@practices.fyi</div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white">
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              {/* Honeypot (hidden) */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name</label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
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
                  <label htmlFor="practice" className="block text-sm font-medium text-slate-700">Practice name</label>
                  <input
                    id="practice"
                    name="practice"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-slate-700">Position</label>
                  <input
                    id="position"
                    name="position"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="organization-title"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                  <input
                    id="city"
                    name="city"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-slate-700">State</label>
                  <input
                    id="state"
                    name="state"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400 uppercase"
                    type="text"
                    maxLength={2}
                    placeholder="NY"
                    autoComplete="address-level1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-11 px-6 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {status === 'loading' ? 'Submitting…' : 'Send message'}
              </button>

              {status === 'success' && (
                <p className="text-green-700 text-sm">Thanks! We'll get back to you shortly.</p>
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