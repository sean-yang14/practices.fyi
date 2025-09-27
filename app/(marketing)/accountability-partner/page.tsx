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

export default function AccountabilityPartnerPage() {
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
      practice: data.get("practice"),
      role: data.get("role"),
      timeframe: data.get("timeframe"),
      priorities: data.get("priorities"),
      // honeypot
      context: data.get("context"),
    } as Record<string, FormDataEntryValue | null>;

    // Basic honeypot: if filled, bail as success
    if (typeof payload.context === "string" && payload.context.length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/accountability-lead", {
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
        <Badge className="bg-orange-50 text-orange-900 hover:bg-orange-50">Accountability</Badge>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Accountability Partner
        </h1>
        <div className="mt-3 h-1 w-72 bg-orange-500 rounded" aria-hidden />
        <p className="mt-6 text-lg text-slate-700 max-w-3xl">
          We help you make real progress by keeping you accountable for executing on the few things that matter most. It’s not easy but it is simple, and it works.
        </p>
      </section>

      {/* WHY IT'S IMPORTANT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold">Why this matters</h2>
            <p className="mt-4 text-slate-700">
              It’s hard to juggle everything as a practice owner — you’re pulled in a hundred directions, and some days it feels like nothing is really getting done. You’re stuck on a hamster wheel, always moving but not moving forward.
            </p>
            <p className="mt-3 text-slate-700">
              The key to breaking out of that cycle is simple: prioritize what matters most and follow through. That’s where we come in—we’re your accountability partner, helping you stay focused and execute on the goals that move your practice forward.
            </p>
          </div>
          <div className="md:col-span-5">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <ul className="space-y-2 text-slate-800 list-disc pl-5">
                  <li>Weekly momentum through lightweight check‑ins.</li>
                  <li>Progress you can see, track, and celebrate.</li>
                  <li>Optional financial "stake" to sharpen commitment.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - VERTICAL FORMAT */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How it works</h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Pick your timeframe",
              desc: "Weekly, monthly, and quarterly goals should ladder — weekly feeds monthly; monthly feeds quarterly.",
            },
            {
              step: "2",
              title: "List your non‑negotiables",
              desc: "Share the 3 – 5 actions (it should never be more) that must get done. We'll help pressure‑test and refine them.",
            },
            {
              step: "3",
              title: "Check‑ins",
              desc: "We check in during the week and hold you to what you committed.",
            },
            {
              step: "4",
              title: "Track & celebrate",
              desc: "We track progress week‑over‑week, highlight wins, and reset for the next sprint.",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-700 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-bold">What you get</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Prioritization, simplified",
              desc: "Success comes from focus. Decide on the 3 – 5 most important actions for the week or month. No more laundry lists.", 
            },
            {
              title: "Weekly check‑ins",
              desc: "We check in mid‑week and end‑week to keep things moving.",
            },
            {
              title: "Progress tracking",
              desc: "See week‑over‑week momentum and celebrate wins; adjust quickly when you miss.",
            },
            {
              title: "Sounding board",
              desc: "Gut‑check goals and trade‑offs with someone who's unemotional and on your side.",
            },
            // {
            //   title: "Templates & prompts",
            //   desc: "Simple prompts to write goals that are specific, owned, and time‑bound.",
            // },
            {
              title: "Commitment boost (optional)",
              desc: "Stake an amount you choose; hit your goals and keep it — miss, and we take it.",
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

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
          {/* <Badge className="bg-orange-100 text-orange-900 hover:bg-orange-100">Simple & flexible</Badge> */}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Free plan */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Starter</h3>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight">Free</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>Define weekly or monthly non‑negotiables</li>
                <li>Mid‑week & end‑week check‑ins</li>
                <li>Progress tracking & summary</li>
              </ul>
            </CardContent>
          </Card>
          {/* Commitment boost (stake) */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Commitment Boost (optional)</h3>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight">You choose</span>
                <span className="text-slate-600">stake amount</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>Put money behind your goals</li>
                <li>Hit targets → keep your stake</li>
                <li>Miss targets → forfeit your stake</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Loss aversion explainer */}
        <Card className="mt-6 border-slate-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg">Why the stake works: loss aversion</h3>
            <p className="mt-2 text-slate-700">
              Behavioral science shows people are often more motivated to <strong>avoid losing something</strong> than to gain the same amount — his is called <em>loss aversion</em>. Studies suggest losses can feel about twice as powerful as gains. Putting money down toward a task makes the potential loss feel real, which sharpens commitment and follow‑through.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* SIGN UP CTA */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Start your accountability sprint</h2>
            <p className="mt-3 text-slate-700">
              Tell us your timeframe and non‑negotiables. We'll help you lock them in and get moving.
            </p>
            {/* <p className="mt-2 text-sm text-slate-500">Submissions are handled by a server‑side route you control. No credentials in the browser.</p> */}
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="context" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="name" placeholder="Full name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="practice" placeholder="Practice name" required />
                  <Input name="role" placeholder="Your role" required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium text-slate-700 mb-1">Timeframe</label>
                    <select id="timeframe" name="timeframe" required className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:ring-slate-400">
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priorities" className="block text-sm font-medium text-slate-700 mb-1">Top 3–5 priorities</label>
                    <Textarea id="priorities" name="priorities" rows={4} placeholder="List your non‑negotiables for this timeframe" required />
                  </div>
                </div>

                {/* <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 rounded border-slate-300" />
                  <label htmlFor="consent">I consent to being contacted about this service.</label>
                </div> */}

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request my accountability partner"}
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
          <AccordionItem value="what">
            <AccordionTrigger>What exactly does an accountability partner do?</AccordionTrigger>
            <AccordionContent>
              We help you set clear priorities with tasks and timelines, then check in during the week to keep you on track. It’s simple and it works, because having someone alongside you makes the journey easier and more empowering.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="timeframe">
            <AccordionTrigger>How often are check‑ins?</AccordionTrigger>
            <AccordionContent>
              Typically mid‑week and end‑week for weekly sprints. Monthly / quarterly rhythms include milestone check‑ins.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="stake">
            <AccordionTrigger>Do I have to put up money?</AccordionTrigger>
            <AccordionContent>
              No. The stake is optional. If you choose it, you set the amount. Many owners find it increases follow‑through.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="changes">
            <AccordionTrigger>What if priorities change mid‑sprint?</AccordionTrigger>
            <AccordionContent>
              That happens. We'll reset scope intentionally—trading off, not piling on — so you keep momentum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cancel">
            <AccordionTrigger>Can I pause or cancel?</AccordionTrigger>
            <AccordionContent>
              Yes — you can pause or stop at any time. This is about helping make your life easier, we're not looking to trap you in anything.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}