import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";

class HabitsService {

  // get habits by query is our get ALL across all users habits
  async getHabitsByQuery(params = {}) {
    const res = await api.get('api/habits/' + params)
    logger.log(res.data, "get habits by query res")
    AppState.habits = res.data
  }
  // this gets a single habit
  async getHabitsbyId(habitId) {
    const res = await api.get('api/habits/' + habitId)
    logger.log(res.data, "res of get habit by ID")
    AppState.activeHabit.unshift(res.data)
  }
  async createHabit(newHabit) {
    const res = await api.post('api/habits/', newHabit)
    logger.log(res.data, "res of create habit")
    AppState.myHabits.unshift(res.data)
    AppState.habits.unshift(res.data)
  }
  async editHabit(habitUpdate) {
    const res = await api.put('api/habits/' + habitUpdate.id, habitUpdate)
    logger.log(res.data, "res of edit habit")
    let index = AppState.habits.findIndex(h => h.id === res.data.id)
    if (index != -1) {
      AppState.habits.splice(index, 1, res.data)
    }
    let index2 = AppState.myHabits.findIndex(h => h.id === res.data.id)
    if (index2 != -1) {
      AppState.myHabits.splice(index2, 1, res.data)
    }
    AppState.activeHabit = res.data
  }
  async archiveHabit(habitId) {
    const res = await api.delete('api/habits/' + habitId)
    logger.log(res.data, "res of archieving a habit")
    AppState.activeHabit.isActive = false
  }

  //this get exclusively active users Habits
  async getMyHabits(userId) {
    const res = await api.get('api/habits?accountId=' + userId)
    logger.log(res.data, "res of get my habits")
    AppState.myHabits = res.data
  }
}

export const habitsService = new HabitsService();