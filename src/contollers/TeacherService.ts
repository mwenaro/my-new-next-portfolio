import { ITeacher, Teacher } from "@/models/Teacher";
import { Controller } from "./Controller";

class TeacherService extends Controller<ITeacher> {
  constructor() {
    super(Teacher);
  }
}

export const teacherService = new TeacherService();
