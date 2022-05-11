import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const BadgeSchema = new Schema ({
    name: {type: String, required: true},
    img: {type: String, required: true},
    type: {type: String, enum: ['streak', 'complete'], required: true},
    value: {type: Number, required: true}
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);