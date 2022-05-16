<template>
  <div class="container-fluid">
    <div class="row w-100 d-flex justify-content-center">
      <Habit v-for="h in habits" :key="h.id" :habit="h" />
      <!-- <Habit />
      <Habit />
      <Habit /> -->
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    return {
      habits: computed(() => AppState.habits)

    }
  }
}
</script>

<style scoped lang="scss">
</style>
