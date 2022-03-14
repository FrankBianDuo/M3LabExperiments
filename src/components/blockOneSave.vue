<template>
  <!-- Here is the template section, where all the HTML code takes action -->
  <b-modal
    id="modal-center-2"
    size="xl"
    title="Experiment 2"
    v-model="show"
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
    modal-class="b1style"
  >  
    <!-- Encounter #1 Code -->
    <b-container class="bv-example-row" :style="this.windowsize">
      <b-row class="justify-content-center align-items-center my-1">
        <b-progress
          style="width: 100%;"
          :value="this.current_progress"
          :max="this.max_avatar"
          show-progress
          animated
        ></b-progress>
      </b-row>
      <b-row
        class="justify-content-center align-items-center my-1"
        :style="this.prior_choice_style"
      >
        <!-- These two fading effects need to be rendered first, otherwise they would be in the way -->
        <img
          :src="require(`../assets/Centered Atoms/Keep Control Glow.png`)"
          :style="this.global_size_keep_glow"
        />
        <img
          :src="require(`../assets/Centered Atoms/Give Control Glow.png`)"
          :style="this.global_size_give_glow"
        />

        <!-- These following imgs are the dots that appear in encounter #1 -->
        <img
          :style="this.global_size_ectr_1"
          :src="
            require(`../assets/Dots/E1 UB${
              this.combinations[this.current_avatar].M1AvatarPayoffA
            }.png`)
          "
        />
        <img
          :style="this.global_size_ectr_1"
          :src="
            require(`../assets/Dots/E1 UP${
              this.combinations[this.current_avatar].M1ParticipantPayoffA
            }.png`)
          "
        />
        <img
          :style="this.global_size_ectr_1"
          :src="
            require(`../assets/Dots/E1 DB${
              this.combinations[this.current_avatar].M1AvatarPayoffB
            }.png`)
          "
        />
        <img
          :style="this.global_size_ectr_1"
          :src="
            require(`../assets/Dots/E1 DP${
              this.combinations[this.current_avatar].M1ParticipantPayoffB
            }.png`)
          "
        />
        <img :src="require('../assets/Centered Atoms/E1 Box.png')" :style="this.global_size" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list[this.current_avatar],
              4
            )}.png`)
          "
          :style="this.avatar_1"
        />
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_1" />
        <!-- Here are three alternatives of the arrow in encounter #1 {neutral, up, down} -->
        <!-- They will fade in or/and out depending on the current scenario -->
        <img
          :src="require(`../assets/Centered Atoms/E1 Dot Box Black.png`)"
          :style="this.arrow_style_one"
        />
        <img
          :src="require(`../assets/Centered Atoms/E1 Dot Box Choice Up.png`)"
          :style="this.arrow_style_two"
        />
        <img
          :src="require(`../assets/Centered Atoms/E1 Dot Box Choice Dn.png`)"
          :style="this.arrow_style_three"
        />
        <!-- ^^^^^^^^^^^^^^ -->
        <img :src="require('../assets/Centered Atoms/E1 You.png')" :style="this.global_size" />
      </b-row>

      <!-- Encounter #2 HTML code -->
      <b-row
        class="justify-content-center align-items-center mt-5 bt-5"
        :style="this.current_choice_style"
      >
        <img
          :src="require(`../assets/Centered Atoms/E2 Pred Up.png`)"
          :style="this.global_size_pred_up"
        />
        <img
          :src="require(`../assets/Centered Atoms/E2 Pred Dn.png`)"
          :style="this.global_size_pred_dn"
        />
        <img
          :style="this.global_size"
          :src="
            require(`../assets/Dots/E2 UB${
              this.combinations[this.current_avatar].M2AvatarPayoffA
            }.png`)
          "
        />
        <img
          :style="this.global_size"
          :src="
            require(`../assets/Dots/E2 UP${
              this.combinations[this.current_avatar].M2ParticipantPayoffA
            }.png`)
          "
        />
        <img
          :style="this.global_size"
          :src="
            require(`../assets/Dots/E2 DB${
              this.combinations[this.current_avatar].M2AvatarPayoffB
            }.png`)
          "
        />
        <img
          :style="this.global_size"
          :src="
            require(`../assets/Dots/E2 DP${
              this.combinations[this.current_avatar].M2ParticipantPayoffB
            }.png`)
          "
        />
        <img :src="require('../assets/Centered Atoms/E2 Box.png')" :style="this.global_size" />
        <img :src="require(`../assets/Feedback Trust.png`)" :style="this.trust_effect_style" />

        <!-- HTML Element that presents a random avatar -->
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list[this.current_avatar],
              4
            )}.png`)
          "
          :style="this.avatar_2"
        />
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_2" />
        <img
          :src="require(`../assets/Centered Atoms/E2 ${current_arrow}`)"
          :style="this.global_size"
        />
        <img :src="require(`../assets/Centered Atoms/Faded Arrows.png`)" :style="this.global_size" />
        <img
          :src="require(`../assets/Centered Atoms/Keep Control Box Black.png`)"
          :style="this.global_size_control_priors"
        />

        <!--  Background You Avatar -->
        <img :src="require(`../assets/Centered Atoms/E2 You.png`)" :style="this.global_size" />
        <img
          :src="require(`../assets/Centered Atoms/You Arrows.png`)"
          :style="this.global_size_control_priors"
        />
        <img :src="require(`../assets/Centered Atoms/AZ.png`)" :style="this.global_size_AZ" />
        <img :src="require(`../assets/Centered Atoms/JK.png`)" :style="this.global_size_JK" />
        <img
          :src="require(`../assets/Centered Atoms/Barrier.png`)"
          :style="this.global_size_barrier"
        />

        <img
          :style="this.global_size_control_box"
          :src="
            require(`../assets/Dots/E2 CP${
              this.combinations[this.current_avatar].KeepDots
            }.png`)
          "
        />
        <!-- I commented out these dots because I changed the instructions.  Now meeting 2 black dots vanish after avatar's choice, making these dots irrelevant. -->
        <!-- <img 
          :style="this.global_size_control_priors"
          v-if="this.encounter_1_payoff_show" :src="require(`../assets/Dots/E2 CB3.png`)" /> 
        -->
      </b-row>
    </b-container>
    <b-modal ref="my-modal" hide-footer title="Rest Break">
      <h3 align="center">0{{ this.rb_min }}:{{ this.rb_seczero }}{{ this.rb_sec }}</h3>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Back to Experiment</b-button>
    </b-modal>
  </b-modal>
