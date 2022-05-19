<template>
  <div class="row justify-content-end">
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[6]?.split('T')[0] == week[0].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[5]?.split('T')[0] == week[1].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[4]?.split('T')[0] == week[2].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[3]?.split('T')[0] == week[3].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[2]?.split('T')[0] == week[4].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[1]?.split('T')[0] == week[5].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 border box"
      :style="
        'background-color: ' +
        (habit.trackHistory[0]?.split('T')[0] == week[6].split('T')[0]
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js';
export default {
  props: {
    habit: {
      type: Object,
      required: true
    },
  },
  setup() {
    let endDate = new Date(AppState.day)
    endDate.setDate(endDate.getDate() + 1)
    let startDate = new Date()
    startDate.setDate(endDate.getDate() - 7)
    console.log('stuffs', startDate, endDate)
    function getDatesInRange(start, end) {
      const date = new Date(start.getTime());
      const dates = [];
      while (date <= end) {
        let pusher = new Date(date)
        dates.push(pusher.toISOString());
        date.setDate(date.getDate() + 1);
      }
      console.log("dates", dates)
      return dates
    }
    return {
      today: computed(() => new Date()),
      week: getDatesInRange(startDate, endDate)
    }
  }
}
</script>


<style lang="scss" scoped>
.box {
  height: 6em;
  width: 6em;
}
</style>