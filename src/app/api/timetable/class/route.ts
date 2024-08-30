import { classService } from "@/contollers/ClassService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await classService.getAll();
    return NextResponse.json({ data, sucess: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await classService.create(body);
    return NextResponse.json({ data, sucess: true }, {status:201});
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}



