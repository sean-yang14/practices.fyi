import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="why-should-i-trust-you">
          <AccordionTrigger className="text-lg">Why should I trust you?</AccordionTrigger>
          <AccordionContent className="text-base">
            I started my career as a CPA, then worked in finance before helping practices grow and optimize operations. Each of those is its own skillset — and combining them means I bring a unique perspective on both the numbers and the realities of running a practice. That mix helps me build tools that are truly impactful and every bit as strong as anything on the market.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="healthcare-practice-type">
          <AccordionTrigger className="text-lg">Do I need to be a particular type of healthcare practice?</AccordionTrigger>
          <AccordionContent className="text-base">
            No. These tools are designed to help any healthcare practice — dental, therapy, medical, or otherwise — gain clarity, improve performance, and feel less alone in the journey.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="practice-consultant">
          <AccordionTrigger className="text-lg">Are you a practice consultant?</AccordionTrigger>
          <AccordionContent className="text-base">
            No, I&apos;m not selling professional services of any kind here. In fact, I hope to partner with other great vendors who provide those essential services because practices shouldn&apos;t try to do everything themselves. There&apos;s a lot of power in delegation! My real goal with Practices.fyi is to support owners by creating amazing tools at fair prices — that&apos;s where my passion lies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="difference-between">
          <AccordionTrigger className="text-lg">How is the Practice Performance Report different from the free check-up?</AccordionTrigger>
          <AccordionContent className="text-base">
            The free check-up is a one-time snapshot to help you see where you stand. The Practice Performance Report is an ongoing tool that provides regular visibility into your practice, so you can track progress and make better decisions over time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="what-are-you-building">
          <AccordionTrigger className="text-lg">What else are you building?</AccordionTrigger>
          <AccordionContent className="text-base">
            This is just the start. I’m building tools to make practice ownership easier and more affordable — so if there’s a specific problem you’d like solved, let me know. I’ll work on creating it, or if someone else has already built something great, I’ll gladly recommend it. The goal is simple: give practice owners access to amazing tools at fair prices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}