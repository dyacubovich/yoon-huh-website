import { NextResponse } from "next/server";

/**
 * Minimal contact endpoint. Validates the payload and logs it server-side.
 * PLACEHOLDER: wire this up to real email delivery (Resend, SendGrid, etc.)
 * or a CRM before launch — nothing is persisted or sent right now.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Please fill out every field." },
      { status: 400 }
    );
  }

  console.log("[contact] new inquiry:", {
    name: body.name,
    email: body.email,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}
