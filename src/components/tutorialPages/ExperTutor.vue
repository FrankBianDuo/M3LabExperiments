<template>
  <b-modal
    id="modal-center-ExperTutor"
    size="xl"
    centered
    title="Experiment Tutorial"
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
      <img
        :src="require('../../assets/Instructions/Text Only Pages/Experiment Tutorial.png')"
        style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"
      />
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-ExperTutor')"
      v-b-modal.modal-center-ExperInfo
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-ExperTutor')"
      variant="success"
      size="lg"
      v-b-modal.modal-center-Instr01Intro
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "ExperTutor",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
</style>