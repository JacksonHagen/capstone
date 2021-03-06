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
          text-start
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
        <div class="d-flex col-8">
          <div
            v-if="habit.interval - timeSinceLastTracked < 1 && habit.isActive"
            class="mdi mdi-clock-alert-outline mx-2"
            title="Check-in to keep your streak"
          ></div>
          <h5>{{ habit.title }}</h5>
          <span class="mdi mdi-menu-down col-1"></span>
        </div>
        <div
          v-if="missed && habit.isActive"
          class="mdi mdi-bell-alert col-1 text-end"
          title="You missed your check-in!"
        ></div>
        <div v-if="!habit.isActive">
          <h5 class="col-1"><i>Archived</i></h5>
        </div>
        <div v-else-if="!isTracked || isNew">
          <div
            class="form-check"
            v-if="isNew || timeSinceLastTracked >= habit.interval"
          >
            <input
              type="checkbox"
              class="form-check-input border border-primary"
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
        </div>
        <div v-else-if="isTracked" class="d-flex align-items-center">
          <!-- <h5>Well Done!</h5> -->
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              class="path circle"
              fill="none"
              stroke="#121213"
              stroke-width="6"
              stroke-miterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <polyline
              class="path check"
              fill="none"
              stroke="#121213"
              stroke-width="6"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
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
          <div class="row w-100 g-0">
            <div class="col-md-5">
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
                <div v-if="!habit.isActive" class="text-start my-4">
                  This habit has been archived.
                </div>
                <button
                  class="m-0 btn btn-outline-dark justify-flex-start d-flex"
                  @click="goToHabitsDetailPage()"
                >
                  See More...
                </button>
              </div>
            </div>
            <div class="col-md-7 g-0 mb-4 align-items-center">
              <div
                class="d-flex flex-column justify-content-between h-100 rounded"
              >
                <div class="d-flex flex-column" v-if="!myHabitAwards[0]">
                  <hr />
                  <p class="p-3 mb-0 fs-5 fw-lighter">
                    Your earned badges will be displayed here
                  </p>
                  <hr />
                </div>
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
                <div
                  v-if="habit.interval < 7 && habit.isActive"
                  class="
                    d-flex
                    flex-column
                    align-items-end
                    mt-auto
                    text-dark
                    m-1
                  "
                >
                  <h5 class="m-1">Last 7 days</h5>

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
    const isChecked = ref(false)
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
      isChecked,
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
          isChecked.value = true
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
svg {
  width: 2rem;
  display: block;
  // margin: 40px auto 0;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  &.circle {
    -webkit-animation: dash 0.9s ease-in-out;
    animation: dash 0.9s ease-in-out;
  }
  &.line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
    animation: dash 0.9s 0.35s ease-in-out forwards;
  }
  &.check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
    animation: dash-check 0.9s 0.35s ease-in-out forwards;
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>