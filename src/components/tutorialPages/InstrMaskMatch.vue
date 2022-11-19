<template>
  <b-modal
    id="modal-center-matching-task-instructions"
    size="xl"
    centered
    title="Matching Task Instructions"
    :hide-footer="true"
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    :footer-bg-variant="footerBgVariant"
    :footer-text-variant="footerTextVariant"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <img :src="require('../../assets/Instructions/Text Only Pages/Mask Matching Instructions.png')"
        style="width: 94%; height: auto; transform: translate(-50%, 0%); margin-left: 50%;"/>
    </b-container>

    <b-button
      style="float: right;"
      :disabled="wait"
      @click="$bvModal.hide('modal-center-matching-task-instructions')"
      variant="success"
      size="lg"
      v-b-modal.modal-center-matching-task
    >Next</b-button>
  </b-modal>
</template>


<script>
export default {
    name: "matching-task-instructions",
    props: ["windowsize"],
    components: {},
    data() {return {wait: false};},
    methods: {not_yet() {setTimeout(function () {this.wait = false;}, 4500);},},
};
</script>

<style scoped>
</style>