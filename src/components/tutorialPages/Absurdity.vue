<template>
  <b-modal
    id="modal-center-Absurdity"
    size="xl"
    centered
    title="This is an absurdity."
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <div
          style="height: 0; padding-bottom: calc(56.25% + 35px); position:relative; width: 100%;"
        >
          <iframe
            allow="autoplay; gyroscope;"
            allowfullscreen
            height="100%"
            referrerpolicy="strict-origin"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            style="transform: translate(-50%, 0); border:0; height:50%; overflow:hidden; position:absolute; top:0; width:50%"
            title="Embedded content"
          ></iframe>
        </div>

        <!-- Background items opacity 1-10 -->
        <img
          :src="require('../../assets/Instructions/Machines/box1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/box2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options4.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine03a.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine03b.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"
        />

        <!-- opacity 11-17 -->
        <img
          :src="require('../../assets/Instructions/Machines/az.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/jk.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlgive.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlkeep.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/control1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"
        />

        <!-- opacity 18-21 -->
        <img
          :src="require('../../assets/Instructions/Machines/mchoice5.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice6.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice7.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice8.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"
        />

        <!-- opactiy 22-24 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/space4.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext08.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext09.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 0.4s' }"
        />

        <!-- Dots opacity 25-33 -->
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_25, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspup5.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspdn5.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Dots/dotspsafe4.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.0s' }"
        />

        <!-- You got x dots opacity 34-38 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/yougot1.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/yougot2.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/yougot3.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_36, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/yougot4.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_37, transition: 'opacity 0.5s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/yougot5.png')"
          v-bind:style="{ maxWidth: '50%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_38, transition: 'opacity 0.5s' }"
        />
      </div>

      <div>
        <video ref="videoPlayer" class="video-js"></video>
      </div>
    </b-container>
    <b-button
      @click="this.reset_animation_back"
      variant="outline-primary"
      :disabled="finishanimate"
      size="lg"
    >Back</b-button>
    <b-button
      @click="this.reset_animation_next"
      style="float: right;"
      variant="outline-primary"
      :disabled="finishanimate"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
//import videojs from 'video.js';
//import VueCoreVideoPlayer from 'vue-core-video-player' // Vue.use(VueCoreVideoPlayer)

