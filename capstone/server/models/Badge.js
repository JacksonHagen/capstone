
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// REVIEW add type 'tag'? use to get a badge template by a handle; ex: '7DS' for '7 day streak'
// add enums for tags?
export const BadgeSchema = new Schema({
  tag: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  type: { type: String, enum: ['streak', 'complete'], required: true },
  value: { type: Number, required: true }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);