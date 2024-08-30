import { dbCon } from "@/libs/mongoose/dbCon";
import { IClass, Class } from "@/models/Class";

class ClassService {
  constructor() {
    dbCon();
  }

  async create(data: Partial<IClass> | Partial<IClass>[]): Promise<IClass | IClass[]> {
    if (Array.isArray(data)) {
      return Class.insertMany(data);
    } else {
      const newClass = new Class(data);
      return newClass.save();
    }
  }

  async getById(id: string): Promise<IClass | null> {
    return Class.findById(id).populate('school').exec();
  }

  async getAll(): Promise<IClass[]> {
    return Class.find().populate('school').exec();
  }

  async update(id: string, data: Partial<IClass>): Promise<IClass | null> {
    return Class.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<IClass | null> {
    return Class.findByIdAndDelete(id).exec();
  }
}

export const classService = new ClassService();
