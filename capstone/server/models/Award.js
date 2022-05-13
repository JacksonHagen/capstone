import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const AwardSchema = new Schema({
  dateAwarded: { type: Date, required: true },
  badgeTag: { type: String, required: true },
  img: { type: String, required: true },
  badgeId: { type: Schema.Types.ObjectId, required: true, ref: 'Badge' },
  habitId: { type: Schema.Types.ObjectId, ref: 'Habit' },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);
// NOTE do we populate badge to access its properties? if so, no need for img on AwardSchema
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