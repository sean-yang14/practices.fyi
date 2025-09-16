import Link from "next/link"
import { RotatingText } from "@/components/rotating-text"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 sm:py-24 bg-white/60">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-black">
          Tools to make <RotatingText /> easier.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Knowledge, tools, and support designed to put practice owners first.
        </p>
        <Link
          href="#services-section"
          className="inline-flex items-center rounded-md bg-teal-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Explore Services
        </Link>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link
            href="/services/practice-health-checkup"
            className="block rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-2">
              Practice Health Checkup
              <span className="ml-2 text-teal-600">&#8594;</span>
            </h3>
            <p className="text-sm text-gray-600">
              Get a data-driven monthly report to understand and grow your practice.
            </p>
          </Link>
          <Link
            href="/services/reputation-management"
            className="block rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-2">
              Reputation Management
              <span className="ml-2 text-teal-600">&#8594;</span>
            </h3>
            <p className="text-sm text-gray-600">
              Generate and leverage positive reviews to fuel growth.
            </p>
          </Link>
          <Link
            href="/templates"
            className="block rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-2">
              Templates &amp; Guides
              <span className="ml-2 text-teal-600">&#8594;</span>
            </h3>
            <p className="text-sm text-gray-600">
              Download helpful templates for finance, marketing, and operations.
            </p>
          </Link>
          <Link
            href="/services/team-engagement"
            className="block rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-2">
              Team Engagement
              <span className="ml-2 text-teal-600">&#8594;</span>
            </h3>
            <p className="text-sm text-gray-600">
              Retain great people with affordable rewards and recognition.
            </p>
          </Link>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="px-6 py-16 bg-gray-100">
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
      </section>

      {/* Founder Letter */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Letter from the Founder</h2>
          <p className="text-gray-700 mb-6">
            Thank you for visiting Practices.fyi. I started this platform to make practice ownership <strong>accessible</strong>
            &mdash; sharing knowledge and tools without gatekeeping. Our mission is simple: to put practice owners first in every way.
            Whether it&apos;s simplifying finances, demystifying marketing, or supporting your team, we’re here to help you succeed and feel less
            alone on your journey.
          </p>
          <p className="font-semibold">&ndash; [Founder Name], Founder of Practices.fyi</p>
        </div>
      </section>
    </div>
  )
}
