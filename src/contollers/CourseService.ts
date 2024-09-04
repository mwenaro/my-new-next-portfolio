import { Course, ICourse } from "@/models/Course";
import { Controller } from "./Controller";


class CourseService extends Controller<ICourse>{
  constructor() {
   super(Course)
  }

  async getAll(): Promise<ICourse[]> {
    return await this.model.find().sort({name:1}).populate('class').populate('teachers').populate('school');
  }


  
}

export const courseService = new CourseService();
