import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  practice: z.string().min(1),
  package: z.enum(["accountability-only", "commitment-boost"]),
  context: z.string().optional().default(""), // honeypot
});

import { EMAIL_FROM, EMAIL_TO } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, practice, package: packageType, context } = parsed.data;

    // Honeypot check
    if (context && context.length > 0) {
      return NextResponse.json({ ok: true }); // Return success to fool bots
    }

    const packageLabel = packageType === "accountability-only"
      ? "Accountability Partner Only"
      : "Commitment Boost";

    // Log the submission
    console.log("New Accountability Partner lead submission:");
    console.log({
      name,
      email,
      practice,
      package: packageLabel,
      source: "Accountability Partner Page",
      timestamp: new Date().toISOString()
    });

    // Send email if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject: "🎯 New Accountability Partner Request",
        replyTo: email,
        text: [
          `NEW ACCOUNTABILITY PARTNER REQUEST`,
          `Source: Accountability Partner Page`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          `Practice: ${practice}`,
          `Package: ${packageLabel}`,
          ``,
          `---`,
          `Submitted: ${new Date().toLocaleString()}`
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Accountability lead submission error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
