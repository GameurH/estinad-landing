import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  // Production: persist to CRM / notify sales. Stub logs only.
  console.log("[ESTINAD] partner application:", body);
  return NextResponse.json({ ok: true });
}
