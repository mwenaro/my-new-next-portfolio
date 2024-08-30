import { subjectService } from "@/contollers/SubjectService";
import { NextRequest, NextResponse } from "next/server";

type IQuery = {
  params: { id: string };
};

export async function GET(req: NextRequest, { params: { id } }: IQuery) {
  try {
    const data = await subjectService.getById(id);
    return NextResponse.json({ data, sucess: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function PUT(req: NextRequest, { params: { id } }: IQuery) {
  try {
    const body = await req.json();
    const data = await subjectService.update(id, body);
    return NextResponse.json({ data, sucess: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function DELETE(req: NextRequest, { params: { id } }: IQuery) {
  try {
    const data = await subjectService.delete(id);
    return NextResponse.json({ data, sucess: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
