<template>
  <div class="col-12 d-flex justify-content-center w-100 align-items-center">
    <div id="habit" class="mt-3 justify-content-center">
      <h3 class="">{{ habit.name }} name</h3>
      <div class="row">
        <div class="col-12 bg-light">
          <h6>{{ habit.inspiration }} inspiration</h6>
        </div>
        <div class="col-12 bg-light">
          <h6>{{ habit.streak }}streak & max streak {{ habit.maxStreak }}</h6>
        </div>
        <div class="col-12 bg-light">
          <h6>badges here</h6>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.scrollable {
  overflow-x: scroll;
  display: inline-block;
  flex-direction: column;
  min-width: 100vw;
}
</style>