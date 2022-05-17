<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <button @click="filter == isActive">Active</button>
          <button @click="filter == !isActive">Archived</button>
          <button v-if="filter">All</button>
        </div>
      </div>
    </div>
    <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in filteredHabits" :key="h.id" :habit="h" />
    </div>
    <hr />
    <!-- <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in trackedHabits" :key="h.id" :habit="h" />
    </div> -->
    <hr />
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { watchEffect } from "@vue/runtime-core"
export default {
  name: 'Home',
  setup() {
    let filter = ref()
    let filteredHabits = ref([])

    // NOTE it's a lot of ugly stuff but I'm working with checking on the trackHistory for each habit - Dylan
    // let trackedHabits = ref([])
    // let untrackedHabits = ref([])
    // watchEffect(() => {
    //   AppState.myHabits.forEach(h => {
    //     let trackedHabitArray = []
    //     let untrackedHabitArray = []
    //     const today = new Date(h.trackHistory[0])
    //     if (today.getDate() == AppState.day.getDate()) {
    //       trackedHabitArray.push(h)
    //     } else {
    //       untrackedHabitArray.push(h)
    //     }
    //     trackedHabits.value = trackedHabitArray
    //     untrackedHabits.value = untrackedHabitArray
    //   })
    //   console.log(trackedHabits.value)
    //   console.log(untrackedHabits.value)
    // })
    //if we want to display active, archived, and both, then the active would be first, followed by the tracked, and ended with the archived.
    watchEffect(() => {
      let habits = AppState.myHabits
      if (filter.value) {
        habits = habits.filter(h => h.isActive == filter)
      }
      filteredHabits.value = habits
    })
    return {
      filter,
      filteredHabits,
      // trackedHabits,
      // untrackedHabits
    }
  }
}
</script>

<style scoped lang="scss">
</style>
