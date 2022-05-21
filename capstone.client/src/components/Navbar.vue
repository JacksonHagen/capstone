<template>
  <nav class="bg-primary w-100 d-flex align-items-center active pt-2">
    <div class="d-flex justify-content-between col-6">
      <div class="d-flex">
        <!-- <img height="40" class="m-1" src="../assets/img/IMG_0519.PNG" /> -->
        <h1>
          <router-link
            class="btn text-success lighten-30 selectable text-uppercase"
            :to="{ name: 'Home' }"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'Account' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Stats
          </router-link>
        </h1>
      </div>
    </div>

    <div class="col-6 text-end d-flex justify-content-end">
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>

  <!-- Modal -->
  <div
    class="modal fade"
    id="newHabitModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">What's Your Habit?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="account.id">
          <HabitForm />
        </div>
      </div>
    </div>
  </div>
  <!-- floating button -->
  <button
    class="m-2 btn btn-info float elevation-5"
    type="button"
    title="Create a new habit"
    data-bs-toggle="modal"
    data-bs-target="#newHabitModal"
  >
    <i class="mdi mdi-plus"></i>
  </button>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.active .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.float {
  position: fixed;
  left: 1em;
  bottom: 1em;
  z-index: 1000;
}
</style>
