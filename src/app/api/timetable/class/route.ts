import { classService } from "@/contollers/ClassService";
import { NextRequest, NextResponse } from "next/server";
import * as seedindData from '@/models/seedingData'
import { IClass } from "@/models/Class";

export async function GET(req: NextRequest) {
  try {
    const data = await classService.getAll();
    // if(!data.length) await classService.createMany(seedindData.classes)
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



