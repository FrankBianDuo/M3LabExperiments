<template>
  <b-modal
    id="modal-center-Instr01Intro"
    size="xl"
    centered
    title="Instruction Page 1 of 10"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Text -->
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/meetpeeps_v1.png')"
          v-bind:style="{ opacity: this.opacity_meetpeeps, transition: 'opacity 1.6s', maxWidth: '68%', height: 'auto', marginTop: '13.5%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Text -->
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/Intro_text01_engage.png')"
          v-bind:style="{ opacity: this.opacity_text_engage, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/Intro_text02_predict.png')"
          v-bind:style="{ opacity: this.opacity_text_predict, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/Intro_text03_behavior.png')"
          v-bind:style="{ opacity: this.opacity_text_behavior, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/Intro_text04_avatars_v1.png')"
          v-bind:style="{ opacity: this.opacity_text_avatars, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr01_Intro/Intro_text05_watch_v1.png')"
          v-bind:style="{ opacity: this.opacity_text_watch, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
      </div>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_presskey, transition: 'opacity 0.5s'}"
        >Press {{press}}.</b-button>
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
      :variant="nbc"
      :disabled="finish || hold"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Instr01Intro",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "1",
      skey: false,
      listen: true,
      sbc: "primary",
      nbc: "outline-primary",
      press: "space bar",
      keyflow1: false,
      keyflow2: false,
      keyflow3: false,
      keyflow4: false,
      keyflowAZ: false,
      keyflowJK: false,
      opacity_presskey: "0%",
      opacity_meetpeeps: "0%",

      opacity_text_engage: "100%",
      opacity_text_predict: "0%",
      opacity_text_behavior: "0%",
      opacity_text_avatars: "0%",
      opacity_text_watch: "0%",

      mutex: false,
      finish: true,
      hold: true,
    };
  },
  // Keyboard listener
  created: function () {
    let parent = this;
    window.addEventListener("keyup", function (event) {
      // eslint-disable-next-line no-console
      if (parent.show) {
        if (parent.listen == true) {
          return;
        }
        if (parent.keyflow1 == true && event.keyCode == 32) {
          // Spacebar 1
          parent.keyflow1 = false;
          parent.animate1();
        } else if (parent.keyflow2 == true && event.keyCode == 32) {
          // Spacebar 2
          parent.keyflow2 = false;
          parent.animate2();
        } else if (parent.keyflow3 == true && event.keyCode == 32) {
          // Spacebar 2
          parent.keyflow3 = false;
          parent.animate3();
        } else if (parent.keyflow4 == true && event.keyCode == 32) {
          // Spacebar 2
          parent.keyflow4 = false;
          parent.animate4();
        } else if (event.keyCode == 192) {
          // Enable Secret Key
          parent.skey = true;
        } else if (parent.skey == true && event.keyCode == 49) {
          // Secret Key
          parent.finish = false;
        }
      }
    });
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
      if (modalId != "modal-center-Instr01Intro") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.listen = false;
      setTimeout(() => this.animate0(), 0);
      // This prevents skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-ExperTutor");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Instr02Desire");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Instr01Intro");

      this.opacity_text_engage = "100%";
      this.opacity_text_predict = "0%";
      this.opacity_text_behavior = "0%";
      this.opacity_text_avatars = "0%";
      this.opacity_text_watch = "0%";
      this.opacity_presskey = "0%";
      this.opacity_meetpeeps = "0%";

      this.keyflow1 = false;
      this.keyflow2 = false;
      this.keyflow3 = false;
      this.keyflow4 = false;
      this.keyflowAZ = false;
      this.keyflowJK = false;
      this.skey = false;

      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.press = "space bar";
      this.mutex = false;
      this.finish = false;
      this.hold = true;
    },
    animate0() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Kill Avatars
      setTimeout(() => {
        parent.opacity_meetpeeps = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2000);
    },
    animate1() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_engage = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predict = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_behavior = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_avatars = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_watch = "0%";
      }, 0);
    },

    animate2() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow3 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_engage = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predict = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_behavior = "100%";
      }, 800);
       setTimeout(() => {
        parent.opacity_text_avatars = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_watch = "0%";
      }, 0);
    },

    animate3() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow4 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2000);

      // Enter Avatars
      setTimeout(() => {
        parent.opacity_meetpeeps = "100%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_engage = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predict = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_behavior = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_avatars = "100%";
      }, 800);
       setTimeout(() => {
        parent.opacity_text_watch = "0%";
      }, 0);
    },

    animate4() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_engage = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predict = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_behavior = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_avatars = "0%";
      }, 0);
       setTimeout(() => {
        parent.opacity_text_watch = "100%";
      }, 800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 7000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 7500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 8000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 10500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 11000);
    },
  },
};
</script>

<style scoped>
</style>