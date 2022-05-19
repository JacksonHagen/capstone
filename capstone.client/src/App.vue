<template>
  <header class="sticky-md-top">
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { habitsService } from './services/HabitsService.js'
import { logger } from './utils/Logger.js'
export default {
  name: 'App',
  setup() {
    function checkDatetime() {
      AppState.day = new Date()
    }
    onMounted(async () => {
      checkDatetime()
      setInterval(checkDatetime, 60000)
      // AppState.myHabits.filter(h => (today.getDate() - h.lastTracked[0].getDate()) > h.interval)
      // you done fucked up render missed component version

      // NOTE STRETCH AppState.day interval to refresh the program.

    })

    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
