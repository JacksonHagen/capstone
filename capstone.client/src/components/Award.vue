<template>
  <div class="component">
    <img :src="award.img" height="270" alt="" />
  </div>
</template>


<script>
export default {
  props: {
    award: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>