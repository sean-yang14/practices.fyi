import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  practice: z.string().min(1),
  role: z.string().optional().default(""),
  message: z.string().optional().default(""),
  consent: z.string().optional(), // checkbox returns "on" when checked
  social_consent: z.string().optional(), // checkbox returns "on" when checked
});

const TO = "seanhyang1@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, practice, role, message, social_consent } = parsed.data;

    // Log the submission (in production, you'd want to send an actual email)
    console.log("New Practice Health Checkup lead submission:");
    console.log({
      name,
      email,
      practice,
      role,
      message: message || "(none)",
      socialConsent: social_consent === "on" ? "Yes" : "No",
      timestamp: new Date().toISOString()
    });

    // In development/demo mode, we'll just log the submission
    // To send actual emails, set up RESEND_API_KEY in .env.local
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Practices.fyi <no-reply@yourdomain.com>",
        to: [TO],
        subject: "New Practice Health Checkup lead",
        replyTo: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Practice: ${practice}`,
          `Role: ${role}`,
          `Social Media Consent: ${social_consent === "on" ? "Yes" : "No"}`,
          ``,
          `Message:`,
          message || "(none)"
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}