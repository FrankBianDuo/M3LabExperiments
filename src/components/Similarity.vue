<template>
  <!-- Here is the template section, where all the HTML code takes action -->
  <b-modal
    id="modal-center-similarity-task"
    size="xl"
    title="Similarity Task"
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
        :style="this.primary_images_style">
        <img :src="require('../assets/Similarity/background.png')" :style="this.global_size" />

        <!-- <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
                this.combinations[this.current_avatar].avatar_idL, 4)}.png`)" :style="this.avatar_left_style"/>
        <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
            this.combinations[this.current_avatar].avatar_idR, 4)}.png`)" :style="this.avatar_rght_style"/> -->

        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.combinations[this.current_avatar].avatar_id1, 4)}.png`)"
          :style="this.avatar_1A_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.combinations[this.current_avatar].avatar_id1, 4)}.png`)"
          :style="this.avatar_1B_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.combinations[this.current_avatar].avatar_id2, 4)}.png`)"
          :style="this.avatar_2A_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.combinations[this.current_avatar].avatar_id2, 4)}.png`)"
          :style="this.avatar_2B_style" />

        <!-- <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list1[this.current_avatar], 4)}.png`)"
          :style="this.avatar_1A_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list1[this.current_avatar], 4)}.png`)"
          :style="this.avatar_1B_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list2[this.current_avatar], 4)}.png`)"
          :style="this.avatar_2A_style" />
        <img
          :src="
            require(`../assets/Avatars/Blind Avatars/avb${this.pad(
              this.avatar_list2[this.current_avatar], 4)}.png`)"
          :style="this.avatar_2B_style" /> -->


        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_1A_style" />
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_1B_style" />
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_2A_style" />
        <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)" :style="this.avatar_2B_style" />

        <img :src="require('../assets/Similarity/you_lf.png')" :style="this.global_size" />
        <img :src="require('../assets/Similarity/you_rt.png')" :style="this.global_size" />
      </b-row>

      <b-row
        class="justify-content-center align-items-center my-1"
        :style="this.secondary_images_style">

        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_lub_${
              this.combinations[this.current_avatar].As1}.png`)"/>
        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_lup_${
              this.combinations[this.current_avatar].Ao1}.png`)"/>
        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_ldb_${
              this.combinations[this.current_avatar].Bs1}.png`)"/>
        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_ldp_${
              this.combinations[this.current_avatar].Bo1}.png`)"/>

        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_rub_${
              this.combinations[this.current_avatar].As2}.png`)"/>
        <img
          :style="this.dots_style"  
          :src="
            require(`../assets/Similarity/Dots/dots_rup_${
              this.combinations[this.current_avatar].Ao2}.png`)"/>
        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_rdb_${
              this.combinations[this.current_avatar].Bs2}.png`)"/>
        <img
          :style="this.dots_style" 
          :src="
            require(`../assets/Similarity/Dots/dots_rdp_${
              this.combinations[this.current_avatar].Bo2}.png`)"/>

        <img
          :src="require(`../assets/Similarity/choice_up_lf.png`)"
          :style="this.choice_up_style"/>
        <img
          :src="require(`../assets/Similarity/choice_dn_lf.png`)"
          :style="this.choice_dn_style"/>
        <img
          :src="require(`../assets/Similarity/choice_up_rt.png`)"
          :style="this.choice_up_style"/>
        <img
          :src="require(`../assets/Similarity/choice_dn_rt.png`)"
          :style="this.choice_dn_style"/>
      </b-row>

      <b-form>
        <b-form-group id="input-group-1" label-for="input-1" :style="this.slider_style" 
          label="Dissimilar ---------------------------------------------------------------------------------------------------------------------------------------------------- Similar">
          <b-input-group>
            <b-form-input
              :disabled="!this.primedSlider" id="input-group-1" type="range" number min="0" max="1" step="0.01" v-model="form.sim_score"> 
            </b-form-input>
          </b-input-group>
        </b-form-group>
      </b-form>

      <div>
        <b-button
          :variant="sbc"
          size="lg"
          v-bind:style="{ height: 'auto', marginTop: '0.25%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_presskey, transition: 'opacity 0.5s'}"
        >Press {{press}}.</b-button>
      </div>

    </b-container>
    <b-modal ref="my-modal" hide-footer title="Rest Break">
      <h3 align="center">0{{ this.rb_min }}:{{ this.rb_seczero }}{{ this.rb_sec }}</h3>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Back to Experiment</b-button>
    </b-modal>
  </b-modal>
</template>

