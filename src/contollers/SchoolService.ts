import { dbCon } from "@/libs/mongoose/dbCon";
import { ISchool, School } from "@/models/School";


class SchoolService {
  constructor() {
    dbCon();
  }

  async create(data: Partial<ISchool> | Partial<ISchool>[]): Promise<ISchool | ISchool[]> {
    if (Array.isArray(data)) {
      return School.insertMany(data);
    } else {
      const school = new School(data);
      return school.save();
    }
  }

  async getById(id: string): Promise<ISchool | null> {
    return School.findById(id).exec();
  }

  async getAll(): Promise<ISchool[]> {
    return School.find().exec();
  }

  async update(id: string, data: Partial<ISchool>): Promise<ISchool | null> {
    return School.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<ISchool | null> {
    return School.findByIdAndDelete(id).exec();
  }
}

export const schoolService = new SchoolService();
