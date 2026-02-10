import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="practice-types">
          <AccordionTrigger className="text-lg">Do you work with my type of healthcare practice?</AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. We work with all healthcare practice owners and their teams. Data works the same across most healthcare practices. While each specialty has its own details, we can still provide value right away. We&apos;re confident in that, which is why we offer a money-back guarantee. As we work together, we continue improving your reports to better fit your specific type of practice.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="money-back">
          <AccordionTrigger className="text-lg">How does the money-back guarantee work?</AccordionTrigger>
          <AccordionContent className="text-base">
            We stand behind our work. When you sign up, you get the full setup and a full review of your practice, including your first monthly reports. After you receive that report, you decide if you want to keep working with us. If you don&apos;t, we&apos;ll give you your money back. No questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="best-for">
          <AccordionTrigger className="text-lg">What kind of practice is this best for?</AccordionTrigger>
          <AccordionContent className="text-base">
            This is for practice owners who aren&apos;t data experts or want time back to focus on tasks that can&apos;t be delegated. What we do isn&apos;t rocket science, but it takes time and has complex components. If you enjoy data and already do this well, that&apos;s great. But most owners don&apos;t have time to pull data, clean it up, and filter through what really matters. That&apos;s why the best CEOs have teams to do this for them. We fill that role for your practice.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="consultant">
          <AccordionTrigger className="text-lg">Are you a consultant?</AccordionTrigger>
          <AccordionContent className="text-base">
          That&apos;s not how we think about our role. We want to be the equivalent of the fitness wearable for your business. Our job is to help you clearly understand how your practice is doing. We highlight what matters most so you can take action. We help you see what&apos;s happening, where to focus, and point out how you can get there. Other partners, like consultants or fractional CFOs, are great at executing the detailed &ldquo;how.&rdquo;
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="service-partners">
          <AccordionTrigger className="text-lg">For potential partners (e.g., consultants, CPAs, CFOs)</AccordionTrigger>
          <AccordionContent className="text-base">
            We respect what you do and aren&apos;t trying to replace it. We focus on giving practice owners clarity by showing them what&apos;s happening and why. You focus on how to fix it. We believe we can work together to support practice owners and grow both of our businesses. We&apos;d love to connect.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
