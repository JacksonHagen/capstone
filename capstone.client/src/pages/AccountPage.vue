<template>
  <div class="mx-4">
    <AccountTopBar />
    <div class="container bg-primary rounded mt-4 p-4">
      <AccountCharts />
      <AccountMyAwards />
      <AccountCalendarView />
    </div>
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
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { quotesService } from "../services/QuotesService.js";
import Pop from '../utils/Pop.js';
export default {
  name: 'Account',
  setup() {
    onMounted(async () => {
      try {
        await quotesService.getOneQuote()
      }
      catch (error) {
        console.error("[QUOTE_ERROR]", error.message);
        Pop.toast(error.message, "error");
      }
      await setInterval(async () => {
        try {
          AppState.quote = null
          await quotesService.getOneQuote()
        }
        catch (error) {
          console.error("[QUOTE_ERROR]", error.message);
          Pop.toast(error.message, "error");
        }
      }, 10000)
    })
    return {
      award: computed(() => AppState.newAward),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
</style>
