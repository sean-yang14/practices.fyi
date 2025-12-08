"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, BarChart3, Users, AlertTriangle, FileText, Shield, Target } from "lucide-react";

// If you use Next.js App Router, export default this component from app/(marketing)/practice-health-checkup/page.tsx
// Tailwind required. shadcn/ui components assumed to be installed.

export default function PracticeHealthCheckupPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/health-checkup-lead", {
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
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14">
        <div className="max-w-4xl">
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100 text-base">Practice Analytics</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Practice Health Reporting
          </h1>
          <div className="mt-3 h-1 w-50 md:w-100 bg-orange-500 rounded" aria-hidden />
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            Unlock the power of your data with reports that turn complexity into clear, useful insights — so you can lead with confidence and make more money.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6 text-base cursor-pointer">Get a report</Button>
            </a>
            <a href="#how-it-works" className="inline-flex">
              <Button size="lg" variant="outline" className="h-12 px-6 text-base cursor-pointer">How it works</Button>
            </a>
          </div>
        </div>
      </section>

      {/* WHY IT'S IMPORTANT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why this matters</h2>
            <p className="mt-4 text-grey-700 text-lg">
            Running a healthcare practice is too complex to rely on instinct alone. 
            <br />
            <br />
            Our checkup helps you make sense of your data — showing what&apos;s working, what needs attention, and where to focus next. By spotting issues early and doubling down on wins, you can build momentum that compounds over time.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-grey-700 text-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Visibility into clinical, financial, and marketing performance.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Increase your revenue and profitability.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Benchmarking so you know what &quot;good&quot; looks like.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Early warning on problems that are holding your practice back.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Simple, owner‑friendly insights — not jargon.</span>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Someone watching your back every month.</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Complete practice snapshot",
              desc: "Financial, marketing, and operational data in one overview so you see the full picture.",
              icon: BarChart3,
            },
            {
              title: "Vendor impact review",
              desc: "Get an objective view of how your vendors affect your practice—so you can see what's delivering value, what's not, and make smarter decisions about where to invest.",
              icon: Target,
            },
            {
              title: "Provider performance review",
              desc: "Know how each provider is performing and whether they're contributing to your bottom line. Get clear visibility into productivity, profitability, and opportunities for improvement.",
              icon: Users,
            },
            // {
            //   title: "Benchmarks & targets",
            //   desc: "Compare to peers and track toward practice ‑ specific goals we define together.",
            // },
            {
              title: "Monthly summary",
              desc: "A clear, data-driven report that shows what's working and what's not — like having a data analyst on your team.",
              icon: FileText,
            },
            {
              title: "Risk detection",
              desc: "Spot problems before they become costly — like slowing growth, payment delays, and other issues that can hold your practice back.",
              icon: AlertTriangle,
            },
            {
              title: "Owner‑ready insights",
              desc: "Plain‑english takeaways and charts you can share with your team.",
              icon: Shield,
            },
          ].map((f, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <f.icon className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="text-grey-700 text-base">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS - CENTERED VERSION */}
      <section className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Connect data",
              desc: "We securely connect to the data sources you use to run your business — financial, marketing, and operational — and only to the systems you’re comfortable sharing.",
            },
            {
              step: "2",
              title: "Current state review",
              desc: "We provide a comprehensive review of your current state — what's working, what's not, and where you can improve.",
            },
            {
              step: "3",
              title: "Regular reporting",
              desc: "Every month, you’ll receive a clear, actionable report that highlights your key metrics, explains what they mean, and outlines next steps — all aligned to the goals you have for your practice. We also include periodic lookbacks across longer timeframes so you can see the progress you’re making and where momentum is building.",
            },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-4 text-left max-w-2xl mx-auto">
              <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-1 text-grey-700">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS grid version*/}
      {/* <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              step: "1",
              title: "Goal setting",
              desc: "We learn your priorities and define the metrics that matter for your practice.",
            },
            {
              step: "2",
              title: "Connect data",
              desc: "We connect to your financial, marketing, and operational systems with secure, read‑only access.",
            },
            {
              step: "3",
              title: "Dashboard build",
              desc: "We configure your practice health dashboard and benchmarks—owner‑friendly and shareable.",
            },
            {
              step: "4",
              title: "Monthly report",
              desc: "Every month, you get a concise summary of wins, risks, and recommended next actions.",
            },
          ].map((s) => (
            <Card key={s.step} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-700">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Simple, fair pricing</h2>
          <p className="mt-6 max-w-xl text-pretty text-center text-lg font-medium text-grey-600 mx-auto">
            You pay monthly and can cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Offering 1 */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">Full Visibility Package</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">$250</span>
              <span className="text-base font-semibold text-gray-600">per month</span>
            </p>
            <div className="mt-6 xl:mt-8">
              <p className="text-base text-gray-600">
              This foundational package helps you understand where your practice stands and track the common performance metrics over time. It does not include custom reporting or analysis. Great for most practices.
                </p>
              <a href="#signup" className="mt-6 block w-full">
                <Button className="w-full h-11 px-6 text-base cursor-pointer">Get started</Button>
              </a>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-base text-gray-600 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Practice diagnostic evaluating the current state of your practice
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Monthly reporting
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Semiannual and annual lookbacks
              </li>
            </ul>
          </div>

          {/* Offering 2 */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">Supercharged Package</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">$650</span>
              <span className="text-base font-semibold text-gray-600">per month</span>
            </p>
            <div className="mt-6 xl:mt-8">
              <p className="text-base text-gray-600">
                The Supercharged package includes everything in the Full Visibility package, plus custom reporting and analysis. It gives you a deeper layer of support that surfaces stronger financial returns and unlocks richer insights you can act on.
              </p>
              <a href="#signup" className="mt-6 block w-full">
                <Button className="w-full h-11 px-6 text-base cursor-pointer">Get started</Button>
              </a>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-base text-gray-600 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Everything in the Full Visibility package
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Custom reporting and analysis
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Quarterly lookbacks in addition to the semiannual and annual lookbacks
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Monthly 1x1 calls
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get your monthly performance report</h2>
            <p className="mt-3 text-grey-700 text-lg">
              Tell us about your practice and we&apos;ll follow up to get you set up.
            </p>
            {/* <p className="mt-2 text-sm text-slate-500">
              Submissions are encrypted in transit and handled by a server‑side route you control.
            </p> */}
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Full name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="practice" placeholder="Practice name" required />
                <Textarea name="message" placeholder="Optional message" rows={4} />
                {/* <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 rounded border-slate-300" />
                  <label htmlFor="consent">I consent to being contacted about this service.</label>
                </div> */}

                <Button type="submit" className="w-full h-11 text-base cursor-pointer" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request my report"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! We&apos;ll be in touch within 1–2 business days.</p>
                )}
                {status === "error" && (
                  <p className="text-red-700 text-sm">{error}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="what-is-included">
            <AccordionTrigger>What&apos;s included in the monthly performance report?</AccordionTrigger>
            <AccordionContent>
              The metrics are tailored to your practice, but we generally focus on the key performance indicators that matter most
              across finance, operations, and marketing. There’s a strong emphasis on return-on-investment (ROI) calculations, so
              you can clearly see what’s working, what’s not, and what actions to take next.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="data-security">
            <AccordionTrigger>How do you handle data security and privacy?</AccordionTrigger>
            <AccordionContent>
              Where possible we use read‑only access and least‑privilege credentials. You can revoke access at any time. PHI/PII handling follows best practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="systems">
            <AccordionTrigger>Which systems can you connect to?</AccordionTrigger>
            <AccordionContent>
              We can work with virtually any system. In most cases, we either pull reports directly from you or access your
              reporting platforms through a non-clinical account. The account is only used to securely retrieve reports or data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timelines">
            <AccordionTrigger>How long does setup take?</AccordionTrigger>
            <AccordionContent>
              Typical onboarding is 2–3 weeks depending on data access and the complexity of your stack.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>What’s your philosophy on pricing?</AccordionTrigger>
            <AccordionContent>
              The truth is, my team and I spend more time on these reports than the cost really covers but we believe data is simply too valuable for a practice not to have.
              <br />
              
              You can only improve what you measure. Tracking data isn’t just about hitting goals — it’s about building systems that actually work. Our pricing reflects that belief: fair, accessible, and designed to give every practice the clarity it needs to grow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
