import { ISchool, School } from "@/models/School";
import { Controller } from "./Controller";

class SchoolService extends Controller<ISchool> {
  constructor() {
    super(School);
  }
}

export const schoolService = new SchoolService();
