import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  return (
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
  );
}