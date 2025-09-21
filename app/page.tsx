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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Practice Health Checkup */}
            <Link
              href="/tools/practice-health-checkup"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-6 text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">Practice Health Checkup</h3>
                  <p className="text-blue-100 text-sm text-left">
                    Transform your data into powerful insights. Discover hidden growth opportunities and unlock your practice's full potential.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Employee Engagement */}
            <Link
              href="/tools/employee-engagement"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 p-6 text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">Employee Engagement</h3>
                  <p className="text-emerald-100 text-sm text-left">
                    Affordable and effective strategies to keep your team engaged, motivated, and excited to show up every day.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Templates & Guides */}
            <Link
              href="/tools/templates-guides"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 p-6 text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">Templates & Guides</h3>
                  <p className="text-purple-100 text-sm text-left">
                    Essential resources to guide your business decisions across finance, growth, and operations.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Reputation Management */}
            <Link
              href="/tools/reputation-management"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 p-6 text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-left">Reputation Management</h3>
                  <p className="text-orange-100 text-sm text-left">
                    Get more 5-star Google reviews and build a reputation that attracts new patients.
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-indigo-100 dark:bg-indigo-950 rounded-xl">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
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
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
            >
              Book Free Consultation
            </a>
            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Learn more
              <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <div className="box-border">
        <section className="relative box-border z-50 -my-9 px-5 py-[100px] rounded-[40px] md:px-20">
          <div className="backdrop-blur-lg bg-black/50 box-border flex flex-col max-w-none gap-y-6 overflow-hidden mx-auto py-12 px-6 rounded-[20px] md:max-w-[600px] text-center">
            <h2 className="text-white text-4xl font-medium box-border tracking-[-0.72px] leading-9">
              Follow my Instagram for quick practice management tips
            </h2>
            <a
              role="button"
              type="button"
              aria-label="Follow on Instagram"
              href="https://www.instagram.com/practices.fyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mt-6 font-medium items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 box-border flex h-18 w-18 justify-center tracking-[-0.32px] text-nowrap mx-auto p-4 rounded-full gap-2 transition-colors duration-200"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {/* Follow on Instagram */}
            </a>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
