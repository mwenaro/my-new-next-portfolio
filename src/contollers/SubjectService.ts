import { ISubject, Subject } from "@/models/Subject";
import { Controller } from "./Controller";

class SubjectService extends Controller<ISubject> {
  constructor() {
    super(Subject);
  }
}

export const subjectService = new SubjectService();
