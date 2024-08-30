import mongoose, { Document, Schema } from 'mongoose';
import { ISchool } from './School';

export interface ITeacher extends Document {
  name: string;
  code: string;
  school: ISchool['_id'] | ISchool;
  createdAt?: Date;
  updatedAt?: Date;
}

const teacherSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true
  }
}, { timestamps: true });

export const Teacher = mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', teacherSchema);
