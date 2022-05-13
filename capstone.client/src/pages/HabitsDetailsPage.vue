<template>
  <div class="container-fluid">
    <div id="scrollable" class="row w-100 d-flex justify-content-center">
      <!-- This will be a differently formatted habit componennt -->
      <HabitDetails />
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .scrollable {
    flex-wrap: nowrap;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
  }
}
</style>