<script>
// import payoff_structure from "./payoff6.json";
import payoff_structure from "./payoffSimilarity2.json";
import usedavataridsbypred from "./Prediction.vue";
import usedavataridsbymatch from "./Matching.vue";
export default {
  name: "similarity-task",
  props: ["participant_name"],
  components: {},
  data() {
    return {
      payoff_structure_data: payoff_structure,
      windowsize: "height: 600px;",
      global_size: "position: absolute; width: 100%; height: auto; top: -100px;",

      // Rest break data
      rb_shown: false,
      rb_min: 0,
      rb_sec: 15,
      rb_seczero: "",
      primary_images_style: `opacity: 100%; transition: opacity 0.75s;`,
      secondary_images_style: `opacity: ${this.show_current}; transition: opacity 0.5s;`,
      dots_style: "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%;",
      choice_up_style: "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%; transition: opacity 0.1s;",
      choice_dn_style: "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%; transition: opacity 0.1s;",
      slider_style: "marginTop: 38.85%; opacity: 100%; transition: opacity 0.25s;",
      avatar_1A_style:
        "position: absolute; max-width: 8.5%; max-height: auto; left: 5.4%; top: 45.4%; opacity: 100%; transition: opacity 0.75s;",
      avatar_1B_style:
        "position: absolute; max-width: 8.5%; max-height: auto; left: 52.3%; top: 9.0%; opacity: 100%; transition: opacity 0.75s;",
      avatar_2A_style:
        "position: absolute; max-width: 8.5%; max-height: auto; left: 52.0%; top: 45.4%; opacity: 100%; transition: opacity 0.75s;",
      avatar_2B_style:
        "position: absolute; max-width: 8.5%; max-height: auto; left: 63.6%; top: 9.0%; opacity: 100%; transition: opacity 0.75s;",
      primedRemind: true,
      opacity_presskey: "100%",
      press: "space bar",

      // show is the data that toggles the visibility of block #1's modal
      show: false,
      b_show_1: true,
      you_avatar_type: "1",
      // Data for styling
      variants: ["primary", "secondary", "success", "warning", "danger", "info","light","dark"],
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

      holder_stype: "White",

      arrow_num: "1",
      avatar_num: "1",
      // avatar_list1: [],
      // avatar_list2: [],
      // avatar_list1: this.no_twins_hack(Array(324).fill().map((x, i) => i), Array(324).fill().map((x, i) => i))[0],
      // avatar_list2: this.no_twins_hack(Array(324).fill().map((x, i) => i), Array(324).fill().map((x, i) => i))[1],
      current_avatar: 0,
      current_progress: 0,
      current_arrow: "Dot Boxes.png",
      show_cur_num: false,
      prediction: null,
      form: {sim_score: ""},
      // max_avatar: 169,
      max_avatar: 81,
      // max_avatar: 5,     // Change this.  I'm just checking for transitioning between modals.
      trial_started: 0,
      combinations: [],
      primedSpacebar1: true,
      primedSpacebar2: false,
      primedSlider: false,
      currentlyFading: false,
      reaction_time: 0,
      trialTimer: 0,
    };
  },
  beforeMount() {
    this.buildCombinations();
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      if (modalId != "modal-center-similarity-task") {
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
      // parent.opacity_presskey = "100%";

      if (parent.show) {
        // Space
        if (event.keyCode == 32 && parent.primedSpacebar1 && !parent.primedSpacebar2) {
            // parent.combinations[parent.current_avatar].form = parent.form.sim_score;
            parent.primedSpacebar1 = false;
            parent.primedSpacebar2 = false;
            parent.primedSlider = false;
            parent.primedRemind = false;
            var d1 = new Date();
            var n1 = d1.getTime();
            parent.trial_started = n1;
            parent.arrow_num = parent.combinations[parent.current_avatar].a_c_present;
            parent.dots_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 100%; transition: opacity 0.5s;"; 
            parent.opacity_presskey = "0%"
            setTimeout(function () {
                if (parent.arrow_num == "2") {
                parent.choice_up_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 100%; transition: opacity 0.1s;";  
                } else {
                parent.choice_dn_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 100%; transition: opacity 0.1s;";};}, 500); 
            setTimeout(function () {
                parent.primedSlider = true;
                parent.slider_style = "marginTop: 38.85%; opacity: 100%; transition: opacity 0.5s;"}, 1250);       
            setTimeout(function () {
                parent.primedSpacebar2 = true}, 1750);
            // parent.combinations[parent.current_avatar].form = parent.form.sim_score;

        } else if (event.keyCode == 32 && parent.primedSpacebar2 && !parent.primedSpacebar1 && parent.form.sim_score !== "") {
            var d2 = new Date();
            var n2 = d2.getTime();
            parent.combinations[parent.current_avatar].reaction_time = (n2 - parent.trial_started) * 0.001;
            parent.combinations[parent.current_avatar].form = parent.form.sim_score;
            parent.primedSpacebar2 = false;
            parent.primedSlider = false;
            parent.dots_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%; transition: opacity 0.5s;"; 
            parent.choice_up_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%; transition: opacity 0.5s;";  
            parent.choice_dn_style = "position: absolute; width: 100%; height: auto; top: -100px; opacity: 0%; transition: opacity 0.5s;";  

            parent.avatar_1A_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 5.4%; top: 45.4%; opacity: 0%; transition: opacity 0.5s;";
            parent.avatar_1B_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 52.3%; top: 9.0%; opacity: 0%; transition: opacity 0.5s;";
            parent.avatar_2A_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 52.0%; top: 45.4%; opacity: 0%; transition: opacity 0.5s;";
            parent.avatar_2B_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 63.6%; top: 9.0%; opacity: 0%; transition: opacity 0.5s;";
            parent.primary_images_style = "opacity: 0%; transition: opacity 0.5s;";
            parent.slider_style = "marginTop: 38.85%; opacity: 0%; transition: opacity 0.5s;"
            parent.opacity_presskey = "0%"
            parent.ChoiceHelper();
            // parent.resetSlider();

            setTimeout(function () {
                parent.primary_images_style = "opacity: 100%; transition: opacity 0.25s;";
                parent.avatar_1A_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 5.4%; top: 45.4%; opacity: 100%; transition: opacity 0.25s;";
                parent.avatar_1B_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 52.3%; top: 9.0%; opacity: 100%; transition: opacity 0.25s;";
                parent.avatar_2A_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 52.0%; top: 45.4%; opacity: 100%; transition: opacity 0.25s;";
                parent.avatar_2B_style = "position: absolute; max-width: 8.5%; max-height: auto; left: 63.6%; top: 9.0%; opacity: 100%; transition: opacity 0.25s;";                
                parent.primedSpacebar1 = true;
                parent.resetSlider();
            }, 1200); 
        } 
      }
    });
  },

  methods: {
    resetSlider() {this.form.sim_score = ""},
    // Helper Function that handles the data flow when a participant decides to trust or distrust an avatar


    ChoiceHelper(input) {
      this.fading = true;
      this.free_space = false;
      var d = new Date();
      var n = d.getTime();
      this.combinations[this.current_avatar].reaction_time_trust =
        (n - this.trial_started) * 0.001;
      this.trial_started = 0;
      let parent = this;
      this.current_progress += 1;
      this.combinations[this.current_avatar].trust = input;
      this.combinations[this.current_avatar].trial_order = this.current_progress;
      // this.combinations[this.current_avatar].avatar_id1 = this.avatar_list1[this.current_avatar];
      // this.combinations[this.current_avatar].avatar_id2 = this.avatar_list2[this.current_avatar];
      setTimeout(function () {
        parent.current_avatar += 1;
      }, 400);
      setTimeout(function () {

        parent.show_cur_num = false;
        // parent.current_avatar += 1;
        parent.$emit("similarityTaskDone", parent.combinations);
        if (parent.current_avatar == parent.max_avatar) {
        //   parent.$bvModal.hide("modal-center");
          parent.$bvModal.hide("modal-center-similarity-task");
          alert("Similarity task finished!");
          // FIXME: connect this to the survey pages
          // parent.b_show_1 = false;
        //   parent.$bvModal.show("modal-center-FR1");  //This takes the participant to the written response section.
          parent.$bvModal.show("modal-center-survey1"); //This takes the participant to the survey section.
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
      }, 750);
    },
    hide_tutorial() {
        // this.$bvModal.hide("modal-center");
        this.$bvModal.hide("modal-center-similarity-task-instructions");
    //   this.$bvModal.hide("modal-center-instruction73");
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

    // no_twins(array) {
    //   `Returns two shuffeled lists with no twins.
    //   Twins are two values with the same index in
    //   both lists.  This prevents identical avatars.`
    //   var array_ = this.shuffle(array);
    //   var evens_lst = array_.filter(number => number % 2 == 0);
    //   var oddss_lst = array_.filter(number => number % 2 == 1);
    //   var shuffled1 = evens_lst.concat(oddss_lst);
    //   var shuffled2 = oddss_lst.concat(evens_lst);
    //   return [shuffled1, shuffled2];},   

    no_twins(array) {
      `Returns two shuffeled lists with no twins.
      Twins are two values with the same index in
      both lists.  This prevents identical avatars.
      Notice that this function is the mirror oppo
      site of no_twins() in Matching.vue.  This
      prevents twins between the tasks.`
      var yarra = array.reverse()
      var oddnumbers = array.filter(number => number % 2 == 1)
      var srebmunddo = yarra.filter(number => number % 2 == 1)
      oddnumbers = this.shuffle(oddnumbers)
      srebmunddo = this.shuffle(srebmunddo)
      return [oddnumbers, srebmunddo]},   
  

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

      var illegal_avatars = Array(324).fill().map((x, 
        i) => i).filter(number => {return number % 9 === 0;})
      var avatarids = Array(324).fill().map((x, i) => i)
      for (i = 0; i < 324; i++) {
        "Ensuring that each task uses different avatars."
        let illegal_idx = avatarids.indexOf(illegal_avatars[i])
        if (illegal_idx > -1) {avatarids.splice(illegal_idx, 1)}
      }
      avatarids = this.no_twins(avatarids)

      // var illegal_avatars = usedavataridsbymatch.concat(usedavataridsbypred)
      // var avatarids = this.shuffle(Array(324).fill().map((x, i) => i))
      // for (i = 0; i < 324; i++) {
      //     "Removing avatars I want to use later in the experiment."
      //     let illegal_idx = avatarids.indexOf(illegal_avatars[i])
      //     if (illegal_idx > -1) {avatarids.splice(illegal_idx, 1)}
      // }
      // avatarids = this.no_twins(avatarids)
      // var usedavataridsbysimil = avatarids.slice(0, this.max_avatar + 1)
      for (i = 0; i < this.max_avatar; i++) {
        var new_comb = {
          label: this.payoff_structure_data[i]["Label"],
          As1: this.payoff_structure_data[i]["As1"],
          Ao1: this.payoff_structure_data[i]["Ao1"],
          Bs1: this.payoff_structure_data[i]["Bs1"],
          Bo1: this.payoff_structure_data[i]["Bo1"],
          As2: this.payoff_structure_data[i]["As2"],
          Ao2: this.payoff_structure_data[i]["Ao2"],
          Bs2: this.payoff_structure_data[i]["Bs2"],
          Bo2: this.payoff_structure_data[i]["Bo2"],
          // 2 means up and 3 means down
          a_c: "2",
          // following are original dots data
          Original_As1: this.payoff_structure_data[i]["As1"],
          Original_Ao1: this.payoff_structure_data[i]["Ao1"],
          Original_Bs1: this.payoff_structure_data[i]["Bs1"],
          Original_Bo1: this.payoff_structure_data[i]["Bo1"],
          Original_As2: this.payoff_structure_data[i]["As2"],
          Original_Ao2: this.payoff_structure_data[i]["Ao2"],
          Original_Bs2: this.payoff_structure_data[i]["Bs2"],
          Original_Bo2: this.payoff_structure_data[i]["Bo2"],
          a_c_present: "2",
          // 1 means flipped and 0 means not flipped
          enctr_1_reverse: Math.floor(Math.random() * 2),
          // enctr_2_reverse: Math.floor(Math.random() * 2),
          enctr_1_type: this.trial_identifier(this.payoff_structure_data[i]["As1"], this.payoff_structure_data[i]["Ao1"], this.payoff_structure_data[i]["Bs1"], this.payoff_structure_data[i]["Bo1"]),
          enctr_2_type: this.trial_identifier(this.payoff_structure_data[i]["As2"], this.payoff_structure_data[i]["Ao2"], this.payoff_structure_data[i]["Bs2"], this.payoff_structure_data[i]["Bo2"]),
          vert_pos: null,
          keypress: "",
          trust: null,
          prediction: null,
          reaction_time_trust: null,
          reaction_time_prediction: null,
          trial_order: null,
          trial_number: String(i + 1),
          // avatar_id1: null,
          // avatar_id2: null,
          avatar_id1: avatarids[0][i],
          avatar_id2: avatarids[1][i],
        }
        if (new_comb.enctr_1_reverse == 1) {
          var tempLeft, tempRight
          tempLeft = new_comb.As1
          tempRight = new_comb.Ao1
          new_comb.As1 = new_comb.Bs1
          new_comb.Ao1 = new_comb.Bo1
          new_comb.Bs1 = tempLeft
          new_comb.Bo1 = tempRight
          // temp here flipped the enctr type by munipulating the string
          let temp = new_comb.enctr_1_type[1] + new_comb.enctr_1_type[0];
          new_comb.enctr_1_type = temp;
          // Flipping the avatar's choice in ectr1 to reflect the flipped pay off structure
          if (new_comb.a_c == "2") {
            new_comb.a_c_present = "3";
          }
        }
        if (new_comb.enctr_1_reverse == 1) {
          var tempLeft, tempRight
          tempLeft = new_comb.As2
          tempRight = new_comb.Ao2
          new_comb.As2 = new_comb.Bs2
          new_comb.Ao2 = new_comb.Bo2
          new_comb.Bs2 = tempLeft
          new_comb.Bo2 = tempRight

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
