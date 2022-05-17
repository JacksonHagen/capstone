<template>
  <div class="container-fluid fill">
    <div id="scrollable" class="row d-flex justify-content-center fill">
      <!-- This will be a differently formatted habit componennt -->
      <HabitDetails v-for="h in habits" :key="h.id" :habit="h" class="fill" />
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      habits: computed(() => AppState.myHabits)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>