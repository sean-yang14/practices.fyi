import Link from "next/link"
import { FounderLetter } from "@/components/FounderLetter"
import { FAQSection } from "@/components/FAQSection"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-8 bg-primary-background">
      {/* Hero Section */}
      <section className="text-center px-6 py-12 sm:py-16 mt-[10vh]">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-black">
          If you&apos;re a practice owner...Stop flying blind.<br /> Start running your business like the best CEOs.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
        The best CEOs use data because you can&apos;t make things better if you don&apos;t measure them. We show you, in a clear and simple way, how your practice is doing and what to focus on to achieve financial success and get time back.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
        >
          Get started
        </Link>
      </section>

      {/* Customer Results Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Customer Results</h2>
            {/* <p className="mt-3 text-lg text-gray-700">
              Clear wins from teams who replaced guesswork with real metrics.
            </p> */}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Box 1: Dentistry */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex justify-between items-start mb-4">
                <span className="rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1">Dentistry</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-700">Grew production by 20% by setting and tracking provider goals.</p>
            </div>

            {/* Box 2: Primary Care */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex justify-between items-start mb-4">
                <span className="rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1">Primary Care</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Spend</h3>
              <p className="text-gray-700">
              Cut wasted marketing spend and saved $15,000, with no drop in new patients.
              </p>
            </div>

            {/* Box 3: Mental Health Therapist */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex justify-between items-start mb-4">
                <span className="rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1">Mental Health Therapist</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cash Flow</h3>
              <p className="text-gray-700">Created peace of mind. Tripled cash reserves by improving cash flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-gray-300 mt-12 mb-12 mx-auto max-w-6xl"></div>

      {/* Quote Section */}
      <section className="px-6 py-10 text-center">
        <div className="max-w-4xl mx-auto text-black text-3xl font-bold italic leading-tight">
          <p>Blind decisions are expensive.</p>
          <p>Stop paying that tax.</p>
        </div>
      </section>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-gray-300 my-12 mx-auto max-w-6xl"></div>

      {/* Testimonials Section */}
      <section className="px-6 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
            {/* <p className="mt-3 text-lg text-gray-700">
              Real feedback from owners building more confident, data-driven practices.
            </p> */}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Testimonial 1 */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200">
                  <Image
                    src="/headshots/harris.png"
                    alt="dr. harris"
                    fill
                    className="object-cover object-[50%_10%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Harris</p>
                  <p className="text-sm text-gray-600">General Dentistry</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                &ldquo;As a first-time practice owner, I felt overwhelmed. Practices.fyi helped me clearly see what was working, what wasn&apos;t, and how to move forward with confidence. It made my long-term vision feel achievable.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200">
                  <Image
                    src="/headshots/charlene.png"
                    alt="Dr. Charlene Hollins"
                    fill
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Hollins</p>
                  <p className="text-sm text-gray-600">Primary Care</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                &ldquo;Being an owner is hard, especially since I don&apos;t come from a business background. I often doubted myself. The monthly reports from Practices.fyi helped me make sense of my practice and feel confident in my decisions.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200">
                  <Image
                    src="/headshots/yimo.png"
                    alt="Jennifer McMenamin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer, LCSW</p>
                  <p className="text-sm text-gray-600">Mental Health</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                &ldquo;I&apos;m not a numbers person, but Practices.fyi made my practice easy to understand. I finally know how things are actually going instead of guessing.&rdquo;
              </p>
            </div>
          </div>
        </div>
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




            {/* Hidden product cards kept for later use */}
            {/*
            <Link
              href="/reputation-management"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-orange-600">Reputation Management</h3>
                <p className="text-grey-700 text-base text-left line-clamp-4">
                  Get more 5-star Google reviews — not just by sending reminders, but by motivating your team through clear goals and meaningful rewards. We focus on outcomes, not just texts.
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
            <Link
              href="/practice-health-checkup"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-blue-600">Practice Health Checkup</h3>
                <p className="text-grey-700 text-base text-left line-clamp-4">
                  For a limited time, we’ll provide a free check-up of your financial, operational, and marketing data — walking you through the results to give you a clear view of your practice’s health.
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
            <Link
              href="/accountability-partner"
              className="group block relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 h-48 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-left text-purple-600">Accountability Partner</h3>
                <p className="text-grey-700 text-base text-left line-clamp-4">
                  The ability to execute on what matters is the key to building your dream practice. You&apos;re capable — but sometimes you need someone to help you stay on track. That&apos;s where we come in.
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
            */}

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

      {/* Mission and What Makes Us Different Sections */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission Box */}
          <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-72">
            <div className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-95 brightness-70 contrast-110 saturate-90 z-0">
              <Image
                src="/photos/mountain.jpg"
                alt="Our Mission"
                fill
                className="rounded-2xl object-cover object-[50%_35%]"
              />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-white mb-2">Our Mission</h3>
            <p className="relative z-10 mt-auto text-lg text-white font-medium pb-5">
              To ensure every practice owner has the data support they need to build their dream practice.
            </p>
          </div>

          {/* What Makes Us Different Box */}
          <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-72">
            <div className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-95 brightness-70 contrast-110 saturate-90 z-0">
              <Image
                src="/photos/stumps.jpg"
                alt="What Makes Us Different"
                fill
                className="rounded-2xl object-cover object-[50%_50%]"
              />
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-white mb-2">Experience that Matters</h3>
            <p className="relative z-10 text-lg font-semibold text-white mt-auto">
            Our team has decades of experience working with data at the highest level. We know how to look at the whole practice and how each part works together. We&apos;ve led teams across finance, operations, marketing, and analytics at top companies. In recent years, we&apos;ve used that experience to help healthcare practices directly.
            </p>
          </div>
        </div>
      </section>

      {/* Reporting Redefined */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div>
            {/* <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Reporting Redefined</p> */}
            {/* <h2 className="mt-3 text-3xl font-bold text-gray-900">Reporting Redefined. <br /> What Sets Us Apart.</h2> */}
            <h2 className="mt-3 text-3xl font-bold text-gray-900">What Sets Us Apart</h2>
            {/* <p className="mt-4 text-lg text-gray-700">
              We build a complete, connected data system so you can make confident decisions without guesswork.
            </p> */}
          </div>
          {(() => {
            const cards = [
              {
                number: "01",
                title: "Full Practice View",
                description:
                  "We connect your financials, operations, and marketing to see your entire practice in one clear view. We understand how each part affects the others because everything is connected. This full practice view shows what drives results and exactly where to focus next.",
                image: "/photos/cards.png",
                imageWidth: 620,
                imageHeight: 561,
                alt: "Full Practice View",
              },
              {
                number: "02",
                title: "Expert Analysis + Guidance",
                description:
                  "We don’t hand you spreadsheets or charts and expect you to figure them out. We analyze the data and clearly tell you what it means and what to do next. This removes the guesswork so you can focus on being a great CEO, not learning how to be a data analyst.",
                image: "/photos/guide.png",
                imageWidth: 617,
                imageHeight: 489,
                alt: "Expert analysis",
              },
              {
                number: "03",
                title: "Build Data Systems",
                description:
                  "Useful data doesn’t happen by accident. We build the systems behind the scenes, clean the data, and set up the right tracking so you see the full picture of what’s really happening. We also teach your team what to record, so your numbers are accurate and your data stays reliable over time.",
                image: "/photos/marketing.png",
                imageWidth: 607,
                imageHeight: 463,
                alt: "Build your data system",
              },
              {
                number: "04",
                title: "Genuine Partnership",
                description:
                  "We aim to be the most genuine partner you’ve ever worked with. We care deeply about your success and treat your practice with the respect it deserves. We started this company to help owners love what they do, and financial success is a big part of that. You’ll feel our passion in how we show up and support you every step of the way.",
                image: "/window.svg",
                alt: "Genuine partner",
                showImage: false,
              },
            ]
            const topRow = cards.slice(0, 3)
            const bottomCard = cards[3]
            const renderCard = (card: (typeof cards)[number], index: number) => {
              const isImageTop = index % 2 === 0
              const showImage = card.showImage !== false
              return (
                <div
                  key={card.number}
                  className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-gray-200"
                >
                  {isImageTop && showImage ? (
                    <div className="w-full overflow-hidden rounded-2xl bg-orange-50 p-2">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={card.imageWidth}
                        height={card.imageHeight}
                        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  ) : null}
                  <div className={isImageTop ? "mt-5" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-sm font-semibold">
                        {card.number}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                    </div>
                    <p className="mt-4 text-base text-gray-700">{card.description}</p>
                  </div>
                  {!isImageTop && showImage ? (
                    <div className="mt-5 w-full overflow-hidden rounded-2xl bg-orange-50 p-2">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={card.imageWidth}
                        height={card.imageHeight}
                        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  ) : null}
                </div>
              )
            }

            return (
              <div className="mt-10 space-y-6">
                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {topRow.map((card, index) => renderCard(card, index))}
                </div>
                <div>{renderCard(bottomCard, 3)}</div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* New Our Moonshot Section */}
      <section className="px-6">
        <div className="mx-auto w-full max-w-6xl rounded-3xl bg-black px-6 py-12 text-white shadow-lg sm:px-10 sm:py-14 lg:px-12 lg:py-16 my-14 sm:my-18 lg:my-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <p className="text-base font-semibold uppercase tracking-widest text-gray-400">Our Moonshot Benchmarking Project</p>
              <h2 className="mt-3 text-4xl font-bold text-white tracking-tight">
                Giving every owner the{" "}
                <br /><span className="font-serif text-gray-100 tracking-tighter">answer key</span>
              </h2>
              <p className="text-lg text-gray-300 mt-4 mb-4">
              Imagine running your practice with a clear roadmap. You know what goals to hit, what numbers matter, and what “good” really looks like. That clarity makes ownership less stressful and more confident.
              </p>
              <p className="text-lg text-gray-300 mt-4 mb-4">
              Big groups like private equity firms and insurance companies already have this edge. They use data from thousands of practices to set clear targets, price services well, negotiate stronger rates, and choose the right vendors. Most practice owners don&apos;t get access to this and are left guessing.
              </p>
              <p className="text-lg text-gray-300 mt-4 mb-4">
              My moonshot project changes that. It gives practice owners the same clear insight by showing what good looks like and how to reach it. This starts with benchmarking—learning from practices that have already done it.
              </p>
              <p className="text-lg text-gray-300 mt-4 mb-4">
              With every practice and trusted service partner we work with, we open up knowledge instead of hiding it. Together, we can change healthcare.
              </p>
            </div>
            <div className="md:order-1 flex justify-center">
              <div className="bg-none p-2 transform -rotate-6 rounded-md shadow-lg">
                <Image
                  src="/photos/rocketship1.png"
                  alt="Rocketship to the moon"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
          {/* <p className="mt-3 text-lg text-gray-700">
            Simple, transparent plans that scale with your practice.
          </p> */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Tier 1: The minimum */}
            <div className="relative flex flex-col rounded-3xl ring-1 ring-gray-200 p-6 lg:p-8 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all">
              <h3 className="text-2xl font-bold text-gray-900">The Minimum Package</h3>
              <div className="mt-3 text-5xl font-bold tracking-tight text-gray-900">$150</div>
              <p className="text-base text-gray-500">per location / month</p>
              <p className="text-base text-gray-500">+ implementation fee</p>
              <p className="mt-3 text-lg font-medium text-gray-900">The minimum metrics you need to be tracking as a CEO. The primary focus is hitting your financial goals.</p>
              <Link
                href={{ pathname: "/get-started", query: { offering: "The Minimum Package" } }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-base font-semibold text-gray-900 hover:border-orange-200 hover:text-orange-600 transition-colors"
              >
                Get started
              </Link>
              <table className="mt-6 w-full text-base text-gray-700">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Implementation fee</div>
                      <div className="mt-1 text-gray-600">One time fee of $500</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Monthly reports</div>
                      <div className="mt-1 text-gray-600">
                        Reports on the most important numbers for your practice across core functions. Includes operations,
                        finance, and marketing
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Quarterly reports</div>
                      <div className="mt-1 text-gray-600">
                        <span className="block">- Provider financial performance</span>
                        <span className="block">- Vendor performance</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Custom analysis</div>
                      <div className="mt-1 text-gray-600">N/A</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Customer support</div>
                      <div className="mt-1 text-gray-600">Email</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tier 2: Performance */}
            <div className="relative flex flex-col rounded-3xl ring-1 ring-gray-200 p-6 lg:p-8 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all">
              <h3 className="text-2xl font-bold text-gray-900">Performance</h3>
              <div className="mt-3 text-5xl font-bold tracking-tight text-gray-900">$499</div>
              <p className="text-base text-gray-500">per location / month</p>
              <p className="text-base text-gray-500">+ implementation fee</p>
              <p className="mt-3 text-lg font-medium text-gray-900">
              For owners who want deeper insight and hands-on support to perform at a higher level.
              </p>
              <Link
                href={{ pathname: "/get-started", query: { offering: "Performance" } }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-base font-semibold text-gray-900 hover:border-orange-200 hover:text-orange-600 transition-colors"
              >
                Get started
              </Link>
              <table className="mt-6 w-full text-base text-gray-700">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Implementation fee</div>
                      <div className="mt-1 text-gray-600">One time fee of $500</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Monthly reports</div>
                      <div className="mt-1 text-gray-600">
                        Same as the Minimum Package plus
                        <br />- Provider financial performance
                        <br />- Vendor performance
                        <br />- Project specific tracking
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Quarterly reports</div>
                      <div className="mt-1 text-gray-600">
                        <span className="block">- Full practice snapshot</span>
                        <span className="block">- Vendor financial return-on-investment</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Custom analysis</div>
                      <div className="mt-1 text-gray-600">Yes, but limited in scope</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Customer support</div>
                      <div className="mt-1 text-gray-600">
                        <span className="block">- Monthly calls</span>
                        <span className="block">- Email</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tier 3: Custom */}
            <div className="relative flex flex-col rounded-3xl ring-1 ring-gray-800 p-6 pt-10 lg:p-8 lg:pt-12 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all">
              <span className="absolute left-5 top-0 -translate-y-1/2 inline-flex items-center rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-100">
                Limited time offer
              </span>
              <h3 className="text-2xl font-bold text-gray-900">Health Checkup</h3>
              <div className="mt-3 text-5xl font-bold tracking-tight text-gray-900">$50</div>
              <p className="text-base text-gray-500">one time fee</p>
              {/* <p className="text-base text-gray-500">Scope dependent</p> */}
              <p className="mt-3 text-lg font-medium text-gray-900">
              Like your annual primary care visit, this is a one time review of your practice. We look at your numbers to see what&apos;s healthy, what needs attention, and where you can improve.
              </p>
              <Link
                href={{ pathname: "/get-started", query: { offering: "Health Checkup" } }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2.5 text-base font-semibold text-gray-900 hover:border-orange-200 hover:text-orange-600 transition-colors"
              >
                Get started
              </Link>
              <table className="mt-6 w-full text-base text-gray-700">
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Data reviewed</div>
                      <div className="mt-1 text-gray-600">
                        <span className="block">- Financial statements</span>
                        <span className="block">- Operational data (EHR / practice management system)</span>
                        <span className="block">- Provider performance</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Usage details</div>
                      <div className="mt-1 text-gray-600">You can get two checkups per calendar year</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="font-medium text-gray-900">Customer support</div>
                      <div className="mt-1 text-gray-600">Email</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto w-full max-w-6xl rounded-3xl bg-emerald-900 px-6 py-12 text-center text-white shadow-lg">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">Money Back Guarantee</h2>
            <p className="text-lg text-emerald-50">
              We&apos;re confident in what we&apos;ve created, and we&apos;re willing to put money behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-gray-300 my-12 mx-auto max-w-6xl"></div>

      {/* Quote Section */}
      <section className="px-6 py-10 text-center">
        <div className="max-w-4xl mx-auto text-black text-3xl font-bold italic leading-tight">
          <p>You can&apos;t improve what you don&apos;t measure.</p>
          <p>Don&apos;t leave the success of your dream to guesswork.</p>
        </div>
      </section>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-gray-300 my-12 mx-auto max-w-6xl"></div>

      {/* Free Consultation CTA */}
      {/* <section className="px-6 w-full">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white border-1 border-black">
          <div className="px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl mb-4">
                Feeling overwhelmed? You don&apos;t have to do it alone.
              </h2>
              <p className="text-lg text-gray-700">
              A free walk through how to make your life easier as a practice owner — whether that&apos;s through one of our products or another solution that fits your needs. No pressure and no gatekeeping. Just a real conversation about what would help you most.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
              <a
                href="/practice-health-checkup"
                className="rounded-4xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Instagram CTA Section */}
      {/* <section className="px-6 w-full">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-slate-900 text-white">
          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Follow my Instagram for quick practice management tips
            </h2>
            <a
              href="https://www.instagram.com/practices.fyi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @practices.fyi on Instagram (opens in new tab)"
              className="text-lg mt-4 md:mt-8 h-12 px-6 inline-flex items-center justify-center rounded-md bg-white text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
      </section> */}

      {/* CTA Before FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl px-6 py-12 text-center shadow-sm" style={{ backgroundColor: "#0F172A" }}>
          <h2 className="mt-3 text-3xl font-bold text-white">Ready to stop building blindly?</h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
            >
              Book a quick call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}
