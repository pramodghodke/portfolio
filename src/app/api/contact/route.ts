import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, website } = await req.json();

    // ✅ Honeypot check (anti-spam)
    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Get headers safely
    const headersList = req.headers;

    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "Unknown";
    const country = headersList.get("x-vercel-ip-country") || "Unknown";
    const city = headersList.get("x-vercel-ip-city") || "Unknown";
    const userAgent = headersList.get("user-agent") || "Unknown";
    const referer = headersList.get("referer") || "Direct";
    const timestamp = new Date().toISOString();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["pramodghodke110@gmail.com"],
      subject: subject || "New Portfolio Message",
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <h3>Sender Info</h3>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${city}, ${country}</p>
        <p><strong>Browser:</strong> ${userAgent}</p>
        <p><strong>Referrer:</strong> ${referer}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}