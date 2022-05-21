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
        required
        max="40"
      />
    </div>
    <div class="mb-3">
      <div class="d-flex justify-content-between">
        <label for="habit-inspo" class="form-label"
          >Why are you making this Habit?</label
        ><label class="selectable px-1 rounded" @click="toggleImgInput" for=""
          ><span v-if="!showImgInput">Add an image</span
          ><span v-if="showImgInput">Actually, just text</span></label
        >
      </div>
      <input
        type="text"
        class="form-control"
        id="habit-inspo"
        placeholder=""
        v-model="formData.inspo"
        max="1000"
      />
      <small id="helpId" class="form-text text-muted"
        >This is optional, but we will show it to you later.</small
      >
    </div>
    <div class="mb-3 imgInput" v-if="showImgInput">
      <label for="habit-inspo-img" class="form-label">Image</label>
      <input
        @change="setImage"
        class="form-control"
        type="file"
        id="habit-inspo-img"
        accept="image/*"
      />
      <small class="form-text text-muted">
        This is also optional, but we will show it to you later.</small
      >
    </div>
    <div class="input-group mb-3">
      <label
        class="form-check-label visually-hidden"
        id="color-label"
        name="color"
        for="color"
        >Choose Color</label
      >
      <select
        class="form-select rounded"
        required
        name="color"
        id="color"
        aria-label="Default select example"
        placeholder="Choose A Color"
        v-model="formData.color"
      >
        <option
          class="border-top border-dark bg-danger dropdown-item"
          value="#EA9D55"
        >
          Orange
        </option>
        <option
          class="border-top border-dark bg-warning dropdown-item"
          selected
          value="#FFECA8"
        >
          Yellow
        </option>
        <option
          class="border-top border-dark bg-success dropdown-item"
          value="#D1F3EC"
        >
          Aqua
        </option>
        <option
          class="border-top border-dark bg-primary dropdown-item text-light"
          value="#74A59A"
        >
          Green
        </option>
        <option
          class="border-top border-dark bg-purple dropdown-item"
          value="#9BA5FF"
        >
          Purple
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="habit-interval"
        >How often do you want us to remind you?</label
      >
      <select
        name="habit-interval"
        id="habit-interval"
        class="rounded p-1 ms-2"
        required
      >
        <option selected value="1">Daily</option>
        <option value="2">Every other day</option>
        <option value="7">Weekly</option>
        <option value="28">Monthly</option>
      </select>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-target="newHabitModal"
        data-bs-dismiss="modal"
      >
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
import { firebaseService } from '../services/FirebaseService.js'

export default {
  setup() {
    const formData = ref({})
    const image = ref([])
    const showImgInput = ref(false)
    return {
      showImgInput,
      formData,
      formColor: computed(() => `${formData.value.color}`),
      account: computed(() => AppState.account),
      day: computed(() => AppState.day),
      toggleImgInput() {
        showImgInput.value = !showImgInput.value
      },
      setImage(e) {
        image.value = e.target.files
      },
      async upload() {
        try {
          const url = await firebaseService.upload(image.value[0])
          // TODO we will need add enums for subdocks because this is an image string
          // formData.value.inspo = url
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async newHabit() {
        try {
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
.form-select {
  -webkit-appearance: none;
  appearance: none;
  background-color: v-bind(formColor) !important;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: transparent;
  text-decoration: none;
  background-color: transparent;
}
.dropdown-item.active,
.dropdown-item:active {
  color: transparent;
  text-decoration: none;
  background-color: transparent;
}
</style>