import { NextResponse } from "next/server";
import {
  normalizeOrderPayload,
  submitHardwareOrder,
} from "@/lib/hardware-requests";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const payload = normalizeOrderPayload(body);
  const result = await submitHardwareOrder(payload);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    mode: result.mode,
    reference: result.reference,
  });
}
