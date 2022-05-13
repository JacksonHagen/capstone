import { AppState } from "../AppState";
import { api } from "./AxiosService";

class HabitsService {
  async getHabitsByQuery(params = {}) {
    const res = await api.get('api/habits/')
    console.log(res.data)
    // AppState.habits = res.data
  }
}

export const habitsService = new HabitsService();