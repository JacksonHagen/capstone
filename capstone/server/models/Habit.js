import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const HabitSchema = new Schema ({
    title: {type: String, required: true},
    inspo: {type: String, default: ''},
    accountId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    streak: {type: Number, default: 0},
    lastTracked: {type: Array},
    isActive: {type: Boolean, default: true},
    interval: {type: String, enum: ['day', 'week', 'month']},
    maxStreak: {type: Number, default: 0}
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);
HabitSchema.virtual('creator', {
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})