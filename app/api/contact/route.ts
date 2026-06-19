import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: `Thank you ${payload.name || "there"}, your inquiry has been received and will be sent to ganesgbhanwase73@gmail.com.`,
  });
}
