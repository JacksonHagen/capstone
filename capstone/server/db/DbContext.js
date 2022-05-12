import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { AwardSchema } from '../models/Award.js';
import { HabitSchema } from '../models/Habit.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Habits = mongoose.model('Habit', HabitSchema);
  Awards = mongoose.model('Award', AwardSchema);
  
}

export const dbContext = new DbContext()
