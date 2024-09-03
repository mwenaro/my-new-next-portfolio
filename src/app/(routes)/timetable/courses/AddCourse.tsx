"use client";
import { ITeacher } from "@/models/Teacher";
import React, { useState, useEffect } from "react";
import { IClass } from "@/models/Class";
import { ISchool } from "@/models/School";
import { useRouter } from "next/navigation";
import { ICourse } from "@/models/Course";

interface AddCourseProps {
  schools: ISchool[];
  classes: IClass[];
  teachers: ITeacher[];
  selectedCourse: null | ICourse;
}

const AddCourse: React.FC<AddCourseProps> = ({
  schools,
  classes,
  teachers,
  selectedCourse = null,
}: AddCourseProps) => {
  const defaultCourse = {
    name: "",
    class: "",
    teachers: [] as string[],
    school: "",
  };

  const [newCourse, setNewCourse] = useState<ICourse | any>(defaultCourse);

  // Update form fields whenever selectedCourse changes
  useEffect(() => {
    if (selectedCourse) {
      setNewCourse({
        name: selectedCourse.name,
        class: (selectedCourse?.class as IClass)?._id,
        teachers: (selectedCourse.teachers as ITeacher[]).map((tr) => tr._id),
        school: (selectedCourse?.school as ISchool)?._id,
      });
    } else {
      setNewCourse(defaultCourse);
    }
  }, [selectedCourse]);

  // const router = useRouter();

  // useEffect(() => {
  //   console.log({ selectedCourse});
  // }, [selectedCourse]);

  const handleAddCourse = async () => {
    console.log({ newCourse });
    try {
      const res = selectedCourse?._id
        ? await fetch("/api/timetable/course/" + selectedCourse._id, {
            method: "PUT",
            body: JSON.stringify(newCourse),
            headers: { "Content-Type": "application/json" }, // Ensure correct header
          })
        : await fetch("/api/timetable/course", {
            method: "POST",
            body: JSON.stringify(newCourse),
            headers: { "Content-Type": "application/json" },
          });

      if (!res.ok) throw new Error("Something went wrong");

      // router.refresh();
      alert("Add/update Succesesully!");
      setNewCourse(defaultCourse);
    } catch (error: any) {
      alert("Error: " + error.message);
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
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select School</label>
        <select
          className="w-full p-2 border rounded bg-gray-500"
          value={newCourse.school}
          onChange={(e) =>
            setNewCourse({ ...newCourse, school: e.target.value })
          }
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
          value={newCourse.class}
          onChange={(e) =>
            setNewCourse({ ...newCourse, class: e.target.value })
          }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teachers.map((teacher) => (
            <div key={teacher._id as string}>
              <input
                type="checkbox"
                value={teacher._id as string}
                checked={newCourse.teachers?.includes(teacher._id)}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewCourse((prev: any) =>
                    prev.teachers?.includes(value)
                      ? {
                          ...prev,
                          teachers: prev.teachers.filter(
                            (id: string) => id !== value
                          ),
                        }
                      : { ...prev, teachers: [...prev.teachers, value] }
                  );
                }}
                className="mr-2"
              />
              <label>{teacher.name}</label>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleAddCourse}
        className="bg-blue-500 text-blue-600 px-4 py-2 rounded hover:bg-blue-600"
        style={{
          backgroundColor: "blue",
          padding: "0.8rem 0.4rem",
          color: "white",
        }}
      >
        {selectedCourse?._id ? "Update Course" : "Add Course"}
      </button>
    </div>
  );
};

export default AddCourse;
