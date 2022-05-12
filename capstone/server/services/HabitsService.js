import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class HabitsService {
    async getHabitsByAccount(accountId) {
        const habits = await dbContext.Habits.find({ accountId: accountId })
        return habits
    }
    async editHabit(update) {
        const original = await this.getHabitById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new Forbidden("You are not allowed to delete things that are property of 27Ducks inc.")
        }
        if (original.isActive == false) {
            throw new BadRequest("this has been archived")
        }
        original.name = update.name || original.name
        original.inspo = update.inspo || original.inspo
        original.lastTracked = update.lastTracked || original.lastTracked
        original.streak = update.streak || original.streak
        original.maxStreak = update.maxStreak || original.maxStreak
        original.interval = update.interval || original.interval
    }
    async deleteHabit(habitId, userId) {
        const habit = await this.getHabitById(habitId)
        if (habit.creatorId.toString() !== userId) {
            throw new Forbidden("You are not allowed to delete things that are property of 27Ducks inc.")
        }
        habit.isActive = false
        await habit.save()
        return habit
    }
    async createHabit(body) {
        const habit = await dbContext.Habits.create(body)
        return habit
    }
    async getHabitById(habitId) {
        const habit = await dbContext.Habits.findById(habitId).populate('account', 'name picture')
        if (!habit) {
            throw new BadRequest("this habit ID doesn't likely exist in this universe.")
        }
        return habit
    }
    async getAll(query = {}) {
        const habits = await dbContext.Habits.find(query).populate('account', 'name picture')
        return habits
    }




}

export const habitsService = new HabitsService()