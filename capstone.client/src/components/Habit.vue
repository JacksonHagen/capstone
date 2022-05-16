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
        @click="toggle"
      >
        Quit Smoking
        <!-- TODO v-if for check unchecked -->
        <div class="div">
          <i class="mdi mdi-checkbox-blank-outline" @click="completeHabit"></i>
          <i class="mdi mdi-checkbox-marked" @click="completeHabit"></i>
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
                <h3>My streak:</h3>
                OR
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
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  props: {
    habit: Object,
    required: true
  },
  setup() {
    return {
      toggle() {
        Collapse.getOrCreateInstance(document.getElementById('collapse')).toggle()
      },
      // REVIEW
      habits: computed(() => AppState.habits),
      account: computed(() => AppState.account)
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