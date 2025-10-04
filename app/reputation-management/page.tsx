"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, MessageSquare, Target, Users } from "lucide-react";

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
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100 text-base">Online Reviews</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Reputation Management
          </h1>
          <div className="mt-3 h-1 w-50 md:w-100 bg-orange-500 rounded" aria-hidden />
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            Get more 5-star Google reviews. Build trust with prospective patients and rank higher in search results.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6 text-base cursor-pointer">Start getting reviews</Button>
            </a>
            <div className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                How it works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT'S IMPORTANT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why this matters</h2>
            <p className="mt-4 text-grey-700 text-lg">
              Google reviews are critical for your practice&apos;s success. They help you rank higher in Google Maps results and
              build trust with prospective patients who use reviews to decide whether to book an appointment.
            </p>
            <p className="mt-4 text-grey-700 text-lg">
              We help you get more 5-star Google reviews by automating review requests post-appointment and incentivizing your team to create great patient experiences.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-grey-700 text-lg">
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

      {/* WHY TRUST ME */}
      <section className="mx-auto max-w-6xl rounded-2xl bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What makes us different</h2>
          <p className="mt-4 text-grey-700 text-lg">
          We know there are plenty of vendors and software platforms that promise to improve your reviews — and from a technology standpoint, we&apos;re doing much the same thing they are. But here&apos;s the truth: texting reminders alone don&apos;t get patients to leave reviews.
            <br />
            <br />
            What does? Your team. It&apos;s the amazing experience they create every day, and the simple act of asking for a review, that makes those reminders actually work.
            <br />
            <br />
            <strong>You&apos;re not paying for a texting service — you&apos;re investing in more reviews. Our entire focus is on aligning incentives to drive real action and rewarding the teams who make it happen.</strong>
          </p>
          {/* <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            <Card className="border-2 border-orange-400 shadow-lg shadow-orange-100">
              <CardContent className="py-2 px-3">
                <h3 className="font-semibold text-lg mb-2">Half the cost, same results</h3>
                <p className="text-grey-700">
                  Most reputation management companies charge $500+ per location. We charge $250 — not because we offer less, but because we know the actual cost of delivery and refuse to overcharge.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-400 shadow-lg shadow-emerald-100">
              <CardContent className="py-2 px-3">
                <h3 className="font-semibold text-lg mb-2">We reward your team directly</h3>
                <p className="text-grey-700">
                Hit your review targets and your team gets rewarded — at no cost to you. We pay it because we believe in aligning incentives with the people who create the experiences that matter.
                </p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key features</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Automated review requests",
              desc: "Send personalized text messages to patients post-visit, asking for Google reviews at the perfect moment.",
              icon: MessageSquare,
            },
            {
              title: "Full playbook",
              desc: "We share with you how to increase reviews. Texting is part of it, but it is only just a part of the complete strategy.",
              icon: Target,
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

        {/* Team Rewards Highlight */}
        <Card className="mt-8 border-2 border-emerald-400 shadow-lg shadow-emerald-100">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-xl">Set review targets — and when your team hits them, they win.</h3>
            </div>
            <div className="space-y-4 text-grey-700 text-base">
              {/* <p>
                Motivate your team to deliver great patient experiences by setting clear review goals. When your practice meets its targets, your team becomes eligible for rewards — without any of the tax or payroll headaches that come with traditional bonuses.
              </p> */}
              <p>
              Motivate your team to deliver great patient experiences by setting clear review goals. When your practice meets its targets, your team becomes eligible for rewards — funded and managed by us, not your payroll. That means your team gets recognized and celebrated without any of the tax or administrative hassles that come with traditional bonuses.
              </p>
              <p>
                All rewards are pooled across participating practices, which means your team has access to bigger and more exciting prizes than any single practice could offer on its own.
              </p>
              <p className="font-medium text-grey-900">
                You focus on building a great patient experience. We handle the rest — tracking, rewarding, and celebrating your team&apos;s success.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-10 text-center scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
        <p className="mt-3 text-lg text-grey-700">Simple setup, automatic results.</p>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Set your cadence",
              desc: "We work with you to decide when and how often to send review requests, based on your preferences and what proves most effective.",
            },
            {
              step: "2",
              title: "Choose your messaging",
              desc: "We walk you through the different text message options—like gated vs. non-gated — and explain how each impacts your review goals. From there, you choose the approach, and we customize the message to fit your practice.",
            },
            {
              step: "3",
              title: "Connect your system",
              desc: "We connect with your EHR, PM, or CMS system to automatically trigger review requests for patients that had a visit.",
            },
            {
              step: "4",
              title: "Start collecting reviews",
              desc: "Patients receive automated text messages asking them to leave Google reviews at the perfect moment.",
            },
            {
              step: "5",
              title: "Set team targets",
              desc: "We establish review goals with you and provide rewards to your team when they hit them, creating a positive cycle.",
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

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-grey-900">Simple, fair pricing</h2>
          <p className="mt-6 max-w-xl text-pretty text-center text-lg font-medium text-grey-600 mx-auto">
            Half the price of other reputation management services. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="rounded-3xl p-8 ring-1 ring-grey-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-xl font-semibold text-grey-900">Reputation Management</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-grey-900">$250</span>
              <span className="text-base font-semibold text-gray-600">per month per location</span>
            </p>
            <a href="#signup" className="mt-6 block w-full">
              <Button className="w-full h-11 px-8 text-base">Get started</Button>
            </a>
            <ul role="list" className="mt-8 space-y-3 text-base text-grey-600 xl:mt-10">
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Automated review request text messages
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Review QR display for your office
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                EHR/PM system connection
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Review performance tracking
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                Team rewards program
              </li>
              <li className="flex gap-x-3">
                <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                No implementation fee!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to get more reviews?</h2>
            <p className="mt-3 text-grey-700 text-lg">
              Tell us about your practice and we&apos;ll set up a quick call to get you started with automated review collection.
            </p>
            {/* <p className="mt-2 text-sm text-slate-500">
              All submissions are handled securely. We&apos;ll contact you within one business day.
            </p> */}
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name"required />
                {/* <Input name="role" placeholder="Your role" /> */}
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="practice" placeholder="Practice name" required />
                <Input name="locations" placeholder="Number of locations" type="number" min="1" />
                {/* <Input name="current_system" placeholder="Current EHR/PM system" /> */}
                <Textarea
                  name="message"
                  placeholder="Optional message"
                  rows={4}
                />
                {/* <div className="flex items-center gap-2 text-sm text-slate-600">
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
                </div> */}

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
          <AccordionItem value="existing-software">
            <AccordionTrigger>What if I already have software that texts patients for reviews?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                We&apos;re not selling you a texting service — we&apos;re focused on getting you more reviews. Texting helps as a reminder, but it&apos;s not the main driver. Many automated review solutions see response rates of just 1-2%.
              </p>
              <p className="mb-3">
                What actually drives reviews? Your team creating amazing experiences and asking happy patients to share them. That&apos;s why our approach centers on incentivizing your team to deliver great care and make the ask — with texting as a supporting tool, not the whole strategy.
              </p>
              <p>
                If you have a solution and aren&apos;t getting reviews as quickly as you want, we can help. Our focus is results, not just technology.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how-it-works">
            <AccordionTrigger>How does the automated review system work?</AccordionTrigger>
            <AccordionContent>
              We integrate with your EHR/PM system to automatically detect when patients complete appointments. Based on your
              configured timing, we send personalized text messages asking patients to
              leave Google reviews. The messages include direct links to your Google Business Profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="integration">
            <AccordionTrigger>Which EHR/PM systems do you integrate with?</AccordionTrigger>
            <AccordionContent>
             We work with most major EHR and practice management systems and will review your specific setup during the initial consultation. We’ll need a non-clinical account created.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="compliance">
            <AccordionTrigger>Is this HIPAA compliant?</AccordionTrigger>
            <AccordionContent>
              Yes, our system is designed to be HIPAA compliant. We only access the minimum necessary information (patient contact details and appointment completion status), and all data is encrypted in transit and at rest. In addition, our messages avoid protected health information (PHI), so they do not trigger HIPAA issues. We’ll work with you to ensure all integrations meet your compliance requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="team-rewards">
            <AccordionTrigger>How does the team rewards program work?</AccordionTrigger>
            <AccordionContent>
              We work with you to set review targets tailored to your patient volume and goals. When your team reaches these targets, they become eligible for our rewards programs. This creates positive incentives that keep the focus on delivering great patient experiences — which naturally leads to better reviews.
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
          {/* <AccordionItem value="results">
            <AccordionTrigger>What kind of results can we expect?</AccordionTrigger>
            <AccordionContent>
              Most practices see a 300-500% increase in Google reviews within the first 3 months. The exact results depend on
              your patient volume, current review rate, and patient satisfaction levels. We&apos;ll help you set realistic targets
              and track progress toward your goals.
            </AccordionContent>
          </AccordionItem> */}
          <AccordionItem value="contract">
            <AccordionTrigger>Are there long-term contracts?</AccordionTrigger>
            <AccordionContent>
              No long-term contracts required. We offer month-to-month service because we&apos;re confident in the value we provide.
              You can cancel anytime. We believe in earning your business every month through results,
              not locking you into lengthy agreements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}