import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const AwardSchema = new Schema ({
    dateAwarded: {type: Date, required: true},
    img: {type: String, required: true},
    badgeId: {type: Schema.Types.ObjectId, required: true, ref: 'Badge'},
    habitId: {type: Schema.Types.ObjectId, required: true, ref: 'Habit'},
    accountId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'}
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);
AwardSchema.virtual('badge', {
  localField: 'badgeId',
  foreignField: '_id',
  ref: 'Badge',
  justOne: true
})
AwardSchema.virtual('habit', {
  localField: 'habitId',
  foreignField: '_id',
  ref: 'Habit',
  justOne: true
})
AwardSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})