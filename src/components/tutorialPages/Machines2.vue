<template>
  <b-modal
    id="modal-center-Machines2"
    size="xl"
    centered
    title="Instruction Page 2 of 18"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Background items opacity 1-10 -->
        <img
          :src="require('../../assets/Instructions/Machines/box1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/box2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_2, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_3, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/arms2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_4, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_5, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/options2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_6, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine02a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine02b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_9, transition: 'opacity 2.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/you2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_10, transition: 'opacity 0.8s' }"
        />

        <!-- opacity 11-17 -->
        <img
          :src="require('../../assets/Instructions/Machines/az.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_11, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/jk.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_12, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_13, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/pred2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_14, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlgive.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_15, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/controlkeep.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_16, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/control1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_17, transition: 'opacity 0.2s' }"
        />

        <!-- opacity 18-21 -->
        <img
          :src="require('../../assets/Instructions/Machines/mchoice1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_18, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_19, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_20, transition: 'opacity 0.0s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/mchoice4.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_21, transition: 'opacity 0.0s' }"
        />

        <!-- opactiy 22-27 -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/meet1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_22, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/meet2.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_23, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/thisisyou.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_24, transition: 'opacity 1.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext03.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_26, transition: 'opacity 0.2s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext04a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_27, transition: 'opacity 0.2s' }"
        />

        <!-- Counter -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/count12.04.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_28, transition: 'opacity 0.2s' }"
        />

        <!-- Feedback texts -->
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext04b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_29, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext04c.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_30, transition: 'opacity 0.4s' }"
        />

        <!-- This redundancy places the machine bodies in front of the flashing arms -->
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine02a.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_7, transition: 'opacity 0.8s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Bodies/machine02b.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_8, transition: 'opacity 0.8s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02g.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_31, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02h.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_32, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02i.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_33, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02j.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_34, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02k.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_35, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02l.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_36, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02m.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_37, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/mtext02n.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_38, transition: 'opacity 0.4s' }"
        />

        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point1.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_39, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point3.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_40, transition: 'opacity 0.4s' }"
        />
        <img
          :src="require('../../assets/Instructions/Machines/Machine Text/point4.png')"
          v-bind:style="{ maxWidth: '54%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_41, transition: 'opacity 0.4s' }"
        />
      </div>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '52.75%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_0, transition: 'opacity 0.5s'}"
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
  name: "Machines2",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "13",
      skey: false,
      block_listeners: true,
      nbc: "outline-primary",
      sbc: "outline-secondary",
      press: "space bar",
      keyflow1: false,
      keyflow2: false,
      opacity_1: "0%",
      opacity_2: "0%",
      opacity_3: "0%",
      opacity_4: "0%",
      opacity_5: "0%",
      opacity_6: "0%",
      opacity_7: "0%",
      opacity_8: "0%",
      opacity_9: "0%",
      opacity_10: "0%",
      opacity_11: "0%",
      opacity_12: "0%",
      opacity_13: "0%",
      opacity_14: "0%",
      opacity_15: "0%",
      opacity_16: "0%",
      opacity_17: "0%",
      opacity_18: "0%",
      opacity_19: "0%",
      opacity_20: "0%",
      opacity_21: "0%",
      opacity_22: "0%",
      opacity_23: "0%",
      opacity_24: "0%",
      opacity_0: "0%",
      opacity_26: "0%",
      opacity_27: "0%",
      opacity_28: "0%",
      opacity_29: "0%",
      opacity_30: "0%",
      opacity_31: "0%",
      opacity_32: "0%",
      opacity_33: "0%",
      opacity_34: "0%",
      opacity_35: "0%",
      opacity_36: "0%",
      opacity_37: "0%",
      opacity_38: "0%",
      opacity_39: "0%",
      opacity_40: "0%",
      opacity_41: "0%",
      opacity_42: "0%",

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
        if (parent.block_listeners == true) {
          return;
        }
        if (
          parent.keyflow1 == true &&
          parent.keyflow2 == false &&
          event.keyCode == 32
        ) {
          // Spacebar 1
          parent.keyflow1 = false;
          parent.animate1();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == true &&
          event.keyCode == 65
        ) {
          // Predict A
          parent.animateA();
        } else if (
          parent.keyflow1 == false &&
          parent.keyflow2 == true &&
          event.keyCode == 90
        ) {
          // Predict Z
          parent.animateZ();
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
      if (modalId != "modal-center-Machines2") {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.mutex = true;
      this.block_listeners = false;
      setTimeout(() => this.meetings(), 500);
      // This prevents skipping through pages too quickly.
      setTimeout(() => (this.hold = false), 1000);
    });
  },
  methods: {
    reset_animation_back() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Machines1");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Machines3");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Machines2");
      this.opacity_1 = "0%";
      this.opacity_2 = "0%";
      this.opacity_3 = "0%";
      this.opacity_4 = "0%";
      this.opacity_5 = "0%";
      this.opacity_6 = "0%";
      this.opacity_7 = "0%";
      this.opacity_8 = "0%";
      this.opacity_9 = "0%";
      this.opacity_10 = "0%";
      this.opacity_11 = "0%";
      this.opacity_12 = "0%";
      this.opacity_13 = "0%";
      this.opacity_14 = "0%";
      this.opacity_15 = "0%";
      this.opacity_16 = "0%";
      this.opacity_17 = "0%";
      this.opacity_18 = "0%";
      this.opacity_19 = "0%";
      this.opacity_20 = "0%";
      this.opacity_21 = "0%";
      this.opacity_22 = "0%";
      this.opacity_23 = "0%";
      this.opacity_24 = "0%";
      this.opacity_0 = "0%";
      this.opacity_26 = "0%";
      this.opacity_27 = "0%";
      this.opacity_28 = "0%";
      this.opacity_29 = "0%";
      this.opacity_30 = "0%";
      this.opacity_31 = "0%";
      this.opacity_32 = "0%";
      this.opacity_33 = "0%";
      this.opacity_34 = "0%";
      this.opacity_35 = "0%";
      this.opacity_36 = "0%";
      this.opacity_37 = "0%";
      this.opacity_38 = "0%";
      this.opacity_39 = "0%";
      this.opacity_40 = "0%";
      this.opacity_41 = "0%";
      this.opacity_42 = "0%";
      this.nbc = "outline-primary";
      this.sbc = "outline-secondary";
      this.press = "space bar";
      this.keyflow1 = false;
      this.keyflow2 = false;
      this.skey = false;
      this.locked = true;
      this.mutex = false;
      this.finish = false;
      this.hold = true;
    },
    meetings() {
      let parent = this;

      setTimeout(() => {
        parent.opacity_31 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_1 = "100%";
        parent.opacity_3 = "100%";
        parent.opacity_5 = "100%";
        parent.opacity_7 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_22 = "100%";
      }, 2500);

      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "100%";
      }, 1500);

      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_23 = "100%";
      }, 3000);

      setTimeout(() => {
        parent.opacity_32 = "0%";
        parent.opacity_35 = "100%";
      }, 5500);

      setTimeout(() => {
        parent.opacity_35 = "0%";
        parent.opacity_36 = "100%";
        parent.opacity_9 = "100%";
      }, 9000);
      setTimeout(() => {
        parent.opacity_36 = "0%";
        parent.opacity_37 = "100%";
      }, 11500);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        parent.opacity_0 = "100%";
      }, 11500);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 12000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 12500);
    },
    animate1() {
      let parent = this;

      // Kill Meeting 1 Meeting 2 labels
      setTimeout(() => {
        parent.opacity_22 = "0%";
        parent.opacity_23 = "0%";
      }, 0);

      // Meeting 1 Flashing Prior Selections
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 100);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 300);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 400);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 500);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 600);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 700);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 900);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 1400);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 1600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 1700);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 1800);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 1900);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 2100);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 2300);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 2400);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 2600);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 2700);
      setTimeout(() => {
        parent.opacity_18 = "100%";
      }, 2800);
      setTimeout(() => {
        parent.opacity_18 = "0%";
      }, 2900);
      setTimeout(() => {
        parent.opacity_19 = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_19 = "0%";
      }, 3100);
      setTimeout(() => {
        parent.opacity_9 = "100%";
      }, 4000);
      // setTimeout(() => {parent.opacity_24 = "100%"}, 4000);
      setTimeout(() => {
        parent.opacity_2 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_4 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_6 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_8 = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_10 = "100%";
      }, 4000);

      setTimeout(() => {
        parent.opacity_28 = "100%";
      }, 4000);

      setTimeout(() => {
        parent.opacity_37 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_38 = "100%";
      }, 5000);

      // Flashes AZ to grap attention
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 5200);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 5400);
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 5600);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 5800);
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 6000);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 6200);
      setTimeout(() => {
        parent.opacity_11 = "100%";
      }, 6400);

      // Press A or Z.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "A or Z";
        parent.opacity_0 = "100%";
      }, 10000);
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 10500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_0 = "100%";
      }, 11000);
    },
    animateA() {
      let parent = this;
      // Kill key reminder
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 1500);

      // Kill extra graphics
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "0%";
        parent.opacity_33 = "0%";
        parent.opacity_34 = "0%";
        parent.opacity_35 = "0%";
        parent.opacity_36 = "0%";
        parent.opacity_37 = "0%";
        parent.opacity_38 = "0%";
        parent.opacity_11 = "0%";
      }, 0);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_20 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_13 = "100%";
        parent.opacity_14 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_20 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_39 = "0%";
        parent.opacity_40 = "0%";
        parent.opacity_41 = "0%";
        parent.opacity_42 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_39 = "100%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_40 = "100%";
      }, 200);

      // This provides feedback about that prediction.
      setTimeout(() => {
        parent.opacity_27 = "0%";
        parent.opacity_30 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_29 = "100%";
      }, 1800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 4000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 4500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 5000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 9000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
    animateZ() {
      let parent = this;

      // Kill key reminder
      setTimeout(() => {
        parent.opacity_0 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_11 = "0%";
      }, 1500);

      // Kill extra graphics
      setTimeout(() => {
        parent.opacity_31 = "0%";
        parent.opacity_32 = "0%";
        parent.opacity_33 = "0%";
        parent.opacity_34 = "0%";
        parent.opacity_35 = "0%";
        parent.opacity_36 = "0%";
        parent.opacity_37 = "0%";
        parent.opacity_38 = "0%";
        parent.opacity_11 = "0%";
      }, 0);

      setTimeout(() => {
        parent.opacity_38 = "0%";
      }, 0);

      // Prediction Feedback Down
      setTimeout(() => {
        parent.opacity_20 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_14 = "100%";
        parent.opacity_13 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_20 = "100%";
      }, 1100);
      setTimeout(() => {
        parent.opacity_39 = "0%";
        parent.opacity_40 = "0%";
        parent.opacity_41 = "0%";
        parent.opacity_42 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_39 = "100%";
      }, 1300);
      setTimeout(() => {
        parent.opacity_41 = "100%";
      }, 200);

      // This provides feedback about that prediction.
      setTimeout(() => {
        parent.opacity_27 = "0%";
        parent.opacity_29 = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_30 = "100%";
      }, 1800);

      // This changes the button to green!
      setTimeout(() => {
        parent.finish = false;
        parent.nbc = "success";
      }, 6000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 6500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 7000);
      setTimeout(() => {
        parent.nbc = "outline-primary";
      }, 8500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 9000);
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
    },
  },
};
</script>

<style scoped>
</style>