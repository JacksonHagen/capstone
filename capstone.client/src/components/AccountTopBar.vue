<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-2 bg-primary rounded p-3">
        <h5>Habits: {{ myHabits.length }}</h5>
        <h5>Badges: {{ awards.length }}</h5>
      </div>

      <div class="col-9 bg-primary rounded offset-1 p-3">
        <p>
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
      // TODO change back to myHabits
      myHabits: computed(() => AppState.habits),
      awards: computed(() => AppState.myAwards),
    }
  }
}
</script>


<style lang="scss" scoped>
</style>