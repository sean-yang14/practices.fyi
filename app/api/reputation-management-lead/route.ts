import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  practice: z.string().min(1),
  locations: z.string().optional().default("1"),
  message: z.string().optional().default(""),
});

const TO = "sean@practices.fyi";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, practice, locations, message } = parsed.data;

    // Log the submission
    console.log("New Reputation Management lead submission:");
    console.log({
      name,
      email,
      practice,
      locations,
      message: message || "(none)",
      source: "Reputation Management Page",
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
        subject: "⭐ New Reputation Management Request",
        replyTo: email,
        text: [
          `NEW REPUTATION MANAGEMENT REQUEST`,
          `Source: Reputation Management Page`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          `Practice: ${practice}`,
          `Number of Locations: ${locations}`,
          ``,
          `Message:`,
          message || "(none)",
          ``,
          `---`,
          `Submitted: ${new Date().toLocaleString()}`
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}