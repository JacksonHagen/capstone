<template>
  <AccountTopBar />
  <AccountCharts />
  <div class="container bg-primary rounded mt-5 p-4">
    <AccountCharts />
    <AccountMyAwards />
    <AccountCalendarView />
  </div>
  <Modal id="display-award">
    <template #body>
      <div>
        <img class="img-fluid" :src="award.img" alt="" />
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      award: computed(() => AppState.newAward),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
</style>
