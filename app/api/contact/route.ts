import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactNotification } from "@/lib/email";

// Rate limiting — simple in-memory store
const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 3; // max 3 messages per window
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for") ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (entry && now < entry.reset) {
      if (entry.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: "Too many messages. Please try again later." },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstIssue?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // Send email notification
    await sendContactNotification({
      senderName: name,
      senderEmail: email,
      message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
