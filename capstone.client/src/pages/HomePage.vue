<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- Insert Habits here -->
        <!-- TODO ternary to change habit color -->
        <div
          class="
            taskbar
            bg-primary
            d-flex
            justify-content-between
            align-items-center
            m-2
            p-2
            rounded
          "
        >
          <div class="h4">Quit Smoking</div>
          <label class="format-container">One</label>
          <input type="checkbox" @click="completeHabit" />
          <span class="checkmark"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
// .input {
// }

// .format-container input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   height: 0;
//   width: 0;
// }
// .custom-checkbox {
// }
</style>
