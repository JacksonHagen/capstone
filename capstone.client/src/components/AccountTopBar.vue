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
          <p>
            {{ quote.content }}
          </p>
        </Transition>
        <Transition name="slide-fade">
          <p class="ms-5">
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
    const quote = ref({})
    watchEffect(() => {
      quote.value = AppState.quote
    })
    return {
      quote,
      myHabits: computed(() => AppState.myHabits),
      awards: computed(() => AppState.myAwards),
      // quote: computed(() => AppState.quote)
    }
  }
}
</script>


<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>