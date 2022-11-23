<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- Here is the vue Page for the index interface on our program -->
    <p>
      (1) Complete the instructions, (2) prediction task, (3) matching task, (4) similarity task and (4) the survey.  Ignore the 
      <br />Written response section.  Your data will automatically be sent to our server once you see the completion URL.  If you   
      <br />never see the URL, then click 'Send Data', download your data files, and save them.  Do not email them to me directly.   
      <br />Email your three data files to subject pool at subject.pool@umich.edu.  If you see the URL, then email it to me at  
      <br />gregstan@umich.edu with your participant ID, shown below.  Feel free to email me questions.  NEVER refresh the page!
    </p>
    <div class="bv-example-row bv-example-row-flex-cols">
      <!-- Button for firing the instruction modal -->
      <b-row class="my-4 justify-content-center">
        <!-- <b-button v-b-modal.modal-center-WRITENAMEOFPAGEHERETOSEEITPOPUPFIRST>Instructions</b-button> -->
        <b-button v-b-modal.modal-center-BotStopper>Instructions</b-button>
      </b-row>
      <!-- Button for firing the Block #1 - #3 modals -->
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.button_show_prediction_results" v-b-modal.modal-center-prediction-task>Prediction Task</b-button>
        <download-csv
          v-if="this.finished_prediction_task"
          class="btn btn-default"
          :data="this.predictionTaskResults"
          :name="this.predictionTaskFileName()"
          >
          <b-button>Download data for prediction task.</b-button>
        </download-csv>
        <!-- These download buttons become visible after some progress has been made -->
        <!-- <b-button class="btn btn-default" @click="this.fetchPresignedUrl"> Download data for Block #1 </b-button> -->
      </b-row>
      <!-- <b-row class="my-4 justify-content-center">
        <b-button class="btn btn-default" @click="this.fetchPresignedUrl">Send Data to S3</b-button>
      </b-row> -->
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.button_show_matching_results" v-b-modal.modal-center-matching-task-instructions>Matching Task</b-button>
        <download-csv
          v-if="this.finished_matching_task"
          class="btn btn-default"
          :data="this.matchingTaskResults"
          :name="this.matchingTaskFileName()"
        >
          <b-button>Download data for matching task.</b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.button_show_similarity_results" v-b-modal.modal-center-similarity-task-instructions>Similarity Task</b-button>
        <download-csv
          v-if="this.finished_similarity_task"
          class="btn btn-default"
          :data="this.similarityTaskResults"
          :name="this.similarityTaskFileName()"
        >
          <b-button>Download data for similarity task.</b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center-FR1>Written Responses</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center-survey1>Experiment Survey</b-button>
      </b-row>
      <!-- <download-csv
        class="btn btn-default"
        :data="this.predictionTaskResults"
        :name="this.predictionTaskFileName()"
      >
        <b-button>Download Data</b-button>
      </download-csv> -->
      <b-row class="my-4 justify-content-center">
        <b-button class="btn btn-default" @click="this.fetchPresignedUrl">Send Data</b-button>
      </b-row>
      <!-- <b-row class="my-4 justify-content-center">Participant ID: {{ this.form.name }}</b-row> -->
      <b-row class="my-4 justify-content-center">Participant ID: {{ this.participantID }}</b-row>
      
      <b-row class="my-4 justify-content-center"></b-row>
    </div>

    <!-- <b-container class="align-bottom" :style="this.windowsize"  >
          <img :src="require('../../assets/Instructions/Contol Trees/Control Tree 1.png')" style="width: 90%; height: auto; transform: translate(-50%, 0); margin-left: 50%;"/>
    </b-container>-->

    <b-modal id="modal-prevent-closing" ref="modal" title="Experiment Survey">
      <!-- Here's the HTML code for the survey form -->
      <b-form>
        <b-form-group id="input-group-2" label="Participant ID:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.id" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Date:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.date" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="optn_1_4:" label-for="input-2">
          <b-form-select v-model="form.optn_1_4" :options="form.optn_1_4"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="RA Present:" label-for="input-2">
          <b-form-select v-model="form.ra" :options="ra_options"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="optn_1_3:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.optn_1_3" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Number of Older Brother(s):" label-for="input-2">
          <b-form-input id="input-2" v-model="form.olderBro" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Number of Older Sister(s):" label-for="input-2">
          <b-form-input id="input-2" v-model="form.olderSis" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Number of Younger Brother(s):" label-for="input-2">
          <b-form-input id="input-2" v-model="form.youngerBro" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Number of Younger Sister(s):" label-for="input-2">
          <b-form-input id="input-2" v-model="form.youngerSis" required></b-form-input>
        </b-form-group>

        <b-button variant="primary">Submit</b-button>
      </b-form>
    </b-modal>

    <BotStopper @timesync="instructionStart" :windowsize="this.window_size" />
    <!-- <Consent :pID="this.participantID" :windowsize="this.window_size" /> -->
    <Consentp1 :pID="this.participantID" :windowsize="this.window_size" />
    <Consentp2 :pID="this.participantID" :windowsize="this.window_size" />
    <Consentp3 :pID="this.participantID" :windowsize="this.window_size" />
    <Consentp4 :pID="this.participantID" :windowsize="this.window_size" />
    <ExperInfo :pID="this.participantID" :windowsize="this.window_size" />
    <ExperTutor :windowsize="this.window_size" />
    <Instr01Intro :windowsize="this.window_size" />
    <Instr02Desire :windowsize="this.window_size" />
    <Instr03Rooms :windowsize="this.window_size" />
    <Instr04Walls :windowsize="this.window_size" />
    <Instr05Social :windowsize="this.window_size" />
    <Instr06Betting :windowsize="this.window_size" />
    <Instr07Psych :windowsize="this.window_size" />
    <Instr08Prudence :windowsize="this.window_size" />
    <Instr09Practice :windowsize="this.window_size" />
    <Instr10Review :windowsize="this.window_size" />
    <BeginTrueFalse :windowsize="this.window_size" />
    <EndTrueFalse :windowsize="this.window_size" />
    <ProgBar :windowsize="this.window_size" />
    <KeyHands :windowsize="this.window_size" />
    <EndInstr :windowsize="this.window_size" />
    <Tutorial72 :previous_ans="this.ans_tutorial" :windowsize="this.window_size" />
    <Tutorial73 :previous_ans="this.ans_tutorial" :windowsize="this.window_size" />
    <FRpage1 @FR1Done="FR1Finished" :windowsize="this.window_size" />
    <FRpage2 @FR2Done="FR2Finished" :windowsize="this.window_size" />
    <FRpage3 @FR3Done="FR3Finished" :windowsize="this.window_size" />
    <FRpage4 @FR4Done="FR4Finished" :windowsize="this.window_size" />
    <FRpage5 @FR5Done="FR5Finished" :windowsize="this.window_size" />
    <FRpage6 @FR6Done="FR6Finished" :windowsize="this.window_size" />
    <FRpage7 @FR7Done="FR7Finished" :windowsize="this.window_size" />
    <FRpage8 @FR8Done="FR8Finished" :windowsize="this.window_size" />
    <FRpage9 @FR9Done="FR9Finished" :windowsize="this.window_size" />
    <FRpage10 @FR10Done="FR10Finished" :windowsize="this.window_size" />
    <FRpage11 @FR11Done="FR11Finished" :windowsize="this.window_size" />
    <FRpage12 @FR12Done="FR12Finished" :windowsize="this.window_size" />
    <FRpage13 @FR13Done="FR13Finished" :windowsize="this.window_size" />
    <!-- <Survey1 @Survey1Done="Survey1Finished" :windowsize="this.window_size" /> -->
    <Survey1b @Survey1Done="Survey1Finished" :windowsize="this.window_size" />
    <!-- <Survey2 @Survey2Done="Survey2Finished" :windowsize="this.window_size" /> -->
    <Survey2b @Survey2Done="Survey2Finished" :windowsize="this.window_size" />
    <!-- <Survey3 @Survey3Done="Survey3Finished" :windowsize="this.window_size" /> -->
    <Survey3b @Survey3Done="Survey3Finished" :windowsize="this.window_size" />
    <!-- <Survey4 @Survey4Done="Survey4Finished" :windowsize="this.window_size" /> -->
    <Survey4b @Survey4Done="Survey4Finished" :windowsize="this.window_size" />
    <Survey5 @Survey5Done="Survey5Finished" :windowsize="this.window_size" />
    <Survey6 @Survey6Done="Survey6Finished" :windowsize="this.window_size" />
    <Trystuffout :windowsize="this.window_size" />
    <Absurdity :windowsize="this.window_size" />
    <Silly :windowsize="this.window_size" />
    <Foolish :windowsize="this.window_size" />
    <Trymore1 :windowsize="this.window_size" />
    <Trymore2 :windowsize="this.window_size" />
    <SimInstr :windowsize="this.window_size" />
    <MatchInstr :windowsize="this.window_size" />

    <predictionTask
      style="background-color: black;"
      @timesync="instructionEnd"
      @predictionTaskDone="predictionTaskFinished"
      :participant_name="this.form.name"
    />
    <matchingTask @matchingTaskDone="matchingTaskFinished" :participant_name="this.form.name" />
    <similarityTask @similarityTaskDone="similarityTaskFinished" :participant_name="this.form.name" />
    <b-modal
      id="modal-center-end"
      size="xl"
      centered
      title="Loading your end of experiment URL.  If the url fails to load within 20 seconds, screenshot this page and email it as an attachment to gregstan@umich.edu to demonstrate that you completed the experiment. Please download your three data files and email to subject pool at subject.pool@umich.edu. If you would like to view your data files, click the grey area of this screen, and click the Download Data buttons beside each task."
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
      <div v-if="!data_sent_to_s3" class="d-flex justify-content-center mb-3">
        <b-spinner variant="primary" label="Loading..."></b-spinner>
      </div>
      <b-container
        v-if="data_sent_to_s3"
        class="align-bottom"
        :style="this.windowsize"
      >Please message the experimenter with your participant ID and the quote "I like avatars" to demonstrate that you finished this experiment.</b-container>
    </b-modal>
  </div>
