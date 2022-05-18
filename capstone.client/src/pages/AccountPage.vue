<template>
  <AccountTopBar />
  <div class="container bg-primary rounded mt-5 p-4">
    <AccountCharts />
    <AccountMyAwards />
    <AccountCalendarView />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {

      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
</style>
