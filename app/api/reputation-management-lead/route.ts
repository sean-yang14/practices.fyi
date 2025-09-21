import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  practice: z.string().min(1),
  locations: z.string().optional().default("1"),
  current_system: z.string().optional().default(""),
  message: z.string().optional().default(""),
  consent: z.string().optional(), // checkbox returns "on" when checked
});

const TO = "seanhyang1@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, practice, locations, current_system, message } = parsed.data;

    // Log the submission (in production, you'd want to send an actual email)
    console.log("New Reputation Management lead submission:");
    console.log({
      name,
      email,
      practice,
      locations,
      currentSystem: current_system,
      message: message || "(none)",
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
        subject: "New Reputation Management lead",
        replyTo: email,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Practice: ${practice}`,
          `Number of Locations: ${locations}`,
          `Current System: ${current_system || "(not specified)"}`,
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