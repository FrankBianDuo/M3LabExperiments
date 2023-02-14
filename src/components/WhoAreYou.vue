<template>
  <!-- Here is the template section, where all the HTML code takes action -->
  <b-modal
    id="modal-center"
    size="xl"
    centered
    title="Who Are You?"
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
  >
    <b-row class="my-4 justify-content-center">
      <b-button>
        <a v-b-modal.modal-center-instruction>Experimenter</a>
      </b-button>
    </b-row>
    <b-row class="my-4 justify-content-center">
      <b-button :disabled="!this.b_show_1" v-b-modal.modal-center>Participant</b-button>
    </b-row>

    <!-- Encounter #1 Code -->
    <b-container class="bv-example-row">
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
        <div style="position: absolute; top: 19%; left: 46%; z-index: 100;">
          <!-- These following imgs are the dots that appear in encounter #1 -->
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
            this.combinations[this.current_avatar].pr_p.a_first 
            )}b.png`)"
          />
        </div>
        <div style="position: absolute;  top: 19%; right: 31.7%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
              this.combinations[this.current_avatar].pr_p.p_first 
            )}.png`
            )"
          />
        </div>
        <div style="position: absolute; top: 36%; left: 46%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
              this.combinations[this.current_avatar].pr_p.a_second 
            )}b.png`
            )"
          />
        </div>
        <div style="position: absolute; top: 36%; right: 31.7%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
              this.combinations[this.current_avatar].pr_p.p_second 
            )}.png`
            )"
          />
        </div>
        <img
          :src="require('../assets/Blank Square.png')"
          style="position: relative; width: 50%; height: 50%; top: 10px;"
        />
        <img
          v-on:keyup.space="priorAvatar"
          :src="require(`../assets/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)"
          style="position: absolute; max-width:15%; max-height:15%; left: 30%; top: 22%;"
        />
        <!-- Here are three alternatives of the arrow in encounter #1 {neutral, up, down} -->
        <!-- They will fade in or/and out depending on the current scenario -->
        <img
          :src="require(`../assets/redots/Dot Holder Highlight White.png`)"
          :style="this.arrow_style_one"
        />
        <img
          :src="require(`../assets/redots/Dot Holder Highlight Blue Up.png`)"
          :style="this.arrow_style_two"
        />
        <img
          :src="require(`../assets/redots/Dot Holder Highlight Blue Dn.png`)"
          :style="this.arrow_style_three"
        />
        <!-- ^^^^^^^^^^^^^^ -->
        <img
          :src="require('../assets/You Full 1.png')"
          style="position: absolute;max-width:15%; max-height:15%; right: 28%; top: 22%;"
        />
      </b-row>

      <!-- Encounter #2 HTML code -->
      <b-row
        class="justify-content-center align-items-center mt-5 bt-5"
        :style="this.current_choice_style"
      >
        <div style="position: absolute; top: 67.8%; left: 46%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
            this.combinations[this.current_avatar].a_p.a_first 
            )}b.png`)"
          />
        </div>
        <div style="position: absolute;  top: 67.8%; right: 31.7%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
            this.combinations[this.current_avatar].a_p.p_first 
            )}.png`)"
          />
        </div>
        <div style="position: absolute; top: 84.3%; left: 46%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
            this.combinations[this.current_avatar].a_p.a_second 
            )}b.png`)"
          />
        </div>
        <div style="position: absolute; top: 84.3%; right: 31.7%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
              this.combinations[this.current_avatar].a_p.p_second 
            )}.png`)"
          />
        </div>
        <img
          :src="require('../assets/Blank Square.png')"
          style="position: relative; width: 50%; height: 50%; top: 10px;"
        />
        <img :src="require(`../assets/Feedback Trust.png`)" :style="this.trust_effect_style" />

        <!-- HTML Element that presents a random avatar -->
        <img
          :src="require(`../assets/avatarsgalore/slice${this.avatar_list[this.current_avatar]}.png`)"
          style="position: absolute; max-width:15%; max-height:15%; left: 30%; bottom: 13%;"
        />
        <img
          :src="require(`../assets/redots/${current_arrow}`)"
          style="position: absolute;max-width:35%; max-height:35%; bottom: 4.5%; left: 36.5%;"
        />
        <img
          :src="require(`../assets/redots/Dot Holder Sure Thing Highlight ${this.holder_stype}.png`)"
          style="position: absolute;max-width:20%; max-height:20%; bottom: 25%; right: 24.5%;"
        />

        <!--  Background You Avatar -->
        <img
          :src="require(`../assets/You Blank 1.png`)"
          style="position: absolute;max-width:15%; max-height:15%; right: 28%; bottom: 13%;"
        />
        <div style="position: absolute; top: 63%; right: 22%; z-index: 100;">
          <img
            style="max-width:50%; max-height:50%;"
            v-if="this.encounter_1_payoff_show"
            :src="require(`../assets/redots/Dot${this.dots_identifier(
            this.combinations[this.current_avatar].pl_p
            )}.png`)"
          />
        </div>
      </b-row>
    </b-container>
    <b-modal ref="my-modal" hide-footer title="5 Minute Rest Break">
      <h3 align="center">0{{this.rb_min}}:{{this.rb_seczero}}{{this.rb_sec}}</h3>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Back to Block #1</b-button>
    </b-modal>
  </b-modal>
</template>

<script>
import trialOneTrialData from "./trialData.js";
export default {
  name: "WhoAreYou",
  props: ["participant_name"],
  components: {},
  data() {
    return {
      // Rest break data
      rb_shown: false,
      rb_min: 0,
      rb_sec: 15,
      rb_seczero: "",
      // ^^^^^

      // show is the data that toggles the visibility of block #1's modal
      show: true,
      b_show_1: true,
      free_space: true,
      encounter_1_payoff_show: false,
      fading: false,
      block_listeners: false,
      you_avatar_type: "1",
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
        "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 100%; transition: opacity 0.5s;",
      arrow_style_two:
        "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 0%; transition: opacity 0.5s;",
      arrow_style_three:
        "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 0%; transition: opacity 0.5s;",
      arrow_num: "1",
      avatar_num: "1",
      avatar_list: this.shuffle(
        Array(1080)
          .fill()
          .map((x, i) => i)
      ),
      current_avatar: 0,
      current_progress: 0,
      current_arrow: "Dot Holder Highlight White.png",
      show_cur_num: false,
      prediction: null,
      // How many games to run
      max_avatar: 216,
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
  // Event listener for all keyboard events
  created: function () {
    let parent = this;
    window.addEventListener("keyup", function (event) {
      // eslint-disable-next-line no-console
      if (parent.show) {
        // Space
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
    trial_identifier(trial) {
      if (
        (Number(trial.a_first) - Number(trial.a_second)) *
          (Number(trial.p_first) - Number(trial.p_second)) >
        0
      ) {
        return "MP";
      } else {
        return "HS";
      }
    },
    helper() {
      alert("click the avatar!");
    },
    priorAvatar() {
      this.encounter_1_payoff_show = true;
      let parent = this;
      setTimeout(function () {
        parent.arrow_num = parent.combinations[parent.current_avatar].a_c;
        parent.arrow_style_one =
          "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 0%; transition: opacity 0.5s;";
        if (parent.arrow_num == "2") {
          parent.arrow_style_two =
            "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 100%; transition: opacity 0.5s;";
          // eslint-disable-next-line no-console
          console.log("arrow 2");
        } else {
          parent.arrow_style_three =
            "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%;opacity: 100%; transition: opacity 0.5s;";
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
      this.current_arrow = "Dot Holder Highlight Green Up.png";
      if (this.combinations[this.current_avatar].enctr_2_reverse == 1) {
        this.prediction = 0;
      }
      this.prediction = 1;
      this.combinations[this.current_avatar].keypress = "A";
      let parent = this;
      setTimeout(function () {
        parent.predictionHelper();
      }, 250);
    },
    predictDown() {
      // eslint-disable-next-line no-console
      console.log("Predict Down");
      this.current_arrow = "Dot Holder Highlight Green Dn.png";
      this.prediction = 0;
      this.combinations[this.current_avatar].keypress = "Z";
      let parent = this;
      setTimeout(function () {
        parent.predictionHelper();
      }, 250);
    },
    predictionHelper() {
      this.show_cur_num = true;
      var d = new Date();
      var n = d.getTime();
      this.combinations[this.current_avatar].reaction_time_prediction =
        n - this.trial_started - 250;
      this.combinations[this.current_avatar].reaction_time_prediction *= 0.001;
      this.trial_started = n;
      this.block_listeners = false;
    },
    otherChoice() {
      // eslint-disable-next-line no-console
      console.log("Trust");
      this.fading = true;
      let parent = this;
      this.trust_effect_style =
        "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 100%";
      this.combinations[this.current_avatar].keypress += "J";
      setTimeout(function () {
        parent.ChoiceHelper(1);
      }, 500);
    },
    selfChoice() {
      // eslint-disable-next-line no-console
      console.log("Distrust");
      this.fading = true;
      let parent = this;
      this.holder_stype = "Purp";
      this.combinations[this.current_avatar].keypress += "K";
      setTimeout(function () {
        parent.ChoiceHelper(0);
      }, 500);
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
      setTimeout(function () {
        parent.fading = false;
        parent.encounter_1_payoff_show = false;
        parent.trust_effect_style =
          "position: absolute; max-width:75%; max-height:75%; left: 16%; bottom: -10%; opacity: 0%";
        parent.holder_stype = "White";
        parent.free_space = true;
        parent.current_arrow = "Dot Holder Highlight White.png";
        parent.prediction = null;
        parent.show_cur_num = false;
        parent.current_avatar += 1;
        parent.$emit("blockOneDone", parent.combinations);
        if (parent.current_avatar == parent.max_avatar) {
          parent.show = false;
          alert("Block #1 finished");
          parent.b_show_1 = false;
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
          "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 0%; transition: opacity 0.15s;";
        parent.arrow_style_three =
          "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 0%; transition: opacity 0.15s;";
        parent.arrow_style_one =
          "position: absolute;max-width:35%; max-height:35%; top: 12%; left: 36.5%; opacity: 100%; transition: opacity 0.15s;";
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
    // Helper function for vertual positioning balance
    flipPayOff(struct) {
      var temp_1 = struct[0];
      var temp_2 = struct[1];
      struct[0] = struct[2];
      struct[1] = struct[3];
      struct[2] = temp_1;
      struct[3] = temp_2;
      return struct;
    },
    // Core function in this file
    // buildCombinations constructs an array that contains all information needed to carry out a randomized block #1
    // This array also contains data slots that will be filled as the participants progress
    buildCombinations() {
      var i, k, j, o;
      var first_segment = [];
      for (i = 0; i < this.avatar_choices.length; i++) {
        for (k = 0; k < this.player_payoff.length; k++) {
          for (j = 0; j < this.enctr_2_payoff.length; j++) {
            for (o = 0; o < this.enctr_1_payoff.length; o++) {
              var new_comb = {
                a_c: this.avatar_choices[i],
                pl_p: this.player_payoff[k],
                a_p: this.enctr_2_payoff[j],
                pr_p: this.enctr_1_payoff[o],
                enctr_1_type: this.trial_identifier(this.enctr_1_payoff[o]),
                enctr_2_type: this.trial_identifier(this.enctr_2_payoff[j]),
                enctr_1_reverse: Math.floor(Math.random() * 2),
                enctr_2_reverse: Math.floor(Math.random() * 2),
                vert_pos: null,
                trust: null,
                keypress: "",
                reaction_time_trust: null,
                reaction_time_prediction: null,
                trust_condition: null,
                trial_order: null,
                trial_id: null,
                prediction: null,
                avatar_id: null,
                game_condition:
                  this.avatar_choices[i] == "2"
                    ? this.enctr_1_payoff[o].top
                    : this.enctr_1_payoff[o].down,
              };
              // Recognize the six different structures in encounter #2
              if (
                this.player_payoff[k] == "1.5" &&
                this.enctr_2_payoff[j].a_first == "2.5"
              ) {
                new_comb.trust_condition = 1;
              } else if (
                this.player_payoff[k] == "2" &&
                this.enctr_2_payoff[j].a_first == "2.5"
              ) {
                new_comb.trust_condition = 2;
              } else if (
                this.player_payoff[k] == "2.5" &&
                this.enctr_2_payoff[j].a_first == "2.5"
              ) {
                new_comb.trust_condition = 3;
              } else if (
                this.player_payoff[k] == "1.5" &&
                this.enctr_2_payoff[j].a_first == "1.5"
              ) {
                new_comb.trust_condition = 4;
              } else if (
                this.player_payoff[k] == "2" &&
                this.enctr_2_payoff[j].a_first == "1.5"
              ) {
                new_comb.trust_condition = 5;
              } else if (
                this.player_payoff[k] == "2.5" &&
                this.enctr_2_payoff[j].a_first == "1.5"
              ) {
                new_comb.trust_condition = 6;
              }
              new_comb.trial_id = String(
                6 * (Number(new_comb.game_condition) - 1) +
                  Number(new_comb.trust_condition)
              );
              if (new_comb.enctr_1_reverse == 1) {
                new_comb.pr_p = this.flipPayOff(new_comb.pr_p);
                let temp = new_comb.enctr_1_type[1] + new_comb.enctr_1_type[0];
                new_comb.enctr_1_type = temp;
                if (new_comb.a_c == "2") {
                  new_comb.a_c = "3";
                } else {
                  new_comb.a_c = "2";
                }
              }
              if (new_comb.enctr_2_reverse == 1) {
                new_comb.a_p = this.flipPayOff(new_comb.a_p);
                let temp = new_comb.enctr_2_type[1] + new_comb.enctr_2_type[0];
                new_comb.enctr_2_type = temp;
              }
              new_comb.vert_pos = new_comb.enctr_1_type + new_comb.enctr_2_type;
              first_segment.push(new_comb);
            }
          }
        }
      }
      first_segment = this.shuffle(first_segment);
      this.combinations = first_segment;
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