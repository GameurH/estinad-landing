import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // In production this would persist to a CRM / database.
  // For now we acknowledge the request so the form completes cleanly.
  console.log("[ESTINAD] demo request:", body);
  return NextResponse.json({ ok: true });
}
