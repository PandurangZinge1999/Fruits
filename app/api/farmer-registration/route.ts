import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: `Farmer registration received for ${payload.farmerName || "a new partner"}. Our team will review it and contact you at ganeshbhanwase73@gmail.com.`,
  });
}
