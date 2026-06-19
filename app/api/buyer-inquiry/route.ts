import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: `Buyer inquiry received for ${payload.companyName || "your company"}. The details will be forwarded to ganeshbhanwase73@gmail.com.`,
  });
}
