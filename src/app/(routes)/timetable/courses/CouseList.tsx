"use client"
import {  ICourse } from "@/models/Course";
import CourseCard from "./CourseCard";

interface Props{
  courses:ICourse[]
  setSeletedCourse:any
}

const CoursesList: React.FC<Props> = ({courses, setSeletedCourse}) => {
  
  // const courses: ICourse[]|[] = await courseService.getAll();
  if (!Array.isArray(courses) || !courses.length)
    return <h4>No courses here</h4>;

  return (
    <div className="w-full ">
      <h2 className="text-2xl font-semibold mb-4">Courses List</h2>
      <div className="space-y-2">
        {courses.length? courses.map((course: ICourse) => <CourseCard 
        setSelectedCourse={setSeletedCourse}
        key={course._id as string} course={course} />) : null}
      </div>
    </div>
  );
};

export default CoursesList;
