<template>
  <div class="col-12 d-flex justify-content-center w-100 align-items-center">
    <div id="habit" class="mt-3 justify-content-center">
      <div
        class="
          habit-bar
          d-flex
          justify-content-between
          align-items-center
          round
        "
        :style="'background-color: ' + habit.color"
        type="button"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="false"
        aria-controls="collapseOne"
        :id="'h-' + habit.id"
        @click.stop="toggle"
      >
        <div class="d-flex text-start col-9 text">
          <h5>{{ habit.title }}</h5>
          <span class="mdi mdi-menu-down col-1"></span>
          <!-- NOTE Does missed work? chnage to new icon use clock for running out of time -->
          <div
            v-if="missed"
            class="mdi mdi-clock-alert-outline col-1"
            title="Check-in to keep your streak"
          ></div>
        </div>

        <!-- TODO v-if for check unchecked -->
        <div class="col-1" v-if="!habit.isActive">
          <h5><i>Archived</i></h5>
        </div>
        <div v-else-if="!isTracked || isNew">
          <div
            class="form-check"
            v-if="isNew || timeSinceLastTracked >= habit.interval"
          >
            <input
              type="checkbox"
              class="form-check-input shadow border border-primary"
              title="mark habit complete"
              name=""
              id=""
              value="checkedValue"
              @click.stop="checkIn"
            />
            <label class="form-check-label visually-hidden" for="">
              Check if Habit Completed
            </label>
            <h5></h5>
          </div>

          <!-- <i class="mdi mdi-checkbox-blank-outline" @click="completeHabit"></i>
          <i class="mdi mdi-checkbox-marked" @click="completeHabit"></i> -->
        </div>
        <div v-else-if="isTracked">
          <h5>Well Done!</h5>
        </div>
      </div>
      <div
        :id="habit.id"
        class="collapse hide habit-body"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div
          class="shadow short-round"
          :style="
            'filter: hue-rotate(5deg) brightness(140%); background-color: ' +
            habit.color
          "
        >
          <div class="row w-100">
            <div class="col-md-6">
              <div class="p-2 m-2">
                <!-- <h3>Your streak:</h3> -->
                <!-- TODO OR v-if  -->
                <span v-if="habit.isActive">
                  <h4 v-if="isTracked">You've completed this habit today!</h4>
                  <p>Your streak is {{ habit.streak }} days.</p>
                  <p v-if="habit.interval - timeSinceLastTracked > 0">
                    You'll be reminded of this habit again in
                    {{ habit.interval - timeSinceLastTracked }} day{{
                      habit.interval - timeSinceLastTracked > 1 ? "s" : ""
                    }}
                  </p>
                </span>
                <button
                  class="m-0 btn btn-outline-dark"
                  @click="goToHabitsDetailPage()"
                >
                  See More...
                </button>
              </div>
            </div>
            <div class="col-md-6 mb-4 align-items-center">
              <div class="h-100 rounded">
                <h3 v-if="myHabitAwards[0]" class="p-2 m-2">
                  My badges for this habit
                </h3>
                <div id="badges" class="d-flex m-3">
                  <!-- Draw badges here -->
                  <img
                    v-for="a in myHabitAwards"
                    :key="a.id"
                    :src="a.img"
                    alt=""
                    height="100"
                    style="filter: brightness(80%)"
                  />
                </div>
                <div class="row text-dark">
                  <HabitWeeklySummary :habit="habit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Collapse } from "bootstrap"
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRouter } from 'vue-router'
import { watchEffect } from "@vue/runtime-core"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { habitsService } from "../services/HabitsService"

export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const flip = ref(false)
    const router = useRouter()
    const isTracked = ref(false)
    const missed = ref(false)
    const lastTracked = new Date(props.habit.trackHistory[0])
    const timeSinceLastTracked = (AppState.day.getDate() - lastTracked.getDate())
    const isNew = !props.habit.trackHistory[0]
    watchEffect(async () => {
      if ((lastTracked.toDateString() == AppState.day.toDateString()) && (props.habit.interval > timeSinceLastTracked)) {
        isTracked.value = true
      }
      if ((timeSinceLastTracked > props.habit.interval) && missed.value != true) {
        missed.value = true
        props.habit.streak = 0
        await habitsService.editHabit(props.habit)

      }
    })
    return {
      isNew,
      lastTracked,
      timeSinceLastTracked,
      isTracked,
      missed,
      flip,
      account: computed(() => AppState.account),
      myHabitAwards: computed(() => AppState.myAwards.filter(a => a.habitId == props.habit.id)),
      goToHabitsDetailPage() {
        router.push({ name: 'HabitsDetailPage', params: { id: 'h-' + props.habit.id } })
      },
      toggle() {
        flip.value = !flip.value
        if (flip.value) {
          document.getElementById('h-' + props.habit.id).classList.remove('round')
        } else {
          document.getElementById('h-' + props.habit.id).classList.add('round')
        }
        Collapse.getOrCreateInstance(document.getElementById(props.habit.id)).toggle()
      },
      async checkIn() {
        try {
          props.habit.trackHistory.unshift(new Date())
          props.habit.streak++
          await habitsService.editHabit(props.habit)
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
.habit-bar {
  width: 75vw;
  padding: 1em;
  border-top-right-radius: 0.5em;
  border-top-left-radius: 0.5em;
}
.habit-body {
  width: 75vw;
}
.short-round {
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}
.scrollable {
  overflow-x: scroll;
  display: inline-block;
  flex-direction: column;
  min-width: 100vw;
}
.checked-overlay {
  display: flex;
  align-items: flex-end;
  position: absolute;
  z-index: 9;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(199, 189, 189, 0.559);
  pointer-events: none;
}
.round {
  border-radius: 0.5em !important;
}
// .text {
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: scroll;
//   display: inline-block;
// }
</style>