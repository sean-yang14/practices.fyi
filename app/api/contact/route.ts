import { NextResponse } from "next/server";
import { z } from "zod";

// Validate expected contact form fields
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  website: z.string().optional().default(""),
  position: z.string().optional().default(""),
  message: z.string().optional().default(""),
});

import { EMAIL_FROM, EMAIL_TO } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, website, position, message } = parsed.data;

    // Log the submission for observability
    console.log("New Contact submission:", {
      name,
      email,
      website: website || "(none)",
      position: position || "(none)",
      message: message || "(none)",
      source: "Contact Page",
      timestamp: new Date().toISOString(),
    });

    // Send email if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        // Use verified sender (configure EMAIL_FROM / domain in Resend)
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject: "📬 New Contact Form Submission",
        replyTo: email,
        text: [
          `NEW CONTACT FORM SUBMISSION`,
          `Source: Contact Page`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          `Website: ${website || "(none)"}`,
          `Position: ${position || "(none)"}`,
          ``,
          `Message:`,
          message || "(none)",
          ``,
          `---`,
          `Submitted: ${new Date().toLocaleString()}`,
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact submission error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
