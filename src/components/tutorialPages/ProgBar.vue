<template>
  <b-modal
    id="modal-center-ProgBar"
    size="xl"
    centered
    title="Progress Bar"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/Instructions/Text Only Pages/BB 01.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Text Only Pages/BB 02.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Text Only Pages/BB 03.png')"
          v-bind:style="{ maxWidth: '90%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
      </div>
    </b-container>
    <b-button
      @click="this.reset_animation_back"
      variant="outline-primary"
      :disabled="hold"
      size="lg"
    >Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      :variant="ButtonColor"
      :disabled="finish || hold"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "ProgBar",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      ButtonColor: "outline-primary",
      opacity_1: "100%",
      opacity_2: "0%",
      opacity_3: "0%",
      mutex: false,
      finish: true,
      hold: true,
    };
  },
  computed: {
    page_id() {
      return "modal-center-instruction" + this.page_num;
    },
    center_title() {
      return "Instructions page " + this.page_num;
    },
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      // eslint-disable-next-line no-console
      // console.log('Modal is about to be shown', bvEvent, modalId)
      if (modalId != "modal-center-ProgBar") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      setTimeout(() => this.animate(), 500);
      // This is an experiment at preventing skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      //this.$bvModal.hide("modal-center-instruction" + this.page_num)  // this.$bvModal.hide(this current page)
      this.resetAnimation();
      this.$bvModal.show("modal-center-EndTF2"); //this.$bvModal.show(previous page)
    },
    reset_animation_next() {
      //this.$bvModal.hide("modal-center-instruction" + this.page_num)
      this.resetAnimation();
      this.$bvModal.show("modal-center-KeyHands");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-ProgBar");
      this.opacity_1 = "100%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.ButtonColor = "outline-primary";
      this.mutex = false;
      this.finish = false;
      this.hold = true;
    },
    animate() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_1 = "0%";
        parent.opacity_2 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_2 = "0%";
        parent.opacity_3 = "100%";
      }, 1500);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Disables BACK NEXT buttons until animation finishes at 2 seconds.
      setTimeout(() => {
        parent.finish = false;
      }, 2000);

      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 2000);
      setTimeout(() => {
        parent.ButtonColor = "outline-primary";
      }, 2500);
      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 3000);
      setTimeout(() => {
        parent.ButtonColor = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.ButtonColor = "success";
      }, 9000);
    },
  },
};
</script>


<style scoped>
</style>