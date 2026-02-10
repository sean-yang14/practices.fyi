import { Suspense } from 'react'
import { GetStartedClient } from './GetStartedClient'

export default function GetStartedPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">Get started</h1>
      </section>

      <Suspense fallback={<div className="mx-auto max-w-6xl px-6 pb-16">Loading…</div>}>
        <GetStartedClient />
      </Suspense>
    </main>
  )
}
