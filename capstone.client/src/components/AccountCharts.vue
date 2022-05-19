<template>
  <div class="bg-primary rounded">
    <div class="row mb-4">
      <div class="col-md-8 m-bot p-3 bg-light rounded">
        <LineChart
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
      <div class="col-md-3 m-start bg-light rounded text-center">
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
  </div>
  <div class="row">
    <div class="col-12 bg-light rounded p-3 mb-4">
      <p class="text-dark text-center">My Top Streaks</p>
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

    function getDatesInRange(start, end) {
      const date = new Date(start.getTime());
      const dates = [];
      while (date <= end) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return dates;
    }
    const accountCreated = new Date(AppState.account.createdAt);
    const todayDate = new Date(AppState.day);

    console.log(getDatesInRange(accountCreated, todayDate))
    let accountHistory = getDatesInRange(accountCreated, todayDate)


    // function streakScore() {

    //   for (let i = 0; i < accountHistory.length; i++) {
    //     const workingDate = new Date(accountHistory[i])
    //     let dateTotalScore = 0
    //     AppState.myHabits.forEach(mh => {
    //       const habitCreated = new Date(mh.createdAt)

    //       if (mh.trackHistory[i] > workingDate) {
    //         console.log('woo')
    //       }
    //       if (mh.trackHistory.includes(workingDate)) {
    //         // const index = mh.trackHistory.findIndex(workingDate)
    //         const historyToDate = mh.trackHistory.split(workingDate)
    //         console.log(historyToDate)
    //       }
    //     })
    //   }
    // }

    // streakScore()

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
      }),
      habitsStreakData: computed(() => {
        let dataset = { date: totalScore }
        let totalTime = (AppState.account.createdAt.toDateString() - AppState.today.toDateString())
        let habits = AppState.myHabits.filter(mh => mh.isActive)

        habits.forEach(h => {
          let count = 0
          h.trackHistory[index + 1] == (i.getDate() - 1)
          // a date is essentially a single score, which is the streak at that date divided by the number of habits at that date


        })
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.m-start {
  margin-left: 8.33333333%;
}
@media (max-width: 768px) {
  .m-start {
    margin-left: 0% !important;
  }
}
.m-bot {
  margin-bottom: 0rem !important;
}
@media (max-width: 768px) {
  .m-bot {
    margin-bottom: 1rem !important;
  }
}
</style>