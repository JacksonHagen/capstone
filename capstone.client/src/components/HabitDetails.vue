<template>
  <div
    class="
      col-12
      d-flex
      fit-content(100vh)
      container-scroll
      align-items-center
      scrollsnap
    "
    :id="'h-' + habit.id"
  >
    <div class="darken-30 p-3 mt-3 w-100">
      <div class="mt-3 justify-content-center">
        <div
          class="
            darken-30
            w-100
            p-3
            m-0
            d-flex
            justify-content-between
            rounded-top
          "
          :style="'background-color: ' + habit.color"
        >
          <h3>
            {{ habit.title }}
          </h3>
          <button class="btn btn-warning" @click="archiveHabit()">
            Archive Habit
          </button>
        </div>
        <div
          class="rounded-bottom p-3"
          :style="
            'filter: hue-rotate(5deg) brightness(140%) grayscale(50%); background-color: ' +
            habit.color
          "
        >
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

  <Modal id="display-award">
    <template #body>
      <div>
        <img class="img-fluid" :src="award.img" alt="" />
      </div>
    </template>
  </Modal>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { useRouter } from "vue-router"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { habitsService } from "../services/HabitsService.js"
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      award: computed(() => AppState.newAward),
      awards: computed(() => AppState.myAwards.filter(a => a.habitId == props.habit.id)),
      async archiveHabit() {
        try {
          if (await Pop.confirm()) {
            await habitsService.archiveHabit(props.habit.id)
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.scrollsnap {
  scroll-snap-align: start;
}
</style>