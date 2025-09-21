"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, MessageSquare, Target, Users, Shield } from "lucide-react";

export default function ReputationManagementPage() {
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
      const res = await fetch("/api/reputation-management-lead", {
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
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100">Online Reputation</Badge>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Reputation Management
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
            Get more 5-star Google reviews automatically. Build trust with prospective patients and rank higher in search results.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6">Start getting reviews</Button>
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
              Google reviews are critical for your practice&apos;s success. They help you rank higher in Google Maps results and
              build trust with prospective patients who use reviews to decide whether to book an appointment.
            </p>
            <p className="mt-4 text-slate-700">
              We help you get more 5-star Google reviews automatically, so you can focus on providing great care while we
              handle building your online reputation.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Rank higher in Google Maps search results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Build trust with prospective patients</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Increase appointment bookings from online searches</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automate review requests post-appointment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reward your team for creating great experiences</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Key features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Automated review requests",
              desc: "Send personalized text messages to patients post-visit, asking for Google reviews at the perfect moment.",
              icon: MessageSquare,
            },
            {
              title: "Smart timing",
              desc: "Configure when and how often to send review requests based on your practice&apos;s preferences and patient flow.",
              icon: Target,
            },
            {
              title: "Team rewards program",
              desc: "Set review targets and reward your team when they hit them, because great experiences drive great reviews.",
              icon: Users,
            },
            {
              title: "EHR integration",
              desc: "Seamlessly connect with your existing EHR, PM, or CMS system to automatically trigger review requests.",
              icon: Shield,
            },
            {
              title: "Review monitoring",
              desc: "Track your review performance and see which team members are driving the most positive feedback.",
              icon: Star,
            },
            {
              title: "Custom messaging",
              desc: "Personalize review request messages to match your practice&apos;s voice and brand.",
              icon: MessageSquare,
            },
          ].map((f, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <f.icon className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="text-slate-700">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY TRUST ME */}
      <section className="mx-auto max-w-6xl px-6 py-10 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Why trust us with this?</h2>
          <p className="mt-4 text-slate-700 text-lg">
            I know how every other company selling this service operates. It&apos;s a straightforward product that&apos;s being sold
            for too much. We&apos;re offering effectively the same product for half of what most other vendors charge.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Fair pricing</h3>
                <p className="text-slate-700">
                  Our mission isn&apos;t to be the cheapest, but to be fair. We understand the value this brings and price it accordingly,
                  not based on what the market will bear.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Team-first approach</h3>
                <p className="text-slate-700">
                  We know great reviews come from great experiences. That&apos;s why we use a large portion of our earnings to reward
                  your teams when they hit review targets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <p className="mt-3 text-slate-700">Simple setup, automatic results.</p>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Set your cadence",
              desc: "We work with you to determine when and how often to send review requests based on your patient flow and preferences.",
            },
            {
              step: "2",
              title: "Choose your messaging",
              desc: "We explain the various text message options and their impact on your review goals, then customize them for your practice.",
            },
            {
              step: "3",
              title: "Connect your system",
              desc: "We integrate with your EHR, PM, or CMS system to automatically trigger review requests when patients complete visits.",
            },
            {
              step: "4",
              title: "Start collecting reviews",
              desc: "Patients receive automated, personalized text messages asking them to leave Google reviews at the perfect moment.",
            },
            {
              step: "5",
              title: "Set team targets",
              desc: "We establish review goals with you and provide rewards to your team when they hit them, creating a positive cycle.",
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

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-700">
            Half the price of other reputation management services. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="mt-8 max-w-lg mx-auto">
          <Card className="border-slate-200">
            <CardContent className="p-8 text-center">
              <h3 className="font-semibold text-xl mb-2">Reputation Management</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold tracking-tight">$250</span>
                <span className="text-slate-600 ml-2">per month per location</span>
              </div>
              <div className="space-y-3 text-slate-700 mb-6">
                <p>• Automated review request text messages</p>
                <p>• EHR/PM system integration</p>
                <p>• Custom messaging and timing</p>
                <p>• Review performance tracking</p>
                <p>• Team rewards program</p>
                <p>• No implementation fee!</p>
              </div>
              <a href="#signup" className="inline-flex">
                <Button className="h-11 px-8">Get started</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to get more reviews?</h2>
            <p className="mt-3 text-slate-700">
              Tell us about your practice and we&apos;ll set up a quick call to get you started with automated review collection.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              All submissions are handled securely. We&apos;ll contact you within one business day.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Work email" required />
                <Input name="practice" placeholder="Practice name" required />
                <Input name="locations" placeholder="Number of locations" type="number" min="1" />
                <Input name="current_system" placeholder="Current EHR/PM system (if known)" />
                <Textarea
                  name="message"
                  placeholder="Tell us about your current review situation and goals"
                  rows={4}
                />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <label htmlFor="consent">
                    I consent to being contacted about this reputation management service.
                  </label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Get started"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! We&apos;ll be in touch within 1 business day to set up your reputation management system.</p>
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
        <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="how-it-works">
            <AccordionTrigger>How does the automated review system work?</AccordionTrigger>
            <AccordionContent>
              We integrate with your EHR/PM system to automatically detect when patients complete appointments. Based on your
              configured timing (e.g., 2 hours or 1 day post-visit), we send personalized text messages asking patients to
              leave Google reviews. The messages include direct links to your Google Business Profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="integration">
            <AccordionTrigger>Which EHR/PM systems do you integrate with?</AccordionTrigger>
            <AccordionContent>
              We work with most major EHR and practice management systems including Epic, Cerner, athenahealth, NextGen,
              eClinicalWorks, and many others. If you have a custom system or API, we can usually create a custom integration.
              We&apos;ll assess your specific setup during our initial consultation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="compliance">
            <AccordionTrigger>Is this HIPAA compliant?</AccordionTrigger>
            <AccordionContent>
              Yes, our system is designed to be HIPAA compliant. We only access the minimum necessary information (patient
              contact details and appointment completion status) and all data is encrypted in transit and at rest. We&apos;ll
              work with you to ensure all integrations meet your compliance requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="team-rewards">
            <AccordionTrigger>How does the team rewards program work?</AccordionTrigger>
            <AccordionContent>
              We help you set monthly review targets based on your patient volume and goals. When your team hits these targets,
              we provide rewards (gift cards, bonuses, etc.) funded by a portion of your subscription fee. This creates positive
              incentives for your team to focus on patient experience, which naturally leads to better reviews.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="setup-time">
            <AccordionTrigger>How long does setup take?</AccordionTrigger>
            <AccordionContent>
              Most integrations are completed within 1-2 weeks. This includes connecting to your EHR/PM system, configuring
              message templates, setting up review targets, and testing the system. We handle all the technical work and
              provide training to your team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="message-customization">
            <AccordionTrigger>Can we customize the review request messages?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We work with you to create message templates that match your practice&apos;s voice and brand. You can
              have different messages for different types of appointments, and we&apos;ll help you optimize the messaging based
              on what drives the best response rates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="results">
            <AccordionTrigger>What kind of results can we expect?</AccordionTrigger>
            <AccordionContent>
              Most practices see a 300-500% increase in Google reviews within the first 3 months. The exact results depend on
              your patient volume, current review rate, and patient satisfaction levels. We&apos;ll help you set realistic targets
              and track progress toward your goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="contract">
            <AccordionTrigger>Are there long-term contracts?</AccordionTrigger>
            <AccordionContent>
              No long-term contracts required. We offer month-to-month service because we&apos;re confident in the value we provide.
              You can cancel anytime with 30 days notice. We believe in earning your business every month through results,
              not locking you into lengthy agreements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}