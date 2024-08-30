import { dbCon } from "@/libs/mongoose/dbCon";
import { ITeacher, Teacher } from "@/models/Teacher";

class TeacherService {
  constructor() {
    dbCon();
  }

  async create(data: Partial<ITeacher> | Partial<ITeacher>[]): Promise<ITeacher | ITeacher[]> {
    if (Array.isArray(data)) {
      return Teacher.insertMany(data);
    } else {
      const teacher = new Teacher(data);
      return teacher .save();
    }
  }

  async getById(id: string): Promise<ITeacher | null> {
    return Teacher.findById(id).populate('school').exec();
  }

  async getAll(): Promise<ITeacher[]> {
    return Teacher.find().populate('school').exec();
  }

  async update(id: string, data: Partial<ITeacher>): Promise<ITeacher | null> {
    return Teacher.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ITeacher | null> {
    return Teacher.findByIdAndDelete(id).exec();
  }
}

export const teacherService = new TeacherService();
