"use client";
import { ITeacher } from "@/models/Teacher";
import React, { useState, useEffect } from "react";
import { IClass } from "@/models/Class";
import { ISchool } from "@/models/School";
import { useRouter } from "next/navigation";

interface AddCourseProps {
  //   onCourseAdded: () => void;
}

const AddCourse: React.FC<AddCourseProps> = ({}) => {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);
  const [schools, setSchools] = useState<ISchool[]>([]);
  const [classes, setClasses] = useState<IClass[]>([]);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
const router = useRouter()
  useEffect(() => {
    // Fetch schools, classes, and teachers from the database
    const fetchData = async () => {
      const [schoolResponse, classesResponse, teachersResponse] =
        await Promise.all([
          fetch("/api/timetable/school"),
          fetch("/api/timetable/class"),
          fetch("/api/timetable/teacher"),
        ]);

      const [school, classes, teachers] = await Promise.all([
        schoolResponse.json(),
        classesResponse.json(),
        teachersResponse.json(),
      ]);
      setSchools(school.data);
      setClasses(classes.data);
      setTeachers(teachers.data);
    };

    fetchData();
  }, [schools, classes, teachers]);

  const handleAddCourse = async () => {
    const newCourse = {
      name,
      class: selectedClass,
      school: selectedSchool,
      teachers: selectedTeachers,
    };

    try {
      const res = await fetch("/api/timetable/course", {
        method: "POST",
        body: JSON.stringify(newCourse),
      });
      if (!res.ok) throw Error("Someting went wrong");
      // onCourseAdded();
    //   alert("Course Added");
    //force a page reload
    router.refresh()

      setName("");
      setSelectedClass("");
      setSelectedSchool("");
      setSelectedTeachers([]);
    } catch (error: any) {
      alert("Error " + error.message);
    }
  };

  if (!schools.length || !classes.length || !teachers.length)
    return <h4>Loading ...</h4>;
  return (
    <div className="p-4 border rounded-lg shadow-md mb-4 bg-slate-400 text-red-700">
      <h2 className="text-xl font-semibold mb-4">Add Course</h2>
      <div className="mb-4">
        <label className="block mb-2">Course Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded bg-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select School</label>
        <select
          className="w-full p-2 border rounded bg-gray-500"
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
        >
          <option value="">Select a school</option>
          {schools.map((school: ISchool) => (
            <option key={school?._id as string} value={school?._id as string}>
              {school.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Class</label>
        <select
          className="w-full p-2 border rounded bg-gray-500"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select a class</option>
          {classes.map((cls) => (
            <option key={cls._id as string} value={cls._id as string}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Teachers</label>
        {teachers.map((teacher) => (
          <div key={teacher._id as string} className="flex items-center mb-2">
            <input
              type="checkbox"
              value={teacher._id as string}
              checked={selectedTeachers.includes(teacher._id as string)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedTeachers((prev) =>
                  prev.includes(value)
                    ? prev.filter((id) => id !== value)
                    : [...prev, value]
                );
              }}
              className="mr-2"
            />
            <label>{teacher.name}</label>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddCourse}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
