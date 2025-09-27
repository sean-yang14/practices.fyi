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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PartnerType = "financial" | "consultant" | "recruiting" | "other";

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
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <Badge className="bg-orange-50 text-orange-900 hover:bg-orange-50">Partner With Us</Badge>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Partnerships to help practices thrive
        </h1>
        <div className="mt-3 h-1 w-40 bg-orange-500 rounded" aria-hidden />
        <p className="mt-6 text-lg text-slate-700 max-w-3xl">
          We build tools — not services — but practices still need help executing. That’s where experts like you, who truly care about practices, come in. By combining your expertise with our product development, we can help practices win together.
        </p>
      </section>

      {/* HOW PARTNERSHIP WORKS / GOAL */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-6 md:grid-cols-12 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold">How we work with partners</h2>
            <p className="mt-4 text-slate-700">
              We build tools for practices and we invite you to share your data so we can build together. By combining your expertise with insights from other trusted partners, we create a collective resource more powerful than any one group alone. That makes your data more valuable to practices, strengthens the impact you deliver to your clients, and opens a new customer acquisition channel through our tools.
              <br />
              <br />
              And we don’t stop there. Our product development can also support your team directly, from custom dashboards for your clients to automations that save time and reduce manual work.
            </p>
          </div>
          <div className="md:col-span-5">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">What we bring to your team</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-800">
                  <li>A new customer acquisition channel.</li>
                  <li>Stronger insights through access to more and better data.</li>
                  <li>Custom dashboards tailored to your needs</li>
                  <li>Automations that save time and reduce manual work</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERTS WHO PARTNER WITH US */}
      <section className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold">Experts we're looking to partner with</h2>
        <p className="mt-3 text-slate-500">We're actively expanding to include more partner types as we grow.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Financial Partners */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Financial Partners</h3>
              <p className="text-slate-600 text-sm mb-3">CPAs, CFOs, Bookkeepers</p>
            </CardContent>
          </Card>
          {/* Practice Consultants */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Practice Consultants</h3>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
        <div className="mt-6 space-y-6">
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">General Partnership Tools</h3>
              <p className="text-slate-900 font-medium mb-2">Free</p>
              <p className="text-slate-700">
                Our mission is to provide insane value to practices. I believe strongly that we can build amazing tools that truly help practices thrive. I'm removing all hurdles in pursuit of this goal—there's no cost for partnering on tools for the general public.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Custom Partner Solutions</h3>
              <p className="text-slate-900 font-medium mb-2">Custom pricing</p>
              <p className="text-slate-700">
                Need custom dashboards, automations, or integrations specific to your firm? Let's discuss pricing based on your exact needs and the value we'll create together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SIGN UP CTA */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Become a partner</h2>
            <p className="mt-3 text-slate-700">
              Tell us about your firm and we'll follow up to explore fit.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Submissions go to a server‑side route you control. No credentials in the browser.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="context" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="name" placeholder="Full name" required />
                  <Input name="email" type="email" placeholder="Work email" required />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="company" placeholder="Company" required />
                  <Input name="role" placeholder="Your role" required />
                </div>
                <Input name="website" type="url" placeholder="Company website (https://)" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Partner type</label>
                    <Select name="partnerType" defaultValue="financial">
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial (CPA/CFO/Bookkeeper)</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="recruiting">Recruiting firm</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Input name="region" placeholder="Region (City/State or Country)" />
                </div>

                <Textarea name="message" placeholder="Tell us about your clients and how you currently help them" rows={4} required />

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 rounded border-slate-300" />
                  <label htmlFor="consent">I consent to being contacted about this partnership.</label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request partnership intro"}
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
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
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
          <AccordionItem value="fit">
            <AccordionTrigger>Who is a good fit for partnership?</AccordionTrigger>
            <AccordionContent>
              Companies that help practices succeed in any capacity — especially those that value transparency, prioritize data, and genuinely care about practice owners.
            </AccordionContent>
          </AccordionItem>
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