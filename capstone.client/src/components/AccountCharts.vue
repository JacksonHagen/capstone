<template>
  <div class="container bg-primary rounded mt-5 p-4">
    <div class="row mb-4">
      <div class="col-md-8 p-3 bg-light rounded">
        <p class="text-dark">Cumulative Streak Score Overtime</p>
      </div>
      <div class="col-md-3 offset-1 bg-light rounded p-3 text-center">
        <p class="text-dark">Completed / Total</p>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12 bg-light rounded p-3">
        <p class="text-dark">My Top Streaks</p>

        <BarChart
          v-if="loaded"
          :chartData="{
            labels: titles,
            datasets: [
              {
                label: '',
                data: streaks,
                backgroundColor: [
                  'rgba(255, 99, 132)',
                  'rgba(54, 162, 235)',
                  'rgba(255, 206, 86)',
                ],
              },
            ],
          }"
          :chartOptions="{
            indexAxis: 'y',
          }"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12 bg-light rounded p-3">
        <p class="text-dark">My Awards</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 bg-light rounded p-3">
        <p class="text-dark">Calendar View</p>
      </div>
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
    const topThreeStreaks = ref(null)
    const loaded = ref(null)
    watchEffect(async () => {
      try {
        await habitsService.getHabitsByQuery()
        debugger
        AppState.habits.forEach(h => streaks.push({ streak: h.streak, title: h.title }))
        streaks.sort((a, b) => { return a.streak - b.streak }).reverse()
        topThreeStreaks.streaks = [streaks[0].streak, streaks[1].streak, streaks[2].streak]
        topThreeStreaks.titles = [streaks[0].title, streaks[1].title, streaks[2].title]
        loaded.value = true
      }
      catch (error) {
        console.error("[Could not load]", error.message);
        Pop.toast(error.message, "error");
      }
      logger.log('streakers', topThreeStreaks.titles + ':' + topThreeStreaks.streaks,)
    })
    return {
      streaks: computed(() => topThreeStreaks.streaks),
      titles: computed(() => topThreeStreaks.titles),
      loaded
    }
  }
}
</script>


<style lang="scss" scoped>
</style>