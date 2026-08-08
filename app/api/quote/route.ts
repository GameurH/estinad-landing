import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  console.log("[ESTINAD] quote request:", body);
  return NextResponse.json({ ok: true });
}
