<template>
  <div
    class="
      col-12
      d-flex
      justify-content-center
      fit-content(100vh)
      container
      align-items-center
    "
    :id="'h-' + habit.id"
  >
    <div class="darken-30 p-3 mt-3 w-100">
      <div class="mt-3 justify-content-center">
        <h3 class="bg-success darken-30 w-100 p-3 m-0 rounded-top">
          {{ habit.title }}
        </h3>
        <div class="bg-success rounded-bottom p-3">
          <div class="col-12 p-3 bg-light">
            <h6>{{ habit.inspo }}</h6>
          </div>
          <div class="col-12 p-3 my-2 bg-light">
            <h6>
              Current Streak: {{ habit.streak }} Max Streak:
              {{ habit.maxStreak }}
            </h6>
          </div>
          <div class="py-3">A chart would look fire here</div>
          <div class="col-12 bg-light d-flex">
            <!-- <img
              src="../assets/img/Badges/CapstoneBadges1st-Login.png"
              height="400"
            /> -->
            <Award v-for="a in awards" :key="a.id" :award="a" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { useRouter } from "vue-router"
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      awards: computed(() => AppState.myAwards.filter(a => a.habitId == props.habit.id))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>