'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const offeringOptions = ['The Minimum Package', 'Performance', 'Health Checkup', 'Not sure yet'] as const

export default function GetStartedPage() {
  const searchParams = useSearchParams()
  const offeringParam = searchParams.get('offering') ?? ''
  const resolvedOffering = useMemo(() => {
    return offeringOptions.find((option) => option === offeringParam) ?? 'Not sure yet'
  }, [offeringParam])

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [offering, setOffering] = useState<string>(resolvedOffering)

  useEffect(() => {
    setOffering(resolvedOffering)
  }, [resolvedOffering])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('offering', offering)
    formData.set('source', 'Get Started')
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setStatus('success')
      form.reset()
      setOffering(resolvedOffering)
    } catch (err: unknown) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">Get Started</h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-0 items-stretch">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:rounded-r-none lg:border-r-0">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    aria-required="true"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700">
                    Practice website
                  </label>
                  <input
                    id="website"
                    name="website"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                    type="text"
                    autoComplete="url"
                  />
                </div>
                <div>
                  <label htmlFor="offering" className="block text-sm font-medium text-slate-700">
                    Offering selected
                  </label>
                  <select
                    id="offering"
                    name="offering"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:ring-slate-400"
                    value={offering}
                    onChange={(e) => setOffering(e.target.value)}
                  >
                    {offeringOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:border-slate-400 focus:ring-slate-400"
                  placeholder="Tell us a bit about your practice and what you want to improve."
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
              {status === 'error' && <p className="text-red-700 text-sm">{error}</p>}
            </form>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:rounded-l-none lg:border-l">
            <h2 className="text-2xl font-semibold text-slate-900">Schedule a call</h2>
            <p className="mt-3 text-base text-slate-600">
            Want to talk live? You can choose a time that works for you using the link below. Please still fill out the form on this page.
            </p>
            <a
              href="https://calendly.com/sean-practices/30min"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2.5 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Book a Calendly call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
