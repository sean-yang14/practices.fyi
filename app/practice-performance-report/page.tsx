"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

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
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-14">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100">Practice Analytics</Badge>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Practice Performance Report
            </h1>
            <svg
              className="absolute -bottom-1 left-0 w-full h-4"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 8c8-1.5 16-2 24-0.5 10 2 18-0.5 28 0.5 12 1.5 20-1 32 0 14 1.5 22-0.5 35 0.5 10 0.8 18-0.5 25 0"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            A clear, recurring read on your practice performance. The more you know, the more you grow.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6">Get a monthly report</Button>
            </a>
            <a href="#how-it-works" className="inline-flex">
              <Button size="lg" variant="outline" className="h-12 px-6">How it works</Button>
            </a>
          </div>
        </div>
      </section>

      {/* WHY IT'S IMPORTANT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold">Why this matters</h2>
            <p className="mt-4 text-slate-700">
              Running a healthcare practice is too complex to operate on instinct alone. Our checkup shows what's working,
              what needs to change, and where to focus next—so you can spot problems early and compound wins.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Visibility into clinical, financial, and marketing performance.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Benchmarking so you know what "good" looks like.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Early warning on revenue leaks and rising costs.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Simple, owner‑friendly insights—not jargon.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Someone watching your back every month.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Key features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Unified dashboard",
              desc: "Financial, marketing, and operational data in one overview so you see the full picture.",
            },
            {
              title: "Benchmarks & targets",
              desc: "Compare to peers and track toward practice‑specific goals we define together.",
            },
            {
              title: "Monthly summary",
              desc: "A concise report of what's working, what's not, and recommended next actions.",
            },
            {
              title: "Risk detection",
              desc: "Spot cancellations, utilization dips, and claim delays before they become costly.",
            },
            {
              title: "Owner‑ready insights",
              desc: "Plain‑English takeaways and charts you can share with your team.",
            },
            {
              title: "Privacy first",
              desc: "Secure connections and least‑privilege data access. You stay in control.",
            },
          ].map((f, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-700">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS - CENTERED VERSION */}
      <section className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-8 space-y-6">
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
            <div key={s.step} className="flex items-start gap-4 text-left max-w-2xl mx-auto">
              <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-1 text-slate-700">{s.desc}</p>
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
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Straightforward pricing</h2>
          <Badge className="bg-orange-100 text-orange-900 hover:bg-orange-100">One easy price</Badge>
        </div>
        <p className="mt-3 text-slate-700">Pay per report. Choose monthly or quarterly. No long contracts.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Offering 1 */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Practice Performance Report</h3>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight">$50</span>
                <span className="text-slate-600">per report</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>One easy price, straightforward structure</li>
                <li>Monthly or quarterly cadence</li>
                <li>Not locked into long contracts</li>
                <li>Ad hoc reporting available — custom pricing based on complexity</li>
              </ul>
              <div className="mt-6">
                <a href="#signup" className="inline-flex">
                  <Button className="h-11 px-6">Get started</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Offering 2 */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">One‑time Data Review</h3>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight">Free</span>
              </div>
              <p className="mt-4 text-slate-700">
                Not sure how impactful data can be for your practice? We'll review your data with you and talk through any
                problems you're working on.
              </p>
              <p className="mt-3 text-slate-700">
                Want to sign up and learn more? {""}
                <a href="/practice-health-checkup/free-review" className="underline underline-offset-4 text-slate-900">
                  click here
                </a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Get your monthly performance report</h2>
            <p className="mt-3 text-slate-700">
              Tell us a bit about your practice and we'll follow up to get you set up.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Submissions are encrypted in transit and handled by a server‑side route you control.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Full name" required />
                <Input name="email" type="email" placeholder="Work email" required />
                <Input name="practice" placeholder="Practice name" required />
                <Input name="role" placeholder="Your role (Owner, Manager, etc.)" />
                <Textarea name="message" placeholder="What goals or challenges should we know about?" rows={4} />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 rounded border-slate-300" />
                  <label htmlFor="consent">I consent to being contacted about this service.</label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request my report"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! We'll be in touch within 1–2 business days.</p>
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
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="what-is-included">
            <AccordionTrigger>What's included in the monthly performance report?</AccordionTrigger>
            <AccordionContent>
              A unified dashboard, benchmark comparison, and a monthly summary highlighting wins, risks, and recommended next
              steps. We'll tailor metrics to your practice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="data-security">
            <AccordionTrigger>How do you handle data security and privacy?</AccordionTrigger>
            <AccordionContent>
              We use read‑only access, least‑privilege credentials, and encrypted transit. You can revoke access at any time.
              We don't resell or share data. PHI/PII handling follows best practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="systems">
            <AccordionTrigger>Which systems can you connect to?</AccordionTrigger>
            <AccordionContent>
              Financial (e.g., accounting), marketing (e.g., ad platforms, GBP), and operational sources (EHR/PMS exports or APIs)
              depending on your stack.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timelines">
            <AccordionTrigger>How long does setup take?</AccordionTrigger>
            <AccordionContent>
              Typical onboarding is 1–2 weeks depending on data access and the complexity of your stack.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>What does it cost?</AccordionTrigger>
            <AccordionContent>
              Pricing depends on scope and data connections. After a short discovery, we'll propose a flat monthly rate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ownership">
            <AccordionTrigger>Do I own my data and reports?</AccordionTrigger>
            <AccordionContent>
              Yes. You retain ownership of your data and exported reports at all times.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}