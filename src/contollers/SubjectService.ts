import { dbCon } from "@/libs/mongoose/dbCon";
import { ISubject, Subject } from "@/models/Subject";

class SubjectService {
  constructor() {
    dbCon();
  }

  async create(
    data: Partial<ISubject> | Partial<ISubject>[]
  ): Promise<ISubject | ISubject[]> {
    if (Array.isArray(data)) {
      return Subject.insertMany(data);
    } else {
      const subject = new Subject(data);
      return subject.save();
    }
  }

  async getById(id: string): Promise<ISubject | null> {
    return Subject.findById(id).populate("school").exec();
  }

  async getAll(): Promise<ISubject[]> {
    return Subject.find().populate("school").exec();
  }

  async update(id: string, data: Partial<ISubject>): Promise<ISubject | null> {
    return Subject.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISubject | null> {
    return Subject.findByIdAndDelete(id).exec();
  }
}

export const subjectService = new SubjectService();
