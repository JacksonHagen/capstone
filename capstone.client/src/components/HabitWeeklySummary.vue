<template>
  <div class="row justify-content-end">
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[0])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[1])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[2])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[3])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[4])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[5])
          ? habit.color + '; filter: brightness(70%) !important;'
          : 'gray')
      "
    ></div>
    <div
      class="col-1 m-1 rounded border box"
      :style="
        'background-color: ' +
        (trackHistory.includes(week[6])
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
  setup(props) {
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
        dates.push(pusher.toISOString().split('T')[0]);
        date.setDate(date.getDate() + 1);
      }
      console.log("dates", dates)
      return dates
    }
    return {
      today: computed(() => new Date()),
      week: getDatesInRange(startDate, endDate),
      trackHistory: computed(() => {
        let ret = []
        props.habit.trackHistory.forEach(d => {
          let date = new Date(d)
          ret.push(date.toISOString().split('T')[0])
        });
        return ret
      })
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