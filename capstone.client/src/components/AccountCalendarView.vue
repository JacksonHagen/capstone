<template>
  <div class="row">
    <div
      class="
        col-12
        bg-light
        rounded
        p-3
        d-flex
        flex-column
        align-items-center
        brightness
      "
    >
      <p class="text-dark">Last 7 Days</p>
      <div class="container">
        <div
          class="d-flex text-dark text-center justify-content-center"
          v-for="h in habits"
          :key="h.id"
        >
          <div class="col-2 display-none-mobile">
            <div class="d-flex h-100 justify-content-end align-items-center">
              <div class="text-end">
                <p class="m-0">
                  {{ h.title }}
                </p>
              </div>
            </div>
          </div>
          <!-- <p class="display-none-desktop m-0 mt-1">{{ h.title }}</p> -->
          <!-- <button
            type="button"
            class="btn btn-secondary"
            trigger="click"
            data-toggle="tooltip"
            data-placement="bottom"
            :title="h.title"
          >
            Tooltip on bottom
          </button> -->
          <HabitWeeklySummary :habit="h" />
          <div class="col-2 display-none-mobile"></div>
        </div>
        <div class="row justify-content-center display-none-mobile">
          <div
            class="col-1 box rounded text-dark m-1"
            v-for="d in week"
            :key="d"
          >
            <p class="pt-2 m-0">{{ d.split("-")[1] }}/{{ d.split("-")[2] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    let endDate = new Date(AppState.day)
    endDate.setDate(endDate.getDate() + 1)
    let startDate = new Date()
    startDate.setDate(endDate.getDate() - 7)
    function getDatesInRange(start, end) {
      const date = new Date(start.getTime());
      const dates = [];
      while (date <= end) {
        let pusher = new Date(date)
        dates.push(pusher.toISOString().split('T')[0]);
        date.setDate(date.getDate() + 1);
      }
      return dates
    }
    return {
      habits: computed(() => AppState.myHabits),
      week: computed(() => getDatesInRange(startDate, endDate))
    }
  }
}
</script>


<style lang="scss" scoped>
.brightness {
  .row {
    filter: brightness(130%) !important;
  }
}
</style>