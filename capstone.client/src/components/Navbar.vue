<template>
  <nav class="bg-primary w-100 d-flex active pt-2">
    <div class="d-flex justify-content-between col-6">
      <div class="d-flex">
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
        <button
          class="m-2 btn btn-info"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#newHabitModal"
        >
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
    </div>

    <div class="col-6 text-end">
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
        <div class="modal-body">
          <HabitForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
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
</style>
