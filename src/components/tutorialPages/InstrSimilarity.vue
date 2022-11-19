<template>
  <b-modal
    id="modal-center-similarity-task-instructions"
    size="xl"
    centered
    title="Instructions for similarity task"
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

      <img :src="require('../../assets/Instructions/Text Only Pages/Similarity Instructions.png')"
        style="width: 86%; height: auto; transform: translate(-50%, 0%); margin-left: 50%;" />
      <b-form>

        <b-form-group id="input-group-1" label="Dissimilar ---------------------------------------------------------------------------------------------------------------------------------------------------- Similar" label-for="input-1" style="transform: translate(0%, 24%);">
          <b-input-group>
            <b-form-input
              id="input-group-1"
              v-model="form.sim_score"
              type="range"
              number
              min="0"
              max="1"
              step="0.01"
            ></b-form-input>
          </b-input-group>
        </b-form-group>

      </b-form>
    </b-container>

    <b-button
      style="float: right;"
      :disabled="this.wait"
      @click="$bvModal.hide('modal-center-similarity-task-instructions')"
      variant="success"
      size="lg"
      v-b-modal.modal-center-similarity-task
    >Next</b-button>
  </b-modal>
</template>


<script>
export default {
  name: "similarity-task-instuctions",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      show: false,
      form: {sim_score: ""},
    //   wait: true,
      wait: this.not_yet()
    };
  },
  computed: {
    block() {
      return !(
        this.form.sim_score != "" 
      );
    },
  },
  methods: {
    //   not_yet() {
    //       this.wait = true;
    //       setTimeout(function () {this.wait = false;}, 3500);
    //   }
      not_yet() {
          setTimeout(function () {return this.wait = false;}, 5500);
      }
  },
};
</script>


<style scoped>
</style>