</template>

<script>
// import BlockOne from "./blockOne.vue";
// import BlockTwo from "./blockOneSave.vue";
// import BlockTwo from "./blockTwo.vue";
// import BlockThree from "./blockThreeb.vue";
import moment from "moment";
import predictionTask from "./Prediction.vue";
import matchingTask from "./Matching.vue";
import similarityTask from "./Similarity.vue";
import SimInstr from "./tutorialPages/InstrSimilarity.vue";
import MatchInstr from "./tutorialPages/InstrMaskMatch.vue";
import BotStopper from "./tutorialPages/BotStopper.vue";
// import Consent from "./tutorialPages/Consent.vue";
import Consentp1 from "./tutorialPages/Consentp1.vue";
import Consentp2 from "./tutorialPages/Consentp2.vue";
import Consentp3 from "./tutorialPages/Consentp3.vue";
import Consentp4 from "./tutorialPages/Consentp4.vue";
import ExperInfo from "./tutorialPages/ExperInfo.vue";
import ExperTutor from "./tutorialPages/ExperTutor.vue";
import Instr01Intro from "./tutorialPages/Instr01Intro.vue";
import Instr02Desire from "./tutorialPages/Instr02Desire.vue";
import Instr03Rooms from "./tutorialPages/Instr03Rooms.vue";
import Instr04Walls from "./tutorialPages/Instr04Walls.vue";
import Instr05Social from "./tutorialPages/Instr05Social.vue";
import Instr06Betting from "./tutorialPages/Instr06Betting.vue";
import Instr07Psych from "./tutorialPages/Instr07Psych.vue";
import Instr08Prudence from "./tutorialPages/Instr08Prudence.vue";
import Instr09Practice from "./tutorialPages/Instr09Practice.vue";
import Instr10Review from "./tutorialPages/Instr10Review.vue";
import BeginTrueFalse from "./tutorialPages/BeginTrueFalse.vue";
import EndTrueFalse from "./tutorialPages/EndTrueFalse.vue";
import ProgBar from "./tutorialPages/ProgBar.vue";
import KeyHands from "./tutorialPages/KeyHands.vue";
import EndInstr from "./tutorialPages/EndInstr.vue";
import Tutorial72 from "./tutorialPages/page_72.vue";
import Tutorial73 from "./tutorialPages/page_73.vue";
import FRpage1 from "./FreeResponsePages/page_1.vue";
import FRpage2 from "./FreeResponsePages/page_2.vue";
import FRpage3 from "./FreeResponsePages/page_3.vue";
import FRpage4 from "./FreeResponsePages/page_4.vue";
import FRpage5 from "./FreeResponsePages/page_5.vue";
import FRpage6 from "./FreeResponsePages/page_6.vue";
import FRpage7 from "./FreeResponsePages/page_7.vue";
import FRpage8 from "./FreeResponsePages/page_8.vue";
import FRpage9 from "./FreeResponsePages/page_9.vue";
import FRpage10 from "./FreeResponsePages/page_10.vue";
import FRpage11 from "./FreeResponsePages/page_11.vue";
import FRpage12 from "./FreeResponsePages/page_12.vue";
import FRpage13 from "./FreeResponsePages/page_13.vue";
// import Survey1 from "./SurveyPages/page_1.vue";
import Survey1b from "./SurveyPages/page_1b.vue";
// import Survey2 from "./SurveyPages/page_2.vue";
import Survey2b from "./SurveyPages/page_2b.vue";
// import Survey3 from "./SurveyPages/page_3.vue";
import Survey3b from "./SurveyPages/page_3b.vue";
// import Survey4 from "./SurveyPages/page_4.vue";
import Survey4b from "./SurveyPages/page_4b.vue";
import Survey5 from "./SurveyPages/page_5.vue";
import Survey6 from "./SurveyPages/page_6.vue";
import json from "./dataSample.json";
import Vue from "vue";

