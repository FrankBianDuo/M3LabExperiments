<template>
  <b-modal
    id="modal-center-BotStopper"
    size="xl"
    v-model="show"
    centered
    title="CAPTCHA"
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
        :src="require('../../assets/Instructions/Text Only Pages/Blanksquare.png')"
        style="width: 45%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"
      />

      <img
        :src="require('../../assets/Instructions/Bot_Stoppers/Bot Stopper 1.png')"
        v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"
      />
      <img
        :src="require('../../assets/Instructions/Bot_Stoppers/Bot Stopper 2.png')"
        v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.5s' }"
      />
      <img
        :src="require('../../assets/Instructions/Bot_Stoppers/Bot Stopper 3.png')"
        v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.5s' }"
      />
      <img
        :src="require('../../assets/Instructions/Bot_Stoppers/Bot Stopper 4.png')"
        v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '0%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.5s' }"
      />
      <b-form>
        <b-form-group id="input-group-1" label="What do you see?" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="captcha"
            required
            placeholder="Enter the CAPTCHA here..."
          ></b-form-input>
        </b-form-group>
      </b-form>
      <!-- <b-button :v-if="!check_dev" variant="outline-primary" size="lg">Unlock</b-button> -->
    </b-container>
    <b-button :disabled="!check_robot" variant="outline-primary" size="lg">Back</b-button>
    <b-button
      :disabled="!check_robot"
      style="float: right;"
      @click="$bvModal.hide('modal-center-BotStopper')"
      variant="outline-primary"
      size="lg"
      v-b-modal.modal-center-Consent-page-1
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "BotStopper",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      show: true,
      captcha: "",
      list: ["1", "2", "3", "4"],
      RandNum: "",
      opacity_1: "0%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
    };
  },
  computed: {
    check_robot() {
      return (
        this.captcha == "73?q5&" ||
        this.captcha == "{6@$8f" ||
        this.captcha == "<k%94h" ||
        this.captcha == "+2xk#)"
      );
    },
    check_dev() {
      return this.captcha == "m3M3";
    },
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      // eslint-disable-next-line no-console
      // console.log('Modal is about to be shown', bvEvent, modalId)
      if (modalId != "modal-center-BotStopper") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      var d = new Date();
      var n = d.getTime();
      this.$emit("timesync", n);
      this.mutex = true;
      this.block_listeners = false;
      setTimeout(() => this.picker(), 0);
      setTimeout(() => this.randanimate(), 0);
    });
  },
  methods: {
    // picker: function(){
    //     var chosenNumber = Math.floor(Math.random() * this.list.length);
    //     this.RandNum = this.list[chosenNumber];
    // },
    randanimate() {
      let parent = this;
      //RandNum = Math.floor(Math.random()*'1');
      if (parent.RandNum == "1") {
        setTimeout(() => {
          parent.opacity_1 = "100%";
        }, 0);
      } else if (parent.RandNum == "2") {
        setTimeout(() => {
          parent.opacity_2 = "100%";
        }, 0);
      } else if (parent.RandNum == "3") {
        setTimeout(() => {
          parent.opacity_3 = "100%";
        }, 0);
      } else if (parent.RandNum == "4") {
        setTimeout(() => {
          parent.opacity_4 = "100%";
        }, 0);
      }
    },
    picker: function () {
      var chosenNumber = Math.floor(Math.random() * this.list.length);
      this.RandNum = this.list[chosenNumber];
    },
  },
};
</script>


<style scoped>
</style>