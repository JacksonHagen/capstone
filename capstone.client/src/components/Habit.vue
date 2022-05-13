<template>
  <!-- TODO ternary to change habit color -->
  <!-- <div class="col-12"> -->
  <div id="habit" class="mt-4 position-absolute">
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
          <div class="col-6">
            <!-- TODO v-if you've compleeted this habit today -->
            <div class="p-2 m-2">
              <h3>My streak:</h3>
              OR
              <h4>You've completed this habit today!</h4>
              <p>Your streak is now 4 days.</p>
            </div>
          </div>
          <div class="col-6 mb-4 align-items-center">
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
  <!-- </div> -->
</template>


<script>
import { Collapse } from "bootstrap"
export default {
  setup() {
    return {
      props: {
        habit: Object,
        required: true
      },
      toggle() {
        Collapse.getOrCreateInstance(document.getElementById('collapse')).toggle()
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
input [type="checkbox"] {
  border-radius: 0.5em;
}
</style>