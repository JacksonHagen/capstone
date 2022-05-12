import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const HabitSchema = new Schema({
  title: { type: String, required: true },
  inspo: { type: String, default: '' },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  streak: { type: Number, default: 0 },
  maxStreak: { type: Number, default: 0 },
  trackHistory: { type: Array },
  isActive: { type: Boolean, default: true },
  color: { type: String },
  interval: { type: String, enum: ['day', 'week', 'month'] }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);
HabitSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})