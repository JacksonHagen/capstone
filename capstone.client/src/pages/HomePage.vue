<template>
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
    <div @click="toggleShowArchived" class="d-flex justify-content-center">
      <div class="d-flex selectable p-2 mb-3 rounded">
        <p class="m-0" v-if="!showArchive">Show</p>
        <p class="m-0 ms-1 d-flex">Archived Habits</p>
      </div>
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

  <Modal id="display-award">
    <template #body>
      <div>
        <img
          crossorigin="anonymous"
          class="img-fluid"
          :src="award.img"
          alt=""
        />
      </div>
    </template>
  </Modal>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
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
