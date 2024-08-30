import { courseService } from "@/contollers/CourseService";
import { IClass } from "@/models/Class";
import { ICourse } from "@/models/Course";
import { ISchool } from "@/models/School";
import { ITeacher } from "@/models/Teacher";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const CoursesList: React.FC = async () => {
  const courses: ICourse[] | [] = await courseService.getAll();
  if (!Array.isArray(courses) || !courses.length)
    return <h4>No courses here</h4>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Courses List</h2>
      <ul className="space-y-2">
        {courses.map((course: ICourse) => (
          <li
            key={course?._id as string}
            className="p-4 border rounded-lg shadow-md"
          >
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
            <UpdateButton selectedCourse={JSON.stringify(course)} path={"/course"} />
            <DeleteButton idStr={JSON.stringify(course._id)} path={"/course"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
