"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Handshake, Lightbulb, MessageCircle, Sparkles } from "lucide-react";

export default function ReferralPartnerNetworkingPage() {
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
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100 text-base">Community & referrals</Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Referral Partner Networking
          </h1>
          <div className="mt-3 h-1 w-50 md:w-100 bg-orange-500 rounded" aria-hidden />
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            Getting new patients matters and the highest-quality leads are referrals from other healthcare practices. We make it easier to build strong, reliable referral networks that consistently bring in great patients.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6 text-base cursor-pointer">Join the interest list</Button>
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
      {/* <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why this matters</h2>
            <p className="mt-4 text-grey-700 text-lg">
            The most successful healthcare practices rely heavily on strong referral networks, but this is the hardest marketing channel to build. It requires time and opportunity to build real relationships with other owners.
            </p>
            <p className="mt-4 text-grey-700 text-lg">
            That&apos;s why we&apos;re creating low-pressure, meaningful events for practice owners to connect. Our vision is for these events to become a regular occurance and for the relationships that develop to go beyond referrals into real support and shared learning with each other.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-grey-700 text-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Quality introductions to nearby practice owners (starting in NYC)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Low-pressure meetups focused on relationships, not pitches</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Peer support and ideas from people who get the journey</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>A stronger referral network that compounds over time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>A community that understands practice ownership</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* WHAT WE'RE BUILDING */}
      <section className="mx-auto max-w-6xl rounded-2xl bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What we&apos;re building</h2>
          <p className="mt-4 text-grey-700 text-lg">
          The most successful healthcare practices rely heavily on strong referral networks, but this is the hardest marketing channel to build. It requires time and opportunity to build real relationships with other owners.
            <br />
            <br />
            That&apos;s why we&apos;re creating low-pressure, genuine events for practice owners to connect. Our vision is for these events to become a regular occurance and for the relationships that develop to go beyond referrals into real support and shared learning with each other.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key features</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Connect with Practices Across Healthcare",
              desc: "Meet practice owners not only within your field, but across healthcare specialties. Build a network that reflects the real ecosystem your patients move through — and unlock greater access to your ideal patients.",
              icon: Handshake,
            },
            {
              title: "Build Real, Lasting Relationships",
              desc: "Go beyond quick office drop-ins or transactional interactions. Our events give you meaningful time and space to actually talk, get to know each other, and form relationships rooted in trust — not business cards.",
              icon: MessageCircle,
            },
            {
              title: "Low Pressure, Come-As-You-Are Environment",
              desc: "Networking shouldn’t feel awkward or performative. We design each event to be relaxed, welcoming, and genuine — a place where you can show up as yourself and feel comfortable connecting at your own pace.",
              icon: Sparkles,
            },
            {
              title: "Learn From Peers on the Same Journey",
              desc: "Referrals are just the start. These gatherings create a space to share experiences, learn from each other, and offer support in a profession where owners often feel alone. You’re building community with people who truly understand the challenges and wins.",
              icon: Lightbulb,
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-10 text-center scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
        {/* <p className="mt-3 text-lg text-grey-700">Simple steps to start meeting peers.</p> */}
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Tell us you're interested",
              desc: "Join the interest list. We're only in NYC for now. There's no fee to join the list or attend these events.",
            },
            {
              step: "2",
              title: "Get an event invite",
              desc: "As events get set up, we'll send you an invite that you can accept or decline.",
            },
            {
              step: "3",
              title: "Join the meetups",
              desc: "Attend relaxed, in-person events to build genuine relationships. While there's no fee to attend these events, participants are required to pay for own dinner or drinks (hopefully this changes once we get sponsored).",
            },
            {
              step: "4",
              title: "Grow together",
              desc: "Swap referrals, keep the conversations going outside of these events, and build genuine friendships with a group of people that are on the same special journey as you of owning a healthcare practice.",
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

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Want in on the next meetup?</h2>
            <p className="mt-3 text-grey-700 text-lg">
              Add your name to the interest list. We&apos;ll email details on upcoming NYC meetups (and future cities) once we have enough practice owners in your area.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="website" type="url" placeholder="Practice website" required />
                <Input name="phone" type="tel" placeholder="Cell number (optional, for invites)" />

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Join the list"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! We&apos;ll share meetup details as soon as we have enough nearby owners.</p>
                )}
                {status === "error" && (
                  <p className="text-red-700 text-sm">{error}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  );
}