</template>

<script>
import trialOneTrialData from "./trialData.js";
import datasheet_sample from "./newSample4.json";
// The origional payoff structures come from "./payoff.json", so to revert back just delete the '2'.
import payoff_structure from "./payoff4.json";
export default {
    name: "BlockTwo",
  // name: "BlockOne",
  props: ["participant_name"],
  components: {},
  data() {
    return {
      datasheet_sample_data: datasheet_sample,
      payoff_structure_data: payoff_structure,
      windowsize: "height: 600px;",
      global_size: "position: absolute; width: 70%; height: auto; top: 50px;",
      global_size_ectr_1:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_keep_glow:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_give_glow:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_AZ:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      global_size_JK:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_pred_up:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_pred_dn:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_control_box:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      global_size_control_priors:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      global_size_barrier:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      // Rest break data
      rb_shown: false,
      rb_min: 0,
      rb_sec: 15,
      rb_seczero: "",
      // ^^^^^
      avatar_1:
        "position: absolute; max-width: 8.6%; max-height: auto; left: 16%; top: 19.99%;",
      avatar_2:
        "position: absolute; max-width:8.6%; max-height:auto; left: 16%; bottom: 26.3%;",

      // show is the data that toggles the visibility of block #1's modal
      show: false,
      b_show_1: true,
      free_space: true,
      fading: false,
      block_listeners: false,
      you_avatar_type: "1",
      // avatar_size: '5%',
      // Data for styling
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      colors: ["red", "yellow", "brown", "orange", "black"],
      scenarioColor: `height: 280px; backgroundColor: red;`,
      index: 0,
      // ^^^
      show_current: 0,
      show_prior: 1,
      // These data help with the fading effect with the arrow in encounter #1
      trust_effect_style:
        "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 0%",
      holder_stype: "White",
      arrow_style_one:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.5s;",
      arrow_style_two:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;",
      arrow_style_three:
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;",
      arrow_num: "1",
      avatar_num: "1",
      // This generates an array from 0 to 323
      avatar_list: this.shuffle(
        Array(324)
          .fill()
          .map((x, i) => i)
      ),
      current_avatar: 0,
      current_progress: 0,
      current_arrow: "Dot Boxes.png",
      show_cur_num: false,
      prediction: null,
      // How many games to run 216 + 8 + 6
      max_avatar: 234,
      trial_started: 0,
      avatar_choices: ["3", "2"],
      player_payoff: ["1.5", "2", "2.5"],
      enctr_2_payoff: [
        {
          p_first: "3",
          a_first: "1.5",
          p_second: "1",
          a_second: "2.5",
        },
        {
          p_first: "3",
          a_first: "2.5",
          p_second: "1",
          a_second: "1.5",
        },
      ],
      enctr_1_payoff: trialOneTrialData,
      combinations: [],
    };
  },
  beforeMount() {
    this.buildCombinations();
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      if (modalId != "modal-center") {
        return;
      }
      // Close the tutorial modal (page_73), stop the instruction time period timer
      this.hide_tutorial();
      var d = new Date();
      var n = d.getTime();
      this.$emit("timesync", n);
    });
  },
  // Event listener for all keyboard events
  created: function () {
    let parent = this;
    window.addEventListener("keydown", function (event) {
      // Prevent the spacebar jerk
      // if (event.keyCode == 32) {
      //   event.preventDefault();
      // }
      if (parent.show) {
        // Space
        // if (event.keyCode == 32 || event.keyCode == 80 && parent.free_space) {
        if (event.keyCode == 32 && parent.free_space) {
          // eslint-disable-next-line no-console
          console.log("Space Listener Event Fired");
          parent.free_space = false;
          parent.block_listeners = true;
          parent.priorAvatar();
          var d = new Date();
          var n = d.getTime();
          parent.trial_started = n;
        } else if (
          event.keyCode == 74 &&
          parent.prediction != null &&
          !parent.free_space &&
          !parent.fading &&
          !parent.block_listeners
        ) {
          parent.otherChoice();
        } else if (
          event.keyCode == 75 &&
          parent.prediction != null &&
          !parent.free_space &&
          !parent.fading &&
          !parent.block_listeners
        ) {
          parent.selfChoice();
        } else if (
          event.keyCode == 65 &&
          parent.prediction == null &&
          !parent.free_space &&
          !parent.fading &&
          !parent.block_listeners
        ) {
          // Prediction A
          parent.block_listeners = true;
          parent.predictUp();
        } else if (
          event.keyCode == 90 &&
          parent.prediction == null &&
          !parent.free_space &&
          !parent.fading &&
          !parent.block_listeners
        ) {
          // Prediction Z
          parent.block_listeners = true;
          parent.predictDown();
        }
      }
    });
  },
  computed: {
    prior_choice_style() {
      return `opacity: ${this.show_prior}; transition: opacity 0.5s;`;
    },
    current_choice_style() {
      return `opacity: ${this.show_current}; transition: opacity 0.5s;`;
    },
  },
  methods: {
    reset_ectr2_visuals() {
      this.global_size_AZ =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.global_size_JK =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_pred_up =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_pred_dn =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_control_box =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_control_priors =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.global_size_barrier =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
    },
    hide_tutorial() {
      this.$bvModal.hide("modal-center-instruction73");
    },
    showModal() {
      if (this.rb_sec < 10) {
        this.rb_seczero = "0";
      }
      this.rb_shown = true;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.rb_shown = false;
      this.rb_min = 0;
      this.rb_sec = 15;
      this.rb_seczero = "";
      this.$refs["my-modal"].hide();
    },
    // Helper function to turn values into dots
    dots_identifier(value) {
      if (value == "1") {
        return "1";
      }
      if (value == "1.5") {
        return "2";
      }
      if (value == "2") {
        return "3";
      }
      if (value == "2.5") {
        return "4";
      }
      if (value == "3") {
        return "5";
      }
    },
    // Helper function to identify the payoff type { M/P H/S }
    trial_identifier(top_left, top_right, bot_left, bot_right) {

      if (
        (Number(top_left) - Number(bot_left)) *
          (Number(top_right) - Number(bot_right)) >
        0
      ) {
        return "WP";
      } else {
        return "HS";
      }
    },
    helper() {
      alert("click the avatar!");
    },
    priorAvatar() {
      this.encounter_1_payoff_show = true;
      this.global_size_ectr_1 =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.5s;";
      let parent = this;
      setTimeout(function () {
        parent.arrow_num =
          parent.combinations[parent.current_avatar].a_c_present;
        parent.arrow_style_one =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;";
        if (parent.arrow_num == "2") {
          parent.arrow_style_two =
            "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.5s;";
          // eslint-disable-next-line no-console
          console.log("arrow 2");
        } else {
          parent.arrow_style_three =
            "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.5s;";
          // eslint-disable-next-line no-console
          console.log("arrow 3");
        }
      }, 1000);
      setTimeout(function () {
        parent.show_current = 1;
      }, 2000);
      setTimeout(function () {
        parent.block_listeners = false;
      }, 2250);
    },
    predictUp() {
      // eslint-disable-next-line no-console
      console.log("Predict Up");
      // this.current_arrow = 'Pred Up.png'
      this.global_size_pred_up =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.global_size_control_box =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      if (this.combinations[this.current_avatar].enctr_2_reverse == 1) {
        this.prediction = 0;
      } else {
        this.prediction = 1;
      }
      this.combinations[this.current_avatar].keypress = "A";
      let parent = this;
      setTimeout(function () {
        parent.predictionHelper();
      }, 250);
    },
    predictDown() {
      // eslint-disable-next-line no-console
      console.log("Predict Down");
      this.global_size_pred_dn =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.global_size_control_box =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      // this.current_arrow = 'Pred Dn.png'
      if (this.combinations[this.current_avatar].enctr_2_reverse == 1) {
        this.prediction = 1;
      } else {
        this.prediction = 0;
      }
      this.combinations[this.current_avatar].keypress = "Z";
      let parent = this;
      setTimeout(function () {
        parent.predictionHelper();
      }, 250);
    },
    predictionHelper() {
      this.global_size_AZ =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_JK =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.show_cur_num = true;
      var d = new Date();
      var n = d.getTime();
      this.combinations[this.current_avatar].reaction_time_prediction =
        n - this.trial_started - 250;
      this.combinations[this.current_avatar].reaction_time_prediction *= 0.001;
      this.trial_started = n;
      this.block_listeners = false;
    },
    hide_choice_visuals() {
      this.global_size_control_box =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_control_priors =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_keep_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_give_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_pred_up =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.global_size_pred_dn =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      let parent = this;
      setTimeout(function () {
        parent.global_size_barrier =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      }, 500);
    },
    otherChoice() {
      // eslint-disable-next-line no-console
      console.log("Trust");
      this.fading = true;
      let parent = this;
      this.global_size_JK =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";

      this.global_size_give_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.combinations[this.current_avatar].keypress += "J";
      setTimeout(function () {
        parent.hide_choice_visuals();
      }, 500);
      setTimeout(function () {
        parent.ChoiceHelper(1);
        // This controls where meeting 2 fades out.
      }, 1500);
    },
    selfChoice() {
      // eslint-disable-next-line no-console
      console.log("Distrust");
      this.fading = true;
      this.global_size_JK =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      let parent = this;
      this.global_size_keep_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.combinations[this.current_avatar].keypress += "K";
      setTimeout(function () {
        parent.hide_choice_visuals();
      }, 500);
      setTimeout(function () {
        parent.ChoiceHelper(0);
        // This controls where meeting 2 fades out.
      }, 1500);
    },
    // Helper function for rest break count downs
    countDown() {
      let parent = this;
      if (this.rb_shown == false) {
        parent.rb_sec = 15;
        parent.rb_min = 0;
        parent.rb_seczero = "";
        return;
      }
      setTimeout(function () {
        parent.rb_sec -= 1;
        if (parent.rb_sec < 10) {
          parent.rb_seczero = "0";
        } else {
          parent.rb_seczero = "";
        }
        if (parent.rb_min == 0 && parent.rb_sec == 0) {
          parent.hideModal();
          parent.rb_sec = 15;
          parent.rb_min = 0;
          parent.rb_seczero = "";
        }
        if (parent.rb_sec == 0) {
          parent.rb_sec = 59;
          parent.rb_min -= 1;
          return;
        }
        parent.countDown();
      }, 1000);
    },
    // Helper Function that handles the data flow when a participant decides to trust or distrust an avatar
    ChoiceHelper(input) {
      this.fading = true;
      this.free_space = false;
      var d = new Date();
      var n = d.getTime();
      this.combinations[this.current_avatar].reaction_time_trust =
        (n - this.trial_started) * 0.001;
      this.trial_started = 0;
      this.show_current = 0;
      this.show_prior = 0;
      let parent = this;
      this.current_progress += 1;
      this.combinations[this.current_avatar].trust = input;
      this.combinations[
        this.current_avatar
      ].trial_order = this.current_progress;
      this.combinations[this.current_avatar].prediction = this.prediction;
      this.combinations[this.current_avatar].avatar_id = this.avatar_list[
        this.current_avatar
      ];
      parent.global_size_keep_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      parent.global_size_give_glow =
        "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      setTimeout(function () {
        parent.current_avatar += 1;
        parent.global_size_ectr_1 =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;";
      }, 400);
      setTimeout(function () {
        parent.fading = false;

        parent.free_space = true;
        // parent.current_arrow = 'Dot Boxes.png'

        parent.prediction = null;
        parent.show_cur_num = false;
        // parent.current_avatar += 1;
        parent.$emit("blockTwoDone", parent.combinations);
        if (parent.current_avatar == parent.max_avatar) {
          parent.$bvModal.hide("modal-center-2");
          alert("Experiment #2 finished");
          // FIXME: connect this to the survey pages
          // parent.b_show_1 = false;
          parent.$bvModal.show("modal-center-FR1");
        }
        if (
          parent.current_avatar == 12 ||
          parent.current_avatar == 24 ||
          parent.current_avatar == 36 ||
          parent.current_avatar == 48 ||
          parent.current_avatar == 162
        ) {
          parent.showModal();
          parent.countDown();
          // 1000 = 1s
        }
        parent.show_prior = 1;
        parent.arrow_style_two =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.15s;";
        parent.arrow_style_three =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.15s;";
        parent.arrow_style_one =
          "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.15s;";
        parent.reset_ectr2_visuals();
      }, 750);
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    // Helper function for vertical positioning balance
    flipPayOff(struct) {
      var temp_struct = Object.assign({}, struct);
      var temp_1 = temp_struct["a_first"];
      var temp_2 = temp_struct["p_first"];
      // eslint-disable-next-line no-console
      temp_struct["a_first"] = temp_struct["a_second"];
      temp_struct["p_first"] = temp_struct["p_second"];
      temp_struct["a_second"] = temp_1;
      temp_struct["p_second"] = temp_2;
      return temp_struct;
    },
    // Core function in this file
    // buildCombinations constructs an array that contains all information needed to carry out a randomized block #1
    // This array also contains data slots that will be filled as the participants progress
    buildCombinations() {
      var i = 0
      var trials = []
      for (i = 0; i < this.max_avatar; i++) {
        var new_comb = {
          label: this.payoff_structure_data[i]["Label"],
          M1AvatarPayoffA: this.payoff_structure_data[i]["M1AvatarPayoffA"],
          M1ParticipantPayoffA: this.payoff_structure_data[i]["M1ParticipantPayoffA"],
          M1AvatarPayoffB: this.payoff_structure_data[i]["M1AvatarPayoffB"],
          M1ParticipantPayoffB: this.payoff_structure_data[i]["M1ParticipantPayoffB"],
          M2AvatarPayoffA: this.payoff_structure_data[i]["M2AvatarPayoffA"],
          M2ParticipantPayoffA: this.payoff_structure_data[i]["M2ParticipantPayoffA"],
          M2AvatarPayoffB: this.payoff_structure_data[i]["M2AvatarPayoffB"],
          M2ParticipantPayoffB: this.payoff_structure_data[i]["M2ParticipantPayoffB"],
          KeepDots: this.payoff_structure_data[i]["KeepDots"],
          // 2 means up and 3 means down
          a_c: "2",
          // following are original dots data
          OriginalM1AvatarPayoffA: this.payoff_structure_data[i]["M1AvatarPayoffA"],
          OriginalM1ParticipantPayoffA: this.payoff_structure_data[i]["M1ParticipantPayoffA"],
          OriginalM1AvatarPayoffB: this.payoff_structure_data[i]["M1AvatarPayoffB"],
          OriginalM1ParticipantPayoffB: this.payoff_structure_data[i]["M1ParticipantPayoffB"],
          OriginalM2AvatarPayoffA: this.payoff_structure_data[i]["M2AvatarPayoffA"],
          OriginalM2ParticipantPayoffA: this.payoff_structure_data[i]["M2ParticipantPayoffA"],
          OriginalM2AvatarPayoffB: this.payoff_structure_data[i]["M2AvatarPayoffB"],
          OriginalM2ParticipantPayoffB: this.payoff_structure_data[i]["M2ParticipantPayoffB"],
          a_c_present: "2",
          // 1 means flipped and 0 means not flipped
          enctr_1_reverse: Math.floor(Math.random() * 2),
          enctr_2_reverse: Math.floor(Math.random() * 2),
          enctr_1_type: this.trial_identifier(this.payoff_structure_data[i]["M1AvatarPayoffA"], this.payoff_structure_data[i]["M1ParticipantPayoffA"], this.payoff_structure_data[i]["M1AvatarPayoffB"], this.payoff_structure_data[i]["M1ParticipantPayoffB"]),
          enctr_2_type: this.trial_identifier(this.payoff_structure_data[i]["M2AvatarPayoffA"], this.payoff_structure_data[i]["M2ParticipantPayoffA"], this.payoff_structure_data[i]["M2AvatarPayoffB"], this.payoff_structure_data[i]["M2ParticipantPayoffB"]),
          vert_pos: null,
          keypress: "",
          trust: null,
          prediction: null,
          reaction_time_trust: null,
          reaction_time_prediction: null,
          encnt1_cond: this.datasheet_sample_data[i]["Encnt1_Cond"],
          // encnt1_cond: "N/A",
          encnt2_cond: this.datasheet_sample_data[i]["Encnt2_Cond"],
          // encnt2_cond: "N/A",
          trial_order: null,
          trial_number: String(i + 1),
          avatar_id: null,
          // Some fixed column values
          choice_type: this.datasheet_sample_data[i]["Choice_Type"],
          choice_deg: this.datasheet_sample_data[i]["Choice_Deg"],
          sure_thing: this.datasheet_sample_data[i]["Sure_Thing"],
          // @Frank: uncomment this line to have triplets
          triplets: this.datasheet_sample_data[i]["Triplets"],
          // choice_type: "N/A",
          // choice_deg: "N/A",
          // sure_thing: "N/A",
          // triplets: "N/A",
        }
        if (new_comb.enctr_1_reverse == 1) {
          var tempLeft, tempRight
          tempLeft = new_comb.M1AvatarPayoffA
          tempRight = new_comb.M1ParticipantPayoffA
          new_comb.M1AvatarPayoffA = new_comb.M1AvatarPayoffB
          new_comb.M1ParticipantPayoffA = new_comb.M1ParticipantPayoffB
          new_comb.M1AvatarPayoffB = tempLeft
          new_comb.M1ParticipantPayoffB = tempRight
          // temp here flipped the enctr type by munipulating the string
          let temp = new_comb.enctr_1_type[1] + new_comb.enctr_1_type[0];
          new_comb.enctr_1_type = temp;
          // Flipping the avatar's choice in ectr1 to reflect the flipped pay off structure
          if (new_comb.a_c == "2") {
            new_comb.a_c_present = "3";
          }
        }
        if (new_comb.enctr_2_reverse == 1) {
          var tempLeft, tempRight
          tempLeft = new_comb.M2AvatarPayoffA
          tempRight = new_comb.M2ParticipantPayoffA
          new_comb.M2AvatarPayoffA = new_comb.M2AvatarPayoffB
          new_comb.M2ParticipantPayoffA = new_comb.M2ParticipantPayoffB
          new_comb.M2AvatarPayoffB = tempLeft
          new_comb.M2ParticipantPayoffB = tempRight

          let temp = new_comb.enctr_2_type[1] + new_comb.enctr_2_type[0];
          new_comb.enctr_2_type = temp;
        }
        if (i >= 222) {
          new_comb.enctr_1_type = "CC"
        } else if (i >= 216) {
          new_comb.enctr_1_type = "BB"
        }
        new_comb.vert_pos = new_comb.enctr_1_type + new_comb.enctr_2_type;
        trials.push(new_comb)
      }
      trials = this.shuffle(trials);
      // eslint-disable-next-line no-console
      console.log("combinations!")
      // eslint-disable-next-line no-console
      console.log(trials)
      this.combinations = trials;
    },
    // buildCombinations() {
    //   var i, k, j, o;
    //   var segment = [];
    //   for (i = 0; i < this.avatar_choices.length; i++) {
    //     for (k = 0; k < this.player_payoff.length; k++) {
    //       for (j = 0; j < this.enctr_2_payoff.length; j++) {
    //         for (o = 0; o < this.enctr_1_payoff.length; o++) {
    //           var new_comb = {
    //             a_c: this.avatar_choices[i],
    //             a_c_present: this.avatar_choices[i],
    //             pl_p: this.player_payoff[k],
    //             a_p: this.enctr_2_payoff[j],
    //             pr_p: this.enctr_1_payoff[o],
    //             pr_p_present: this.enctr_1_payoff[o],
    //             a_p_present: this.enctr_2_payoff[j],
    //             enctr_1_type: this.trial_identifier(this.enctr_1_payoff[o]),
    //             enctr_2_type: this.trial_identifier(this.enctr_2_payoff[j]),
    //             enctr_1_reverse: Math.floor(Math.random() * 2),
    //             enctr_2_reverse: Math.floor(Math.random() * 2),
    //             vert_pos: null,
    //             trust: null,
    //             keypress: "",
    //             reaction_time_trust: null,
    //             reaction_time_prediction: null,
    //             trust_condition: null,
    //             trial_order: null,
    //             trial_id: null,
    //             prediction: null,
    //             avatar_id: null,
    //             game_condition:
    //               this.avatar_choices[i] == "2"
    //                 ? this.enctr_1_payoff[o].top
    //                 : this.enctr_1_payoff[o].down,
    //           };
    //           // Recognize the six different structures in encounter #2
    //           if (
    //             this.player_payoff[k] == "1.5" &&
    //             this.enctr_2_payoff[j].a_first == "2.5"
    //           ) {
    //             new_comb.trust_condition = 1;
    //           } else if (
    //             this.player_payoff[k] == "2" &&
    //             this.enctr_2_payoff[j].a_first == "2.5"
    //           ) {
    //             new_comb.trust_condition = 2;
    //           } else if (
    //             this.player_payoff[k] == "2.5" &&
    //             this.enctr_2_payoff[j].a_first == "2.5"
    //           ) {
    //             new_comb.trust_condition = 3;
    //           } else if (
    //             this.player_payoff[k] == "1.5" &&
    //             this.enctr_2_payoff[j].a_first == "1.5"
    //           ) {
    //             new_comb.trust_condition = 4;
    //           } else if (
    //             this.player_payoff[k] == "2" &&
    //             this.enctr_2_payoff[j].a_first == "1.5"
    //           ) {
    //             new_comb.trust_condition = 5;
    //           } else if (
    //             this.player_payoff[k] == "2.5" &&
    //             this.enctr_2_payoff[j].a_first == "1.5"
    //           ) {
    //             new_comb.trust_condition = 6;
    //           }
    //           new_comb.trial_id = String(
    //             6 * (Number(new_comb.game_condition) - 1) +
    //               Number(new_comb.trust_condition)
    //           );
              // if (new_comb.enctr_1_reverse == 1) {
              //   new_comb.pr_p_present = this.flipPayOff(new_comb.pr_p);
              //   // temp here flipped the enctr type by munipulating the string
              //   let temp = new_comb.enctr_1_type[1] + new_comb.enctr_1_type[0];
              //   new_comb.enctr_1_type = temp;
              //   // Flipping the avatar's choice in ectr1 to reflect the flipped pay off structure
              //   if (new_comb.a_c == "2") {
              //     new_comb.a_c_present = "3";
              //   } else {
              //     new_comb.a_c_present = "2";
              //   }
              // }
              // if (new_comb.enctr_2_reverse == 1) {
              //   new_comb.a_p_present = this.flipPayOff(new_comb.a_p);
              //   let temp = new_comb.enctr_2_type[1] + new_comb.enctr_2_type[0];
              //   new_comb.enctr_2_type = temp;
              // }
    //           new_comb.vert_pos = new_comb.enctr_1_type + new_comb.enctr_2_type;
    //           segment.push(new_comb);
    //         }
    //       }
    //     }
    //   }
    //   segment = this.shuffle(segment);
    //   this.combinations = segment;
    // },
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      // eslint-disable-next-line no-console
      console.log(
        n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
      );
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join(z) + n;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.b-col {
  transition: background-color 0.3s;
}
.frac {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.001em;
  text-align: center;
}
.frac > span {
  display: block;
  padding: 0.1em;
}
.frac span.bottom {
  border-top: thin solid #4b00ff;
}
.frac span.symbol {
  display: none;
}
</style>
