<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <!-- <button @click="filter == 'isActive'">Active</button>
          <button @click="filter == '!isActive'">Archived</button> -->
          <!-- Today -->
          <!-- All Active -->
          <!-- All Time -->
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row w-100 d-flex justify-content-center">
        <Habit v-for="h in activeUntrackedHabits" :key="h.id" :habit="h" />
      </div>
      <hr v-if="activeUntrackedHabits.length" />
      <div class="row w-100 d-flex justify-content-center">
        <Habit
          v-for="h in allActiveHabits"
          :key="h.id"
          :habit="h"
          style="filter: saturate(80%)"
        />
      </div>
    </div>
    <div class="container-fluid" v-if="archivedHabits.length">
      <hr />
      <div class="d-flex justify-content-center">
        <p v-if="!showArchive">Show</p>
        <p @click="toggleShowArchived" class="ms-1 d-flex selectable">
          Archived Habits
        </p>
      </div>
      <div
        class="row w-100 d-flex justify-content-center text-center"
        v-if="showArchive"
      >
        <Habit
          v-for="h in archivedHabits"
          :key="h.id"
          :habit="h"
          style="filter: saturate(50%)"
        />
      </div>
    </div>
  </div>

  <Modal id="display-award">
    <template #body>
      <div>
        <img class="img-fluid" :src="award.img" alt="" />
      </div>
    </template>
  </Modal>
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
    const showArchive = ref(false)
    return {
      showArchive,
      toggleShowArchived() {
        showArchive.value = !showArchive.value
      },
      activeUntrackedHabits: computed(() => AppState.myHabits.filter(h => {
        if (h.isActive && !h.trackHistory[0]) {
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
        return h.isActive && ((today.getDate() - date.getDate()) < h.interval)
      }).reverse()),
      archivedHabits: computed(() => AppState.myHabits.filter(h => !h.isActive)),
      award: computed(() => AppState.newAward)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
