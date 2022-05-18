<template>
  <div class="container-fluid fill">
    <div id="scrollable" class="row d-flex scrollable snap">
      <!-- This will be a differently formatted habit componennt -->
      <HabitDetails v-for="h in habits" :key="h.id" :habit="h" />
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
      habits: computed(() => AppState.myHabits),

    }
  }
}
</script>


<style lang="scss" scoped>
</style>