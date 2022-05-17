import { time } from "cron"
import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from "../utils/Logger"
import { awardsService } from './AwardsService.js'

class HabitsService {
    async getHabitsByAccount(accountId) {
        let habits = await dbContext.Habits.find({ accountId })
        habits.forEach(h => {
            let formatted = []
            h.trackHistory.map(d => {
                formatted.push(new Date(d))
            })
            h.trackHistory = formatted
            logger.log(typeof (formatted[0]))
        })
        return habits
    }
    async editHabit(update) {
        const original = await this.getHabitById(update.id)
        // if (original.accountId.toString() !== update.accountId) {
        //     throw new Forbidden("You are not allowed to delete things that are property of 27Ducks inc.")
        // }
        if (original.isActive == false) {
            throw new BadRequest("This has been archived")
        }
        original.name = update.name || original.name
        original.inspo = update.inspo || original.inspo
        original.trackHistory = update.trackHistory || original.trackHistory
        // original.trackHistory.push(update.updatedAt)
        original.streak = update.streak || original.streak
        original.maxStreak = update.maxStreak || original.maxStreak
        original.interval = update.interval || original.interval
        await this.checkStreakAward(original)
        await this.maxStreak(original)
        await original.save()

        return original
    }
    async maxStreak(original) {
        if (original.streak >= original.maxStreak) {
            original.maxStreak = original.streak
            await original.save()
        }
    }
    // NOTE streak award logic
    async checkStreakAward(habit) {
        if (habit.streak === 7 && habit.maxStreak <= 7) {
            await awardsService.createAward('sa07', habit.accountId, habit)
        }
        else if (habit.streak === 30 && habit.maxStreak <= 30) {
            await awardsService.createAward('sa30', habit.accountId, habit)
        }
        else if (habit.streak === 100 && habit.maxStreak <= 100) {
            await awardsService.createAward('sa99', habit.accountId, habit)
        }
    }
    async deleteHabit(habitId, userId) {
        const habit = await this.getHabitById(habitId)
        if (habit.accountId.toString() !== userId) {
            throw new Forbidden("You are not allowed to delete things that are property of 26Ducks inc.")
        }
        habit.isActive = false
        await habit.save()
        await this.checkCompletedAward(userId)
        return habit
    }
    async checkCompletedAward(accountId) {
        const habits = await dbContext.Habits.find({ accountId, isActive: false })
        if (habits.length === 1) {
            await awardsService.createAward('CH01', accountId)
        } else if (habits.length === 5) {
            await awardsService.createAward('CH05', accountId)
        }
    }
    async createHabit(body) {
        await this.checkIfFirstHabit(body.accountId)
        const habit = await dbContext.Habits.create(body)
        habit.populate('account')
        return habit
    }
    async checkIfFirstHabit(accountId) {
        const habits = await dbContext.Habits.find({ accountId })
        if (!habits) {
            await awardsService.createAward('MH01', accountId)
        }
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
