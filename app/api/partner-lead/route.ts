import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  website: z.string().optional().default(""),
  message: z.string().min(1),
  context: z.string().optional().default(""), // honeypot
});

const TO = "seanhyang1@gmail.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }

    const { name, email, website, message, context } = parsed.data;

    // Honeypot check
    if (context && context.length > 0) {
      return NextResponse.json({ ok: true }); // Return success to fool bots
    }

    // Log the submission
    console.log("New Partner lead submission:");
    console.log({
      name,
      email,
      website: website || "(not provided)",
      message,
      source: "Partners Page",
      timestamp: new Date().toISOString()
    });

    // Send email if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Practices.fyi <no-reply@yourdomain.com>",
        to: [TO],
        subject: "🤝 New Partnership Inquiry - Partners Page",
        replyTo: email,
        text: [
          `NEW PARTNERSHIP INQUIRY`,
          `Source: Partners Page`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          `Website: ${website || "(not provided)"}`,
          ``,
          `Message:`,
          message,
          ``,
          `---`,
          `Submitted: ${new Date().toLocaleString()}`
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Partner lead submission error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}