export default {
  name: "MainPage",
  components: {
    // Survey1,
    // Survey2,
    // Survey3,
    // Survey4,
    Survey5,
    Survey6,
    Survey1b,
    Survey2b,
    Survey3b,
    Survey4b,

    FRpage1,
    FRpage2,
    FRpage3,
    FRpage4,
    FRpage5,
    FRpage6,
    FRpage7,
    FRpage8,
    FRpage9,
    FRpage10,
    FRpage11,
    FRpage12,
    FRpage13,
    predictionTask,
    matchingTask,
    similarityTask,
    SimInstr,
    MatchInstr,
    BotStopper,
    // Consent,
    Consentp1,
    Consentp2,
    Consentp3,
    Consentp4,
    ExperInfo,
    ExperTutor,
    Instr01Intro,
    Instr02Desire,
    Instr03Rooms,
    Instr04Walls,
    Instr05Social,
    Instr06Betting,
    Instr07Psych,
    Instr08Prudence,
    Instr09Practice,
    Instr10Review,
    BeginTrueFalse,
    EndTrueFalse,
    ProgBar,
    KeyHands,
    EndInstr,
    Tutorial72,
    Tutorial73,
  },
  props: {
    msg: String,
  },
  // Survey data and final output file data
  data() {
    return {
      // ep1_shown is used to monitor if experiment 1 is shown
      ep1_shown: false,
      bot_shown: false,
      data_sent_to_s3: false,
      participantID: this.generateParticipantId(),
      form: "",
      S1Results: "",
      API_KEY: "AIzaSyAxlUCye8_1_QFtX1S7ychFF8KpmpylaRk",
      CLIENT_ID:
        "292287515987-0ujosbnm7d5v37l9dkp3fk5pfkoi4b27.apps.googleusercontent.com",
      dataJson: json,
      finished_prediction_task: false,
      finished_matching_task: false,
      finished_similarity_task: false,
      show: false,
      b_show_0: true,
      button_show_prediction_results: true,
      button_show_matching_results: true,
      button_show_similarity_results: true,
      window_size: "height: 600px;",
      // ----------------------------------------------These are data for styling
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
      // ---------------------------------------------
      end_survey_form: new Object(),
      similarity_scores: new Object(), //This may need to be deleted 02.23.22
      FRResults: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      predictionTaskRawResults: null,
      predictionTaskResults: null,
      matchingTaskResults: null,
      similarityTaskResults: null,
      gender_options: [
        { value: "Female", text: "Female" },
        { value: "Male", text: "Male" },
        { value: "Other", text: "Other" },
      ],
      ra_options: [
        { value: "Rashi Watwani", text: "Rashi Watwani" },
        { value: "Justin Baadarani", text: "Justin Baadarani" },
        { value: "Derek Chan", text: "Derek Chan" },
        { value: "Monwarul Islam", text: "Monwarul Islam" },
        { value: "Al-Taimee Hassan", text: "Al-Taimee Hassan" },
      ],
      // A true means the participant got that question right, and vice verse
      ans_tutorial: {},
      parsed_answers: "",
      parsed_wrong_ans: "",
      aws_bucket_name: "experimentdata2020",
      aws_bucket_name2: "moralitygameexperiment",
      // serverlessrepo-s3-presigned-url-s3presignedurl-EF2SRE90YXDY?BucketName="experimentdata2020"&ObjectName="test10.txt"&ExpiredIn=3600
      aws_presigned_lambda:  `https://fathomless-coast-21413.herokuapp.com/https://ao9o9jz806.execute-api.us-east-2.amazonaws.com/gets3presigned?BucketName=`,
      aws_s3_post_url: `https://fathomless-coast-21413.herokuapp.com/https://experimentdata2020.s3.amazonaws.com`,
      aws_s3_post_url2: `https://fathomless-coast-21413.herokuapp.com/https://moralitygameexperiment.s3.amazonaws.com`,
      // Variables for tracking how much time is spent on instructions
      instrucStart: 0,
      instrucEnd: 0,
      instrucTime: 0,
      Sim_Score_1: "",
      Sim_Score_2: "",
    };
  },
  created: function () {
    let parent = this;
    window.addEventListener("keydown", function (event) {
      // Prevent the spacebar jerk
      if (event.keyCode == 32) {
        console.log("event space detected");
        if (parent.ep1_shown) {
          console.log("no scroll");
          event.preventDefault();
        }
      }
      // Prevent enter from booting people out of captcha page
      if (event.keyCode == 13) {
        console.log("enter event");
        if (parent.bot_shown) {
          console.log("no boot");
          event.preventDefault();
        }
      }
    });
  },
  computed: {},
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      let parent = this;
      if (modalId == "modal-center-matching-task") {
        parent.ep1_shown = true;
        console.log(parent.ep1_shown);
      } else if (modalId == "modal-center-BotStopper") {
        parent.bot_shown = true;
      }
    });
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      let parent = this;
      if (modalId == "modal-center-matching-task") {
        parent.ep1_shown = false;
        console.log(parent.ep1_shown);
      } else if (modalId == "modal-center-BotStopper") {
        parent.bot_shown = false;
      }
    });
  },
  methods: {
    generateParticipantId() {
      var text = "";
      let chars = "abcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 3; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return String(moment(String(new Date())).format("YYYYMMDDhhmmss")) + text;
    },
    fetchPresignedUrl() {
      let parent = this
      // if (this.data_sent_to_s3 == true) {
      //   return;
      // }
      let sending_url_1 =
        this.aws_presigned_lambda +
        this.aws_bucket_name2 +
        "&ObjectName=" +
        this.predictionTaskFileName();
      Vue.axios.get(sending_url_1, {
        "x-requested-with": "XMLHttpRequest",
        "Origin": "https://m3labexperiment.com",
      }).then((response) => {
        console.log(response.data);
        Vue.axios.put("https://fathomless-coast-21413.herokuapp.com/" + response.data, this.$papa.unparse(this.predictionTaskResults));
        // parent.data_sent_to_s3 = true;
      });
      //Same thing for Experiment 2.
      let sending_url_2 =
        this.aws_presigned_lambda +
        this.aws_bucket_name2 +
        "&ObjectName=" +
        this.matchingTaskFileName();
      Vue.axios.get(sending_url_2, {
        "x-requested-with": "XMLHttpRequest",
        "Origin": "https://m3labexperiment.com",
      }).then((response) => {
        console.log(response.data);
        Vue.axios.put("https://fathomless-coast-21413.herokuapp.com/" + response.data, this.$papa.unparse(this.matchingTaskResults));
        // parent.data_sent_to_s3 = true;
      });    
      //Same thing for Experiment 3.
      let sending_url_3 =
        this.aws_presigned_lambda +
        this.aws_bucket_name2 +
        "&ObjectName=" +
        this.similarityTaskFileName();
      Vue.axios.get(sending_url_3, {
        "x-requested-with": "XMLHttpRequest",
        "Origin": "https://m3labexperiment.com",
      }).then((response) => {
        console.log(response.data);
        Vue.axios.put("https://fathomless-coast-21413.herokuapp.com/" + response.data, this.$papa.unparse(this.similarityTaskResults));
        parent.data_sent_to_s3 = true;
      });      
    },
    instructionStart(value) {
      this.instrucStart = value;
    },
    instructionEnd(value) {
      // In case the flow is violated, stop all emits after the first emit
      if (this.instrucTime != 0) {
        return;
      }
      this.instrucEnd = value;
      this.instrucTime = (this.instrucEnd - this.instrucStart) * 0.001;
      var answers = "";
      var wrong_answers = "";
      // var raw_answers = [];
      for (let [key, value] of Object.entries(this.ans_tutorial)) {
        if (value[0] == false) {
          if (wrong_answers == "") {
            wrong_answers += String(key - 19)
          } else {
            wrong_answers += ', ' + String(key - 19)
          }
        }
        if (value[1] == 't' && value[0] == true) {
          answers += 'T'
        } else if (value[1] == 't' && value[0] == false) {
          answers += 'F'
        } else if (value[1] == 'f' && value[0] == true) {
          answers += 'F'
        } else {
          answers += 'T'
        }
    
      }
      this.parsed_answers = answers;
      this.parsed_wrong_ans = wrong_answers;
      console.log("this.ans_tutorial");
      console.log(answers);
      console.log(wrong_answers);
      console.log(this.instrucTime);
    },
    onAnsChild20(value) {
      this.ans_tutorial[20] = value;
      // eslint-disable-next-line no-console
      console.log(this.ans_tutorial);
    },
    onAnsChild21(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[21] = value;
      // eslint-disable-next-line no-console
      console.log(this.ans_tutorial);
    },
    onAnsChild22(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[22] = value;
      // eslint-disable-next-line no-console
      console.log(this.ans_tutorial);
    },
    onAnsChild23(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[23] = value;
    },
    onAnsChild24(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[24] = value;
    },
    onAnsChild25(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[25] = value;
    },
    onAnsChild26(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[26] = value;
    },
    onAnsChild27(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[27] = value;
    },
    onAnsChild28(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[28] = value;
    },
    onAnsChild29(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[29] = value;
    },
    onAnsChild61(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[61] = value;
    },
    onAnsChild62(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[62] = value;
    },
    onAnsChild63(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[63] = value;
    },
    onAnsChild64(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[64] = value;
    },
    onAnsChild65(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[65] = value;
    },
    onAnsChild66(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[66] = value;
    },
    onAnsChild67(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[67] = value;
    },
    onAnsChild68(value) {
      // eslint-disable-next-line no-console
      console.log(value);
      this.ans_tutorial[68] = value;
    },
    FR1Finished(results) {
      this.FRResults[1] = results;
      this.updateDataSheet();
    },
    FR2Finished(results) {
      this.FRResults[2] = results;
      this.updateDataSheet();
    },
    FR3Finished(results) {
      this.FRResults[3] = results;
      this.updateDataSheet();
    },
    FR4Finished(results) {
      this.FRResults[4] = results;
      this.updateDataSheet();
    },
    FR5Finished(results) {
      this.FRResults[5] = results;
      this.updateDataSheet();
    },
    FR6Finished(results) {
      this.FRResults[6] = results;
      this.updateDataSheet();
    },
    FR7Finished(results) {
      this.FRResults[7] = results;
      this.updateDataSheet();
    },
    FR8Finished(results) {
      this.FRResults[8] = results;
      this.updateDataSheet();
    },
    FR9Finished(results) {
      this.FRResults[9] = results;
      this.updateDataSheet();
    },
    FR10Finished(results) {
      this.FRResults[10] = results;
      this.updateDataSheet();
    },
    FR11Finished(results) {
      this.FRResults[11] = results;
      this.updateDataSheet();
    },
    FR12Finished(results) {
      this.FRResults[12] = results;
      this.updateDataSheet();
    },
    FR13Finished(results) {
      this.FRResults[13] = results;
      this.updateDataSheet();
    },
    Survey1Finished(results) {
      console.log(results);
      this.end_survey_form.optn_1_1 = results.optn_1_1;
      this.end_survey_form.optn_1_2 = results.optn_1_2;
      this.end_survey_form.optn_1_3 = results.optn_1_3;
      this.end_survey_form.optn_1_4 = results.optn_1_4;
      this.updateDataSheet();
    },
    Survey2Finished(results) {
      console.log(results);
      this.end_survey_form.optn_2_1 = results.optn_2_1;
      this.end_survey_form.optn_2_2 = results.optn_2_2;
      this.end_survey_form.optn_2_3 = results.optn_2_3;
      this.end_survey_form.optn_2_4 = results.optn_2_4;
      this.updateDataSheet();
      // this.fetchPresignedUrl();
    },
    Survey3Finished(results) {
      console.log(results);
      this.end_survey_form.optn_3_1 = results.optn_3_1;
      this.end_survey_form.optn_3_2 = results.optn_3_2;
      this.end_survey_form.optn_3_3 = results.optn_3_3;
      this.end_survey_form.optn_3_4 = results.optn_3_4;
      this.updateDataSheet();
    },
    Survey4Finished(results) {
      console.log(results);
      this.end_survey_form.optn_4_1 = results.optn_4_1;
      this.end_survey_form.optn_4_2 = results.optn_4_2;
      this.end_survey_form.optn_4_3 = results.optn_4_3;
      this.end_survey_form.optn_4_4 = results.optn_4_4;
      this.updateDataSheet();
      this.fetchPresignedUrl();
    },
    Survey5Finished(results) {
      console.log(results);
      this.end_survey_form.bigfive06 = results.bigfive06;
      this.end_survey_form.bigfive07 = results.bigfive07;
      this.end_survey_form.bigfive08 = results.bigfive08;
      this.end_survey_form.bigfive09 = results.bigfive09;
      this.end_survey_form.bigfive10 = results.bigfive10;
      this.end_survey_form.agree = results.agree;
      this.updateDataSheet();
    },
    Survey6Finished(results) {
      console.log(results);
      this.updateDataSheet();
      console.log("survey 6 finished!");
      this.fetchPresignedUrl();
    },
    updateDataSheet() {
      this.predictionTaskResults = this.processPredictionTaskResults(this.predictionTaskRawResults);
    },
    predictionTaskFinished(results) {
      this.button_show_prediction_results = true;
      this.finished_prediction_task = true;
      this.predictionTaskResults = this.processPredictionTaskResults(results);
      this.updateDataSheet();
    },
 
    matchingTaskFinished(results) {
      this.button_show_matching_results = true;
      this.finished_matching_task = true;
      this.matchingTaskResults = this.processMatchingTaskResults(results);
    },  
    similarityTaskFinished(results) {
      this.button_show_similarity_results = true;
      this.finished_similarity_task = true;
      this.similarityTaskResults = this.processSimilarityTaskResults(results);
    },
    

    processPredictionTaskResults(raw) {
      var i;
      var output = [];
      console.log(this.participantID);
      for (i = 0; i < raw.length; i++) {
        var current = {
          Experiment: 2,
          Participant_ID: this.participantID.slice(10),
          Avatar: raw[i].avatar_id,
          Trial: raw[i].trial_number,
          Trial_Order: raw[i].trial_order,
          Order_Group: raw[i].trial_order_group,
          Label: raw[i].trial_label,
          Observation_Phase: raw[i].atomicOP.slice(0, 4),
          Response_Phase: raw[i].atomicRP.slice(0, 4),
          Pay_As1: raw[i].main_As1,
          Pay_Ao1: raw[i].main_Ao1,
          Pay_Bs1: raw[i].main_Bs1,
          Pay_Bo1: raw[i].main_Bo1,
          Pay_As2: raw[i].main_As2,
          Pay_Ao2: raw[i].main_Ao2,
          Pay_Bs2: raw[i].main_Bs2,
          Pay_Bo2: raw[i].main_Bo2,
          Sure_Thing: raw[i].sure_thing,
          PDS1: raw[i].main_As1 - raw[i].main_Bs1,
          PDO1: raw[i].main_Ao1 - raw[i].main_Bo1,
          ODa1: raw[i].main_As1 - raw[i].main_Ao1,
          ODb1: raw[i].main_Bs1 - raw[i].main_Bo1,
          PDS2: raw[i].main_As2 - raw[i].main_Bs2,
          PDO2: raw[i].main_Ao2 - raw[i].main_Bo2,
          ODa2: raw[i].main_As2 - raw[i].main_Ao2,
          ODb2: raw[i].main_Bs2 - raw[i].main_Bo2,
          Distance:        raw[i].euclidean,
          Payoff_Position: raw[i].payflips,
          Key_Press:       raw[i].keypress,
          Prediction:      raw[i].prediction,
          Prediction_RT:   raw[i].reaction_time_pred,
          Betting_Choice:  raw[i].bet_choice,
          Betting_RT:      raw[i].reaction_time_bett,
          Resp_Comb:       this.resp_comb(raw[i].prediction, 
            raw[i].bet_choice),

          Instruction_Duration:  this.instrucTime,
          Instruction_Answers:   this.parsed_answers,
          Missed_Instruction_Qs: this.parsed_wrong_ans,

          Survey_1: this.end_survey_form.optn_1_1 + this.end_survey_form.optn_1_2 + this.end_survey_form.optn_1_3 + this.end_survey_form.optn_1_4,
          Survey_2: this.end_survey_form.optn_2_1 + this.end_survey_form.optn_2_2 + this.end_survey_form.optn_2_3 + this.end_survey_form.optn_2_4,
          Survey_3: this.end_survey_form.optn_3_1 + this.end_survey_form.optn_3_2 + this.end_survey_form.optn_3_3 + this.end_survey_form.optn_3_4,
          Survey_4: this.end_survey_form.optn_4_1 + this.end_survey_form.optn_4_2 + this.end_survey_form.optn_4_3 + this.end_survey_form.optn_4_4,
        };
        output.push(current);
      }
      output.sort(this.sortTrials);
      return output;
    },


    processMatchingTaskResults(raw) {
      "Converts raw recorded data into target format."
      var i;
      var output = [];
      console.log(this.participantID);
      for (i = 0; i < raw.length; i++) {
        var euclidean_dists = raw[i].euclidean;
        var current = {
          Participant_ID: this.participantID,
          Trial: raw[i].trial_number,
          Label: raw[i].label,
          Atomic_Left: raw[i].atomic_left.slice(0, 4),
          Atomic_Mask: raw[i].atomic_mask.slice(0, 4),
          Atomic_Rght: raw[i].atomic_rght.slice(0, 4),
          distLM: euclidean_dists[0],
          distRL: euclidean_dists[1],
          distMR: euclidean_dists[2],
          Payoff_Position: raw[i].payflipslrud,
          Trial_order: raw[i].trial_order,
          Order_group: raw[i].trial_order_group,
          Avatar_IDL: raw[i].avatar_idL,
          Avatar_IDR: raw[i].avatar_idR,
          Pay_maskAs: raw[i].main_maskAs,
          Pay_maskAo: raw[i].main_maskAo,
          Pay_maskBs: raw[i].main_maskBs,
          Pay_maskBo: raw[i].main_maskBo,
          Pay_leftAs: raw[i].main_leftAs,
          Pay_leftAo: raw[i].main_leftAo,
          Pay_leftBs: raw[i].main_leftBs,
          Pay_leftBo: raw[i].main_leftBo,
          Pay_rghtAs: raw[i].main_rghtAs,
          Pay_rghtAo: raw[i].main_rghtAo,
          Pay_rghtBs: raw[i].main_rghtBs,
          Pay_rghtBo: raw[i].main_rghtBo,
          PDSmask: raw[i].main_maskAs - raw[i].main_maskBs,
          PDOmask: raw[i].main_maskAo - raw[i].main_maskBo,
          SODmask: raw[i].main_maskAs - raw[i].main_maskAo,
          PDSleft: raw[i].main_leftAs - raw[i].main_leftBs,
          PDOleft: raw[i].main_leftAo - raw[i].main_leftBo,
          SODleft: raw[i].main_leftAs - raw[i].main_leftAo,
          PDSrght: raw[i].main_rghtAs - raw[i].main_rghtBs,
          PDOrght: raw[i].main_rghtAo - raw[i].main_rghtBo,
          SODrght: raw[i].main_rghtAs - raw[i].main_rghtAo,
          Selected: raw[i].response_selected,
          Keypress: raw[i].response_keypress,
          Reaction_Time: raw[i].reaction_time,
        };
        output.push(current);
      }
      output.sort(this.sortTrials);
      return output;
    },

    processSimilarityTaskResults(raw) {
      var i;
      var output = [];
      console.log(this.participantID);
      for (i = 0; i < raw.length; i++) {
        var enctr_1_flipped = raw[i].enctr_1_reverse.toString();
        var current = {
          Participant_ID: this.participantID,
          Trial: raw[i].trial_number,
          Label: raw[i].label,
          Vertical_Position: "\"" + enctr_1_flipped + "\"",
          Trial_order_segment: String(1 + Math.floor(i / 13)),
          Trial_order: raw[i].trial_order,
          Avatar_ID1: raw[i].avatar_id1,
          Avatar_ID2: raw[i].avatar_id2,
          Pay_As1: raw[i].Original_As1,
          Pay_Ao1: raw[i].Original_Ao1,
          Pay_Bs1: raw[i].Original_Bs1,
          Pay_Bo1: raw[i].Original_Bo1,
          Pay_As2: raw[i].Original_As2,
          Pay_Ao2: raw[i].Original_Ao2,
          Pay_Bs2: raw[i].Original_Bs2,
          Pay_Bo2: raw[i].Original_Bo2,
          PDS1: raw[i].Original_As1 - raw[i].Original_Bs1,
          PDO1: raw[i].Original_Ao1 - raw[i].Original_Bo1,
          ODa1: raw[i].Original_As1 - raw[i].Original_Ao1,
          PDS2: raw[i].Original_As2 - raw[i].Original_Bs2,
          PDO2: raw[i].Original_Ao2 - raw[i].Original_Bo2,
          ODa2: raw[i].Original_As2 - raw[i].Original_Ao2,
          Similarity_Score: raw[i].form,
          Reaction_Time: raw[i].reaction_time,
        };
        output.push(current);
      }
      output.sort(this.sortTrials);
      return output;
    },

    pcomb(res_sequence) {
      if (res_sequence.length != 8) {
        return "X"
      }
      var result = ""
      if (res_sequence[1] == 'O') {
        result += "O"
      } else {
        result += "P"
      }
      if (res_sequence[4] == 'O') {
        result += "O"
      } else {
        result += "P"
      }
      if (res_sequence[7] == 'O') {
        result += "O"
      } else {
        result += "P"
      }
      return result
    },
    ccomb(res_sequence) {
      if (res_sequence.length != 8) {
        return "X"
      }
      var result = ""
      if (res_sequence[0] == 'A') {
        result += "B"
      } else {
        result += "N"
      }
      if (res_sequence[3] == 'A') {
        result += "B"
      } else {
        result += "N"
      }
      if (res_sequence[6] == 'A') {
        result += "B"
      } else {
        result += "N"
      }
      return result
    },
    control_rat(choices) {
      if (choices == "NNN" || choices == "BNN" || choices == "BBN" || choices == "BBB") {
        return 1
      } else if (choices == "NNB" || choices == "NBN" || choices == "NBB" || choices == "BNB") {
        return 0
      } else {
        return "X"
      }
    },
    subject_prob(choices) {
      if (choices == "NNN") {
        return -3
      }
      if (choices == "BNN") {
        return -1
      }
      if (choices == "BBN") {
        return 1
      }
      if (choices == "BBB") {
        return 3
      }
      return 0

    },
    GJE(avatar_a, part_a, avatar_b, part_b) {
      var first_symbol, second_symbol
      if (avatar_a > part_a) {
        first_symbol = ">"
      } else if (avatar_a < part_a) {
        first_symbol = "<"
      } else {
        first_symbol = "="
      }
      if (avatar_b > part_b) {
        second_symbol = ">"
      } else if (avatar_b < part_b) {
        second_symbol = "<"
      } else {
        second_symbol = "="
      }

      return "\'" + first_symbol  + second_symbol
    },


    predictionTaskFileName() {
      return `M3_Lab_Experiment_Prediction_${this.participantID}.csv`;
    },
    matchingTaskFileName() {
      return `M3_Lab_Experiment_Matching_${this.participantID}.csv`;
    },
    similarityTaskFileName() {
      return `M3_Lab_Experiment_Similarity_${this.participantID}.csv`;
    },

    sortTrials(a, b) {if (Number(a["Trial"]) < Number(b["Trial"])) {return -1;} else {return 1;}},


    vertPositMatch(str) {
      if (str == "BBHS") return 9915;
      if (str == "BBSH") return 9951;
      if (str == "BBNE") return 9926;
      if (str == "BBEN") return 9962;
      if (str == "BBWV") return 9937;
      if (str == "BBVW") return 9973;
      if (str == "BBGM") return 9948;
      if (str == "BBMG") return 9984;
      if (str == "HSHS") return 1515;
      if (str == "HSSH") return 1551;
      if (str == "HSNE") return 1526;
      if (str == "HSEN") return 1562;
      if (str == "HSWV") return 1537;
      if (str == "HSVW") return 1573;
      if (str == "HSGM") return 1548;
      if (str == "HSMG") return 1584;
      if (str == "SHHS") return 5115;
      if (str == "SHSH") return 5151;
      if (str == "SHNE") return 5126;
      if (str == "SHEN") return 5162;
      if (str == "SHWV") return 5137;
      if (str == "SHVW") return 5173;
      if (str == "SHGM") return 5148;
      if (str == "SHMG") return 5184;
      if (str == "NEHS") return 2615;
      if (str == "NESH") return 2651;
      if (str == "NENE") return 2626;
      if (str == "NEEN") return 2662;
      if (str == "NEWV") return 2637;
      if (str == "NEVW") return 2673;
      if (str == "NEGM") return 2648;
      if (str == "NEMG") return 2684;
      if (str == "ENHS") return 6215;
      if (str == "ENSH") return 6251;
      if (str == "ENNE") return 6226;
      if (str == "ENEN") return 6262;
      if (str == "ENWV") return 6237;
      if (str == "ENVW") return 6273;
      if (str == "ENGM") return 6248;
      if (str == "ENMG") return 6284;
      if (str == "WVHS") return 3715;
      if (str == "WVSH") return 3751;
      if (str == "WVNE") return 3726;
      if (str == "WVEN") return 3762;
      if (str == "WVWV") return 3737;
      if (str == "WVVW") return 3773;
      if (str == "WVGM") return 3748;
      if (str == "WVMG") return 3784;
      if (str == "VWHS") return 7315;
      if (str == "VWSH") return 7351;
      if (str == "VWNE") return 7326;
      if (str == "VWEN") return 7362;
      if (str == "VWWV") return 7337;
      if (str == "VWVW") return 7373;
      if (str == "VWGM") return 7348;
      if (str == "VWMG") return 7384;
      if (str == "GMHS") return 4815;
      if (str == "GMSH") return 4851;
      if (str == "GMNE") return 4826;
      if (str == "GMEN") return 4862;
      if (str == "GMWV") return 4837;
      if (str == "GMVW") return 4873;
      if (str == "GMGM") return 4848;
      if (str == "GMMG") return 4884;
      if (str == "MGHS") return 8415;
      if (str == "MGSH") return 8451;
      if (str == "MGNE") return 8426;
      if (str == "MGEN") return 8462;
      if (str == "MGWV") return 8437;
      if (str == "MGVW") return 8473;
      if (str == "MGGM") return 8448;
      if (str == "MGMG") return 8484;
      return 0;
    },
    resp_comb(prediction, control_choice) {
      var prediction_char = ""
      var control_choice_char = ""
      if (prediction == 1) {
        prediction_char = 'O'
      } else if (prediction == 0) {
        prediction_char = 'T'
      }
      if (control_choice == 1) {
        control_choice_char = 'A'
      } else if (control_choice == 0) {
        control_choice_char = 'E'
      }
      return control_choice_char + prediction_char
    },

    UpDown(keypress, enctr_1_reverse) {
      var first_letter, second_letter
      if (enctr_1_reverse == 1) {
        first_letter = "D"
      } else {
        first_letter = "U"
      }
      if (keypress[0] == 'A') {
        second_letter = "U"
      } else if (keypress[0] == 'Z') {
        second_letter = "D"
      } else {
        second_letter = "N"
      }
      return first_letter + second_letter
    },
  },
};

// Current Sequence of Instruction Pages:
// BotStopper
// Consentp1
// Consentp2
// Consentp3
// Consentp4
// ExperInfo
// ExperTutor
// Instr01Intro
// Instr02Desire
// Instr03Rooms
// Instr04Walls
// Instr05Social
// Instr06Betting
// Instr07Psych
// Instr08Prudence
// Instr09Practice
// Instr10Review
// BeginTrueFalse
// EndTrueFalse
// ProgBar
// KeyHands
// EndInstr
// instruction 73

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
