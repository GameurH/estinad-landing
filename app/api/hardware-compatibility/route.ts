import { NextResponse } from "next/server";
import {
  normalizeCompatibilityPayload,
  submitHardwareRequest,
} from "@/lib/hardware-requests";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const payload = normalizeCompatibilityPayload(body);
  const result = await submitHardwareRequest(payload);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true, mode: result.mode });
}
