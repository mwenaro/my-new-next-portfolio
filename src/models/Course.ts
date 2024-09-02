import mongoose, { Document, Schema } from 'mongoose';
import { IClass } from './Class';
import { ISchool } from './School';
import { ITeacher } from './Teacher';

export interface ICourse extends Document {
  name: string;
  class: IClass['_id'] | IClass;
  school: ISchool['_id'] | ISchool;
  teachers: (ITeacher['_id'] | ITeacher)[];
  createdAt?: Date;
  updatedAt?: Date;
}

const courseSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  }]
}, { timestamps: true });

export const Course = mongoose.models?.Course || mongoose.model<ICourse>('Course', courseSchema);
