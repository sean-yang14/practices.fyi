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
          We build tools for practices—not bill-by-the-hour consulting. Let's combine your relationships and domain expertise with our product development to help practices win together.
        </p>
      </section>

      {/* HOW PARTNERSHIP WORKS / GOAL */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-6 md:grid-cols-12 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold">How we work with partners</h2>
            <p className="mt-4 text-slate-700">
              Our goal is simple: create high‑leverage tools for practices while elevating the work you already do. Practices shouldn't carry everything alone—they need trusted partners who care and deliver quality.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-800">
              <li>Co‑create dashboards, automations, and messaging that compound your impact.</li>
              <li>Use your access to accurate data to pinpoint opportunities and risks.</li>
              <li>Unlock a new **patient acquisition** channel through better operations and reputation.</li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">What we bring to your team</h3>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-800">
                  <li>Custom operational automations that kill admin drag.</li>
                  <li>Owner‑ready dashboards: financial, marketing, and ops.</li>
                  <li>Automated messaging to drive reviews, re‑care, and recall.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES BY PARTNER TYPE */}
      <section className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-bold">Why partner with us</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Financial Partners */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Financial Partners (CPAs, CFOs, Bookkeepers)</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-800">
                <li>Translate ledgers into actionable KPI dashboards.</li>
                <li>Spot revenue leakage & cost creep early with alerts.</li>
                <li>Deliver board‑ready monthly summaries in minutes.</li>
              </ul>
            </CardContent>
          </Card>
          {/* Consultants */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Practice Consultants (data‑forward)</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-800">
                <li>Automate recurring audits and action plans.</li>
                <li>Benchmark clients and showcase wins transparently.</li>
                <li>Scale your impact without scaling admin hours.</li>
              </ul>
            </CardContent>
          </Card>
          {/* Recruiting Firms */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Recruiting Firms</h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-800">
                <li>Automate job distribution & candidate tracking.</li>
                <li>Free your team to focus on relationships, not admin.</li>
                <li>Share performance dashboards with clients to prove ROI.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
          <Badge className="bg-orange-100 text-orange-900 hover:bg-orange-100">Custom</Badge>
        </div>
        <Card className="mt-4 border-slate-200">
          <CardContent className="p-6">
            <p className="text-slate-700">
              Custom → connect to find out more. Our goal for partners mirrors our goal for practices: provide as much value as possible at a fair price.
            </p>
          </CardContent>
        </Card>
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
          <AccordionItem value="fit">
            <AccordionTrigger>Who is a good fit for partnership?</AccordionTrigger>
            <AccordionContent>
              Firms that value data, transparency, and long‑term relationships with practices—especially CPAs/CFOs, data‑forward consultants, and recruiting teams that want to automate admin.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="model">
            <AccordionTrigger>How do we work together day‑to‑day?</AccordionTrigger>
            <AccordionContent>
              We co‑design metrics and workflows, connect to read‑only data where possible, and ship dashboards/automations your team can use with clients. You keep the relationship—we amplify it with product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="revenue">
            <AccordionTrigger>Is there a referral or revenue‑share model?</AccordionTrigger>
            <AccordionContent>
              We'll propose a simple, transparent model based on scope and outcomes. The goal is aligned incentives and clear value for the practice and your firm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="privacy">
            <AccordionTrigger>How do you handle data security and privacy?</AccordionTrigger>
            <AccordionContent>
              We prefer read‑only access, least‑privilege credentials, and encrypted transit. Access can be revoked at any time. We do not resell client data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timelines">
            <AccordionTrigger>How long does onboarding take?</AccordionTrigger>
            <AccordionContent>
              Typical onboarding is 1–2 weeks depending on data access and scope. Pilot first, then scale.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>What does it cost?</AccordionTrigger>
            <AccordionContent>
              Pricing is custom to your scope. Our goal mirrors our work with practices: provide the most value possible at a fair price.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}