export default {
  name: "Absurdity",
  props: ["windowsize"],
  //components: {
  //VideoPlayer
  //},
  data() {
    return {
      //     videoOptions: {
      // 	autoplay: true,
      // 	controls: true,
      // 	sources: [
      // 		{
      // 			src:
      // 				"../../assets/Instructions/Videos/GOPR3254.mp4",
      // 		type: "video/mp4"
      // 		}
      // 	]
      // },
      page_num: "13",
      block_listeners: true,
      Timevar: "1",
      Dimmer: "1",
      SetZero: "1",
      Viel: true,
      opacity_1: "100%",
      opacity_2: "100%",
      opacity_3: "100%",
      opacity_4: "100%",
      opacity_5: "100%",
      opacity_6: "100%",
      opacity_7: "100%",
      opacity_8: "100%",
      opacity_9: "1",
      opacity_10: "1",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "100%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "100%",
      opacity_23: "100%",
      opacity_24: "0%",
      opacity_25: "0%",
      opacity_26: "100%",
      opacity_27: "0%",
      opacity_28: "0%",
      opacity_29: "100%",
      opacity_30: "0%",
      opacity_31: "0%",
      opacity_32: "0%",
      opacity_33: "0%",
      opacity_34: "0%",
      opacity_35: "0%",
      opacity_36: "0%",
      opacity_37: "0%",
      opacity_38: "0%",

      mutex: false,
      finishanimate: false,
    };
  },
  // Keyboard listener
  created: function () {
    let parent = this;
    window.addEventListener("keyup", function (event) {
      // eslint-disable-next-line no-console
      if (parent.show) {
        if (parent.block_listeners == true) {
          return;
        }
        if (event.keyCode == 90) {
          // Spacebar 1
          parent.Timevar = "10";
        } else if (event.keyCode == 65) {
          // Give Control
          //parent.Timevar = '2'
          //parent.resetAnimation()
          parent.killAnimation();
        } else if (event.keyCode == 81) {
          // Give Control
          //parent.Timevar = '2'
          //parent.resetAnimation()
          parent.Dimmer = "0.5";
        }
        if (event.keyCode == 32) {
          // Spacebar 1
          parent.animate1();
        } else if (event.keyCode == 74) {
          // Give Control
          parent.animateJ();
        } else if (event.keyCode == 75) {
          // Keep Control
          parent.animateK();
        }
        if (parent.Viel == true) {
          this.$bvModal.hide("modal-center-Trystuffout");
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
      if (modalId != "modal-center-Absurdity") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      //setTimeout(() => this.animate(), 0);
      this.$bvModal.hide("modal-center-Trystuffout");
    });
  },
  methods: {
    killViel() {
      this.$bvModal.hide("modal-center-Trystuffout");
    },
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Trystuffout");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Foolish");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Absurdity");
      this.opacity_1 = "100%";
      this.opacity_2 = "100%";
      this.opacity_3 = "100%";
      this.opacity_4 = "100%";
      this.opacity_5 = "100%";
      this.opacity_6 = "100%";
      this.opacity_7 = "100%";
      this.opacity_8 = "100%";
      this.opacity_9 = "100%";
      this.opacity_10 = "100%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "100%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "100%";
      this.opacity_23 = "100%";
      this.opacity_24 = "0%";
      this.opacity_25 = "0%";
      this.opacity_26 = "100%";
      this.opacity_27 = "0%";
      this.opacity_28 = "0%";
      this.opacity_29 = "100%";
      this.opacity_30 = "0%";
      this.opacity_31 = "0%";
      this.opacity_32 = "0%";
      this.opacity_33 = "0%";
      this.opacity_34 = "0%";
      this.opacity_35 = "0%";
      this.opacity_36 = "0%";
      this.opacity_37 = "0%";
      this.opacity_38 = "0%";
      this.locked = true;
      this.mutex = false;
      this.finishanimate = false;
    },
    killAnimation() {
      this.$bvModal.hide("modal-center-Trystuffout");
      // this.opacity_1 = "100%"
      // this.opacity_2 = "100%"
      // this.opacity_3 = "100%"
      // this.opacity_4 = "100%"
      // this.opacity_5 = "100%"
      // this.opacity_6 = "100%"
      // this.opacity_7 = "100%"
      // this.opacity_8 = "100%"
      // this.opacity_9 = "100%"
      // this.opacity_10 = "100"
      // this.opacity_11 = "0%"
      // this.opacity_12 = "0%"
      // this.opacity_13 = "0%"
      // this.opacity_14 = "0%"
      // this.opacity_15 = "0%"
      // this.opacity_16 = "0%"
      // this.opacity_17 = "0%"
      // this.opacity_18 = "0%"
      // this.opacity_19 = "0%"
      // this.opacity_20 = "0%"
      // this.opacity_21 = "0%"
      // this.opacity_22 = "0%"
      // this.opacity_23 = "0%"
      // this.opacity_24 = "0%"
      // this.opacity_25 = "0%"
      // this.opacity_26 = "0%"
      // this.opacity_27 = "0%"
      // this.opacity_28 = "0%"
      // this.opacity_29 = "0%"
      // this.opacity_30 = "0%"
      // this.opacity_31 = "0%"
      // this.opacity_32 = "0%"
      // this.opacity_33 = "0%"
      // this.opacity_34 = "0%"
      // this.opacity_35 = "0%"
      // this.opacity_36 = "0%"
      // this.opacity_37 = "0%"
      // this.opacity_38 = "0%"

      //this.locked = true
      //this.mutex = false
      this.finishanimate = false;
    },
    animate1() {
      let parent = this;

      setTimeout(() => {
        parent.opacity_22 = "0%";
      }, 100);
      // Meeting 1 Flashing Prior Selections
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
        parent.opacity_33 = "0%";
      }, 300);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_33 = "1" * parent.Dimmer;
      }, 600);
      setTimeout(() => {
        parent.opacity_33 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 900);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_31 = "1" * parent.Dimmer;
      }, 1200);
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 1500);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_33 = "1" * parent.Dimmer;
      }, 1800);
      setTimeout(() => {
        parent.opacity_33 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 2100);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_31 = "1" * parent.Dimmer;
      }, 2400);
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 2700);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_33 = "1" * parent.Dimmer;
      }, 3000);
      setTimeout(() => {
        parent.opacity_33 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 3300);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_31 = "1" * parent.Dimmer;
      }, 3600);
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "1" * parent.Dimmer;
      }, 3900);
      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_33 = "1" * parent.Dimmer;
      }, 4200);
      setTimeout(() => {
        parent.opacity_23 = "0%";
        parent.opacity_24 = "1" * parent.Dimmer;
      }, 5000);
      setTimeout(() => {
        parent.opacity_12 = "100%";
      }, 0);
      //Disables BACK NEXT buttons until animation finishes at 6 seconds.
      setTimeout(() => {
        parent.finishanimate = false;
      }, 0);
    },
    animateJ() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_12 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_37 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_15 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_20 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_20 = "0%";
      }, 1000 * parent.Timevar);
      setTimeout(() => {
        parent.opacity_38 = "100%";
      }, 1500);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },

    animateK() {
      let parent = this;
      setTimeout(() => {
        parent.opacity_12 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_38 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "1" * parent.Dimmer;
      }, 0);
      setTimeout(() => {
        parent.opacity_16 = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_20 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_37 = "100%";
      }, 1500);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
  },
};
</script>

<style scoped>
</style>