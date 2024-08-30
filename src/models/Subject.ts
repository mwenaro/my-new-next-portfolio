import mongoose, { Document, Schema } from 'mongoose';
import { ISchool } from './School';

export interface ISubject extends Document {
  name: string;
  shortName: string;
  school: ISchool['_id'] | ISchool;
  createdAt?: Date;
  updatedAt?: Date;
}

const subjectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true
  }
}, { timestamps: true });

export const Subject = mongoose.models.Subject || mongoose.model<ISubject>('Subject', subjectSchema);
