<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="">
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Modal } from 'bootstrap'
import { watchEffect } from '@vue/runtime-core';
import { AppState } from '../AppState';
export default {
  setup() {
    watchEffect(() => {
      if (AppState.newAward) {
        setTimeout(() => {
          Modal.getOrCreateInstance(document.getElementById('display-award')).hide()
        }, 2000);
      }
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>