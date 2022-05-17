<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <button @click="filter == isActive">Active</button>
          <button @click="filter == !isActive">Archived</button>
          <button @click="filter == ''">All</button>
          <!-- Today -->
          <!-- All Active -->
          <!-- All Time -->
        </div>
      </div>
    </div>
    <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in activeUntrackedHabits" :key="h.id" :habit="h" />
    </div>
    <hr />
    <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in allActiveHabits" :key="h.id" :habit="h" />
    </div>
    <hr />
  </div>
</template>


<script>
// currently, we filter habits by their track date.
// but we also need habits to present a different appearance if their trackdate is passed.
// additionally, we need to only show habits on the day that their interval requires.
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { watchEffect } from "@vue/runtime-core"
export default {
  name: 'Home',
  setup() {
    let filter = ref()
    let filteredHabits = ref([])
    watchEffect(() => {
      let habits = AppState.myHabits
      if (filter.value) {
        habits = habits.filter(h => h.isActive == filter)
      }

      // NOTE sorted filter
      // REVIEW as of now, new habits will be at the bottom of the list because they do not have a trackHistory[0]
      filteredHabits.value = habits.sort((a, b) => new Date(new Date(a.trackHistory[0]) - b.trackHistory[0]))
    })
    return {
      filter,
      filteredHabits,
      activeUntrackedHabits: computed(() => AppState.myHabits.filter(h => {
        if (!h.trackHistory[0]) {
          return true
        } else {
          let date = new Date(h.trackHistory[0])
          let today = AppState.day
          return h.isActive && (h.interval <= (today.getDate() - date.getDate()))
        }
      })),
      allActiveHabits: computed(() => AppState.myHabits.filter(h => h.isActive))
    }
  }
}
</script>

<style scoped lang="scss">
</style>
