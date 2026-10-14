import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Honeypot check (spam prevention)
    if (data.website_trap || data.honeypot) {
      // Quietly reject bots
      return NextResponse.json(
        { error: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // 2. Validate required fields
    const {
      name,
      email,
      phone,
      company,
      location,
      serviceType,
      message,
    } = data;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 420 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!location || typeof location !== "string" || location.trim().length < 2) {
      return NextResponse.json(
        { error: "Please specify the project location or city." },
        { status: 422 }
      );
    }

    if (!serviceType || typeof serviceType !== "string") {
      return NextResponse.json(
        { error: "Please select a relevant service or project sector." },
        { status: 422 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief message describing your project requirements (at least 10 characters)." },
        { status: 422 }
      );
    }

    // 3. Sanitized payload
    const submission = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: (phone || "").trim().slice(0, 25),
      company: (company || "").trim().slice(0, 100),
      location: location.trim().slice(0, 100),
      serviceType: serviceType.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
    };

    // 4. Server-side log / transport delivery check
    console.info("[ENQUIRY RECEIVED]", {
      name: submission.name,
      email: submission.email,
      location: submission.location,
      serviceType: submission.serviceType,
      timestamp: submission.timestamp,
    });

    // If an external transport webhook is configured (e.g., Slack, Zapier, Resend, SendGrid)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        });
      } catch (webhookErr) {
        console.error("[WEBHOOK ERROR]", webhookErr);
        // We still record the entry in server logs
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received. Our engineering team will review your drawings and project specifications.",
        timestamp: submission.timestamp,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[ENQUIRY SUBMISSION ERROR]", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please contact us directly via email or phone." },
      { status: 500 }
    );
  }
}
