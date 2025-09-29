import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Suggested path: app/(marketing)/resources/templates-and-guides/page.tsx
// Header & Footer are handled globally; omitted here per request.

// Types
 type CtaType = "download" | "access";
 interface ResourceItem {
  title: string;
  description: string;
  href: string; // placeholder to wire later
  cta: CtaType; // "download" | "access"
 }
 interface SectionItem {
  id: string;
  title: string;
  resources: ResourceItem[];
 }

// Data
const sections: SectionItem[] = [
  {
    id: "financial",
    title: "Practice Financial Decision‑Making Resources",
    resources: [
      {
        title: "New hire financial impact analysis",
        description:
          "A calculation to help understand the potential financial impact a new hire will have and how many visits are needed to breakeven.",
        href: "#",
        cta: "download",
      },
      {
        title: "Investment breakeven analysis",
        description:
          "A model to help practices understand what needs to be true in order to breakeven on a capital investment.",
        href: "#",
        cta: "download",
      },
      {
        title: "Payment structure",
        description:
          "Shows what the financial impact of various payment structures for your team members.",
        href: "#",
        cta: "download",
      },
    ],
  },
  {
    id: "employee",
    title: "Practice Employee Management Resources",
    resources: [
      {
        title: "Raise financial impact calculator",
        description:
          "A quick calculator to help owners and managers understand the financial impact to the practice of a raise at daily, weekly, monthly, and annual levels.",
        href: "#",
        cta: "download",
      },
      {
        title: "Capacity Analysis",
        description:
          "A model to determine how many visits a provider can see in a day. Use as one data point alongside day‑to‑day experience in the practice.",
        href: "#",
        cta: "download",
      },
    ],
  },
  {
    id: "local-seo",
    title: "Local SEO",
    resources: [
      {
        title: "Local SEO Guide",
        description:
          "A deep dive into how local SEO works for healthcare practices—for those who like to go deep.",
        href: "#",
        cta: "coming-soon",
      },
      {
        title: "Local SEO Summary Guide",
        description:
          "A shorter version with the big takeaways for those pressed for time.",
        href: "#",
        cta: "coming-soon",
      },
      {
        title: "Google Business Profile Checklist",
        description:
          "The to‑dos to have an optimized Google Business Profile.",
        href: "https://docs.google.com/document/d/e/2PACX-1vRBPLjEFG7tKhZf1PXA3cAxAFrI-fQUGWFCTn15KBAptsXVzWtifHrxnIGhIo7KTHqoQg2D6R1Qlyg4/pub",
        cta: "download",
      },
      {
        title: "Local Directories Checklist",
        description:
          "The list of directories your practice should be listed on for visibility and stronger Local SEO.",
        href: "https://docs.google.com/document/d/e/2PACX-1vQOLienQOqJF-vMRW4vlMAYMiIFUchtHwHZLQswXdz86PEMP25836yG4kVkEhYmO4S_yWaNRbVOB3Kl/pub",
        cta: "download",
      },
      {
        title: "Website Quality Checklist",
        description:
          "A quick way to check if your website is good enough—or if you should invest in updates or a rebuild.",
        href: "https://docs.google.com/document/d/e/2PACX-1vTkToXZThepBR8309SbrWgwpMFrJexNtzXK8BRHDFu2qJkxH7Flezl9sh7ZyFD7DxjF_gB7A3zLt4Ha/pub",
        cta: "download",
      },
    ],
  },
];

// Components
function ResourceCard({ item, sectionId }: { item: ResourceItem; sectionId: string }) {
  const isComingSoon = sectionId === "financial" || sectionId === "employee" || item.cta === "coming-soon";
  const isLocalSeo = sectionId === "local-seo";

  let label, buttonProps, isDisabled;

  if (isComingSoon) {
    label = "Coming soon";
    buttonProps = {
      variant: "secondary" as const,
      className: "h-10 text-base cursor-not-allowed bg-gray-200 text-gray-600 hover:bg-gray-200",
      disabled: true
    };
    isDisabled = true;
  } else if (isLocalSeo) {
    label = "Access here";
    buttonProps = {
      variant: "secondary" as const,
      className: "h-10 text-base cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
    };
    isDisabled = false;
  } else {
    label = item.cta === "download" ? "Download now →" : "Access here →";
    buttonProps = {
      variant: "secondary" as const,
      className: "h-10 text-base cursor-pointer"
    };
    isDisabled = false;
  }

  return (
    <Card className="border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="grow">
          <h3 className="font-semibold text-lg tracking-tight">{item.title}</h3>
          <p className="mt-2 text-grey-700 text-base leading-relaxed">{item.description}</p>
        </div>
        <div className="mt-5">
          {isDisabled ? (
            <Button {...buttonProps}>
              {label}
            </Button>
          ) : (
            <Button asChild {...buttonProps}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${item.title}`}>{label}</a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function TemplatesAndGuidesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <Badge className="bg-orange-50 text-orange-900 hover:bg-orange-50 text-base">Free Practice Management Templates & Guides</Badge>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Welcome to your collection of resources to grow your practice
        </h1>
        <div className="mt-3 h-1 w-100 bg-orange-500 rounded" aria-hidden />
        {/* Optional subhead can go here if desired */}
      </section>

      {/* SECTIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        {sections.map((section) => (
          <div key={section.id} className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{section.title}</h2>
            {/**
             * Add a short owner/manager‑facing explanation of what this section is for.
             * <p className="mt-2 max-w-3xl text-slate-600">
             *   Example: Use these tools when you're evaluating new hires or major purchases. They help you quantify
             *   assumptions and make decisions with clarity.
             * </p>
             */}

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.resources.map((item) => (
                <ResourceCard key={item.title} item={item} sectionId={section.id} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}