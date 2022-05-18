<template>
  <div class="row mb-4">
    <div class="col-md-8 p-3 bg-light rounded">
      <p class="text-dark">Cumulative Streak Score Overtime</p>
    </div>
    <div class="col-md-3 offset-1 bg-light rounded p-3 text-center">
      <p class="text-dark">Active / Archived</p>
      <PieChart
        :chartData="{
          labels: ['Active', 'Archived'],
          datasets: [
            {
              data: activeHabitsData,
              backgroundColor: ['#DE9A15', '#D1F3EC'],
            },
          ],
        }"
      />
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-12 bg-light rounded p-3">
      <p class="text-dark">My Top Streaks</p>
      <BarChart
        v-if="loaded"
        :chartData="{
          labels: topStreaks.map((s) => s.title),

          datasets: [
            {
              label: '',
              data: topStreaks.map((s) => s.streak),
              backgroundColor: topStreaks.map((s) => s.color),
            },
          ],
        }"
        :chartOptions="{
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
          },
        }"
      />
    </div>
  </div>

</template>


<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { habitsService } from '../services/HabitsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    let streaks = []
    const streaks2 = computed(() => {
      let s = []
      AppState.habits.forEach(h => s.push({ streak: h.streak, title: h.title, color: h.color }))
      s.sort((a, b) => { return a.streak - b.streak }).reverse()
      return s
    })
    return {
      topStreaks: computed(() => streaks2.value.slice(0, 3)),
      loaded: computed(() => AppState.habits.length),
      activeHabitsData: computed(() => {
        let h = []
        h[0] = AppState.myHabits.filter(mh => mh.isActive).length
        h[1] = AppState.myHabits.filter(mh => !mh.isActive).length
        return h
      })
    }
  }
}
</script>


<style lang="scss" scoped>
</style>