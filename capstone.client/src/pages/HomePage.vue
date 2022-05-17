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
      <Habit v-for="h in filteredHabits" :key="h.id" :habit="h" />
    </div>
    <hr />
    <!-- <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in trackedHabits" :key="h.id" :habit="h" />
    </div> -->
    <hr />
  </div>

  <div class="modal" tabindex="-1" role="dialog" :id="award.id">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ award.name }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
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
    console.log(AppState.myHabits.forEach(h => h.isActive && ((h.interval) <= (AppState.day.getDate() - new Date(h.trackHistory[0]).getDate()))))
    watchEffect(() => {
      let today = AppState.day
      let habits = AppState.myHabits
      // let date = new Date(habits[0].trackHistory[0])
      // console.log(today.getDate() - date.getDate())
      // let trackedDate = new Date(h.lastTracked[0])
      // if ( - trackedDate.getDate()){}
      // h.isActive && ((h.interval) <= (today.getDate() - h.lastTracked[0].getDate()))

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
      award: computed(() => AppState.newAward.badge)
      // testHabits: computed(() => {
      //   AppState.myHabits.filter(h => h.isActive && ((h.interval) <= (AppState.day.getDate() - new Date(h.trackHistory[0]).getDate())))
      // })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
