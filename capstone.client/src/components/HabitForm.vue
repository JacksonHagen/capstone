<template>
  <!-- we need an input which forks based on inputs. -->
  <!-- first ask is, what's the name of your habit? -->
  <!-- two: how often do you want to be reminded of this task? = inteerval, default to 1 -->
  <!-- three: choose a color? -->
  <!-- four: lastly, tell us your inspriation for this habit (skip this part) -->
  <!-- FEATURE: pick a time? we push that particular time => new Date(time entered as a string) -->

  <form name="newHabitForm" @submit.prevent="newHabit">
    <div class="mb-3">
      <label for="habit-title" class="form-label">Give it a title:</label>
      <input
        type="text"
        class="form-control"
        id="habit-title"
        placeholder=""
        v-model="formData.title"
      />
    </div>
    <div class="mb-3">
      <label for="habit-inspo" class="form-label"
        >Why are you making this Habit?</label
      >
      <input
        type="text"
        class="form-control"
        id="habit-inspo"
        placeholder=""
        v-model="formData.inspo"
      />
      <small id="helpId" class="form-text text-muted"
        >This is optional, but we might show it to you later.</small
      >
    </div>
    <div class="mb-3">
      <label for="habit-color" class="form-label"
        >Give it a recognizable color</label
      >
      <input
        type="color"
        class="form-control"
        id="habit-color"
        v-model="formData.color"
      />
      <small id="helpId" class="form-text text-muted"
        >If you want, leave it blank and we'll pick it.</small
      >
    </div>
    <div class="mb-3">
      <label for="habit-interval"
        >How often do you want us to remind you?</label
      >
      <select name="habit-interval" id="habit-interval">
        <option selected value="1">Daily</option>
        <option value="2">Every other day</option>
        <option value="7">Weekly</option>
        <option value="28">Monthly</option>
      </select>
    </div>
    <div class="modal-footer">
      <button type="close" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { habitsService } from "../services/HabitsService"
import { AppState } from "../AppState"
import { Modal } from "bootstrap"
export default {
  setup() {
    const formData = ref({})
    return {
      formData,
      account: computed(() => AppState.account),
      day: computed(() => AppState.day),
      async newHabit() {
        try {
          debugger
          formData.value.interval = document.getElementById('habit-interval').value
          formData.value.accountId = this.account.id
          // formData.value.trackHistory = [this.day]
          await habitsService.createHabit(formData.value)
          formData.value = {}
          Modal.getOrCreateInstance(document.getElementById('newHabitModal')).toggle()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>