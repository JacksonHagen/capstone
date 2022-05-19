<template>
  <div class="row">
    <div
      class="
        col-12
        bg-light
        rounded
        p-3
        d-flex
        flex-column
        align-items-center
        brightness
      "
    >
      <p class="text-dark">Last 7 Days</p>
      <div
        class="row text-dark text-center justify-content-center mt-2"
        v-for="h in habits"
        :key="h.id"
      >
        <p class="mb-0">{{ h.title }}</p>

        <HabitWeeklySummary :habit="h" />
      </div>
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
.brightness {
  .row {
    filter: brightness(130%) !important;
  }
}
</style>