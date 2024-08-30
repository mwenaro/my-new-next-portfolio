import AddCourse from "./AddCourse";
import CoursesList from "./CouseList";

const CoursesPage: React.FC = () => {
 
  return (
    <div className="container mx-auto p-4 bg-slate-200 grid grid-cols-1 md:grid-cols-2 " style={{color:'gray'}}>
      <AddCourse  />
      <CoursesList />
    </div>
  );
};

export default CoursesPage;
