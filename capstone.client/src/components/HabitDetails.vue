<template>
  <div class="col-12 d-flex justify-content-center w-100 align-items-center">
    <div id="habit" class="mt-3 justify-content-center">
      <h3 class="">{{ habit.title }}</h3>
      <div class="row">
        <div class="col-12 bg-light">
          <h6>{{ habit.inspo }} inspiration</h6>
        </div>
        <div class="col-12 bg-light">
          <h6>
            Current Streak: {{ habit.streak }} Max Streak:
            {{ habit.maxStreak }}
          </h6>
        </div>
        <div class="col-12 bg-light">
          <Award v-for="a in awards" :key="a.id" :award="a" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      awards: computed(() => AppState.myAwards.filter(a => a.habitId == props.habit.id))
    }
  }
}
</script>


<style lang="scss" scoped>
.scrollable {
  overflow-x: scroll;
  display: inline-block;
  flex-direction: column;
  min-width: 100vw;
}
</style>