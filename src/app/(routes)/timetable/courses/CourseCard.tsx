import { ICourse } from "@/models/Course";
import React from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import { IClass } from "@/models/Class";
import { ISchool } from "@/models/School";
import { ITeacher } from "@/models/Teacher";
import { Button } from "@/components/ui/button";

export default function CourseCard({
  course,
  setSelectedCourse,
}: {
  course: ICourse;
  setSelectedCourse: any;
}) {
  // const course = JSON.parse(courseStr)
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-medium">{course.name}</h3>
      <p className="text-gray-600">
        Class: {(course?.class as IClass)?.name as string}
      </p>
      <p className="text-gray-600">
        School: {(course?.school as ISchool)?.name}
      </p>
      <p className="text-gray-600">
        Teachers:{" "}
        {(course.teachers as ITeacher[])
          .map((teacher) => teacher?.name)
          .join(", ")}
      </p>
      {/* <UpdateButton selectedCourse={JSON.stringify(course)} path={"/course"} /> */}
      <Button
        className="bg-orange-600"
        onClick={() => setSelectedCourse(course)}
      >
        Edit
      </Button>
      <DeleteButton idStr={JSON.stringify(course._id)} path={"/course"} />
    </div>
  );
}
