<template>
  <b-modal
    id="modal-center-Consent-page-2"
    size="xl"
    centered
    title="Consent To Participant In Study Page 2"
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
        :src="require('../../assets/Instructions/Text Only Pages/Consent SubPoolp2.png')"
        style="width: 80%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"
      />

      <div>
        <h1>{{"Participant ID: " + pID}}</h1>
      </div>
    </b-container>
    <b-button
      @click="$bvModal.hide('modal-center-Consent-page-2')"
      v-b-modal.modal-center-BotStopper
      variant="outline-primary"
      size="lg"
    >NO I REFUSE TO PARTICIPATE</b-button>
    <b-button
      style="float: right;"
      @click="$bvModal.hide('modal-center-Consent-page-2')"
      variant="success"
      size="lg"
      v-b-modal.modal-center-Consent-page-3
    >Consent page 3</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Consentp2",
  props: ["windowsize", "pID"],
  components: {},
  data() {
    // let parent = this
    return {
      // dispID: this.generateParticipantId(),
      show: false,
    };
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
</style>