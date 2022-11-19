<template>
  <b-modal
    id="modal-center-prediction-task"
    size="xl"
    title="Prediction Task"
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
      <b-row class="justify-content-center align-items-center my-1" :style="this.old_choice_style">
        <img :src="require(`../assets/Centered Atoms/Keep Control Glow.png`)" :style="this.gstyle_holdglow" />
        <img :src="require(`../assets/Centered Atoms/Give Control Glow.png`)" :style="this.gstyle_bbetglow" />

        <img :style="this.gstyle_room1" :src="require(`../assets/Dots/E1 UB${this.combinations[this.current_avatar].temp_As1}.png`)"/>
        <img :style="this.gstyle_room1" :src="require(`../assets/Dots/E1 UP${this.combinations[this.current_avatar].temp_Ao1}.png`)"/>
        <img :style="this.gstyle_room1" :src="require(`../assets/Dots/E1 DB${this.combinations[this.current_avatar].temp_Bs1}.png`)"/>
        <img :style="this.gstyle_room1" :src="require(`../assets/Dots/E1 DP${this.combinations[this.current_avatar].temp_Bo1}.png`)"/>
        <img :src="require('../assets/Centered Atoms/E1 Box.png')" :style="this.global_size" />

        <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
          this.combinations[this.current_avatar].avatar_id, 4)}.png`)"             :style="this.avatar_1"/>
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)"         :style="this.avatar_1" />
        <img :src="require(`../assets/Centered Atoms/E1 Dot Box Black.png`)"     :style="this.arrow_style_one"/>
        <img :src="require(`../assets/Centered Atoms/E1 Dot Box Choice Up.png`)" :style="this.chooseup_style"/>
        <img :src="require(`../assets/Centered Atoms/E1 Dot Box Choice Dn.png`)" :style="this.choosedn_style"/>
        <img :src="require('../assets/Centered Atoms/E1 You.png')"               :style="this.global_size" />
      </b-row>

      <b-row class="justify-content-center align-items-center mt-5 bt-5" :style="this.new_choice_style">
        <img :src="require(`../assets/Centered Atoms/E2 Pred Up.png`)"   :style="this.gstyle_predictup"/>
        <img :src="require(`../assets/Centered Atoms/E2 Pred Dn.png`)"   :style="this.gstyle_predictdn"/>
        <img :style="this.global_size" :src="require(`../assets/Dots/E2 UB${this.combinations[this.current_avatar].temp_As2}.png`)"/>
        <img :style="this.global_size" :src="require(`../assets/Dots/E2 UP${this.combinations[this.current_avatar].temp_Ao2}.png`)"/>
        <img :style="this.global_size" :src="require(`../assets/Dots/E2 DB${this.combinations[this.current_avatar].temp_Bs2}.png`)"/>
        <img :style="this.global_size" :src="require(`../assets/Dots/E2 DP${this.combinations[this.current_avatar].temp_Bo2}.png`)"/>
        <img :src="require('../assets/Centered Atoms/E2 Box.png')" :style="this.global_size" />
        <img :src="require(`../assets/Feedback Trust.png`)"        :style="this.betfback_style" />

        <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.combinations[this.current_avatar].avatar_id, 4)}.png`)"    :style="this.avatar_2"/>
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)"    :style="this.avatar_2" />
        <img :src="require(`../assets/Centered Atoms/E2 Dot Boxes.png`)"    :style="this.global_size"/>
        <img :src="require(`../assets/Centered Atoms/Faded Arrows.png`)"    :style="this.global_size" />
        <img :src="require(`../assets/Centered Atoms/Keep Control Box Black.png`)" :style="this.gstyle_bet_arrows"/>

        <img :src="require(`../assets/Centered Atoms/E2 You.png`)"     :style="this.global_size" />
        <img :src="require(`../assets/Centered Atoms/You Arrows.png`)" :style="this.gstyle_bet_arrows"/>
        <img :src="require(`../assets/Centered Atoms/AZ.png`)"         :style="this.gstyle_promptsAZ" />
        <img :src="require(`../assets/Centered Atoms/JK.png`)"         :style="this.gstyle_promptsJK" />
        <img :src="require(`../assets/Centered Atoms/Barrier.png`)"    :style="this.gstyle_barrier"/>
        <img :style="this.gstyle_sthing_box" :src="require(`../assets/Dots/E2 CP${
              this.combinations[this.current_avatar].sure_thing}.png`)"/>
      </b-row>
    </b-container>
    <b-modal ref="my-rest-break-modal" hide-footer title="Rest Break">
      <h3 align="center">0{{ this.rest_break_min }}:{{ this.rest_break_seczero }}{{ this.rest_break_sec }}</h3>
      <b-button class="mt-3" variant="outline-danger" block @click="hideRestBreakModal">Back to Experiment</b-button>
    </b-modal>
  </b-modal>
</template>

<script>
import payoff_structure from "./payoffProb1.json";
export default {
  name: "prediction-task",
  props: ["participant_name"],
  components: {},
  data() {
    return {
      windowsize: "height: 600px;",
      payoff_structure_data: payoff_structure,
      global_size: "position: absolute; width: 70%; height: auto; top: 50px;",
      gstyle_room1: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_room2: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_holdglow: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_bbetglow: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_promptsAZ: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      gstyle_promptsJK: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_predictup: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_predictdn: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_sthing_box: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;",
      gstyle_bet_arrows: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      gstyle_barrier: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;",
      avatar_1: "position: absolute; max-width: 8.6%; max-height: auto; left: 16%; top: 19.99%;",
      avatar_2: "position: absolute; max-width: 8.6%; max-height:auto; left: 16%; bottom: 26.3%;",
      betfback_style: "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 0%",
      arrow_style_one: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%; transition: opacity 0.5s;",
      chooseup_style: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;",
      choosedn_style: "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%; transition: opacity 0.5s;",
      avatar_ids: [],

      // Rest break data
      rest_break_shown: false,
      rest_break_seczero: "",
      rest_break_sec: 15,
      rest_break_min: 0,
      
      show: false,
      b_show_1: true,
      free_space: true,
      fading: false,
      block_listeners: false,
      you_avatar_type: "1",
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      show_new: 0,
      show_old: 1,
      index: 0,

      payflipOP: 0, 
      payflipRP: 0,
      arrow_num: "1",
      avatar_num: "1",
      the_choice: null,
      current_avatar: 0,
      current_progress: 0,
      show_cur_num: false,
      prediction: null,
      max_avatar: 28,
      // max_avatar: 8,
      trial_started: 0,
      combinations: [],
    };
  },
  beforeMount() {this.buildCombinations();},

  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      if (modalId != "modal-center-prediction-task") {return;}
      this.hide_tutorial();
      var d = new Date();
      var n = d.getTime();
      this.$emit("timesync", n);
    });
  },

  created: function () {
    "Event listener for all keyboard events"
    let parent = this;
    window.addEventListener("keydown", function (event) {

      if (parent.show) {
        if (event.keyCode == 32 && parent.free_space) {
          console.log("Spacebar");
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
    old_choice_style() {return `opacity: ${this.show_old}; transition: opacity 0.5s;`;},
    new_choice_style() {return `opacity: ${this.show_new}; transition: opacity 0.5s;`;},
  },
  methods: {
    reset_room2_visuals() {
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      this.gstyle_promptsAZ =  `${main_style}; opacity: 100%;`;
      this.gstyle_promptsJK =  `${main_style}; opacity: 0%;`;
      this.gstyle_predictup =  `${main_style}; opacity: 0%;`;
      this.gstyle_predictdn =  `${main_style}; opacity: 0%;`;
      this.gstyle_sthing_box = `${main_style}; opacity: 0%;`;
      this.gstyle_bet_arrows = `${main_style}; opacity: 100%;`;
      this.gstyle_barrier =    `${main_style}; opacity: 100%;`;
    },
    hide_tutorial() {this.$bvModal.hide("modal-center-instruction73");},

    showRestBreakModal() {
      if (this.rest_break_sec < 10) {this.rest_break_seczero = "0";}
      this.rest_break_shown = true;
      this.$refs["my-rest-break-modal"].show();
    },

    hideRestBreakModal() {
      this.rest_break_shown = false;
      this.rest_break_min = 0;
      this.rest_break_sec = 15;
      this.rest_break_seczero = "";
      this.$refs["my-rest-break-modal"].hide();
    },
    
    payoff_coordinates(As, Ao, Bs, Bo) {
      `What are the 3D coordinates of this payoff structure?
      
      Parameters
      ----------
      As: int = payoff for self in option A
      Ao: int = payoff for othr in option A
      Bs: int = payoff for self in option B
      Bo: int = payoff for othr in option B
      
      Returns
      -------
      (PDs, PDo, Dso)
      PDs: int = payoff difference for self
      PDo: int = payoff difference for othr
      Dso: int = self-other payoff disparity`
      return [As - Bs, Ao - Bo, As - Ao];
    },

    atomic_action(As, Ao, Bs, Bo) {
      'The fundamental category of each choice.'
      let coords = this.payoff_coordinates(As, Ao, Bs, Bo);
      let PDs = coords[0];
      let PDo = coords[1];
      if (PDs > 0) {
          if      (PDo > 0) {return "Win-win"} 
          else if (PDo < 0) {return "Selfish"} 
          else              {return "Gainful"} 
      } else if (PDs < 0) {
          if      (PDo > 0) {return "Helpful"} 
          else if (PDo < 0) {return "Malicious"} 
          else              {return "Masochistic"} 
      } else {
          if      (PDo > 0) {return "Benevolent"} 
          else if (PDo < 0) {return "Sadistic"} 
          else              {return "Baseline"} 
      }
    },

    euclidean_distance(As1, Ao1, Bs1, Bo1, As2, Ao2, Bs2, Bo2) {
      "What is the distance between all three payoff structures in the 3D payoff space?"
      let coordOP = this.payoff_coordinates(As1, Ao1, Bs1, Bo1);
      let coordRP = this.payoff_coordinates(As2, Ao2, Bs2, Bo2);
      function distance(coords1, coords2) {
          let diff1 = coords1[0] - coords2[0];
          let diff2 = coords1[1] - coords2[1];
          let diff3 = coords1[2] - coords2[2];
          return Math.sqrt(Math.pow(diff1, 2) + Math.pow(diff2, 2) + Math.pow(diff3, 2)).toFixed(3)
      }
      return distance(coordOP, coordRP)
    },


    countDownRestBreak() {
      "Helper function for rest break count downs."
      let parent = this;
      if (this.rest_break_shown == false) {
      parent.rest_break_sec = 15;
      parent.rest_break_min = 0;
      parent.rest_break_seczero = "";
      return;
      }
      setTimeout(function () {
      parent.rest_break_sec -= 1;
      if (parent.rest_break_sec < 10) {parent.rest_break_seczero = "0";
      } else {parent.rest_break_seczero = "";}
      if (parent.rest_break_min == 0 && parent.rest_break_sec == 0) {
          parent.hideRestBreakModal();
          parent.rest_break_sec = 15;
          parent.rest_break_min = 0;
          parent.rest_break_seczero = "";
      }
      if (parent.rest_break_sec == 0) {
          parent.rest_break_sec = 59;
          parent.rest_break_min -= 1;
          return;
      }
      parent.countDownRestBreak();
      }, 1000);
    },

    priorAvatar() {
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      this.encounter_1_payoff_show = true;
      this.gstyle_room1 = `${main_style}; opacity: 100%; transition: opacity 0.5s;`;
      let parent = this;
      setTimeout(function () {
        parent.payflipOP = parent.combinations[parent.current_avatar].payflipOP;
        parent.arrow_style_one = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
        if (parent.payflipOP == 0) {
          parent.chooseup_style = `${main_style}; opacity: 100%; transition: opacity 0.5s;`;
          console.log("Choose up");
        } else if (parent.payflipOP == 1) {
          parent.choosedn_style = `${main_style}; opacity: 100%; transition: opacity 0.5s;`;
          console.log("Choose dn");
        } else {
          parent.chooseup_style = `${main_style}; opacity: 50%; transition: opacity 0.5s;`;
          parent.choosedn_style = `${main_style}; opacity: 50%; transition: opacity 0.5s;`;
          console.log("Error!  No Choice!");
        }
      }, 1000);
      setTimeout(function () {
        parent.show_new = 1;
      }, 2000);
      setTimeout(function () {
        parent.block_listeners = false;
      }, 2250);
    },

    predictUp() {
      let parent = this;
      console.log("Predict Up");
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      this.gstyle_predictup = `${main_style}; opacity: 100%;`;
      this.gstyle_sthing_box = `${main_style}; opacity: 100%;`;
      if (this.combinations[this.current_avatar].payflipRP == 1) {
        this.prediction = 0;} else {this.prediction = 1;}
      this.combinations[this.current_avatar].keypress = "A";
      
      setTimeout(function () {
        parent.predictionHelper();
      }, 250);
    },

    predictDown() {
      let parent = this;
      console.log("Predict Down");
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      this.gstyle_predictdn = `${main_style}; opacity: 100%;`;
      this.gstyle_sthing_box = `${main_style}; opacity: 100%;`;
      if (this.combinations[this.current_avatar].payflipRP == 1) {
        this.prediction = 1;} else {this.prediction = 0;}
      this.combinations[this.current_avatar].keypress = "Z";
      setTimeout(function () {parent.predictionHelper();}, 250);
    },

    predictionHelper() {
      var d = new Date();
      var n = d.getTime();
      this.show_cur_num = true;
      this.block_listeners = false;
      this.gstyle_promptsAZ = "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.gstyle_promptsJK = "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.combinations[this.current_avatar].reaction_time_pred = (n - this.trial_started - 250) * 0.001;
      this.trial_started = n;
    },

    hide_choice_visuals() {
      let parent = this;
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      this.gstyle_sthing_box = `${main_style}; opacity: 0%;`;
      this.gstyle_bet_arrows = `${main_style}; opacity: 0%;`;
      this.gstyle_holdglow =   `${main_style}; opacity: 0%;`;
      this.gstyle_bbetglow =   `${main_style}; opacity: 0%;`;
      this.gstyle_predictup =  `${main_style}; opacity: 0%;`;
      this.gstyle_predictdn =  `${main_style}; opacity: 0%;`;
      setTimeout(function () {parent.gstyle_barrier = `${main_style}; opacity: 0%;`;}, 500);
    },

    otherChoice() {
      let parent = this;
      this.fading = true;
      console.log("Bet");
      this.gstyle_promptsJK = "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.gstyle_bbetglow =  "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.combinations[this.current_avatar].keypress += "J";
      setTimeout(function () {parent.hide_choice_visuals();}, 500);
      setTimeout(function () {parent.ChoiceHelper(1);}, 1500);
    },

    selfChoice() {
      let parent = this;
      this.fading = true;
      console.log("Hold");
      this.gstyle_promptsJK = "position: absolute; width: 70%; height: auto; top: 50px; opacity: 0%;";
      this.gstyle_holdglow =  "position: absolute; width: 70%; height: auto; top: 50px; opacity: 100%;";
      this.combinations[this.current_avatar].keypress += "K";
      setTimeout(function () {parent.hide_choice_visuals();}, 500);
      setTimeout(function () {parent.ChoiceHelper(0);}, 1500);
    },

    ChoiceHelper(input) {
      let parent = this;
      this.fading = true;
      this.free_space = false;
      var d = new Date();
      var n = d.getTime();
      this.combinations[this.current_avatar].reaction_time_bett =
        (n - this.trial_started) * 0.001;
      this.trial_started = 0;
      this.show_new = 0;
      this.show_old = 0;
      this.current_progress += 1;
      this.combinations[this.current_avatar].bet_choice = input;
      this.combinations[this.current_avatar].trial_order = this.current_progress;
      this.combinations[this.current_avatar].trial_order_group = String(1 + Math.floor(this.current_progress / 7));
      this.combinations[this.current_avatar].prediction = this.prediction;
      let main_style = "position: absolute; width: 70%; height: auto; top: 50px;";
      parent.gstyle_holdglow = `${main_style}; opacity: 0%;`;
      parent.gstyle_bbetglow = `${main_style}; opacity: 0%;`;
      setTimeout(function () {
        parent.current_avatar += 1;
        parent.gstyle_room1 = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
      }, 400);
      setTimeout(function () {
        parent.fading = false;
        parent.free_space = true;
        parent.prediction = null;
        parent.show_cur_num = false;
        parent.$emit("predictionTaskDone", parent.combinations);
        if (parent.current_avatar == parent.max_avatar) {
          parent.$bvModal.hide("modal-center-prediction-task");
          alert("Prediction task finished!");
          parent.$bvModal.show("modal-center-matching-task-instructions");
        }
        if (
          parent.current_avatar == 12 ||
          parent.current_avatar == 24 ||
          parent.current_avatar == 36 ||
          parent.current_avatar == 48 ||
          parent.current_avatar == 162
        ) {
          parent.showRestBreakModal();
          parent.countDownRestBreak();
        }
        parent.show_old = 1;
        parent.chooseup_style = `${main_style}; opacity: 0%; transition: opacity 0.15s;`;
        parent.choosedn_style = `${main_style}; opacity: 0%; transition: opacity 0.15s;`;
        parent.arrow_style_one = `${main_style}; opacity: 100%; transition: opacity 0.15s;`;
        parent.reset_room2_visuals();
      }, 1000);
    },

    shuffle(array) {
      var currentIndex = array.length,
      temporaryValue,
      randomIndex;

      "While there remain elements to shuffle..."
      while (0 !== currentIndex) {
          "Pick a remaining element..."
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          "And swap it with the current element."
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
    },      

    // Core function in this file
    // buildCombinations constructs an array that contains all information needed to carry out a randomized block #1
    // This array also contains data slots that will be filled as the participants progress
    buildCombinations() {
      var i = 0
      var trials = []
      var avatarids = this.shuffle(Array(324).fill().map((x, 
        i) => i).filter(number => {return number % 9 === 0;}))
      var usedavataridsbypred = avatarids.slice(0, this.max_avatar + 1)
      for (i = 0; i < this.max_avatar; i++) {
        var new_comb = {
          trial_order: null,
          trial_order_group: null,
          trial_number: String(i + 1),
          triplet: this.payoff_structure_data[i]["Triplet"],
          trial_label: this.payoff_structure_data[i]["Label"],
          temp_As1: this.payoff_structure_data[i]["As1"],
          temp_Ao1: this.payoff_structure_data[i]["Ao1"],
          temp_Bs1: this.payoff_structure_data[i]["Bs1"],
          temp_Bo1: this.payoff_structure_data[i]["Bo1"],
          temp_As2: this.payoff_structure_data[i]["As2"],
          temp_Ao2: this.payoff_structure_data[i]["Ao2"],
          temp_Bs2: this.payoff_structure_data[i]["Bs2"],
          temp_Bo2: this.payoff_structure_data[i]["Bo2"],
          sure_thing: this.payoff_structure_data[i]["ST"],
          main_As1: this.payoff_structure_data[i]["As1"],
          main_Ao1: this.payoff_structure_data[i]["Ao1"],
          main_Bs1: this.payoff_structure_data[i]["Bs1"],
          main_Bo1: this.payoff_structure_data[i]["Bo1"],
          main_As2: this.payoff_structure_data[i]["As2"],
          main_Ao2: this.payoff_structure_data[i]["Ao2"],
          main_Bs2: this.payoff_structure_data[i]["Bs2"],
          main_Bo2: this.payoff_structure_data[i]["Bo2"],
          atomicOP: this.atomic_action(
            this.payoff_structure_data[i]["As1"], this.payoff_structure_data[i]["Ao1"], 
            this.payoff_structure_data[i]["Bs1"], this.payoff_structure_data[i]["Bo1"]),
          atomicRP: this.atomic_action(
            this.payoff_structure_data[i]["As2"], this.payoff_structure_data[i]["Ao2"], 
            this.payoff_structure_data[i]["Bs2"], this.payoff_structure_data[i]["Bo2"]),
          euclidean: this.euclidean_distance(
            this.payoff_structure_data[i]["As1"], this.payoff_structure_data[i]["Ao1"], 
            this.payoff_structure_data[i]["Bs1"], this.payoff_structure_data[i]["Bo1"], 
            this.payoff_structure_data[i]["As2"], this.payoff_structure_data[i]["Ao2"], 
            this.payoff_structure_data[i]["Bs2"], this.payoff_structure_data[i]["Bo2"]),
          payflipOP: Math.floor(Math.random() * 2),
          payflipRP: Math.floor(Math.random() * 2),
          avatar_id: avatarids[i],
          reaction_time_bett: null,
          reaction_time_pred: null,
          bet_choice: null,
          prediction: null,
          payflips: "",
          keypress: "", 
        }
        if (new_comb.payflipOP == 1) {new_comb.payflipOP == true} else {new_comb.payflipOP == false}
        if (new_comb.payflipRP == 1) {new_comb.payflipRP == true} else {new_comb.payflipRP == false}
        if (new_comb.payflipOP) {
          new_comb.payflips += "T";
          new_comb.temp_As1 = this.payoff_structure_data[i]["Bs1"];
          new_comb.temp_Ao1 = this.payoff_structure_data[i]["Bo1"];
          new_comb.temp_Bs1 = this.payoff_structure_data[i]["As1"];
          new_comb.temp_Bo1 = this.payoff_structure_data[i]["Ao1"];
        } else {
          new_comb.payflips += "F";
          new_comb.temp_As1 = this.payoff_structure_data[i]["As1"];
          new_comb.temp_Ao1 = this.payoff_structure_data[i]["Ao1"];
          new_comb.temp_Bs1 = this.payoff_structure_data[i]["Bs1"];
          new_comb.temp_Bo1 = this.payoff_structure_data[i]["Bo1"];
        }
        if (new_comb.payflipRP) {
          new_comb.payflips += "T";
          new_comb.temp_As2 = this.payoff_structure_data[i]["Bs2"];
          new_comb.temp_Ao2 = this.payoff_structure_data[i]["Bo2"];
          new_comb.temp_Bs2 = this.payoff_structure_data[i]["As2"];
          new_comb.temp_Bo2 = this.payoff_structure_data[i]["Ao2"];
        } else {
          new_comb.payflips += "F";
          new_comb.temp_As2 = this.payoff_structure_data[i]["As2"];
          new_comb.temp_Ao2 = this.payoff_structure_data[i]["Ao2"];
          new_comb.temp_Bs2 = this.payoff_structure_data[i]["Bs2"];
          new_comb.temp_Bo2 = this.payoff_structure_data[i]["Bo2"];
        }
        trials.push(new_comb);
        // export default {avatarids}
      }
      // export default {parent.avatarids}
      trials = this.shuffle(trials);
      this.combinations = trials;
      console.log("combinations!")
      console.log(trials)
    },
  
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      console.log(n.length >= width ? n : new Array(width - n.length + 1).join(z) + n);
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
