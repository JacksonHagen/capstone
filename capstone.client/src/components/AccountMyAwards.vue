<template>
  <div class="row mb-4">
    <div class="col-12 bg-light rounded p-3">
      <p class="text-dark">My Awards</p>
      <div class="row text-center text-dark justify-content-around">
        <p v-if="myHabitAwards.length"><u>Habit Awards</u></p>
        <div class="col-3" v-for="a in myHabitAwards" :key="a.id">
          <img
            :src="a.img"
            class="img-fluid"
            :title="'Streak award for ' + a.habit.title"
          />
        </div>
        <hr v-if="myAccountAwards.length && myHabitAwards.length" />
        <p v-if="myAccountAwards.length"><u>Account Awards</u></p>

        <div class="col-3" v-for="a in myAccountAwards" :key="a.id">
          <img :src="a.img" class="img-fluid" />
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
    return {
      myHabitAwards: computed(() => AppState.myAwards.filter(a => a.habitId)),
      myAccountAwards: computed(() => AppState.myAwards.filter(a => !a.habitId)),
    }
  }
}
</script>


<style lang="scss" scoped>
.awardImg {
  height: 20vh;
  width: 20vh;
}
</style>