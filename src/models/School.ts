import mongoose, { Document, Schema } from 'mongoose';

export interface ISchool extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schoolSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const School = mongoose.models.School || mongoose.model<ISchool>('School', schoolSchema);
