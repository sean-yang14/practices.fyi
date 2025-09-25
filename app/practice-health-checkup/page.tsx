"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Heart, Users, MessageCircle } from "lucide-react";

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
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100">Practice Support</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Practice Health Checkup
          </h1>
          <div className="mt-3 h-1 w-80 bg-orange-500 rounded" aria-hidden />
          <p className="mt-6 text-lg md:text-xl text-slate-700">
            Get an objective perspective on your practice. Sometimes you need someone to talk through the data and help you see what you might be missing.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6">Book your checkup</Button>
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
              Running a practice can feel isolating. When you&apos;re stuck or need a fresh perspective, data can be intimidating to parse alone.
              Sometimes you just need someone to take an objective look and help you see what&apos;s really going on.
            </p>
            <p className="mt-4 text-slate-700">
              Think of this like a health checkup for your business—checking in on the key vitals so you can level set and know things are headed in the right direction.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get an outside perspective on your practice performance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Break down intimidating data into clear insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Talk through problems and work toward solutions together</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Make the ownership journey a little less lonely</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Spot patterns and opportunities you might have missed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KEY FEATURES / REASONS */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">What makes this valuable</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Friendly conversation",
              desc: "No intimidating jargon or overwhelming charts. Just a straightforward discussion about your business.",
              icon: MessageCircle,
            },
            {
              title: "Fresh perspective",
              desc: "Sometimes you&apos;re too close to see clearly. An outside view can reveal patterns and opportunities.",
              icon: Users,
            },
            {
              title: "Practical insights",
              desc: "We focus on actionable takeaways you can actually implement, not just theoretical analysis.",
              icon: CheckCircle,
            },
            {
              title: "Data made simple",
              desc: "We break down your financial and operational data into plain English insights.",
              icon: Heart,
            },
            {
              title: "Problem solving",
              desc: "Stuck on a challenge? We can work through it together and explore potential solutions.",
              icon: Users,
            },
            {
              title: "No pressure",
              desc: "This is your time to ask questions, explore ideas, and get clarity on whatever's on your mind.",
              icon: Heart,
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
          <h2 className="text-2xl md:text-3xl font-bold">Why trust me with this?</h2>
          <p className="mt-4 text-slate-700 text-lg">
            I&apos;ve been where you are. I understand the challenges of running a practice because I&apos;ve helped dozens of practice owners
            navigate similar situations. I&apos;m not here to sell you anything—I genuinely want to help make the ownership journey
            a little less lonely.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Real experience</h3>
                <p className="text-slate-700">I&apos;ve worked with practices of all sizes and understand the unique challenges each stage brings.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">No agenda</h3>
                <p className="text-slate-700">I&apos;m not trying to sell you software or services. This is genuinely about providing helpful perspective.</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Community focus</h3>
                <p className="text-slate-700">I believe in learning from each other. Your challenges and solutions can help other practice owners too.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <p className="mt-3 text-slate-700">Simple, straightforward process focused on having a helpful conversation.</p>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Fill out the form",
              desc: "Tell me a bit about your practice and what you'd like to discuss. No need to share everything upfront.",
            },
            {
              step: "2",
              title: "Quick intro",
              desc: "We&apos;ll connect over email or a brief phone call to understand what you&apos;re hoping to get out of our conversation.",
            },
            {
              step: "3",
              title: "Share some data",
              desc: "Send over some basic reports—financial statements, key metrics, or whatever you think would be helpful to review.",
            },
            {
              step: "4",
              title: "Video call discussion",
              desc: "We&apos;ll have a friendly 45-60 minute conversation walking through your data and talking through any challenges or questions.",
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
          <h2 className="text-2xl md:text-3xl font-bold">Completely free</h2>
          <p className="mt-3 text-slate-700">
            I want to make the ownership journey a little less lonely, and this is one way I&apos;m hoping to do so.
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <Card className="border-slate-200">
            <CardContent className="p-8 text-center">
              <h3 className="font-semibold text-xl mb-2">Practice Health Checkup</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold tracking-tight text-green-600">Free</span>
              </div>
              <div className="space-y-3 text-slate-700 mb-6">
                <p>• 45-60 minute video conversation</p>
                <p>• Review your practice data together</p>
                <p>• Talk through challenges and opportunities</p>
                <p>• Get an outside perspective on your business</p>
                <p>• No sales pitch, just helpful conversation</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-slate-700">
                  <strong>Optional:</strong> With your permission, I&apos;d love to share parts of our conversation on social media.
                  I believe there&apos;s huge value in learning from others and knowing you&apos;re not alone in these challenges.
                  You have final say on anything that gets published.
                </p>
              </div>
              <a href="#signup" className="inline-flex">
                <Button className="h-11 px-8">Book your checkup</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready for your practice checkup?</h2>
            <p className="mt-3 text-slate-700">
              Fill out the form and I&apos;ll reach out to schedule our conversation. No commitment, no sales pitch—just a helpful discussion about your practice.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              All submissions are handled securely and privately. I&apos;ll only use your information to contact you about the checkup.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="practice" placeholder="Practice name" required />
                <Input name="role" placeholder="Your role (Owner, Manager, etc.)" />
                <Textarea
                  name="message"
                  placeholder="What would you like to discuss? Any specific challenges or questions on your mind?"
                  rows={4}
                />
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-slate-300 mt-0.5"
                  />
                  <label htmlFor="consent">
                    I consent to being contacted about this free practice checkup.
                  </label>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <input
                    id="social_consent"
                    name="social_consent"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 mt-0.5"
                  />
                  <label htmlFor="social_consent">
                    I&apos;m open to having parts of our conversation shared on social media (with my final approval on any content).
                  </label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Request my checkup"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! I&apos;ll be in touch within 1–2 business days to schedule our conversation.</p>
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
          <AccordionItem value="what-to-expect">
            <AccordionTrigger>What should I expect during the checkup?</AccordionTrigger>
            <AccordionContent>
              It&apos;s a casual, friendly conversation about your practice. We&apos;ll review any data you&apos;re comfortable sharing,
              talk through challenges you&apos;re facing, and explore opportunities you might not have considered.
              Think of it like having coffee with a friend who understands practice management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="data-required">
            <AccordionTrigger>What data do I need to share?</AccordionTrigger>
            <AccordionContent>
              Only what you&apos;re comfortable with. Basic financial reports, patient volume metrics, or marketing data can be helpful,
              but we can work with whatever you have. If you&apos;re not sure what would be useful, I can guide you after our initial conversation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="time-commitment">
            <AccordionTrigger>How much time does this take?</AccordionTrigger>
            <AccordionContent>
              The main conversation is 45-60 minutes. There&apos;s minimal prep work on your end—just gathering a few basic reports
              if you have them. The goal is to make this as easy as possible for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="really-free">
            <AccordionTrigger>Is this really completely free?</AccordionTrigger>
            <AccordionContent>
              Yes, absolutely. No hidden costs, no follow-up sales calls, no strings attached. I genuinely believe in supporting
              practice owners and this is one way I can contribute to the community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="social-media">
            <AccordionTrigger>What about the social media sharing?</AccordionTrigger>
            <AccordionContent>
              This is completely optional and you have full control. If you&apos;re open to it, I might share anonymized insights
              or lessons from our conversation that could help other practice owners. You&apos;ll see and approve anything before it&apos;s published.
              Many people find value in learning from others&apos; experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="confidentiality">
            <AccordionTrigger>How do you handle confidential information?</AccordionTrigger>
            <AccordionContent>
              Your information is kept strictly confidential. Even if you consent to social sharing, any published content
              would be anonymized and focus on general insights rather than specific details about your practice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who-is-this-for">
            <AccordionTrigger>Who is this best suited for?</AccordionTrigger>
            <AccordionContent>
              Any practice owner or manager who wants an outside perspective on their business. Whether you&apos;re struggling with
              specific challenges, want to validate your thinking, or just need someone to talk through the data with,
              this can be valuable at any stage of practice ownership.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}