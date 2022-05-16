<template>
  <div class="container-fluid">
    <div id="scrollable" class="row w-100 d-flex justify-content-center">
      <!-- This will be a differently formatted habit componennt -->
      <HabitDetails v-for="h in habits" :key="h.id" :habit="h"  />
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .scrollable {
    flex-wrap: nowrap;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
  }
}
</style>