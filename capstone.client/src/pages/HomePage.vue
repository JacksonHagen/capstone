<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <button @click="filter == 'isActive'">Active</button>
          <button @click="filter == '!isActive'">Archived</button>
          <!-- Today -->
          <!-- All Active -->
          <!-- All Time -->
        </div>
      </div>
    </div>
    <div class="container-fluid" v-if="filter == '!isActive'">
      <div class="row w-100 d-flex justify-content-center">
        <Habit v-for="h in archivedHabits" :key="h.id" :habit="h" />
      </div>
    </div>
    <div class="container-fluid" v-else>
      <div class="row w-100 d-flex justify-content-center">
        <Habit v-for="h in activeUntrackedHabits" :key="h.id" :habit="h" />
      </div>
      // REVIEW needs fix
      <hr v-if="!(activeUntrackedHabits = [])" />
      <div class="row w-100 d-flex justify-content-center">
        <Habit v-for="h in allActiveHabits" :key="h.id" :habit="h" />
      </div>
    </div>
  </div>

  <!-- <div class="modal" tabindex="-1" role="dialog" id="display-award">
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
  </div> -->
</template>


<script>
// currently, we filter habits by their track date.
// but we also need habits to present a different appearance if their trackdate is passed.
// additionally, we need to only show habits on the day that their interval requires.
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    let filter = ''
    // let filteredHabits = ref([])

    return {
      filter,
      activeUntrackedHabits: computed(() => AppState.myHabits.filter(h => {
        if (!h.trackHistory[0]) {
          return true
        } else {
          let date = new Date(h.trackHistory[0])
          let today = AppState.day
          return h.isActive && (h.interval <= (today.getDate() - date.getDate()))
        }
      })),
      allActiveHabits: computed(() => AppState.myHabits.filter(h => {
        let date = new Date(h.trackHistory[0])
        let today = AppState.day
        return h.isActive && (today.toDateString() == date.toDateString())
      }).reverse()),
      archivedHabits: computed(() => AppState.myHabits.filter(h => !h.isActive)),
      award: computed(() => AppState.newAward.badge)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
