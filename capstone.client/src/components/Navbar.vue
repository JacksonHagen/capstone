<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary px-3">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            class="btn text-success lighten-30 selectable text-uppercase"
            :to="{ name: 'Home' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Account' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Stats
          </router-link>
        </li>
        <li>
          <button
            class="ms-1 btn btn-info"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#newHabitModal"
          >
            <i class="mdi mdi-plus"></i>
          </button>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>

  <!-- Button trigger modal -->

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
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
