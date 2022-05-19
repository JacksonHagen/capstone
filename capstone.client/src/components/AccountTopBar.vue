<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 bg-primary rounded mt-4 p-3">
        <h5>Habits: {{ myHabits.length }}</h5>
        <h5>Awards: {{ awards.length }}</h5>
      </div>

      <div class="col-md-9 bg-primary rounded mt-4 offset-md-1 p-3">
        <p>
          <!-- TODO carousel with inspos -->
          Inspo: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          vitae aut harum esse dolorem amet? Soluta porro maxime nisi vitae
          exercitationem ut corporis nobis natus?
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
    }
  }
}
</script>


<style lang="scss" scoped>
</style>