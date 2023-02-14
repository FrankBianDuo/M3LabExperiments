<template>
  <b-modal
    id="modal-center-ExperInfo"
    size="xl"
    centered
    title="Experiment Information"
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
        :src="require('../../assets/Instructions/Text Only Pages/Experiment Information.png')"
        style="width: 85%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"
      />

      <div>
        <h1>{{"Participant ID: " + pID}}</h1>
      </div>
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-ExperInfo')"
      v-b-modal.modal-center-Consent
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-ExperInfo')"
      variant="success"
      size="lg"
      v-b-modal.modal-center-ExperTutor
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "ExperInfo",
  props: ["windowsize", "pID"],
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