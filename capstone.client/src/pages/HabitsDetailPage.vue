<template>
  <div class="container-fluid fill">
    <div id="scrollable" class="row d-flex scrollable snap">
      <!-- This will be a differently formatted habit componennt -->
      <h3 class="text-primary text-center mt-3">Active Habits</h3>
      <hr />
      <HabitDetails v-for="h in activeHabits" :key="h.id" :habit="h" />
      <h3 class="text-primary text-center">Archived Habits</h3>
      <hr />
      <HabitDetails v-for="h in archivedHabits" :key="h.id" :habit="h" />
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { habitsService } from '../services/HabitsService.js'
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      await habitsService.getMyHabits()
      document.getElementById(route.params.id).scrollIntoView()
    })
    return {
      activeHabits: computed(() => AppState.myHabits.filter(h => h.isActive == true)),
      archivedHabits: computed(() => AppState.myHabits.filter(h => h.isActive == false))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>