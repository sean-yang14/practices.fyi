import { NextResponse } from "next/server";
import { z } from "zod";

// Validate expected contact form fields
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  practice: z.string().min(1),
  position: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  message: z.string().min(1),
});

import { EMAIL_FROM, EMAIL_TO } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, practice, position, city, state, message } = parsed.data;

    // Log the submission for observability
    console.log("New Contact submission:", {
      name,
      email,
      practice,
      position,
      city,
      state,
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
          `Practice: ${practice}`,
          `Position: ${position}`,
          `City/State: ${city}, ${state}`,
          ``,
          `Message:`,
          message,
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
