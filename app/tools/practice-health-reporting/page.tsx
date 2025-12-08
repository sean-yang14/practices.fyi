import type { Metadata } from "next"
import PracticeHealthDashboardContent from "@/components/tools/PracticeHealthDashboardContent"

export const metadata: Metadata = {
  title: "Practice Health Dashboard",
}

export default function PracticeHealthDashboardPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-14">
      <header className="mb-8 max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-orange-50 text-orange-900 px-3 py-1 text-base font-medium">
          Financial
        </span>
        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Practice Health Dashboard
        </h1>
        <div className="mt-3 h-1 w-50 md:w-100 bg-orange-500 rounded" aria-hidden />
      </header>

      <PracticeHealthDashboardContent />
    </section>
  )
}
