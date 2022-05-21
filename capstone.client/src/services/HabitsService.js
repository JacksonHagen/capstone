import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";

class HabitsService {

  // get habits by query is our get ALL across all users habits
  async getHabitsByQuery(params) {
    const res = await api.get('api/habits', params)
    AppState.myHabits = res.data
  }
  // this gets a single habit
  async getHabitbyId(habitId) {
    const res = await api.get('api/habits/' + habitId)
    AppState.activeHabit.unshift(res.data)
  }
  async createHabit(newHabit) {
    const res = await api.post('api/habits/', newHabit)
    AppState.myHabits.unshift(res.data)
  }
  async editHabit(habitUpdate) {
    const res = await api.put('api/habits/' + habitUpdate.id, habitUpdate)
    let index2 = AppState.myHabits.findIndex(h => h.id === res.data.id)
    if (index2 != -1) {
      AppState.myHabits.splice(index2, 1, res.data)
    }
    AppState.activeHabit = res.data
  }
  async archiveHabit(habitId) {
    const res = await api.delete('api/habits/' + habitId)
    AppState.activeHabit.isActive = false
    let habit = AppState.myHabits.find(h => h.id === habitId)
    if (habit) {
      habit.isActive = false
    }
  }
  async getMyHabits() {
    const res = await api.get('account/habits')
    AppState.myHabits = res.data
  }
}

export const habitsService = new HabitsService();