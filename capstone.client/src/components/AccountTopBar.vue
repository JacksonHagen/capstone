<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 bg-primary rounded mt-4 p-3">
        <h5>Habits: {{ myHabits.length }}</h5>
        <h5>Awards: {{ awards.length }}</h5>
      </div>

      <div class="col-md-9 bg-primary rounded mt-4 offset-md-1 p-3">
        <!-- TODO carousel with inspos -->
        <Transition name="slide-fade">
          <p v-if="quote">
            {{ quote.content }}
          </p>
        </Transition>
        <Transition name="slide-fade">
          <p class="text-end" v-if="quote">
            <i>-{{ quote.author }}</i>
          </p>
        </Transition>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref, watchEffect } from 'vue'
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
.slide-fade-enter-active {
  transition: all 2s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>