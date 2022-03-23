<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- Here is the vue Page for the index interface on our program -->
    <p>
      (1) Complete the instructions, (2) experiment 1, (3) experiment 3, (4) the survey.  Your data will be
      <br />automatically sent to our server once you see the completion URL.  Email Greg at gregstan@umich.edu  
      <br />with this URL, your participant ID below, and with any questions.  You are free to download and keep 
      <br />your data file.  Ignore experiment 2 and the written response section.  Never refresh the page!
    </p>
    <div class="bv-example-row bv-example-row-flex-cols">
      <!-- Button for firing the instruction modal -->
      <b-row class="my-4 justify-content-center">
        <!-- <b-button v-b-modal.modal-center-WRITENAMEOFPAGEHERETOSEEITPOPUPFIRST>Instructions</b-button> -->
        <b-button v-b-modal.modal-center-BotStopper>Instructions</b-button>
      </b-row>
      <!-- Button for firing the Block #1 - #3 modals -->
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_1" v-b-modal.modal-center>Experiment 1</b-button>
        <!-- These download buttons become visible after some progress has been made -->
        <!-- <b-button class="btn btn-default" @click="this.fetchPresignedUrl"> Download data for Block #1 </b-button> -->
      </b-row>
      <!-- <b-row class="my-4 justify-content-center">
        <b-button class="btn btn-default" @click="this.fetchPresignedUrl">Send Data to S3</b-button>
      </b-row>-->
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_2" v-b-modal.modal-center-2>Experiment 2</b-button>
        <download-csv
          v-if="this.finished_2"
          class="btn btn-default"
          :data="this.blockTwoResults"
          :name="this.blockTwoFileName()"
        >
          <b-button>Download data for Experiment #2</b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button :disabled="!this.b_show_3" v-b-modal.modal-center-3>Experiment 3</b-button>
        <download-csv
          v-if="this.finished_3"
          class="btn btn-default"
          :data="this.blockThreeResults"
          :name="this.blockThreeFileName()"
        >
          <b-button>Download data for Experiment #3</b-button>
        </download-csv>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center-FR1>Written Response Questions</b-button>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-button v-b-modal.modal-center-survey1>Experiment Survey</b-button>
      </b-row>
      <download-csv
        class="btn btn-default"
        :data="this.blockOneResults"
        :name="this.blockOneFileName()"
      >
        <b-button>Download Data</b-button>
      </download-csv>
      <!-- <b-row class="my-4 justify-content-center">Participant ID: {{ this.form.name }}</b-row> -->
      <b-row class="my-4 justify-content-center">Participant ID: {{ this.participant_generated_id }}</b-row>
      
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
        <!-- <b-form-group id="input-group-2" label="Gender:" label-for="input-2">
          <b-form-select v-model="form.gender" :options="gender_options"></b-form-select>
        </b-form-group> -->

        <b-form-group id="input-group-2" label="optn_1_4:" label-for="input-2">
          <b-form-select v-model="form.optn_1_4" :options="form.optn_1_4"></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="RA Present:" label-for="input-2">
          <b-form-select v-model="form.ra" :options="ra_options"></b-form-select>
        </b-form-group>

        <!-- <b-form-group id="input-group-2" label="Age:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.age" required></b-form-input>
        </b-form-group> -->
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
    <Consent :pID="this.participant_generated_id" :windowsize="this.window_size" />
    <ExperInfo :pID="this.participant_generated_id" :windowsize="this.window_size" />
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
    <MeetPeople :windowsize="this.window_size" />
    <WantMoreDots :windowsize="this.window_size" />
    <CommKnow :windowsize="this.window_size" />
    <ConstantValue :windowsize="this.window_size" />
    <Reference :windowsize="this.window_size" />
    <RefDepComp :windowsize="this.window_size" />
    <RefDepEqual :windowsize="this.window_size" />
    <Basics01 :windowsize="this.window_size" />
    <Basics02 :windowsize="this.window_size" />
    <Basics03 :windowsize="this.window_size" />
    <Basics04 :windowsize="this.window_size" />
    <Basics05 :windowsize="this.window_size" />
    <HowHappy1 :windowsize="this.window_size" />
    <HowHappy2 :windowsize="this.window_size" />
    <HowHappy3 :windowsize="this.window_size" />
    <HowHappy4 :windowsize="this.window_size" />
    <HowChoice0 :windowsize="this.window_size" />
    <HowKnow2 :windowsize="this.window_size" />
    <HowKnow3 :windowsize="this.window_size" />
    <HowKnow4 :windowsize="this.window_size" />
    <HowKnow5 :windowsize="this.window_size" />
    <HowKnow6 :windowsize="this.window_size" />
    <HowKnow7 :windowsize="this.window_size" />
    <HowKnow8 :windowsize="this.window_size" />
    <HowChoice1 :windowsize="this.window_size" />
    <HowChoice2 :windowsize="this.window_size" />
    <HowChoice3 :windowsize="this.window_size" />
    <HowChoice4 :windowsize="this.window_size" />
    <HowChoice5 :windowsize="this.window_size" />
    <HowChoice6 :windowsize="this.window_size" />
    <HowChoice7 :windowsize="this.window_size" />
    <HowChoice8 :windowsize="this.window_size" />
    <HowChoice9 :windowsize="this.window_size" />
    <Cursor1 :windowsize="this.window_size" />
    <PredPract1 :windowsize="this.window_size" />
    <PredPract2 :windowsize="this.window_size" />
    <MoralChoice1 :windowsize="this.window_size" />
    <MoralChoice2 :windowsize="this.window_size" />
    <TwoOptions :windowsize="this.window_size" />
    <NoSharing :windowsize="this.window_size" />
    <EvapDots :windowsize="this.window_size" />
    <ActPass :windowsize="this.window_size" />
    <NoTalking :windowsize="this.window_size" />
    <TF110 :windowsize="this.window_size" />
    <EndTF1 :windowsize="this.window_size" />
    <Cursor2 :windowsize="this.window_size" />
    <TF1118 :windowsize="this.window_size" />
    <EndTF2 :windowsize="this.window_size" />
    <ProgBar :windowsize="this.window_size" />
    <KeyHands :windowsize="this.window_size" />
    <EndInstr :windowsize="this.window_size" />
    <SimInstr :windowsize="this.window_size" />
    <GameFlow1 :windowsize="this.window_size" />
    <GameFlow2 :windowsize="this.window_size" />
    <GameFlow3 :windowsize="this.window_size" />
    <GameFlow4 :windowsize="this.window_size" />
    <GameFlow5 :windowsize="this.window_size" />
    <Control1 :windowsize="this.window_size" />
    <Control2 :windowsize="this.window_size" />
    <Control3 :windowsize="this.window_size" />
    <Control3 :windowsize="this.window_size" />
    <Control4 :windowsize="this.window_size" />
    <Control5 :windowsize="this.window_size" />
    <Feedback :windowsize="this.window_size" />
    <Knowledge1 :windowsize="this.window_size" />
    <Knowledge2 :windowsize="this.window_size" />
    <Knowledge3 :windowsize="this.window_size" />
    <Knowledge4 :windowsize="this.window_size" />
    <Knowledge5 :windowsize="this.window_size" />
    <Knowledge6 :windowsize="this.window_size" />
    <Machines1 :windowsize="this.window_size" />
    <Machines2 :windowsize="this.window_size" />
    <Machines3 :windowsize="this.window_size" />
    <Machines4 :windowsize="this.window_size" />
    <Machines5 :windowsize="this.window_size" />
    <Machines6 :windowsize="this.window_size" />
    <Machines7 :windowsize="this.window_size" />
    <MachinesP :windowsize="this.window_size" />
    <Practice01 :windowsize="this.window_size" />
    <Practice02 :windowsize="this.window_size" />
    <Practice03 :windowsize="this.window_size" />
    <FlowKnow1 :windowsize="this.window_size" />
    <FlowKnow2 :windowsize="this.window_size" />
    <Tutorial1 :windowsize="this.window_size" />
    <Tutorial1b :windowsize="this.window_size" />
    <Tutorial2 :windowsize="this.window_size" />
    <Tutorial3 :windowsize="this.window_size" />
    <Tutorial4 :windowsize="this.window_size" />
    <Tutorial5 :windowsize="this.window_size" />
    <Tutorial6 :windowsize="this.window_size" />
    <Tutorial7 :windowsize="this.window_size" />
    <Tutorial8 :windowsize="this.window_size" />
    <Tutorial9 :windowsize="this.window_size" />
    <Tutorial10 :windowsize="this.window_size" />
    <Tutorial11 :windowsize="this.window_size" />
    <Tutorial12 :windowsize="this.window_size" />
    <Tutorial13 :windowsize="this.window_size" />
    <Tutorial14 :windowsize="this.window_size" />
    <Tutorial15 :windowsize="this.window_size" />
    <Tutorial16 :windowsize="this.window_size" />
    <Tutorial17 :windowsize="this.window_size" />
    <Tutorial18 :windowsize="this.window_size" />
    <Tutorial19 :windowsize="this.window_size" />
    <Tutorial20 @answered="onAnsChild20" :windowsize="this.window_size" />
    <Tutorial21 @answered="onAnsChild21" :windowsize="this.window_size" />
    <Tutorial22 @answered="onAnsChild22" :windowsize="this.window_size" />
    <Tutorial23 @answered="onAnsChild23" :windowsize="this.window_size" />
    <Tutorial24 @answered="onAnsChild24" :windowsize="this.window_size" />
    <Tutorial25 @answered="onAnsChild25" :windowsize="this.window_size" />
    <Tutorial26 @answered="onAnsChild26" :windowsize="this.window_size" />
    <Tutorial27 @answered="onAnsChild27" :windowsize="this.window_size" />
    <Tutorial28 @answered="onAnsChild28" :windowsize="this.window_size" />
    <Tutorial29 @answered="onAnsChild29" :windowsize="this.window_size" />
    <Tutorial30 :windowsize="this.window_size" />
    <Tutorial31 :windowsize="this.window_size" />
    <Tutorial32 :windowsize="this.window_size" />
    <Tutorial33 :windowsize="this.window_size" />
    <Tutorial34 :windowsize="this.window_size" />
    <Tutorial35 :windowsize="this.window_size" />
    <Tutorial36 :windowsize="this.window_size" />
    <Tutorial37 :windowsize="this.window_size" />
    <Tutorial38 :windowsize="this.window_size" />
    <Tutorial39 :windowsize="this.window_size" />
    <Tutorial40 :windowsize="this.window_size" />
    <Tutorial41 :windowsize="this.window_size" />
    <Tutorial42 :windowsize="this.window_size" />
    <Tutorial43 :windowsize="this.window_size" />
    <Tutorial44 :windowsize="this.window_size" />
    <Tutorial45 :windowsize="this.window_size" />
    <Tutorial46 :windowsize="this.window_size" />
    <Tutorial47 :windowsize="this.window_size" />
    <Tutorial48 :windowsize="this.window_size" />
    <Tutorial49 :windowsize="this.window_size" />
    <Tutorial50 :windowsize="this.window_size" />
    <Tutorial51 :windowsize="this.window_size" />
    <Tutorial52 :windowsize="this.window_size" />
    <Tutorial53 :windowsize="this.window_size" />
    <Tutorial54 :windowsize="this.window_size" />
    <Tutorial55 :windowsize="this.window_size" />
    <Tutorial56 :windowsize="this.window_size" />
    <Tutorial57 :windowsize="this.window_size" />
    <Tutorial58 :windowsize="this.window_size" />
    <Tutorial59 :windowsize="this.window_size" />
    <Tutorial60 :windowsize="this.window_size" />
    <Tutorial61 @answered="onAnsChild61" :windowsize="this.window_size" />
    <Tutorial62 @answered="onAnsChild62" :windowsize="this.window_size" />
    <Tutorial63 @answered="onAnsChild63" :windowsize="this.window_size" />
    <Tutorial64 @answered="onAnsChild64" :windowsize="this.window_size" />
    <Tutorial65 @answered="onAnsChild65" :windowsize="this.window_size" />
    <Tutorial66 @answered="onAnsChild66" :windowsize="this.window_size" />
    <Tutorial67 @answered="onAnsChild67" :windowsize="this.window_size" />
    <Tutorial68 @answered="onAnsChild68" :windowsize="this.window_size" />
    <Tutorial69 :windowsize="this.window_size" />
    <Tutorial70 :windowsize="this.window_size" />
    <Tutorial71 :windowsize="this.window_size" />
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

    <BlockOne
      style="background-color: black;"
      @timesync="instructionEnd"
      @blockOneDone="blockOneFinished"
      :participant_name="this.form.name"
    />
    <BlockTwo @blockTwoDone="blockTwoFinished" :participant_name="this.form.name" />
    <BlockThree @blockThreeDone="blockThreeFinished" :participant_name="this.form.name" />
    <b-modal
      id="modal-center-end"
      size="xl"
      centered
      title="Loading your end of experiment URL.  If the url fails to load within 20 seconds, screenshot this page and mail it as an attachment to gregstan@umich.edu to demonstrate that you completed the experiment.  If you would like to view your data file, click the grey area of this screen, and click the Download Data button."
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
import moment from "moment";
import BlockOne from "./blockOne.vue";
import BlockTwo from "./blockOneSave.vue";
// import BlockTwo from "./blockTwo.vue";
// import BlockThree from "./blockThreeb.vue";
import BlockThree from "./blockThree.vue";
import BotStopper from "./tutorialPages/BotStopper.vue";
import Consent from "./tutorialPages/Consent.vue";
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
import MeetPeople from "./tutorialPages/MeetPeople.vue";
import WantMoreDots from "./tutorialPages/WantMoreDots.vue";
import CommKnow from "./tutorialPages/CommKnow.vue";
import ConstantValue from "./tutorialPages/ConstantValue.vue";
import Reference from "./tutorialPages/Reference.vue";
import RefDepComp from "./tutorialPages/RefDepComp.vue";
import RefDepEqual from "./tutorialPages/RefDepEqual.vue";
import Basics01 from "./tutorialPages/Basics01.vue";
import Basics02 from "./tutorialPages/Basics02.vue";
import Basics03 from "./tutorialPages/Basics03.vue";
import Basics04 from "./tutorialPages/Basics04.vue";
import Basics05 from "./tutorialPages/Basics05.vue";
import HowHappy1 from "./tutorialPages/HowHappy1.vue";
import HowHappy2 from "./tutorialPages/HowHappy2.vue";
import HowHappy3 from "./tutorialPages/HowHappy3.vue";
import HowHappy4 from "./tutorialPages/HowHappy4.vue";
import HowChoice0 from "./tutorialPages/HowChoice0.vue";
import HowKnow2 from "./tutorialPages/HowKnow2.vue";
import HowKnow3 from "./tutorialPages/HowKnow3.vue";
import HowKnow4 from "./tutorialPages/HowKnow4.vue";
import HowKnow5 from "./tutorialPages/HowKnow5.vue";
import HowKnow6 from "./tutorialPages/HowKnow6.vue";
import HowKnow7 from "./tutorialPages/HowKnow7.vue";
import HowKnow8 from "./tutorialPages/HowKnow8.vue";
import HowChoice1 from "./tutorialPages/HowChoice1.vue";
import HowChoice2 from "./tutorialPages/HowChoice2.vue";
import HowChoice3 from "./tutorialPages/HowChoice3.vue";
import HowChoice4 from "./tutorialPages/HowChoice4.vue";
import HowChoice5 from "./tutorialPages/HowChoice5.vue";
import HowChoice6 from "./tutorialPages/HowChoice6.vue";
import HowChoice7 from "./tutorialPages/HowChoice7.vue";
import HowChoice8 from "./tutorialPages/HowChoice8.vue";
import HowChoice9 from "./tutorialPages/HowChoice9.vue";
import Cursor1 from "./tutorialPages/Cursor1.vue";
import PredPract1 from "./tutorialPages/PredPract1.vue";
import PredPract2 from "./tutorialPages/PredPract2.vue";
import MoralChoice1 from "./tutorialPages/MoralChoice1.vue";
import MoralChoice2 from "./tutorialPages/MoralChoice2.vue";
import TwoOptions from "./tutorialPages/TwoOptions.vue";
import NoSharing from "./tutorialPages/NoSharing.vue";
import EvapDots from "./tutorialPages/EvapDots.vue";
import ActPass from "./tutorialPages/ActPass.vue";
import NoTalking from "./tutorialPages/NoTalking.vue";
import TF110 from "./tutorialPages/TF110.vue";
import EndTF1 from "./tutorialPages/EndTF1.vue";
import Cursor2 from "./tutorialPages/Cursor2.vue";
import TF1118 from "./tutorialPages/TF1118.vue";
import EndTF2 from "./tutorialPages/EndTF2.vue";
import ProgBar from "./tutorialPages/ProgBar.vue";
import KeyHands from "./tutorialPages/KeyHands.vue";
import EndInstr from "./tutorialPages/EndInstr.vue";
import SimInstr from "./tutorialPages/InstrSimilarity.vue";
import GameFlow1 from "./tutorialPages/GameFlow1.vue";
import GameFlow2 from "./tutorialPages/GameFlow2.vue";
import GameFlow3 from "./tutorialPages/GameFlow3.vue";
import GameFlow4 from "./tutorialPages/GameFlow4.vue";
import GameFlow5 from "./tutorialPages/GameFlow5.vue";
import Control1 from "./tutorialPages/Control1.vue";
import Control2 from "./tutorialPages/Control2.vue";
import Control3 from "./tutorialPages/Control3.vue";
import Control4 from "./tutorialPages/Control4.vue";
import Control5 from "./tutorialPages/Control5.vue";
import Feedback from "./tutorialPages/Feedback.vue";
import Knowledge1 from "./tutorialPages/Knowledge1.vue";
import Knowledge2 from "./tutorialPages/Knowledge2.vue";
import Knowledge3 from "./tutorialPages/Knowledge3.vue";
import Knowledge4 from "./tutorialPages/Knowledge4.vue";
import Knowledge5 from "./tutorialPages/Knowledge5.vue";
import Knowledge6 from "./tutorialPages/Knowledge6.vue";
import Machines1 from "./tutorialPages/Machines1.vue";
import Machines2 from "./tutorialPages/Machines2.vue";
import Machines3 from "./tutorialPages/Machines3.vue";
import Machines4 from "./tutorialPages/Machines4.vue";
import Machines5 from "./tutorialPages/Machines5.vue";
import Machines6 from "./tutorialPages/Machines6.vue";
import Machines7 from "./tutorialPages/Machines7.vue";
import MachinesP from "./tutorialPages/MachinesP.vue";
import Practice01 from "./tutorialPages/Practice01.vue";
import Practice02 from "./tutorialPages/Practice02.vue";
import Practice03 from "./tutorialPages/Practice03.vue";
import FlowKnow1 from "./tutorialPages/FlowKnow1.vue";
import FlowKnow2 from "./tutorialPages/FlowKnow2.vue";
import Trystuffout from "./tutorialPages/Trystuffout.vue";
import Absurdity from "./tutorialPages/Absurdity.vue";
import Silly from "./tutorialPages/Silly.vue";
import Foolish from "./tutorialPages/Foolish.vue";
import Trymore1 from "./tutorialPages/Trymore1.vue";
import Trymore2 from "./tutorialPages/Trymore2.vue";
import Tutorial1 from "./tutorialPages/page_1.vue";
import Tutorial1b from "./tutorialPages/page_1b.vue";
import Tutorial2 from "./tutorialPages/page_2.vue";
import Tutorial3 from "./tutorialPages/page_3.vue";
import Tutorial4 from "./tutorialPages/page_4.vue";
import Tutorial5 from "./tutorialPages/page_5.vue";
import Tutorial6 from "./tutorialPages/page_6.vue";
import Tutorial7 from "./tutorialPages/page_7.vue";
import Tutorial8 from "./tutorialPages/page_8.vue";
import Tutorial9 from "./tutorialPages/page_9.vue";
import Tutorial10 from "./tutorialPages/page_10.vue";
import Tutorial11 from "./tutorialPages/page_11.vue";
import Tutorial12 from "./tutorialPages/page_12.vue";
import Tutorial13 from "./tutorialPages/page_13.vue";
import Tutorial14 from "./tutorialPages/page_14.vue";
import Tutorial15 from "./tutorialPages/page_15.vue";
import Tutorial16 from "./tutorialPages/page_16.vue";
import Tutorial17 from "./tutorialPages/page_17.vue";
import Tutorial18 from "./tutorialPages/page_18.vue";
import Tutorial19 from "./tutorialPages/page_19.vue";
import Tutorial20 from "./tutorialPages/page_20.vue";
import Tutorial21 from "./tutorialPages/page_21.vue";
import Tutorial22 from "./tutorialPages/page_22.vue";
import Tutorial23 from "./tutorialPages/page_23.vue";
import Tutorial24 from "./tutorialPages/page_24.vue";
import Tutorial25 from "./tutorialPages/page_25.vue";
import Tutorial26 from "./tutorialPages/page_26.vue";
import Tutorial27 from "./tutorialPages/page_27.vue";
import Tutorial28 from "./tutorialPages/page_28.vue";
import Tutorial29 from "./tutorialPages/page_29.vue";
import Tutorial30 from "./tutorialPages/page_30.vue";
import Tutorial31 from "./tutorialPages/page_31.vue";
import Tutorial32 from "./tutorialPages/page_32.vue";
import Tutorial33 from "./tutorialPages/page_33.vue";
import Tutorial34 from "./tutorialPages/page_34.vue";
import Tutorial35 from "./tutorialPages/page_35.vue";
import Tutorial36 from "./tutorialPages/page_36.vue";
import Tutorial37 from "./tutorialPages/page_37.vue";
import Tutorial38 from "./tutorialPages/page_38.vue";
import Tutorial39 from "./tutorialPages/page_39.vue";
import Tutorial40 from "./tutorialPages/page_40.vue";
import Tutorial41 from "./tutorialPages/page_41.vue";
import Tutorial42 from "./tutorialPages/page_42.vue";
import Tutorial43 from "./tutorialPages/page_43.vue";
import Tutorial44 from "./tutorialPages/page_44.vue";
import Tutorial45 from "./tutorialPages/page_45.vue";
import Tutorial46 from "./tutorialPages/page_46.vue";
import Tutorial47 from "./tutorialPages/page_47.vue";
import Tutorial48 from "./tutorialPages/page_48.vue";
import Tutorial49 from "./tutorialPages/page_49.vue";
import Tutorial50 from "./tutorialPages/page_50.vue";
import Tutorial51 from "./tutorialPages/page_51.vue";
import Tutorial52 from "./tutorialPages/page_52.vue";
import Tutorial53 from "./tutorialPages/page_53.vue";
import Tutorial54 from "./tutorialPages/page_54.vue";
import Tutorial55 from "./tutorialPages/page_55.vue";
import Tutorial56 from "./tutorialPages/page_56.vue";
import Tutorial57 from "./tutorialPages/page_57.vue";
import Tutorial58 from "./tutorialPages/page_58.vue";
import Tutorial59 from "./tutorialPages/page_59.vue";
import Tutorial60 from "./tutorialPages/page_60.vue";
import Tutorial61 from "./tutorialPages/page_61.vue";
import Tutorial62 from "./tutorialPages/page_62.vue";
import Tutorial63 from "./tutorialPages/page_63.vue";
import Tutorial64 from "./tutorialPages/page_64.vue";
import Tutorial65 from "./tutorialPages/page_65.vue";
import Tutorial66 from "./tutorialPages/page_66.vue";
import Tutorial67 from "./tutorialPages/page_67.vue";
import Tutorial68 from "./tutorialPages/page_68.vue";
import Tutorial69 from "./tutorialPages/page_69.vue";
import Tutorial70 from "./tutorialPages/page_70.vue";
import Tutorial71 from "./tutorialPages/page_71.vue";
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
    Survey1b,
    Survey2b,
    Survey3b,
    Survey4b,
    Survey5,
    Survey6,
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
    BlockOne,
    BlockTwo,
    BlockThree,
    BotStopper,
    Consent,
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
    MeetPeople,
    WantMoreDots,
    CommKnow,
    ConstantValue,
    Reference,
    RefDepComp,
    RefDepEqual,
    Basics01,
    Basics02,
    Basics03,
    Basics04,
    Basics05,
    HowHappy1,
    HowHappy2,
    HowHappy3,
    HowHappy4,
    HowChoice0,
    HowKnow2,
    HowKnow3,
    HowKnow4,
    HowKnow5,
    HowKnow6,
    HowKnow7,
    HowKnow8,
    HowChoice1,
    HowChoice2,
    HowChoice3,
    HowChoice4,
    HowChoice5,
    HowChoice6,
    HowChoice7,
    HowChoice8,
    HowChoice9,
    Cursor1,
    PredPract1,
    PredPract2,
    MoralChoice1,
    MoralChoice2,
    TwoOptions,
    NoSharing,
    EvapDots,
    ActPass,
    NoTalking,
    TF110,
    EndTF1,
    Cursor2,
    TF1118,
    EndTF2,
    ProgBar,
    KeyHands,
    EndInstr,
    SimInstr,
    GameFlow1,
    GameFlow2,
    GameFlow3,
    GameFlow4,
    GameFlow5,
    Control1,
    Control2,
    Control3,
    Control4,
    Control5,
    Feedback,
    Knowledge1,
    Knowledge2,
    Knowledge3,
    Knowledge4,
    Knowledge5,
    Knowledge6,
    Machines1,
    Machines2,
    Machines3,
    Machines4,
    Machines5,
    Machines6,
    Machines7,
    MachinesP,
    Practice01,
    Practice02,
    Practice03,
    FlowKnow1,
    FlowKnow2,
    Trystuffout,
    Absurdity,
    Silly,
    Foolish,
    Trymore1,
    Trymore2,
    Tutorial1,
    Tutorial1b,
    Tutorial2,
    Tutorial3,
    Tutorial4,
    Tutorial5,
    Tutorial6,
    Tutorial7,
    Tutorial8,
    Tutorial9,
    Tutorial10,
    Tutorial11,
    Tutorial12,
    Tutorial13,
    Tutorial14,
    Tutorial15,
    Tutorial16,
    Tutorial17,
    Tutorial18,
    Tutorial19,
    Tutorial20,
    Tutorial21,
    Tutorial22,
    Tutorial23,
    Tutorial24,
    Tutorial25,
    Tutorial26,
    Tutorial27,
    Tutorial28,
    Tutorial29,
    Tutorial30,
    Tutorial31,
    Tutorial32,
    Tutorial33,
    Tutorial34,
    Tutorial35,
    Tutorial36,
    Tutorial37,
    Tutorial38,
    Tutorial39,
    Tutorial40,
    Tutorial41,
    Tutorial42,
    Tutorial43,
    Tutorial44,
    Tutorial45,
    Tutorial46,
    Tutorial47,
    Tutorial48,
    Tutorial49,
    Tutorial50,
    Tutorial51,
    Tutorial52,
    Tutorial53,
    Tutorial54,
    Tutorial55,
    Tutorial56,
    Tutorial57,
    Tutorial58,
    Tutorial59,
    Tutorial60,
    Tutorial61,
    Tutorial62,
    Tutorial63,
    Tutorial64,
    Tutorial65,
    Tutorial66,
    Tutorial67,
    Tutorial68,
    Tutorial69,
    Tutorial70,
    Tutorial71,
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
      participant_generated_id: this.generateParticipantId(),
      form: "",
      S1Results: "",
      API_KEY: "AIzaSyAxlUCye8_1_QFtX1S7ychFF8KpmpylaRk",
      CLIENT_ID:
        "292287515987-0ujosbnm7d5v37l9dkp3fk5pfkoi4b27.apps.googleusercontent.com",
      dataJson: json,
      finished_1: false,
      finished_2: false,
      finished_3: false,
      show: false,
      b_show_0: true,
      b_show_1: true,
      b_show_2: true,
      b_show_3: true,
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
      blockOneRawResults: null,
      blockOneResults: null,
      blockTwoResults: null,
      blockThreeResults: null,
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
      // serverlessrepo-s3-presigned-url-s3presignedurl-EF2SRE90YXDY?BucketName="experimentdata2020"&ObjectName="test10.txt"&ExpiredIn=3600
      aws_presigned_lambda: `https://fathomless-coast-21413.herokuapp.com/https://ao9o9jz806.execute-api.us-east-2.amazonaws.com/gets3presigned?BucketName=`,
      aws_s3_post_url: `https://fathomless-coast-21413.herokuapp.com/https://experimentdata2020.s3.amazonaws.com`,
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
        // eslint-disable-next-line no-console
        console.log("event space detected");
        if (parent.ep1_shown) {
          // eslint-disable-next-line no-console
          console.log("no scroll");
          event.preventDefault();
        }
      }
      // Prevent enter from booting people out of captcha page
      if (event.keyCode == 13) {
        // eslint-disable-next-line no-console
        console.log("enter event");
        if (parent.bot_shown) {
          // eslint-disable-next-line no-console
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
      if (modalId == "modal-center") {
        // eslint-disable-next-line no-console
        // console.log('Modal is about to be shown', bvEvent, modalId)
        parent.ep1_shown = true;
        // eslint-disable-next-line no-console
        console.log(parent.ep1_shown);
      } else if (modalId == "modal-center-BotStopper") {
        // eslint-disable-next-line no-console
        // console.log('Modal is about to be shown', bvEvent, modalId)
        parent.bot_shown = true;
      }
    });
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      let parent = this;
      if (modalId == "modal-center") {
        // eslint-disable-next-line no-console
        // console.log('Modal is about to be hidden', bvEvent, modalId)
        parent.ep1_shown = false;
        // eslint-disable-next-line no-console
        console.log(parent.ep1_shown);
      } else if (modalId == "modal-center-BotStopper") {
        // eslint-disable-next-line no-console
        // console.log('Modal is about to be shown', bvEvent, modalId)
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
      if (this.data_sent_to_s3 == true) {
        return;
      }
      let sending_url_1 =
        this.aws_presigned_lambda +
        this.aws_bucket_name +
        "&ObjectName=" +
        this.blockOneFileName();
      Vue.axios.get(sending_url_1, {
        "x-requested-with": "XMLHttpRequest",
        "Origin": "https://m3labexperiment.com",
      }).then((response) => {
        console.log(response.data);
        Vue.axios.put("https://fathomless-coast-21413.herokuapp.com/" + response.data, this.$papa.unparse(this.blockOneResults));
        parent.data_sent_to_s3 = true;
      });
      //Same thing for Experiment 3.
      let sending_url_2 =
        this.aws_presigned_lambda +
        this.aws_bucket_name +
        "&ObjectName=" +
        this.blockThreeFileName();
      Vue.axios.get(sending_url_2, {
        "x-requested-with": "XMLHttpRequest",
        "Origin": "https://m3labexperiment.com",
      }).then((response) => {
        console.log(response.data);
        Vue.axios.put("https://fathomless-coast-21413.herokuapp.com/" + response.data, this.$papa.unparse(this.blockThreeResults));
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
      // eslint-disable-next-line no-console
      console.log("this.ans_tutorial");
      // eslint-disable-next-line no-console
      console.log(answers);
      // eslint-disable-next-line no-console
      console.log(wrong_answers);
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.log(results);
      // this.end_survey_form.option_1_1 = results.option_1_1;
      // this.end_survey_form.option_1_2 = results.option_1_2;
      // this.end_survey_form.option_1_3 = results.option_1_3;
      // this.end_survey_form.option_1_4 = results.option_1_4;
      // this.end_survey_form.school = results.school;
      // this.end_survey_form.happy = results.avatars;
      this.end_survey_form.optn_1_1 = results.optn_1_1;
      this.end_survey_form.optn_1_2 = results.optn_1_2;
      this.end_survey_form.optn_1_3 = results.optn_1_3;
      this.end_survey_form.optn_1_4 = results.optn_1_4;
      this.updateDataSheet();
    },
    Survey2Finished(results) {
      // eslint-disable-next-line no-console
      console.log(results);
      // this.end_survey_form.olderBro = results.older_bro;
      // this.end_survey_form.olderSis = results.older_sis;
      // this.end_survey_form.youngerBro = results.younger_bro;
      // this.end_survey_form.youngerSis = results.younger_sis;
      // this.end_survey_form.english = results.english;
      // this.end_survey_form.country = results.countries;
      this.end_survey_form.optn_2_1 = results.optn_2_1;
      this.end_survey_form.optn_2_2 = results.optn_2_2;
      this.end_survey_form.optn_2_3 = results.optn_2_3;
      this.end_survey_form.optn_2_4 = results.optn_2_4;
      this.updateDataSheet();
    },
    Survey3Finished(results) {
      // eslint-disable-next-line no-console
      console.log(results);
      // Generate form data at the end of our survey
      // this.end_survey_form.money = results.money;
      // this.end_survey_form.gods = results.divine;
      // this.end_survey_form.political = results.political;
      // this.end_survey_form.attractive = results.view;
      // this.end_survey_form.power = results.interact;
      // this.end_survey_form.race = results.race;
      this.end_survey_form.optn_3_1 = results.optn_3_1;
      this.end_survey_form.optn_3_2 = results.optn_3_2;
      this.end_survey_form.optn_3_3 = results.optn_3_3;
      this.end_survey_form.optn_3_4 = results.optn_3_4;
      this.updateDataSheet();
    },
    Survey4Finished(results) {
      // eslint-disable-next-line no-console
      console.log(results);
      // Generate form data at the end of our survey
      // this.end_survey_form.sleep01 = results.sleep01;
      // this.end_survey_form.sleep02 = results.sleep02;
      // this.end_survey_form.bigfive01 = results.bigfive01;
      // this.end_survey_form.bigfive02 = results.bigfive02;
      // this.end_survey_form.bigfive03 = results.bigfive03;
      // this.end_survey_form.bigfive04 = results.bigfive04;
      // this.end_survey_form.bigfive05 = results.bigfive05;
      this.end_survey_form.optn_4_1 = results.optn_4_1;
      this.end_survey_form.optn_4_2 = results.optn_4_2;
      this.end_survey_form.optn_4_3 = results.optn_4_3;
      this.end_survey_form.optn_4_4 = results.optn_4_4;
      this.updateDataSheet();
    },
    Survey5Finished(results) {
      // eslint-disable-next-line no-console
      console.log(results);
      // Generate form data at the end of our survey
      this.end_survey_form.bigfive06 = results.bigfive06;
      this.end_survey_form.bigfive07 = results.bigfive07;
      this.end_survey_form.bigfive08 = results.bigfive08;
      this.end_survey_form.bigfive09 = results.bigfive09;
      this.end_survey_form.bigfive10 = results.bigfive10;
      this.end_survey_form.agree = results.agree;
      this.updateDataSheet();
    },
    Survey6Finished(results) {
      // eslint-disable-next-line no-console
      console.log(results);
      // Generate form data at the end of our survey
      // this.end_survey_form.bigfive06 = results.bigfive06;
      // this.end_survey_form.bigfive07 = results.bigfive07;
      // this.end_survey_form.bigfive08 = results.bigfive08;
      // this.end_survey_form.bigfive09 = results.bigfive09;
      // this.end_survey_form.bigfive10 = results.bigfive10;
      // this.end_survey_form.agree = results.agree;
      this.updateDataSheet();
      // eslint-disable-next-line no-console
      console.log("survey 6 finished!");
      this.fetchPresignedUrl();
    },
    updateDataSheet() {
      this.blockOneResults = this.processOneResults(this.blockOneRawResults);
      // this.blockThreeResults = this.processThreeResults(this.blockThreeRawResults); //BE CAREFUL!  This is a test to combine experiment 1 and 3 data files.  Delete this if problems occur.
    },
    blockOneFinished(results) {
      // this.b_show_1 = false
      // this.b_show_2 = true
      this.blockOneRawResults = results;
      this.updateDataSheet();
      this.finished_1 = true;
    },
    blockTwoFinished(results) {
      // this.b_show_2 = false
      // this.b_show_3 = true
      this.b_show_2 = true;
      this.finished_2 = true;
      this.blockTwoResults = this.processTwoResults(results);
    },    
    blockThreeFinished(results) {
      // this.b_show_3 = false
      this.finished_3 = true;
      this.blockThreeResults = this.processThreeResults(results);
      // this.similarity_scores = results.prediction3; //Delete
      // this.updateDataSheet();                       //Delete
    },
    // processOneResults serves the functionality that converts raw recorded data to our target format
    processOneResults(raw) {
      var i;
      var output = [];
      var triplets_id = {}
      var triplets_response = {}
      // eslint-disable-next-line no-console
      console.log(this.participant_generated_id);
      for (i = 0; i < raw.length; i++) {
        if (raw[i].triplet in triplets_id) {
          triplets_id[raw[i].triplet] += "I"
        } else {
          triplets_id[raw[i].triplet] = "I"
        }
        // triplets_id[raw[i].triplet] += "I"
        var observation_phase_flipped = raw[i].observation_phase_reverse.toString();
        // eslint-disable-next-line no-console
        // console.log("observation_phase_flipped: " + observation_phase_flipped);
        var response_phase_flipped = raw[i].response_phase_reverse.toString();
        // eslint-disable-next-line no-console
        // console.log("response_phase_flipped: " + response_phase_flipped);
        // eslint-disable-next-line no-console
        console.log(observation_phase_flipped + response_phase_flipped);
        var triplet_rank = triplets_id[raw[i].triplet].length
        var current = {
          Participant_ID: this.participant_generated_id,
          Trial_Number: raw[i].trial_number,
          Trial_order: raw[i].trial_order,
          Trial_order_segment: String(1 + Math.floor(i / 16)),
          Triplet: raw[i].triplet,
          Triplet_Order: triplet_rank,
          // Trial_Number: raw[i].trial_number,
          // Room1: raw[i].encnt1_cond,
          // Room2: raw[i].encnt2_cond,
          Label: raw[i].label,
          // Vertical_Position_Lett: raw[i].vert_pos,
          // Vertical_Position_Num: this.vertPositMatch(raw[i].vert_pos),

          // Avatar_Pic: raw[i].avatar_id,
          Avatar_Pic: raw[i].av_man1,
          Avatar: raw[i].avatar_type,
          // Atomic_Choice: this.atomic_choice(raw[i].trial_number, raw[i].encnt2_cond),
          Choice: raw[i].Original_choice,
          Pay_As1: raw[i].Original_As1,
          Pay_Ao1: raw[i].Original_Ao1,
          Pay_Bs1: raw[i].Original_Bs1,
          Pay_Bo1: raw[i].Original_Bo1,
          Pay_As2: raw[i].Original_As2,
          Pay_Ao2: raw[i].Original_Ao2,
          Pay_Bs2: raw[i].Original_Bs2,
          Pay_Bo2: raw[i].Original_Bo2,
          Sure_Thing: raw[i].sure_thing,
          Payoff_Difference_Self_1: raw[i].Original_As1 - raw[i].Original_Bs1,
          Payoff_Difference_Other_1: raw[i].Original_Ao1 - raw[i].Original_Bo1,
          Outcome_Disparity_1: raw[i].Original_As1 - raw[i].Original_Ao1,
          Payoff_Difference_Self_2: raw[i].Original_As2 - raw[i].Original_Bs2,
          Payoff_Difference_Other_2: raw[i].Original_Ao2 - raw[i].Original_Bo2,
          Outcome_Disparity_2: raw[i].Original_As2 - raw[i].Original_Ao2,

          // Atomic_Choice: raw[i].choice_type,
          // Choice_Deg: raw[i].choice_deg,

          Vertical_Position: "\"" + observation_phase_flipped + response_phase_flipped + "\"",
          RightSideUpDown: this.UpDown(raw[i].keypress, raw[i].observation_phase_reverse),
          Key_Press: raw[i].keypress,
          Prediction: raw[i].prediction,
          Pred_RT: raw[i].reaction_time_prediction,
          Betting_Choice: raw[i].trust,
          Betting_RT: raw[i].reaction_time_trust,
          Resp_Comb: this.resp_comb(raw[i].prediction, raw[i].trust),
          Prediction_Combo: null,
          Betting_Combo: null,
          // Res_Comb: null,
          Betting_Rationality: null,
          Betting_Probability: null,

          InstructionTimeSpent: this.instrucTime,
          InstructionAnswers: this.parsed_answers,
          InstructionWrongAns: this.parsed_wrong_ans,

          Survey_1: this.end_survey_form.optn_1_1 + this.end_survey_form.optn_1_2 + this.end_survey_form.optn_1_3 + this.end_survey_form.optn_1_4,
          Survey_2: this.end_survey_form.optn_2_1 + this.end_survey_form.optn_2_2 + this.end_survey_form.optn_2_3 + this.end_survey_form.optn_2_4,
          Survey_3: this.end_survey_form.optn_3_1 + this.end_survey_form.optn_3_2 + this.end_survey_form.optn_3_3 + this.end_survey_form.optn_3_4,
          Survey_4: this.end_survey_form.optn_4_1 + this.end_survey_form.optn_4_2 + this.end_survey_form.optn_4_3 + this.end_survey_form.optn_4_4,

          // 'Inst_Rat': this.instRat(raw[i].prediction, raw[i].trust),
          // 'Rat_Sure': this.ratSure(),
          // 'Rat_Act': this.ratAct(),
          // 'Rat_Deg': this.ratDeg(),
          // 'Red_Flag': this.redFlag(raw),
          // The generating functions here are still bugged... using None values for now

          // Similarity_Score_1: this.raw[i].sim_score,
          // Similarity_Score_2: this.similarity_scores.simi_score,
          // Similarity: this.raw[i].sim_score,
          // Date: this.end_survey_form.date,
          // Age: this.end_survey_form.optn_1_3,
          // Gender: this.end_survey_form.gender,
          // Old_bro: this.end_survey_form.olderBro,
          // Old_sis: this.end_survey_form.olderSis,
          // Yng_bro: this.end_survey_form.youngerBro,
          // Yng_sis: this.end_survey_form.youngerSis,
          // Happy: this.end_survey_form.happy,
          // Love: this.end_survey_form.love,
          // English: this.end_survey_form.english,
          // School: this.end_survey_form.school,
          // Money: this.end_survey_form.money,
          // Gods: this.end_survey_form.gods,
          // Political: this.end_survey_form.political,
          // Attractive: this.end_survey_form.attractive,
          // Power: this.end_survey_form.power,
          // Country: this.end_survey_form.country,
          // Race: this.end_survey_form.race,
          // sleep01: this.end_survey_form.sleep01,
          // sleep02: this.end_survey_form.sleep02,
          // bigfive01: this.end_survey_form.bigfive01,
          // bigfive02: this.end_survey_form.bigfive02,
          // bigfive03: this.end_survey_form.bigfive03,
          // bigfive04: this.end_survey_form.bigfive04,
          // bigfive05: this.end_survey_form.bigfive05,
          // bigfive06: this.end_survey_form.bigfive06,
          // bigfive07: this.end_survey_form.bigfive07,
          // bigfive08: this.end_survey_form.bigfive08,
          // bigfive09: this.end_survey_form.bigfive09,
          // bigfive10: this.end_survey_form.bigfive10,
          // Agreement: this.end_survey_form.agree,
          // WRQ01: this.FRResults[1],
          // WRQ02: this.FRResults[2],
          // WRQ03: this.FRResults[3],
          // WRQ04: this.FRResults[4],
          // WRQ05: this.FRResults[5],
          // WRQ06: this.FRResults[6],
          // WRQ07: this.FRResults[7],
          // WRQ08: this.FRResults[8],
          // WRQ09: this.FRResults[9],
          // WRQ10: this.FRResults[10],
          // WRQ11: this.FRResults[11],
          // WRQ12: this.FRResults[12],
          // WRQ13: this.FRResults[13],
        };
        if (raw[i].triplet in triplets_response) {
          triplets_response[raw[i].triplet] += (',' + current.Resp_Comb)
        } else {
          triplets_response[raw[i].triplet] = current.Resp_Comb
        }
        
        output.push(current);
      }
      for (var k = 0; k < output.length; k++) {
        // output[k].Res_Comb = triplets_response[output[k].Triplets]
        output[k].Prediction_Combo = this.pcomb(triplets_response[output[k].Triplet])
        output[k].Betting_Combo = this.ccomb(triplets_response[output[k].Triplet])
        output[k].Betting_Rationality = this.control_rat(output[k].Betting_Combo)
        output[k].Betting_Probability = this.subject_prob(output[k].Betting_Combo)
      }
      output.sort(this.blockOneSort);
      return output;
    },
    processTwoResults(raw) {
      var i;
      var output = [];
      var triplets_id = {}
      var triplets_response = {}
      // eslint-disable-next-line no-console
      console.log(this.participant_generated_id);
      for (i = 0; i < raw.length; i++) {
        // if (raw[i].triplets in triplets_id) {
        //   triplets_id[raw[i].triplets] += "I"
        // } else {
        //   triplets_id[raw[i].triplets] = "I"
        // }
        triplets_id[raw[i].triplets] += "I"
        var enctr_1_flipped = raw[i].enctr_1_reverse.toString();
        // eslint-disable-next-line no-console
        console.log("enctr_1_flipped: " + enctr_1_flipped);
        var enctr_2_flipped = raw[i].enctr_2_reverse.toString();
        // eslint-disable-next-line no-console
        console.log("enctr_2_flipped: " + enctr_2_flipped);
        // eslint-disable-next-line no-console
        console.log(enctr_1_flipped + enctr_2_flipped);
        var triplet_rank = triplets_id[raw[i].triplets].length
        var current = {
          Participant_ID: this.participant_generated_id,
          Trial_Number: raw[i].trial_number,
          Room1: raw[i].encnt1_cond,
          Room2: raw[i].encnt2_cond,
          Label: raw[i].label,
          Vertical_Position_Lett: raw[i].vert_pos,
          Vertical_Position_Num: this.vertPositMatch(raw[i].vert_pos),
          Vertical_Position: "\"" + enctr_1_flipped + enctr_2_flipped + "\"",
          Triplets: raw[i].triplets,
          Triplet_Order: triplet_rank,
          Trial_order: raw[i].trial_order,
          Trial_order_segment: String(1 + Math.floor(i / 23)),
          Avatar_ID: raw[i].avatar_id,
          // Block_order: "123",
          // Atomic_Choice: this.atomic_choice(raw[i].trial_number, raw[i].encnt2_cond),
          GJE: this.GJE(raw[i].OriginalM1AvatarPayoffA, raw[i].OriginalM1ParticipantPayoffA, raw[i].OriginalM1AvatarPayoffB, raw[i].OriginalM1ParticipantPayoffB),
          Atomic_Choice: raw[i].choice_type,
          Choice_Deg: raw[i].choice_deg,
          Sure_Thing: raw[i].sure_thing,
          
          RightSideUpDown: this.UpDown(raw[i].keypress, raw[i].enctr_1_reverse),
          Key_Press: raw[i].keypress,
          Prediction: raw[i].prediction,
          Pred_RT: raw[i].reaction_time_prediction,
          Betting_Choice: raw[i].trust,
          Betting_RT: raw[i].reaction_time_trust,
          Resp_Comb: this.resp_comb(raw[i].prediction, raw[i].trust),
          P_Comb: null,
          C_Comb: null,
          Res_Comb: null,
          Control_Rat: null,
          Subject_Prob: null,
          // Similarity_Score: raw[i].form,       //Testing importing experiment 3 results here.
          // Reaction_Time: raw[i].reaction_time, //Testing importing experiment 3 results here.

          // InstructionTimeSpent: this.instrucTime,
          // InstructionAnswers: this.parsed_answers,
          // InstructionWrongAns: this.parsed_wrong_ans,

          // Survey_1: this.end_survey_form.optn_1_1 + this.end_survey_form.optn_1_2 + this.end_survey_form.optn_1_3 + this.end_survey_form.optn_1_4,
          // Survey_2: this.end_survey_form.optn_2_1 + this.end_survey_form.optn_2_2 + this.end_survey_form.optn_2_3 + this.end_survey_form.optn_2_4,
          // Survey_3: this.end_survey_form.optn_3_1 + this.end_survey_form.optn_3_2 + this.end_survey_form.optn_3_3 + this.end_survey_form.optn_3_4,
          // Survey_4: this.end_survey_form.optn_4_1 + this.end_survey_form.optn_4_2 + this.end_survey_form.optn_4_3 + this.end_survey_form.optn_4_4,

          // // 'Inst_Rat': this.instRat(raw[i].prediction, raw[i].trust),
          // // 'Rat_Sure': this.ratSure(),
          // // 'Rat_Act': this.ratAct(),
          // // 'Rat_Deg': this.ratDeg(),
          // // 'Red_Flag': this.redFlag(raw),
          // // The generating functions here are still bugged... using None values for now

          // // Similarity_Score_1: this.raw[i].sim_score,
          // // Similarity_Score_2: this.similarity_scores.simi_score,
          // // Similarity: this.raw[i].sim_score,
          // Date: this.end_survey_form.date,
          // Age: this.end_survey_form.optn_1_3,
          // Gender: this.end_survey_form.gender,
          // Old_bro: this.end_survey_form.olderBro,
          // Old_sis: this.end_survey_form.olderSis,
          // Yng_bro: this.end_survey_form.youngerBro,
          // Yng_sis: this.end_survey_form.youngerSis,
          // Happy: this.end_survey_form.happy,
          // Love: this.end_survey_form.love,
          // English: this.end_survey_form.english,
          // School: this.end_survey_form.school,
          // Money: this.end_survey_form.money,
          // Gods: this.end_survey_form.gods,
          // Political: this.end_survey_form.political,
          // Attractive: this.end_survey_form.attractive,
          // Power: this.end_survey_form.power,
          // Country: this.end_survey_form.country,
          // Race: this.end_survey_form.race,
          // sleep01: this.end_survey_form.sleep01,
          // sleep02: this.end_survey_form.sleep02,
          // bigfive01: this.end_survey_form.bigfive01,
          // bigfive02: this.end_survey_form.bigfive02,
          // bigfive03: this.end_survey_form.bigfive03,
          // bigfive04: this.end_survey_form.bigfive04,
          // bigfive05: this.end_survey_form.bigfive05,
          // bigfive06: this.end_survey_form.bigfive06,
          // bigfive07: this.end_survey_form.bigfive07,
          // bigfive08: this.end_survey_form.bigfive08,
          // bigfive09: this.end_survey_form.bigfive09,
          // bigfive10: this.end_survey_form.bigfive10,
          // Agreement: this.end_survey_form.agree,
          // WRQ01: this.FRResults[1],
          // WRQ02: this.FRResults[2],
          // WRQ03: this.FRResults[3],
          // WRQ04: this.FRResults[4],
          // WRQ05: this.FRResults[5],
          // WRQ06: this.FRResults[6],
          // WRQ07: this.FRResults[7],
          // WRQ08: this.FRResults[8],
          // WRQ09: this.FRResults[9],
          // WRQ10: this.FRResults[10],
          // WRQ11: this.FRResults[11],
          // WRQ12: this.FRResults[12],
          // WRQ13: this.FRResults[13],
        };
        if (raw[i].triplets in triplets_response) {
          triplets_response[raw[i].triplets] += (',' + current.Resp_Comb)
        } else {
          triplets_response[raw[i].triplets] = current.Resp_Comb
        }
        
        output.push(current);
      }
      for (var k = 0; k < output.length; k++) {
        output[k].Res_Comb = triplets_response[output[k].Triplets]
        output[k].P_Comb = this.pcomb(triplets_response[output[k].Triplets])
        output[k].C_Comb = this.ccomb(triplets_response[output[k].Triplets])
        output[k].Control_Rat = this.control_rat(output[k].C_Comb)
        output[k].Subject_Prob = this.subject_prob(output[k].C_Comb)
      }
      output.sort(this.blockOneSort);
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
    // processTwoResults(raw) {
    //   var output = [];
    //   for (var i = 0; i < raw.length; i++) {
    //     var current = {
    //       participant_name: this.form.name,
    //       "Pay Off Structure": raw[i].game_condition,
    //       "Avatar Present": raw[i].avatar,
    //       "Template Selected": raw[i].choice,
    //       Date: this.form.date,
    //       Gender: this.form.optn_1_4,
    //       "RA Present": this.form.ra,
    //       "Block Order": "123",
    //       Age: this.form.optn_1_3,
    //       "Younger Brother(s)": this.form.youngerBro,
    //       "Younger Sister(s)": this.form.youngerSis,
    //       "Older Brother(s)": this.form.olderBro,
    //       "Older Sister(s)": this.form.olderSis,
    //     };
    //     output.push(current);
    //   }
    //   return output;
    // },
    // To be removed
    tuneNum(input) {
      if (input == "1") {
        return "1";
      }
      if (input == "2") {
        return "3";
      }
      if (input == "3") {
        return "5";
      }
    },
    // Generates the label column for processOneResults
    labelGen(p_first, a_first, p_second, a_second) {
      p_first = this.tuneNum(p_first);
      p_second = this.tuneNum(p_second);
      a_first = this.tuneNum(a_first);
      a_second = this.tuneNum(a_second);
      var p_receive = Number(p_first) - Number(p_second);
      var a_receive = Number(a_first) - Number(a_second);
      var header = this.typeIden(p_receive, a_receive);
      if (p_receive > 0) {
        p_receive = "+" + p_receive;
      }
      if (a_receive > 0) {
        a_receive = "+" + a_receive;
      }
      var result =
        header +
        "(" +
        p_receive +
        "," +
        a_receive +
        ") = (" +
        p_first +
        "," +
        a_first +
        ") > (" +
        p_second +
        "," +
        a_second +
        ")";
      return result;
    },
    // ectr2Gen is a helper function that works with labelGen
    ectr2Gen(a_first, player) {
      var symbol = "";
      if (a_first == "1.5") {
        symbol = "X";
      } else {
        symbol = "||";
      }
      if (player == "1.5") {
        return symbol + "(3, +" + "2" + ")";
      } else if (player == "2") {
        return symbol + "(3, +" + "3" + ")";
      } else {
        // player == 2.5
        return symbol + "(3, +" + "4" + ")";
      }
    },
    typeIden(p_rec, a_rec) {
      if (p_rec < 0 && a_rec < 0) return "P";
      if (p_rec < 0 && a_rec > 0) return "H";
      if (p_rec > 0 && a_rec < 0) return "S";
      if (p_rec > 0 && a_rec > 0) return "M";
    },
 
    processThreeResults(raw) {
      var i;
      var output = [];
      console.log(this.participant_generated_id);
      for (i = 0; i < raw.length; i++) {
        var enctr_1_flipped = raw[i].enctr_1_reverse.toString();
        // console.log("enctr_1_flipped: " + enctr_1_flipped);
        // var enctr_2_flipped = raw[i].enctr_2_reverse.toString();
        // console.log("enctr_2_flipped: " + enctr_2_flipped);
        // console.log(enctr_1_flipped + enctr_2_flipped);
        var current = {
          Participant_ID: this.participant_generated_id,
          Trial_Number: raw[i].trial_number,
          Label: raw[i].label,
          // Vertical_Position: "\"" + enctr_1_flipped + enctr_2_flipped + "\"",
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
          Payoff_Difference_Self_1: raw[i].Original_As1 - raw[i].Original_Bs1,
          Payoff_Difference_Other_1: raw[i].Original_Ao1 - raw[i].Original_Bo1,
          Outcome_Disparity_1: raw[i].Original_As1 - raw[i].Original_Ao1,
          Payoff_Difference_Self_2: raw[i].Original_As2 - raw[i].Original_Bs2,
          Payoff_Difference_Other_2: raw[i].Original_Ao2 - raw[i].Original_Bo2,
          Outcome_Disparity_2: raw[i].Original_As2 - raw[i].Original_Ao2,
          Similarity_Score: raw[i].form,
          Reaction_Time: raw[i].reaction_time,
        };
        output.push(current);
      }
      output.sort(this.blockOneSort);
      return output;
    },

    // processThreeResults(raw) {
    //   var i;
    //   var output = [];
    //   for (i = 0; i < raw.length; i++) {
    //     var current = {

    //       participant_name: this.form.name,
    //       // "Game Condition": raw[i].game_condition,
    //       // "Belief Condition": raw[i].belief,
    //       Label:
    //         raw[i].a_c == "2"
    //           ? `Truth = ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ) <- ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ), Belief = ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} ) <- ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} )`
    //           : `Truth = ( ${raw[i].pr_p.p_second} , ${raw[i].pr_p.a_second} ) <- ( ${raw[i].pr_p.p_first} , ${raw[i].pr_p.a_first} ), Belief = ( ${raw[i].t_pr_p.p_second} , ${raw[i].t_pr_p.a_second} ) <- ( ${raw[i].t_pr_p.p_first} , ${raw[i].t_pr_p.a_first} )`,
    //       // "Trust Condition": raw[i].trust_condition,
    //       // "Trust/Distrust": raw[i].trust,
    //       // "Reaction Time": raw[i].reaction_time,
    //       "Trial Order": raw[i].trial_order,
    //       // to be FIXED
    //       Prediction: this.raw[i].prediction,  //Delete this.
    //       // Similarity: this.raw[i].sim_score,
    //       // Avatar: "N/A",
    //       // Date: this.form.date,
    //       // Gender: this.form.optn_1_4,
    //       // "RA Present": this.form.ra,
    //       // // to be FIXED
    //       // "Block Order": "123",
    //       // Age: this.form.optn_1_3,
    //       // "Younger Brother(s)": this.form.youngerBro,
    //       // "Younger Sister(s)": this.form.youngerSis,
    //       // "Older Brother(s)": this.form.olderBro,
    //       // "Older Sister(s)": this.form.olderSis,
    //     };
    //     output.push(current);
    //   }
    //   output.sort(this.blockThreeSort);
    //   return output;
    // },
    blockOneFileName() {
      return `M3_Lab_Experiment_Probability_${this.participant_generated_id}.csv`;
    },
    blockTwoFileName() {
      return `M3_Lab_Experiment_Matching_${this.participant_generated_id}.csv`;
    },
    blockThreeFileName() {
      return `M3_Lab_Experiment_Similarity_${this.participant_generated_id}.csv`;
    },
    // blockThreeFileName() {
    //   return `${this.form.id}_block_3.csv`;
    // },
    // blockTwoFinished(results) {
    //   // this.b_show_2 = false
    //   // this.b_show_3 = true
    //   this.finished_2 = true;
    //   this.blockTwoResults = this.processTwoResults(results);
    // },
    // Functions that sort the results from BlockOne and BlockThree
    blockOneSort(a, b) {
      if (Number(a["Trial_Number"]) < Number(b["Trial_Number"])) {
        return -1;
      } else {
        return 1;
      }
    },
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


      // if (str == "HSHS") return 1;
      // if (str == "HSSH") return 2;
      // if (str == "HSWP") return 3;
      // if (str == "HSPW") return 4;
      // if (str == "SHHS") return 5;
      // if (str == "SHSH") return 6;
      // if (str == "SHWP") return 7;
      // if (str == "SHPW") return 8;
      // if (str == "WPHS") return 9;
      // if (str == "WPSH") return 10;
      // if (str == "WPWP") return 11;
      // if (str == "WPPW") return 12;
      // if (str == "PWHS") return 13;
      // if (str == "PWSH") return 14;
      // if (str == "PWWP") return 15;
      // if (str == "PWPW") return 16;
      // @Frank: Greg, feel free to add more mappings here now that we have new trials
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
    // atomic_choice(trial_id, trust_condition) {
    //   var atom_choice = ""
    //   if (trial_id >= 1 && trial_id <= 54 && trust_condition <= 3) {
    //     atom_choice = 'Ha'
    //   } else if (trial_id >= 1 && trial_id <= 54 && trust_condition >= 4) {
    //     atom_choice = 'Hc'
    //   } else if (trial_id >= 55 && trial_id <= 108 && trust_condition <= 3) {
    //     atom_choice = 'Wa'
    //   } else if (trial_id >= 55 && trial_id <= 108 && trust_condition >= 4) {
    //     atom_choice = 'Wc'
    //   } else if (trial_id >= 109 && trial_id <= 162 && trust_condition <= 3) {
    //     atom_choice = 'Sa'
    //   } else if (trial_id >= 109 && trial_id <= 162 && trust_condition >= 4) {
    //     atom_choice = 'Sc'
    //   } else if (trial_id >= 163 && trial_id <= 216 && trust_condition <= 3) {
    //     atom_choice = 'Pa'
    //   } else if (trial_id >= 163 && trial_id <= 216 && trust_condition >= 4) {
    //     atom_choice = 'Pc'
    //   } else {
    //     atom_choice = 'Neptune'
    //   }
    //   return atom_choice
    // },
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
    // RightSideUpDown(trial_id, vert_pos, keypress, prediction) {
    //   var m1_atom = ""
    //   var top_option = ""
    //   var bottom_option = ""
    //   var flip1 = ""
    //   var flip2 = ""
    //   if (trial_id >= 1 && trial_id <= 54) {
    //     m1_atom = 'H'
    //   } else if (trial_id >= 55 && trial_id <= 108) {
    //     m1_atom = 'W'
    //   } else if (trial_id >= 109 && trial_id <= 162) {
    //     m1_atom = 'S'
    //   } else if (trial_id >= 163 && trial_id <= 216) {
    //     m1_atom = 'P'
    //   } else {
    //     atom_choice = 'Jupiter'
    //   }
    //   if (vert_pos == "HSHS" || vert_pos == "HSSH" || vert_pos == "HSMP" || vert_pos == "HSPM") {
    //     top_option = 'H'
    //   } else if (vert_pos == "MPHS" || vert_pos == "MPSH" || vert_pos == "MPMP" || vert_pos == "MPPM") {
    //     top_option = 'W'
    //   } else if (vert_pos == "SHHS" || vert_pos == "SHSH" || vert_pos == "SHMP" || vert_pos == "SHPM") {
    //     top_option = 'S'
    //   } else if (vert_pos == "PMHS" || vert_pos == "PMSH" || vert_pos == "PMMP" || vert_pos == "PMPM") {
    //     top_option = 'P'
    //   } else {
    //     top_option = 'Saturn'
    //   }
    //   if (vert_pos == "HSHS" || vert_pos == "SHHS" || vert_pos == "MPHS" || vert_pos == "PMHS") {
    //     bottom_option = 'H'
    //   } else if (vert_pos == "HSMP" || vert_pos == "SHMP" || vert_pos == "MPMP" || vert_pos == "PMMP") {
    //     bottom_option = 'W'
    //   } else if (vert_pos == "HSSH" || vert_pos == "SHSH" || vert_pos == "MPSH" || vert_pos == "PMSH") {
    //     bottom_option = 'S'
    //   } else if (vert_pos == "HSPM" || vert_pos == "SHPM" || vert_pos == "MPPM" || vert_pos == "PMPM") {
    //     bottom_option = 'P'
    //   } else {
    //     bottom_option = 'Saturn'
    //   }
    //   if (m1_atom == "H" && top_option == "H") {
    //     flip1 = 'U'
    //   } else if (m1_atom == "W" && top_option == "W") {
    //     flip1 = 'U'
    //   } else if (m1_atom == "S" && top_option == "S") {
    //     flip1 = 'U'
    //   } else if (m1_atom == "P" && top_option == "P") {
    //     flip1 = 'U'
    //   } else {
    //     flip1 = 'D'
    //   }
    //   if (bottom_option == "H" && prediction == "1") {
    //     flip2 = 'U'
    //   } else if (bottom_option == "W" && prediction == "1") {
    //     flip2 = 'U'
    //   } else if (bottom_option == "S" && prediction == "0") {
    //     flip2 = 'U'
    //   } else if (bottom_option == "P" && prediction == "0") {
    //     flip2 = 'U'
    //   } else if (bottom_option == "H" && prediction == "0") {
    //     flip2 = 'D'
    //   } else if (bottom_option == "W" && prediction == "0") {
    //     flip2 = 'D'
    //   } else if (bottom_option == "S" && prediction == "1") {
    //     flip2 = 'D'
    //   } else if (bottom_option == "P" && prediction == "1") {
    //     flip2 = 'D'
    //   } else {
    //     flip2 = '?'
    //   }
    //   return flip1 + flip2
    // },
    blockThreeSort(a, b) {
      if (a["Game Condition"] < b["Game Condition"]) {
        return -1;
      } else if (a["Game Condition"] > b["Game Condition"]) {
        return 1;
      } else {
        if (a["Belief Condition"] < b["Belief Condition"]) {
          return -1;
        } else if (a["Belief Condition"] > b["Belief Condition"]) {
          return 1;
        } else {
          // Same game condition and belief condition, sort by trust condition
          if (a["Trust Condition"] < b["Trust Condition"]) {
            return -1;
          } else if (a["Trust Condition"] > b["Trust Condition"]) {
            return 1;
          }
        }
      }
      // Should never reach here
      return 0;
    },
  },
};

// Current Sequence of Instruction Pages:
// BotStopper
// Consent
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


// Old Sequence of Instruction Pages:
// BotStopper
// Consent
// ExperInfo
// ExperTutor
// Basics01
// Basics02
// Basics03
// Basics04
// Basics05
// MeetPeople
// WantMoreDots
// HowChoice0
// HowChoice1
// HowChoice6
// FlowKnow1
// FlowKnow2
// TF110
// instruction20
// instruction21
// instruction22
// instruction23
// instruction24
// instruction25
// instruction26
// instruction27
// instruction28
// EndTF2
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
