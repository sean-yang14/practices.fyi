"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

export default function PartnersPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      role: data.get("role"),
      website: data.get("website"),
      partnerType: data.get("partnerType"),
      region: data.get("region"),
      message: data.get("message"),
      // honeypot
      context: data.get("context"),
    };

    // Basic honeypot: if filled, bail as success
    if (typeof payload.context === "string" && payload.context.length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/partner-lead", {
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
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <Badge className="bg-orange-50 text-orange-900 hover:bg-orange-50 text-base">Partner With Us</Badge>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Partnerships to help practices thrive
        </h1>
        <div className="mt-3 h-1 w-100 bg-orange-500 rounded" aria-hidden />
        <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl">
          We build tools — not services — but practices still need help executing. That’s where experts like you, who truly care about practices, come in. By combining your expertise with our product development, we can help practices win together.
        </p>
      </section>

      {/* HOW PARTNERSHIP WORKS / GOAL */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How we work with partners</h2>
            <p className="mt-4 text-grey-700 text-lg">
              We build tools for practices and we invite you to share your data so we can build together. By combining your expertise with insights from other trusted partners, we create a collective resource more powerful than any one group alone. That makes your data more valuable to practices, strengthens the impact you deliver to your clients, and opens a new customer acquisition channel through our tools.
              <br />
              <br />
              And we don&apos;t stop there. Our product development can also support your team directly, from custom dashboards for your clients to automations that save time and reduce manual work.
            </p>
          </div>

          {/* What we bring to your team - unified box */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">What we bring to your team</h3>

            {/* Growth & Insights Section */}
            <div className="mb-8">
              <h4 className="text-base font-semibold text-gray-900 mb-4">Growth & Insights</h4>
              <ul role="list" className="space-y-3 text-base text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                  A new customer acquisition channel
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                  Stronger insights through access to more and better data
                </li>
              </ul>
            </div>

            {/* Custom Solutions Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-4">Custom Solutions</h4>
              <ul role="list" className="space-y-3 text-base text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                  Custom dashboards tailored to your needs
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-5 flex-none text-green-600" />
                  Automations that save time and reduce manual work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTS WHO PARTNER WITH US */}
      {/* <section className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold">Experts we&apos;re looking to partner with</h2>
        <p className="mt-3 text-slate-500">We&apos;re actively expanding to include more partner types as we grow.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Financial Partners</h3>
              <p className="text-slate-600 text-sm mb-3">CPAs, CFOs, Bookkeepers</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Practice Consultants</h3>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Pricing</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* General Partnership Tools */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">General Partnership Tools</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">Free</span>
            </p>
            <a href="#signup" className="mt-6 block w-full">
              <Button className="w-full h-11 px-6 text-base cursor-pointer">Get started</Button>
            </a>
            <div className="mt-8 xl:mt-10">
              <p className="text-base text-gray-600">
                Our mission is to provide insane value to practices. I believe strongly that we can build amazing tools that truly help practices thrive. I&apos;m removing all hurdles in pursuit of this goal—there&apos;s no cost for partnering on tools for the general public.
              </p>
            </div>
          </div>

          {/* Custom Partner Solutions */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:ring-2 hover:ring-orange-200 transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900">Custom Partner Solutions</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">Custom pricing</span>
              {/* <span className="text-sm font-semibold text-gray-600">pricing</span> */}
            </p>
            <a href="#signup" className="mt-6 block w-full">
              <Button variant="outline" className="w-full h-11 px-6 text-base cursor-pointer">Contact us</Button>
            </a>
            <div className="mt-8 xl:mt-10">
              <p className="text-base text-gray-600">
                Need custom dashboards, automations, or integrations specific to your firm? Let&apos;s discuss pricing based on your exact needs and the value we&apos;ll create together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGN UP CTA */}
      <section id="signup" className="mx-auto max-w-6xl px-6 pt-5 pb-10 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Become a partner</h2>
            <p className="mt-3 text-grey-700 text-lg">
              Tell us about your firm and we&apos;ll follow up to explore fit.
            </p>
            {/* <p className="mt-2 text-sm text-slate-500">
              Submissions go to a server‑side route you control. No credentials in the browser.
            </p> */}
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="context" className="hidden" tabIndex={-1} autoComplete="off" />

                <Input name="name" placeholder="Full name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="website" type="text" placeholder="Company website" required/>
                <Textarea name="message" placeholder="Tell us more about yourself and what you&apos;re looking for" rows={4} required />

                <Button type="submit" className="w-full h-11 text-base cursor-pointer" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request partnership intro"}
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
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="data">
            <AccordionTrigger>Why do you need our data?</AccordionTrigger>
            <AccordionContent>
              Your data helps power the tools we build for practices. By combining it with insights from other trusted partners, we create a collective resource that’s more valuable for practices and more impactful for your own clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="return">
            <AccordionTrigger>What do we get in return?</AccordionTrigger>
            <AccordionContent>
              You gain amplified reach for your data, access to broader insights, and a new customer acquisition channel through our tools. We also explore ways to support your team directly with dashboards and automations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fit">
            <AccordionTrigger>Who is a good fit for partnership?</AccordionTrigger>
            <AccordionContent>
              Companies that help practices succeed in any capacity — especially those that value transparency, prioritize data, and genuinely care about practice owners.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="team-build">
            <AccordionTrigger>Can you build something just for our team?</AccordionTrigger>
            <AccordionContent>
              Yes. Beyond partnerships, we also develop custom tools—such as dashboards, automations, or other web apps — to help your team save time and serve clients more effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="getting-started">
            <AccordionTrigger>How do we get started?</AccordionTrigger>
            <AccordionContent>
              Reach out to us with a quick introduction. We’ll schedule a conversation to learn about your expertise and data, explore opportunities for collaboration, and map out how a tool could be built together.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}