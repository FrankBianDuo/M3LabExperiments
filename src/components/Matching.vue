<template>
    <!-- Here is the template section, where all the HTML code takes action -->
    <b-modal
      id="modal-center-matching-task"
      size="xl"
      title="Matching Task"
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
            class="justify-content-center align-items-center my-1" :style="this.main_images_style">
            <img :src="require('../assets/2AFC/background.png')"   :style="this.global_size"/>
            <img :src="require(`../assets/2AFC/press_remind.png`)" :style="this.remind_style"/>
            <img :src="require(`../assets/2AFC/feedbackA.png`)"    :style="this.feedbackA_style"/>
            <img :src="require(`../assets/2AFC/feedbackD.png`)"    :style="this.feedbackD_style"/>

            <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
                this.combinations[this.current_avatar].avatar_idL, 4)}.png`)" :style="this.avatar_left_style"/>
            <img :src="require(`../assets/Avatars/Blind Avatars/avb${this.pad(
                this.combinations[this.current_avatar].avatar_idR, 4)}.png`)" :style="this.avatar_rght_style"/>
            <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)"  :style="this.avatar_left_style"/>
            <img :src="require(`../assets/Avatars/Avatar Eyes/Eyes 90.png`)"  :style="this.avatar_rght_style"/>
    
            <img :src="require(`../assets/2AFC/dots/dots_ltb${this.combinations[
                this.current_avatar].temp_leftAs}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_ltp${this.combinations[
                this.current_avatar].temp_leftAo}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_lbb${this.combinations[
                this.current_avatar].temp_leftBs}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_lbp${this.combinations[
                this.current_avatar].temp_leftBo}.png`)" :style="this.dots_main_style"/>
    
            <img :src="require(`../assets/2AFC/dots/dots_rtb${this.combinations[
                this.current_avatar].temp_rghtAs}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_rtp${this.combinations[
                this.current_avatar].temp_rghtAo}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_rbb${this.combinations[
                this.current_avatar].temp_rghtBs}.png`)" :style="this.dots_main_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_rbp${this.combinations[
                this.current_avatar].temp_rghtBo}.png`)" :style="this.dots_main_style"/>
    
            <img :src="require(`../assets/2AFC/dots/dots_mtb${this.combinations[
                this.current_avatar].temp_maskAs}.png`)" :style="this.dots_mask_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_mtp${this.combinations[
                this.current_avatar].temp_maskAo}.png`)" :style="this.dots_mask_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_mbb${this.combinations[
                this.current_avatar].temp_maskBs}.png`)" :style="this.dots_mask_style"/>
            <img :src="require(`../assets/2AFC/dots/dots_mbp${this.combinations[
                this.current_avatar].temp_maskBo}.png`)" :style="this.dots_mask_style"/>

            <img :src="require(`../assets/2AFC/choicelt.png`)" :style="this.choiceup_main_style"/>
            <img :src="require(`../assets/2AFC/choicelb.png`)" :style="this.choicedn_main_style"/>
            <img :src="require(`../assets/2AFC/choicert.png`)" :style="this.choiceup_main_style"/>
            <img :src="require(`../assets/2AFC/choicerb.png`)" :style="this.choicedn_main_style"/>
            <img :src="require(`../assets/2AFC/choicemt.png`)" :style="this.choiceup_mask_style"/>
            <img :src="require(`../assets/2AFC/choicemb.png`)" :style="this.choicedn_mask_style"/>
            <img :src="require(`../assets/2AFC/promptA.png`)"  :style="this.promptsAD_style"/>
            <img :src="require(`../assets/2AFC/promptD.png`)"  :style="this.promptsAD_style"/>
        </b-row>

      </b-container>
      <b-modal ref="my-rest-break-modal" hide-footer title="Rest Break">
        <h3 align="center">0{{ this.rest_break_min }}:{{ this.rest_break_seczero }}{{ this.rest_break_sec }}</h3>
        <b-button class="mt-3" variant="outline-danger" block @click="hideRestBreakModal">Back to Experiment</b-button>
      </b-modal>
    </b-modal>
  </template>
  
  <script>
  import payoff_structure from "./payoff2AFC.json";
  import usedavataridsbypred from "./Prediction.vue";
  export default {
    name: "matching-task",
    props: ["participant_name"],
    components: {},
    data() {
        return {
            payoff_structure_data: payoff_structure,
            windowsize: "height: 600px;",
            global_size: "position: absolute; width: 76%; height: auto; top: 20px;",
    
            // "Rest break data"
            rest_break_min: 0,
            rest_break_sec: 15,
            rest_break_seczero: "",
            rest_break_shown: false,

            main_images_style: `opacity: 100%; transition: opacity 0.75s;`,
            dots_main_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            dots_mask_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            choiceup_main_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            choicedn_main_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            choiceup_mask_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            choicedn_mask_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            feedbackA_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            feedbackD_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            promptsAD_style: `${this.global_size}; opacity: 0%; transition: opacity 0.1s;`,
            avatar_left_style: "position: absolute; max-width: 6.4%; max-height: auto; left: 16.2%; top: 25.62%; opacity: 100%; transition: opacity 0.75s;",
            avatar_rght_style: "position: absolute; max-width: 6.4%; max-height: auto; left: 51.6%; top: 25.62%; opacity: 100%; transition: opacity 0.75s;",
            remind_style: "position: absolute; max-width: 46%; max-height: auto; left: 26.8%; top: 80%; opacity: 100%; transition: opacity 0.75s;",
            show: false, // show is the data that toggles the visibility of block #1's modal

            // Data for styling
            variants: ["primary", "secondary", "success", 
                "warning", "danger", "info", "light", "dark"],
            headerBgVariant: "dark",
            headerTextVariant: "light",
            bodyBgVariant: "light",
            bodyTextVariant: "dark",
            footerBgVariant: "warning",
            footerTextVariant: "dark",

            index: 0,
            fliplr: false,
            flipud: false,
            current_avatar: 0,
            current_progress: 0,
            response_keypress: null,
            response_selected: null,
            max_avatar: 60,
            trial_started: 0,
            rttimestart: 0,
            combinations: [],
            primedSpacebar: true,
            primedkeypress: true,
            reaction_time: 0,
        };
    },
    beforeMount() {this.buildCombinations();},


    mounted() {
        this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
            if (modalId != "modal-center-matching-task") {return;}
            "Close the tutorial modal (page_73), stop the instruction time period timer"
            this.hide_tutorial();
            var d = new Date();
            var n = d.getTime();
            this.$emit("timesync", n);
        });
    },

  
    created: function () {
        "Event listener for all keyboard events"
        let parent = this;
        let main_style = "position: absolute; width: 76%; height: auto; top: 20px;";
        let remd_style = "position: absolute; max-width: 46%; max-height: auto; left: 26.8%; top: 80%;"
        window.addEventListener("keydown", function (event) {
            "speedup artificially speeds up experiment for efficient testing."
            let speedup = 0.4;
            if (parent.show) {
                if (event.keyCode == 32 && parent.primedSpacebar) {
                    var d1 = new Date();
                    parent.trial_started = d1.getTime();
                    parent.primedSpacebar = false;
                    parent.fliplr = parent.combinations[parent.current_avatar].fliplr;
                    parent.flipud = parent.combinations[parent.current_avatar].flipud;
                    parent.remind_style =    `${remd_style}; opacity: 0%; transition: opacity 0s;`;
                    parent.dots_main_style = `${main_style}; opacity: 100%; transition: opacity 0.5s;`;
                    setTimeout(function () {
                        if (parent.flipud) {parent.choiceup_main_style = `${main_style}; opacity: 100%; transition: opacity 0.1s;`;  
                        } else {            parent.choicedn_main_style = `${main_style}; opacity: 100%; transition: opacity 0.1s;`;
                        };}, Math.round(500 * speedup));
                    setTimeout(function () {parent.dots_mask_style =     `${main_style}; opacity: 100%; transition: opacity 0.5s;`;
                    }, Math.round(2000 * speedup));
                    setTimeout(function () {
                        if (parent.flipud) {parent.choiceup_mask_style = `${main_style}; opacity: 100%; transition: opacity 0.1s;`;
                        } else {            parent.choicedn_mask_style = `${main_style}; opacity: 100%; transition: opacity 0.1s;`;
                        }; }, Math.round(2500 * speedup));
                    setTimeout(function () {
                        parent.promptsAD_style = `${main_style}; opacity: 100%; transition: opacity 0.1s;`;
                        parent.rttimestart = new Date().getTime();
                        parent.primedkeypress = true;
                    }, Math.round(4000 * speedup));
                } else if (parent.primedkeypress && event.keyCode == 65) {
                    var d2 = new Date();
                    parent.primedkeypress = false;
                    parent.combinations[parent.current_avatar].response_keypress = "A";
                    parent.combinations[parent.current_avatar].reaction_time = (d2.getTime() - parent.rttimestart) * 0.001;
                    if (parent.fliplr) {parent.combinations[parent.current_avatar].response_selected = "R";
                    } else             {parent.combinations[parent.current_avatar].response_selected = "L";}
                    parent.promptsAD_style = `${main_style}; opacity: 0%; transition: opacity 0s;`;
                    parent.feedbackA_style = `${main_style}; opacity: 100%; transition: opacity 0s;`;
                    parent.trialFading(speedup);
                } else if (parent.primedkeypress && event.keyCode == 68) {
                    var d2 = new Date();
                    parent.primedkeypress = false;
                    parent.combinations[parent.current_avatar].response_keypress = "D";
                    parent.combinations[parent.current_avatar].reaction_time = (d2.getTime() - parent.rttimestart) * 0.001;
                    if (parent.fliplr) {parent.combinations[parent.current_avatar].response_selected = "L";
                    } else             {parent.combinations[parent.current_avatar].response_selected = "R";}
                    parent.promptsAD_style = `${main_style}; opacity: 0%; transition: opacity 0s;`;
                    parent.feedbackD_style = `${main_style}; opacity: 100%; transition: opacity 0s;`;
                    parent.trialFading(speedup);
                } 
            }
        });
    },
  
    methods: {
  
        trialFading(speedup) {
            "Makes old images fade out and new images fade in."
            let parent = this;
            let main_style = "position: absolute; width: 76%; height: auto; top: 20px;";
            let avlf_style = "position: absolute; max-width: 6.4%; max-height: auto; left: 16.2%; top: 25.62%;";
            let avrt_style = "position: absolute; max-width: 6.4%; max-height: auto; left: 51.6%; top: 25.62%;";
            let remd_style = "position: absolute; max-width: 46%; max-height: auto; left: 26.8%; top: 80%;"
            setTimeout(function () {
                parent.promptsAD_style =     `${main_style}; opacity: 0%; transition: opacity 0s;`;
                parent.dots_main_style =     `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.dots_mask_style =     `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.feedbackA_style =     `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.feedbackD_style =     `${main_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.choiceup_main_style = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;  
                parent.choicedn_main_style = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;  
                parent.choiceup_mask_style = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;  
                parent.choicedn_mask_style = `${main_style}; opacity: 0%; transition: opacity 0.5s;`;  
                parent.avatar_left_style =   `${avlf_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.avatar_rght_style =   `${avrt_style}; opacity: 0%; transition: opacity 0.5s;`;
                parent.main_images_style =   "opacity: 0%; transition: opacity 0.5s;";
                setTimeout(function () {parent.ChoiceHelper()}, Math.round(1000 * speedup));
            }, Math.round(500 * speedup));         
            setTimeout(function () {
                parent.main_images_style =   "opacity: 100%; transition: opacity 0.25s;";
                parent.avatar_left_style =   `${avlf_style}; opacity: 100%; transition: opacity 0.25s;`;
                parent.avatar_rght_style =   `${avrt_style}; opacity: 100%; transition: opacity 0.25s;`;
                parent.feedbackA_style =     `${main_style}; opacity: 0%; transition: opacity 0s;`;
                parent.feedbackD_style =     `${main_style}; opacity: 0%; transition: opacity 0s;`;
                parent.promptsAD_style =     `${main_style}; opacity: 0%; transition: opacity 0s;`;
            }, Math.round(3000 * speedup));
            setTimeout(function () {
                parent.primedSpacebar = true;
                if (parent.current_avatar < 4) {parent.remind_style = `${remd_style}; opacity: 100%; transition: opacity 0.75s;`;}
            }, Math.round(3500 * speedup));
        },
  
        ChoiceHelper() {
            "Updates current_avatar to progress to the next trial."
            let parent = this;
            this.trial_started = 0;
            this.current_progress += 1;
            this.combinations[this.current_avatar].trial_order = this.current_progress;
            this.combinations[this.current_avatar].trial_order_group = String(1 + Math.floor(this.current_progress / 10));
            parent.current_avatar += 1;
            setTimeout(function () {
                parent.$emit("matchingTaskDone", parent.combinations);
                if (parent.current_avatar == parent.max_avatar) {
                    "If finished all trials, hide current modal and show similarity matching section."
                    parent.$bvModal.hide("modal-center-matching-task");
                    parent.$bvModal.show("modal-center-similarity-task-instructions"); 
                    alert("Matching task finished!");
                }
                if (parent.current_avatar % 12 == 0 && parent.current_avatar < parent.max_avatar) {
                    parent.showRestBreakModal();
                    parent.countDownRestBreak();
                }
            }, 50);
        },


        // hide_tutorial() {this.$bvModal.hide("modal-center-SimInstr");},
        hide_tutorial() {this.$bvModal.hide("modal-center-matching-task-instructions");},


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


        euclidean_distances(lAs, lAo, lBs, lBo, mAs, mAo, mBs, mBo, rAs, rAo, rBs, rBo) {
            "What is the distance between all three payoff structures in the 3D payoff space?"
            let coordsl = this.payoff_coordinates(lAs, lAo, lBs, lBo);
            let coordsm = this.payoff_coordinates(mAs, mAo, mBs, mBo);
            let coordsr = this.payoff_coordinates(rAs, rAo, rBs, rBo);
            function distance(coords1, coords2) {
                let diff1 = coords1[0] - coords2[0];
                let diff2 = coords1[1] - coords2[1];
                let diff3 = coords1[2] - coords2[2];
                return Math.sqrt(Math.pow(diff1, 2) + Math.pow(diff2, 2) + Math.pow(diff3, 2)).toFixed(3)
            }
            return [distance(coordsl, coordsm), distance(coordsl, coordsr), distance(coordsm, coordsr)]
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


        no_twins(array) {
            `Returns two shuffeled lists with no twins.
            Twins are two values with the same index in
            both lists.  This prevents identical avatars.
            Notice that this function is the mirror oppo
            site of no_twins() in Similarity.vue.  This
            prevents twins between the tasks.`
            var yarra = array.reverse()
            var evennumbers = array.filter(number => number % 2 == 0)
            var srebmunneve = yarra.filter(number => number % 2 == 0)
            evennumbers = this.shuffle(evennumbers)
            srebmunneve = this.shuffle(srebmunneve)
            return [evennumbers, srebmunneve]},   

        // no_twins(array) {
        //     `Returns two shuffeled lists with no twins.
        //     Twins are two values with the same index in
        //     both lists.  This prevents identical avatars.`
        //     var array_ = this.shuffle(array);
        //     var evens_lst = array_.filter(number => number % 2 == 0);
        //     var oddss_lst = array_.filter(number => number % 2 == 1);
        //     var shuffled1 = evens_lst.concat(oddss_lst);
        //     var shuffled2 = oddss_lst.concat(evens_lst);
        //     return [shuffled1, shuffled2];},            
        

        buildCombinations() {
            `Core function of this file.  Constructs an array that contains all information 
            needed to execute this experiment and then randomly shuffles it.  Array also has 
            data slots that will be filled as the participants progress.`
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

            // var illegal_avatars = usedavataridsbypred
            // var avatarids = this.shuffle(Array(324).fill().map((x, i) => i))
            // for (i = 0; i < 324; i++) {
            //     "Removing avatars I want to use later in the experiment."
            //     let illegal_idx = avatarids.indexOf(illegal_avatars[i])
            //     if (illegal_idx > -1) {avatarids.splice(illegal_idx, 1)}
            // }
            // avatarids = this.no_twins(avatarids)

            // var usedavataridsbymatch = avatarids[0].concat(avatarids[1]).slice(0, this.max_avatar + 1)
            for (i = 0; i < this.max_avatar; i++) {
                var new_comb = {
                    trial_number: String(i + 1),
                    label: this.payoff_structure_data[i]["Label"],
                    main_leftAs: this.payoff_structure_data[i]["leftAs"],
                    main_leftAo: this.payoff_structure_data[i]["leftAo"],
                    main_leftBs: this.payoff_structure_data[i]["leftBs"],
                    main_leftBo: this.payoff_structure_data[i]["leftBo"],
                    main_rghtAs: this.payoff_structure_data[i]["rghtAs"],
                    main_rghtAo: this.payoff_structure_data[i]["rghtAo"],
                    main_rghtBs: this.payoff_structure_data[i]["rghtBs"],
                    main_rghtBo: this.payoff_structure_data[i]["rghtBo"],
                    main_maskAs: this.payoff_structure_data[i]["maskAs"],
                    main_maskAo: this.payoff_structure_data[i]["maskAo"],
                    main_maskBs: this.payoff_structure_data[i]["maskBs"],
                    main_maskBo: this.payoff_structure_data[i]["maskBo"],
                    temp_leftAs: this.payoff_structure_data[i]["leftAs"],
                    temp_leftAo: this.payoff_structure_data[i]["leftAo"],
                    temp_leftBs: this.payoff_structure_data[i]["leftBs"],
                    temp_leftBo: this.payoff_structure_data[i]["leftBo"],
                    temp_rghtAs: this.payoff_structure_data[i]["rghtAs"],
                    temp_rghtAo: this.payoff_structure_data[i]["rghtAo"],
                    temp_rghtBs: this.payoff_structure_data[i]["rghtBs"],
                    temp_rghtBo: this.payoff_structure_data[i]["rghtBo"],
                    temp_maskAs: this.payoff_structure_data[i]["maskAs"],
                    temp_maskAo: this.payoff_structure_data[i]["maskAo"],
                    temp_maskBs: this.payoff_structure_data[i]["maskBs"],
                    temp_maskBo: this.payoff_structure_data[i]["maskBo"],
                    atomic_mask: this.atomic_action(
                        this.payoff_structure_data[i]["maskAs"], this.payoff_structure_data[i]["maskAo"], 
                        this.payoff_structure_data[i]["maskBs"], this.payoff_structure_data[i]["maskBo"]),
                    atomic_left: this.atomic_action(
                        this.payoff_structure_data[i]["leftAs"], this.payoff_structure_data[i]["leftAo"], 
                        this.payoff_structure_data[i]["leftBs"], this.payoff_structure_data[i]["leftBo"]),
                    atomic_rght: this.atomic_action(
                        this.payoff_structure_data[i]["rghtAs"], this.payoff_structure_data[i]["rghtAo"], 
                        this.payoff_structure_data[i]["rghtBs"], this.payoff_structure_data[i]["rghtBo"]),
                    euclidean: this.euclidean_distances(
                        this.payoff_structure_data[i]["leftAs"], this.payoff_structure_data[i]["leftAo"], 
                        this.payoff_structure_data[i]["leftBs"], this.payoff_structure_data[i]["leftBo"], 
                        this.payoff_structure_data[i]["maskAs"], this.payoff_structure_data[i]["maskAo"], 
                        this.payoff_structure_data[i]["maskBs"], this.payoff_structure_data[i]["maskBo"],
                        this.payoff_structure_data[i]["rghtAs"], this.payoff_structure_data[i]["rghtAo"], 
                        this.payoff_structure_data[i]["rghtBs"], this.payoff_structure_data[i]["rghtBo"]),
                    flipud: Math.floor(Math.random() * 2),
                    fliplr: Math.floor(Math.random() * 2),
                    payflipslrud: "",
                    trial_order: null,
                    trial_order_group: null,
                    avatar_idL: avatarids[0][i],
                    avatar_idR: avatarids[1][i],
                }
                if (new_comb.flipud == 1) {new_comb.flipud == true} else {new_comb.flipud == false}
                if (new_comb.fliplr == 1) {new_comb.fliplr == true} else {new_comb.fliplr == false}
                if (new_comb.flipud) {
                    if (new_comb.fliplr) {
                        new_comb.payflipslrud = "TT";
                        new_comb.temp_leftAs = this.payoff_structure_data[i]["rghtBs"];
                        new_comb.temp_leftAo = this.payoff_structure_data[i]["rghtBo"];
                        new_comb.temp_leftBs = this.payoff_structure_data[i]["rghtAs"];
                        new_comb.temp_leftBo = this.payoff_structure_data[i]["rghtAo"];
                        new_comb.temp_rghtAs = this.payoff_structure_data[i]["leftBs"];
                        new_comb.temp_rghtAo = this.payoff_structure_data[i]["leftBo"];
                        new_comb.temp_rghtBs = this.payoff_structure_data[i]["leftAs"];
                        new_comb.temp_rghtBo = this.payoff_structure_data[i]["leftAo"];
                        new_comb.temp_maskAs = this.payoff_structure_data[i]["maskBs"];
                        new_comb.temp_maskAo = this.payoff_structure_data[i]["maskBo"];
                        new_comb.temp_maskBs = this.payoff_structure_data[i]["maskAs"];
                        new_comb.temp_maskBo = this.payoff_structure_data[i]["maskAo"];                       
                    } else {
                        new_comb.payflipslrud = "FT";
                        new_comb.temp_leftAs = this.payoff_structure_data[i]["leftBs"];
                        new_comb.temp_leftAo = this.payoff_structure_data[i]["leftBo"];
                        new_comb.temp_leftBs = this.payoff_structure_data[i]["leftAs"];
                        new_comb.temp_leftBo = this.payoff_structure_data[i]["leftAo"];
                        new_comb.temp_rghtAs = this.payoff_structure_data[i]["rghtBs"];
                        new_comb.temp_rghtAo = this.payoff_structure_data[i]["rghtBo"];
                        new_comb.temp_rghtBs = this.payoff_structure_data[i]["rghtAs"];
                        new_comb.temp_rghtBo = this.payoff_structure_data[i]["rghtAo"];
                        new_comb.temp_maskAs = this.payoff_structure_data[i]["maskBs"];
                        new_comb.temp_maskAo = this.payoff_structure_data[i]["maskBo"];
                        new_comb.temp_maskBs = this.payoff_structure_data[i]["maskAs"];
                        new_comb.temp_maskBo = this.payoff_structure_data[i]["maskAo"];                     
                    }
                } else {
                    if (new_comb.fliplr) {
                        new_comb.payflipslrud = "TF";
                        new_comb.temp_leftAs = this.payoff_structure_data[i]["rghtAs"];
                        new_comb.temp_leftAo = this.payoff_structure_data[i]["rghtAo"];
                        new_comb.temp_leftBs = this.payoff_structure_data[i]["rghtBs"];
                        new_comb.temp_leftBo = this.payoff_structure_data[i]["rghtBo"];
                        new_comb.temp_rghtAs = this.payoff_structure_data[i]["leftAs"];
                        new_comb.temp_rghtAo = this.payoff_structure_data[i]["leftAo"];
                        new_comb.temp_rghtBs = this.payoff_structure_data[i]["leftBs"];
                        new_comb.temp_rghtBo = this.payoff_structure_data[i]["leftBo"];
                        new_comb.temp_maskAs = this.payoff_structure_data[i]["maskAs"];
                        new_comb.temp_maskAo = this.payoff_structure_data[i]["maskAo"];
                        new_comb.temp_maskBs = this.payoff_structure_data[i]["maskBs"];
                        new_comb.temp_maskBo = this.payoff_structure_data[i]["maskBo"];                    
                    } else {
                        new_comb.payflipslrud = "FF";
                        new_comb.temp_leftAs = this.payoff_structure_data[i]["leftAs"];
                        new_comb.temp_leftAo = this.payoff_structure_data[i]["leftAo"];
                        new_comb.temp_leftBs = this.payoff_structure_data[i]["leftBs"];
                        new_comb.temp_leftBo = this.payoff_structure_data[i]["leftBo"];
                        new_comb.temp_rghtAs = this.payoff_structure_data[i]["rghtAs"];
                        new_comb.temp_rghtAo = this.payoff_structure_data[i]["rghtAo"];
                        new_comb.temp_rghtBs = this.payoff_structure_data[i]["rghtBs"];
                        new_comb.temp_rghtBo = this.payoff_structure_data[i]["rghtBo"];
                        new_comb.temp_maskAs = this.payoff_structure_data[i]["maskAs"];
                        new_comb.temp_maskAo = this.payoff_structure_data[i]["maskAo"];
                        new_comb.temp_maskBs = this.payoff_structure_data[i]["maskBs"];
                        new_comb.temp_maskBo = this.payoff_structure_data[i]["maskBo"];                     
                    }                
                }
            trials.push(new_comb)
            }
            trials = this.shuffle(trials);
            console.log("combinations!")
            console.log(trials)
            this.combinations = trials;
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
  