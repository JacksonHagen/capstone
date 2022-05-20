<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 bg-primary rounded mt-4 p-3">
        <h5>Habits: {{ myHabits.length }}</h5>
        <h5>Awards: {{ awards.length }}</h5>
      </div>

      <div class="col-md-9 bg-primary rounded mt-4 offset-md-1 p-3">
        <!-- TODO carousel with inspos -->
        <p>
          {{ quote.content }}
        </p>

        <p class="ms-5">
          <i>-{{ quote.author }}</i>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      myHabits: computed(() => AppState.myHabits),
      awards: computed(() => AppState.myAwards),
      quote: computed(() => AppState.quote)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>