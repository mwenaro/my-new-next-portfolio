"use client";
import { useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import CoursesList from "./CouseList";
import { ISchool } from "@/models/School";
import { IClass } from "@/models/Class";
import { ITeacher } from "@/models/Teacher";
import { ICourse } from "@/models/Course";

const CoursesPage: React.FC = () => {
  //   const courses = await courseService.getAll();
  const [schools, setSchools] = useState<ISchool[]>([]);
  const [classes, setClasses] = useState<IClass[]>([]);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [coures, setCourses] = useState<ICourse[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

  const setCourse = (course: ICourse | null) => {
    setSelectedCourse(course);
  };
  useEffect(() => {
    // Fetch schools, classes, and teachers from the database
    const fetchData = async () => {
      const [
        schoolResponse,
        classesResponse,
        teachersResponse,
        coursesResponse,
      ] = await Promise.all([
        fetch("/api/timetable/school"),
        fetch("/api/timetable/class"),
        fetch("/api/timetable/teacher"),
        fetch("/api/timetable/course"),
      ]);

      const [school, classes, teachers, courses] = await Promise.all([
        schoolResponse.json(),
        classesResponse.json(),
        teachersResponse.json(),
        coursesResponse.json(),
      ]);
      setSchools(school.data);
      setClasses(classes.data);
      setTeachers(teachers.data);
      setCourses(courses.data);
    };

    fetchData();
  }, [schools, classes, teachers]);
  return (
    <div
      className="container mx-auto p-4 bg-slate-200 grid grid-cols-1 md:grid-cols-2 "
      style={{ color: "gray" }}
    >
      <AddCourse
        teachers={teachers}
        classes={classes}
        schools={schools}
        selectedCourse={selectedCourse}
      />
      <CoursesList courses={coures} setSeletedCourse={ setCourse}/>
    </div>
  );
};

export default CoursesPage;
