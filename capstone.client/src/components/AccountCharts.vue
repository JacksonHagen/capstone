<template>
  <div class="bg-primary rounded">
    <div class="row mb-4">
      <div class="col-md-8 mb-4 bg-light rounded p-3">
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
      <div class="col-md-3 m-start bg-light p-2 rounded text-center">
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
    <div class="col-12 p-3 bg-light mb-4 rounded">
      <p class="text-dark">Streak Score</p>
      <LineChart
        v-if="lineLoaded"
        :chartData="{
          labels: dayLabels,
          datasets: [
            {
              label: '',
              data: dayData,
              fill: false,
              borderColor: '#DE9A15',
              tension: 0.1,
            },
          ],
        }"
        :chartOptions="{
          scales: {
            y: {
              suggestedMax: dayData[-1] + 30,
              beginAtZero: true,
            },
            x: {
              ticks: {
                padding: 1,
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45,
              },
            },
          },
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
export default {
  setup() {
    let dayLabels = []
    let dayData = []
    const lineLoaded = ref(false)

    watchEffect(() => {
      const accountCreated = new Date(AppState.account.createdAt);
      const todayDate = new Date(AppState.day)
      todayDate.setDate(todayDate.getDate() + 1)
      if (AppState.myHabits.length && lineLoaded.value != true) {
        getDatesInRange(accountCreated, todayDate)
      }
    })
    function getDatesInRange(start, end) {
      const date = new Date(start.getTime());
      const dates = [];
      while (date <= end) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      streakScore(dates);
    }

    function streakScore(accountHistory) {
      for (let i = 0; i < accountHistory.length; i++) {
        const day = new Date(accountHistory[i])
        let habitsAtDay = []
        let dayCount = 0
        AppState.myHabits.forEach(mh => {
          let habitStartDate = new Date(mh.createdAt)
          if (habitStartDate.getTime() < day.getTime()) {
            habitsAtDay.push(mh)
            let habitCount = 0
            let startingIndex = mh.trackHistory.findIndex(d => new Date(day).toDateString())
            mh.trackHistory.forEach(td => {

              let expectedDate = new Date(mh.trackHistory[startingIndex]).getDate()
              let workingIndex = startingIndex
              //real value starts at the date we've found
              // let expected = expectedDate - 1
              // let real = mh.trackHistory[workingIndex], where working index is the starting index which increments through the realy array.


              while (expectedDate == new Date(mh.trackHistory[workingIndex]).getDate()) {
                habitCount++
                workingIndex += mh.interval
                expectedDate--
              }
            })
            dayCount += habitCount
          }
        })
        if (habitsAtDay.length != 0) {
          dayLabels.push(day.toDateString())
          dayData.push(Math.floor(dayCount))
        }
      }
      lineLoaded.value = true
    }


    let streaks = []
    const streaks2 = computed(() => {
      let s = []
      AppState.habits.forEach(h => s.push({ streak: h.streak, title: h.title, color: h.color }))
      s.sort((a, b) => { return a.streak - b.streak }).reverse()
      return s
    })
    return {
      // days,
      dayLabels,
      dayData,
      lineMax: computed(() => dayData[-1] * 2),
      lineLoaded,
      topStreaks: computed(() => streaks2.value.slice(0, 3)),
      loaded: computed(() => AppState.myHabits.length),
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