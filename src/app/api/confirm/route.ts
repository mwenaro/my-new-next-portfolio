import { sendTestEmail } from "@/libs/nodemailer/gmail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ mesage: "Hello World!" });
}
export async function POST(req: NextRequest) {
  const { email, name, subject } = await req.json();
  try {
    const res = await sendTestEmail(email, subject, name);
    if (!res)
      return NextResponse.json({ message: "ERROR", res }, { status: 401 });
    return NextResponse.json({ mesage: "Email Succefully semt!", res });
  } catch (error:any) {
    return NextResponse.json({ mesage: error.message }, {status:500});
  }
}
