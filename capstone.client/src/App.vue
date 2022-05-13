<template>
  <header>
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
export default {
  name: 'App',
  setup() {
    onMounted(async () => {
      const today = new Date().now()
      AppState.day = today

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
