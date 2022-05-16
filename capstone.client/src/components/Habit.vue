<template>
  <!-- TODO ternary to change habit color -->
  <div class="col-12 d-flex justify-content-center w-100 align-items-center">
    <div id="habit" class="mt-3 justify-content-center">
      <div
        class="
          habit-bar
          bg-primary
          d-flex
          justify-content-between
          align-items-center
        "
        type="button"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        @click.stop="toggle"
      >
        <h3 @click="goToHabitsDetailPage()">{{ habit.title }}</h3>
        <!-- TODO v-if for check unchecked -->
        <div v-if="lastTracked.date != today.getDate()">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              name=""
              id=""
              value="checkedValue"
              @click="checkIn"
              v-bind="lastTracked == today.getDate() ? checked : ''"
            />
            <label class="form-check-label" for=""> Display value </label>
          </div>
          <!-- <i class="mdi mdi-checkbox-blank-outline" @click="completeHabit"></i>
          <i class="mdi mdi-checkbox-marked" @click="completeHabit"></i> -->
        </div>
      </div>
      <!-- TODO add the habit id to the id -->
      <div
        id="collapse"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="bg-primary lighten-30 habit-body">
          <div class="row">
            <div class="col-md-6">
              <!-- TODO v-if you've compleeted this habit today -->
              <div class="p-2 m-2">
                <h3>{{ habit.streak }}</h3>
                <!-- TODO OR v-if  -->
                <h4>You've completed this habit today!</h4>
                <p>Your streak is now 4 days.</p>
              </div>
            </div>
            <div class="col-md-6 mb-4 align-items-center">
              <div class="bg-primary h-100 rounded">
                <h3 class="p-2 m-2">My badges for this habit</h3>
                <div id="badges" class="d-flex m-3">
                  <!-- Draw badges here -->
                  <i class="m-1 mdi mdi-rocket"></i>
                  <i class="m-1 mdi mdi-dog"></i>
                  <i class="m-1 mdi-carrot mdi"></i>
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
    const router = useRouter()
    const lastTracked = ref({})
    watchEffect(() => {
      let date = new Date(props.habit.trackHistory[0]).getDate()
      lastTracked.value.date = date
    })
    return {
      lastTracked,
      today: computed(() => AppState.day),
      habits: computed(() => AppState.myHabits),
      // REVIEW
      account: computed(() => AppState.account),
      goToHabitsDetailPage() {
        router.replace({ name: 'HabitsDetailPage', replace: true })
      },
      toggle() {
        Collapse.getOrCreateInstance(document.getElementById('collapse')).toggle()
      },
      async checkIn() {
        try {
          console.log(props.habit.trackHistory)
          props.habit.trackHistory.unshift(new Date())
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
  padding: 1em;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}
.scrollable {
  overflow-x: scroll;
  display: inline-block;
  flex-direction: column;
  min-width: 100vw;
}
</style>