import Link from "next/link"
import { RotatingText } from "@/components/rotating-text"
import { FounderLetter } from "@/components/FounderLetter"
import { FAQSection } from "@/components/FAQSection"

export default function Home() {
  return (
    <div className="space-y-8 bg-primary-background">
      {/* Hero Section */}
      <section className="text-center px-6 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-black">
          Tools to make <RotatingText /> easier.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Helping you build your ideal practice by making tools and knowledge accessible.
        </p>
        {/* <Link
          href="#services-section"
          className="inline-flex items-center rounded-md bg-teal-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Explore Tools
        </Link> */}
      </section>

      {/* Tools Overview */}
      <section id="services-section" className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Customized tools start here</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tools designed specifically for healthcare practice owners to streamline operations and drive growth.
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Practice Health Checkup */}
            <Link
              href="/practice-health-checkup"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-blue-600">Practice Health Checkup</h3>
                <p className="text-slate-600 text-sm text-left line-clamp-4">
                  Get an objective perspective on your practice. Sometimes you need someone to talk through the data and help you see what you might be missing.
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Practice Performance Report */}
            <Link
              href="/practice-performance-report"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-emerald-600">Practice Performance Report</h3>
                <p className="text-slate-600 text-sm text-left line-clamp-4">
                  A clear, recurring read on your practice performance. The more you know, the more you grow.
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Reputation Management */}
            <Link
              href="/reputation-management"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-orange-600">Reputation Management</h3>
                <p className="text-slate-600 text-sm text-left line-clamp-4">
                  Get more 5-star Google reviews automatically. Build trust with prospective patients and rank higher in search results.
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Accountability Partner */}
            <Link
              href="/accountability-partner"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-purple-600">Accountability Partner</h3>
                <p className="text-slate-600 text-sm text-left line-clamp-4">
                  Stay on track with your goals through regular check-ins and structured accountability sessions.
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      {/* <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Practice Owners Are Saying
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:justify-center">
          <blockquote className="md:w-1/3 text-center italic">
            &ldquo;A fantastic resource that saved me countless hours...&rdquo;
            <br />
            <span className="not-italic font-semibold">&ndash; Happy Owner</span>
          </blockquote>
          <blockquote className="md:w-1/3 text-center italic">
            &ldquo;Truly puts practice owners first. My go-to site!&rdquo;
            <br />
            <span className="not-italic font-semibold">&ndash; Clinic Manager</span>
          </blockquote>
        </div>
        <div className="mt-10 flex justify-center space-x-6 opacity-50">
          <div className="w-24 h-12 bg-gray-400 rounded" />
          <div className="w-24 h-12 bg-gray-400 rounded" />
          <div className="w-24 h-12 bg-gray-400 rounded" />
        </div>
      </section> */}

      {/* Founder Letter */}
      <FounderLetter />

      {/* Free Consultation CTA */}
      <section className="px-6 w-full">
        <div className="mx-auto max-w-7xl rounded-2xl bg-indigo-100 dark:bg-indigo-950">
          <div className="px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-4">
                Feeling stuck? You don't have to do it alone.
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Sign up for a free consultation call -- available for a limited time. No BS, gatekeeping, or sales pitch. I'm just looking to offer a helping hand.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="px-6 w-full">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-slate-900 text-white">
          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Follow my Instagram for quick practice management tips
            </h2>
            <a
              href="https://www.instagram.com/practices.fyi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @practices.fyi on Instagram (opens in new tab)"
              className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-white text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mr-2 h-5 w-5"
                fill="currentColor"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.75z" />
              </svg>
              Follow @practices.fyi
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
