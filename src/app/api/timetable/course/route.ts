import { courseService } from "@/contollers/CourseService";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await courseService.getAll();
    return NextResponse.json({ data, sucess: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await courseService.create(body);
    // await dbCon();
    // const newCourse = new Course(body)
    // const savedCourse = await newCourse.save()
    // console.log({body, savedCourse})
    return NextResponse.json({ data, success: true }, {status:201});
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}



