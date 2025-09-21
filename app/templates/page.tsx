"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, FileText, BookOpen, Zap, Users, Clock, Download } from "lucide-react";

export default function TemplatesGuidesPage() {
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
      const res = await fetch("/api/templates-guides-lead", {
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
          <Badge className="mb-4 bg-orange-100 text-orange-900 hover:bg-orange-100">Practice Resources</Badge>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Templates & Guides
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
            Ready-to-use templates, step-by-step guides, and proven frameworks to streamline your practice operations and improve patient experience.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#signup" className="inline-flex">
              <Button size="lg" className="h-12 px-6">Browse templates</Button>
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
              Running a practice means juggling countless operational tasks, from patient communications to staff training.
              Having proven templates and guides saves you time, ensures consistency, and helps you implement best practices
              without reinventing the wheel.
            </p>
            <p className="mt-4 text-slate-700">
              Stop starting from scratch every time you need a new form, policy, or process. Use our tested templates
              and guides to standardize your operations and focus on what matters most—patient care.
            </p>
          </div>
          <div className="md:col-span-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="space-y-3 text-slate-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Save hours on documentation and process creation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ensure consistency across your practice operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Implement proven best practices immediately</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reduce training time for new staff members</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Improve patient experience with standardized processes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">What you&apos;ll get</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Practice forms & documents",
              desc: "Patient intake forms, consent forms, policies, and administrative templates ready to customize for your practice.",
              icon: FileText,
            },
            {
              title: "Operational guides",
              desc: "Step-by-step guides for common practice operations like staff onboarding, patient scheduling, and workflow optimization.",
              icon: BookOpen,
            },
            {
              title: "Quick-start templates",
              desc: "Pre-built templates for marketing materials, patient communications, and practice management tasks.",
              icon: Zap,
            },
            {
              title: "Staff training materials",
              desc: "Training guides, checklists, and materials to get new team members up to speed quickly and effectively.",
              icon: Users,
            },
            {
              title: "Time-saving workflows",
              desc: "Proven workflows and processes that help you streamline daily operations and reduce administrative burden.",
              icon: Clock,
            },
            {
              title: "Instant downloads",
              desc: "Download templates immediately after purchase. All files come in editable formats (Word, PDF, Excel) for easy customization.",
              icon: Download,
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
          <h2 className="text-2xl md:text-3xl font-bold">Why trust these resources?</h2>
          <p className="mt-4 text-slate-700 text-lg">
            These aren&apos;t generic templates you&apos;d find anywhere else. Every template and guide has been battle-tested
            in real practice environments and refined based on feedback from practice owners and their teams.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Real-world tested</h3>
                <p className="text-slate-700">
                  Every template and guide has been used in actual practice settings. We&apos;ve eliminated the guesswork
                  and provided only what actually works in day-to-day operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Practice owner perspective</h3>
                <p className="text-slate-700">
                  Created by someone who understands the unique challenges of running a practice. These resources address
                  real problems with practical, implementable solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <p className="mt-3 text-slate-700">Simple access to proven practice resources.</p>
        <div className="mt-8 space-y-6">
          {[
            {
              step: "1",
              title: "Browse the collection",
              desc: "Explore our library of templates, guides, and resources organized by category and practice type.",
            },
            {
              step: "2",
              title: "Choose what you need",
              desc: "Select individual templates or bundles based on your practice&apos;s specific needs and priorities.",
            },
            {
              step: "3",
              title: "Download instantly",
              desc: "Get immediate access to editable files you can customize with your practice information and branding.",
            },
            {
              step: "4",
              title: "Implement and customize",
              desc: "Use the templates as-is or modify them to fit your practice&apos;s unique requirements and workflows.",
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
          <h2 className="text-2xl md:text-3xl font-bold">Simple pricing</h2>
          <p className="mt-3 text-slate-700">
            Pay only for what you need. Individual templates or money-saving bundles.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Individual Templates */}
          <Card className="border-slate-200">
            <CardContent className="p-8">
              <h3 className="font-semibold text-xl mb-2">Individual Templates</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold tracking-tight">$25</span>
                <span className="text-slate-600 ml-2">per template</span>
              </div>
              <div className="space-y-3 text-slate-700 mb-6">
                <p>• Single template download</p>
                <p>• Editable Word/PDF format</p>
                <p>• Instant access after purchase</p>
                <p>• Lifetime use rights</p>
                <p>• Implementation guidance included</p>
              </div>
              <a href="#signup" className="inline-flex">
                <Button className="h-11 px-8">Browse templates</Button>
              </a>
            </CardContent>
          </Card>

          {/* Template Bundles */}
          <Card className="border-slate-200 border-2 border-orange-200">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-xl">Practice Starter Bundle</h3>
                <Badge className="bg-orange-100 text-orange-900">Most Popular</Badge>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-extrabold tracking-tight">$149</span>
                <span className="text-slate-600 ml-2">one-time</span>
              </div>
              <div className="space-y-3 text-slate-700 mb-6">
                <p>• 25+ essential practice templates</p>
                <p>• Complete operational guide set</p>
                <p>• Staff training materials</p>
                <p>• Patient communication templates</p>
                <p>• Save $500+ vs individual purchase</p>
                <p>• Free updates for 1 year</p>
              </div>
              <a href="#signup" className="inline-flex">
                <Button className="h-11 px-8">Get the bundle</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section id="signup" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to streamline your practice?</h2>
            <p className="mt-3 text-slate-700">
              Tell us about your practice needs and we&apos;ll help you find the right templates and guides to get started.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Get personalized recommendations based on your practice type and current challenges.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Work email" required />
                <Input name="practice" placeholder="Practice name" required />
                <Input name="practice_type" placeholder="Practice type (e.g., Family Medicine, Dentistry)" />
                <Input name="team_size" placeholder="Team size" type="number" min="1" />
                <Textarea
                  name="message"
                  placeholder="What specific challenges or processes would you like help with?"
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
                    I consent to being contacted about templates and guides.
                  </label>
                </div>

                <Button type="submit" className="w-full h-11" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Get recommendations"}
                </Button>

                {status === "success" && (
                  <p className="text-green-700 text-sm">Thanks! We&apos;ll send you personalized template recommendations within 1 business day.</p>
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
          <AccordionItem value="what-formats">
            <AccordionTrigger>What file formats do the templates come in?</AccordionTrigger>
            <AccordionContent>
              Most templates are provided in Microsoft Word (.docx) format for easy editing. Some specialized forms also
              include PDF versions. Spreadsheet templates come in Excel (.xlsx) format. All formats are widely compatible
              and can be opened with free alternatives like Google Docs or OpenOffice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="customization">
            <AccordionTrigger>Can I customize the templates for my practice?</AccordionTrigger>
            <AccordionContent>
              Absolutely! All templates are fully editable. You can add your practice logo, change colors, modify text,
              and adjust content to match your practice&apos;s specific needs and branding. We encourage customization to
              make the templates work perfectly for your unique situation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="usage-rights">
            <AccordionTrigger>Can I use these templates for multiple locations?</AccordionTrigger>
            <AccordionContent>
              Yes! Once you purchase a template or bundle, you have unlimited usage rights for your practice(s). You can
              use them across multiple locations, modify them as needed, and continue using them indefinitely. You cannot
              resell or redistribute the templates to other practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="updates">
            <AccordionTrigger>Do you update templates when regulations change?</AccordionTrigger>
            <AccordionContent>
              Bundle purchasers receive free updates for one year, including regulatory updates when applicable. Individual
              template purchasers can access updates for a small fee. We monitor healthcare regulations and update templates
              accordingly, though you should always verify compliance with your legal and compliance teams.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>Do you provide support for implementing the templates?</AccordionTrigger>
            <AccordionContent>
              Each template comes with basic implementation guidance. Bundle purchasers receive priority email support for
              template questions. For more extensive implementation help, we offer consulting services separately. Most
              templates are designed to be self-explanatory and quick to implement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="refunds">
            <AccordionTrigger>What&apos;s your refund policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day satisfaction guarantee. If a template doesn&apos;t meet your needs or work for your practice,
              we&apos;ll provide a full refund. We want you to be completely satisfied with your purchase and find real value
              in the templates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="practice-types">
            <AccordionTrigger>Do you have templates for my type of practice?</AccordionTrigger>
            <AccordionContent>
              We have templates for most common practice types including family medicine, internal medicine, pediatrics,
              dermatology, dentistry, and many specialties. Many templates are universal and work across practice types.
              If you have specific needs, let us know and we can recommend the most relevant templates for your specialty.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="new-templates">
            <AccordionTrigger>Do you regularly add new templates?</AccordionTrigger>
            <AccordionContent>
              Yes! We continuously add new templates based on practice owner feedback and emerging needs in healthcare.
              Bundle purchasers get access to new templates added during their update period. We also take requests for
              specific templates that would benefit multiple practices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}