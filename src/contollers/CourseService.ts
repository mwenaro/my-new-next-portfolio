import { dbCon } from "@/libs/mongoose/dbCon";
import { ICourse, Course } from "@/models/Course";

class CourseService {
  constructor() {
    dbCon();
  }

  async create(data: Partial<ICourse> | Partial<ICourse>[]): Promise<ICourse | ICourse[]> {
    if (Array.isArray(data)) {
      return Course.insertMany(data);
    } else {
      const course = new Course(data);
      return course.save();
    }
  }

  async getById(id: string): Promise<ICourse | null> {
    return Course.findById(id).populate(['school', 'class', 'teachers']).exec();
  }

  async getAll(): Promise<ICourse[]> {
    return Course.find().sort({name:1, "class.name":1}).populate(['school', 'class', 'teachers']).exec();
  }

  async update(id: string, data: Partial<ICourse>): Promise<ICourse | null> {
    return Course.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ICourse | null> {
    return Course.findByIdAndDelete(id).exec();
  }
}

export const courseService = new CourseService();
