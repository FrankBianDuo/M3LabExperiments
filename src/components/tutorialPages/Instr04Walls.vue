<template>
  <b-modal
    id="modal-center-Instr04Walls"
    size="xl"
    centered
    title="Instruction Page 4 of 10"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <!-- Graphics basic to all instruction pages -->
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/room1.png')"
          v-bind:style="{ opacity: this.opacity_room1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/room2.png')"
          v-bind:style="{ opacity: this.opacity_room2, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/you1.png')"
          v-bind:style="{ opacity: this.opacity_you1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/you2.png')"
          v-bind:style="{ opacity: this.opacity_you2, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tablesAZsm.png')"
          v-bind:style="{ opacity: this.opacity_tablesAZsm, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tableK.png')"
          v-bind:style="{ opacity: this.opacity_tableK, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressCD.png')"
          v-bind:style="{ opacity: this.opacity_pressCD, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressAZ.png')"
          v-bind:style="{ opacity: this.opacity_pressAZ, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', marginLeft: '-3.96%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressJK.png')"
          v-bind:style="{ opacity: this.opacity_pressJK, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predAsm.png')"
          v-bind:style="{ opacity: this.opacity_predAsm, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predZsm.png')"
          v-bind:style="{ opacity: this.opacity_predZsm, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceDsm.png')"
          v-bind:style="{ opacity: this.opacity_choiceDsm, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceCsm.png')"
          v-bind:style="{ opacity: this.opacity_choiceCsm, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceAsm.png')"
          v-bind:style="{ opacity: this.opacity_choiceAsm, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceZsm.png')"
          v-bind:style="{ opacity: this.opacity_choiceZsm, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/bet.png')"
          v-bind:style="{ opacity: this.opacity_bet, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/betnot.png')"
          v-bind:style="{ opacity: this.opacity_betnot, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/got1.png')"
          v-bind:style="{ opacity: this.opacity_got1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/got2.png')"
          v-bind:style="{ opacity: this.opacity_got2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/got3.png')"
          v-bind:style="{ opacity: this.opacity_got3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/got4.png')"
          v-bind:style="{ opacity: this.opacity_got4, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/got5.png')"
          v-bind:style="{ opacity: this.opacity_got5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choseyou1.png')"
          v-bind:style="{ opacity: this.opacity_choseyou1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', marginLeft: '-8%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choseyou2.png')"
          v-bind:style="{ opacity: this.opacity_choseyou2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', marginLeft: '-8%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/chosethey1.png')"
          v-bind:style="{ opacity: this.opacity_chosethey1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', marginLeft: '-8%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/chosethey2.png')"
          v-bind:style="{ opacity: this.opacity_chosethey2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', marginLeft: '-8%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Avatars/av04a.png')"
          v-bind:style="{ opacity: this.opacity_avatar04a, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Avatars/av04b.png')"
          v-bind:style="{ opacity: this.opacity_avatar04b, transition: 'opacity 1.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Dots -->
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDblack1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDblack1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDblack3.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDblack3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDblack5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDblack5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDpurp1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDpurp1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDpurp3.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDpurp3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableDpurp5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableDpurp5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCblack1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCblack1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCblack3.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCblack3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCblack5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCblack5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCpurp1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCpurp1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCpurp3.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCpurp3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableCpurp5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableCpurp5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableAblack2.png')"
          v-bind:style="{ opacity: this.opacity_dotstableAblack2, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableAblack4.png')"
          v-bind:style="{ opacity: this.opacity_dotstableAblack4, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableApurp1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableApurp1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableApurp5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableApurp5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableZblack2.png')"
          v-bind:style="{ opacity: this.opacity_dotstableZblack2, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableZblack4.png')"
          v-bind:style="{ opacity: this.opacity_dotstableZblack4, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableZpurp1.png')"
          v-bind:style="{ opacity: this.opacity_dotstableZpurp1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableZpurp5.png')"
          v-bind:style="{ opacity: this.opacity_dotstableZpurp5, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableKpurp2.png')"
          v-bind:style="{ opacity: this.opacity_dotstableKpurp2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableKpurp3.png')"
          v-bind:style="{ opacity: this.opacity_dotstableKpurp3, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableKpurp4.png')"
          v-bind:style="{ opacity: this.opacity_dotstableKpurp4, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Text -->
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text01_opaque.png')"
          v-bind:style="{ opacity: this.opacity_text_opaque, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text02_space.png')"
          v-bind:style="{ opacity: this.opacity_text_space, transition: 'opacity 0.4s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text03_finality.png')"
          v-bind:style="{ opacity: this.opacity_text_finality, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text04_offend.png')"
          v-bind:style="{ opacity: this.opacity_text_offend, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text05_pressAZ.png')"
          v-bind:style="{ opacity: this.opacity_text_pressAZ, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text06a_predAfalse.png')"
          v-bind:style="{ opacity: this.opacity_text_predAfalse, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text06b_predZtrue.png')"
          v-bind:style="{ opacity: this.opacity_text_predZtrue, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/Walls_text07_disappear.png')"
          v-bind:style="{ opacity: this.opacity_text_disappear, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Graphics specific to this page -->
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/tables3.png')"
          v-bind:style="{ opacity: this.opacity_tables3, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/wall1.png')"
          v-bind:style="{ opacity: this.opacity_wall1, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/wall2.png')"
          v-bind:style="{ opacity: this.opacity_wall2, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/dots1.png')"
          v-bind:style="{ opacity: this.opacity_dots1, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/dots3.png')"
          v-bind:style="{ opacity: this.opacity_dots3, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/dots5.png')"
          v-bind:style="{ opacity: this.opacity_dots5, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr04_Walls/choice3.png')"
          v-bind:style="{ opacity: this.opacity_choice3, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predAsm.png')"
          v-bind:style="{ opacity: this.opacity_predA2sm, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predZsm.png')"
          v-bind:style="{ opacity: this.opacity_predZ2sm, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
  name: "Instr04Walls",
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

      opacity_text_opaque: "0%",
      opacity_text_space: "0%",
      opacity_text_finality: "0%",
      opacity_text_offend: "0%",
      opacity_text_pressAZ: "0%",
      opacity_text_predAfalse: "0%",
      opacity_text_predZtrue: "0%",
      opacity_text_disappear: "0%",

      opacity_room1: "100%",
      opacity_room2: "0%",
      opacity_you1: "100%",
      opacity_you2: "0%",
      opacity_tables3: "100%",
      opacity_choice3: "0%",
      opacity_tablesAZsm: "0%",
      opacity_tableK: "0%",
      opacity_wall1: "0%",
      opacity_wall2: "0%",
      opacity_pressCD: "0%",
      opacity_pressAZ: "0%",
      opacity_pressJK: "0%",
      opacity_choiceDsm: "0%",
      opacity_choiceCsm: "0%",
      opacity_choiceAsm: "0%",
      opacity_choiceZsm: "0%",
      opacity_predAsm: "0%",
      opacity_predZsm: "0%",
      opacity_predA2sm: "0%",
      opacity_predZ2sm: "0%",
      opacity_bet: "0%",
      opacity_betnot: "0%",
      opacity_got1: "0%",
      opacity_got2: "0%",
      opacity_got3: "0%",
      opacity_got4: "0%",
      opacity_got5: "0%",
      opacity_choseyou1: "0%",
      opacity_choseyou2: "0%",
      opacity_chosethey1: "0%",
      opacity_chosethey2: "0%",
      opacity_avatar04a: "100%",
      opacity_avatar04b: "0%",
      opacity_dots1: "100%",
      opacity_dots3: "100%",
      opacity_dots5: "100%",
      opacity_dotstableDblack1: "0%",
      opacity_dotstableDblack3: "0%",
      opacity_dotstableDblack5: "0%",
      opacity_dotstableDpurp1: "0%",
      opacity_dotstableDpurp3: "0%",
      opacity_dotstableDpurp5: "0%",
      opacity_dotstableCblack1: "0%",
      opacity_dotstableCblack3: "0%",
      opacity_dotstableCblack5: "0%",
      opacity_dotstableCpurp1: "0%",
      opacity_dotstableCpurp3: "0%",
      opacity_dotstableCpurp5: "0%",
      opacity_dotstableAblack2: "0%",
      opacity_dotstableAblack4: "0%",
      opacity_dotstableApurp1: "0%",
      opacity_dotstableApurp5: "0%",
      opacity_dotstableZblack2: "0%",
      opacity_dotstableZblack4: "0%",
      opacity_dotstableZpurp1: "0%",
      opacity_dotstableZpurp5: "0%",
      opacity_dotstableKpurp2: "0%",
      opacity_dotstableKpurp3: "0%",
      opacity_dotstableKpurp4: "0%",

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
        } else if (parent.keyflowAZ == true && event.keyCode == 65) {
          // Predict A
          parent.keyflowAZ = false;
          parent.animateA();
        } else if (parent.keyflowAZ == true && event.keyCode == 90) {
          // Predict Z
          parent.keyflowAZ = false;
          parent.animateZ();
        } else if (parent.keyflowJK == true && event.keyCode == 74) {
          // Give Control
          parent.keyflowJK = false;
          parent.animateJ();
        } else if (parent.keyflowJK == true && event.keyCode == 75) {
          // Keep Control
          parent.keyflowJK = false;
          parent.animateK();
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
      if (modalId != "modal-center-Instr04Walls") {
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
      this.$bvModal.show("modal-center-Instr03Rooms");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Instr05Social");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Instr04Walls");

      this.opacity_text_opaque = "0%";
      this.opacity_text_space = "0%";
      this.opacity_text_finality = "0%";
      this.opacity_text_offend = "0%";
      this.opacity_text_pressAZ = "0%";
      this.opacity_text_predAfalse = "0%";
      this.opacity_text_predZtrue = "0%";
      this.opacity_text_disappear = "0%";
      this.opacity_presskey = "0%";
      this.opacity_room1 = "100%";
      this.opacity_room2 = "0%";
      this.opacity_you1 = "100%";
      this.opacity_you2 = "0%";
      this.opacity_tables3 = "100%";
      this.opacity_choice3 = "0%";
      this.opacity_tablesAZsm = "0%";
      this.opacity_tableK = "0%";
      this.opacity_wall1 = "0%";
      this.opacity_wall2 = "0%";
      this.opacity_pressCD = "0%";
      this.opacity_pressAZ = "0%";
      this.opacity_pressJK = "0%";
      this.opacity_choiceDsm = "0%";
      this.opacity_choiceCsm = "0%";
      this.opacity_choiceAsm = "0%";
      this.opacity_choiceZsm = "0%";
      this.opacity_predAsm = "0%";
      this.opacity_predZsm = "0%";
      this.opacity_predA2sm = "0%";
      this.opacity_predZ2sm = "0%";
      this.opacity_bet = "0%";
      this.opacity_betnot = "0%";
      this.opacity_got1 = "0%";
      this.opacity_got2 = "0%";
      this.opacity_got3 = "0%";
      this.opacity_got4 = "0%";
      this.opacity_got5 = "0%";
      this.opacity_choseyou1 = "0%";
      this.opacity_choseyou2 = "0%";
      this.opacity_chosethey1 = "0%";
      this.opacity_chosethey2 = "0%";
      this.opacity_avatar04a = "100%";
      this.opacity_avatar04b = "0%";
      this.opacity_dots1 = "100%";
      this.opacity_dots3 = "100%";
      this.opacity_dots5 = "100%";
      this.opacity_dotstableDblack1 = "0%";
      this.opacity_dotstableDblack3 = "0%";
      this.opacity_dotstableDblack5 = "0%";
      this.opacity_dotstableDpurp1 = "0%";
      this.opacity_dotstableDpurp3 = "0%";
      this.opacity_dotstableDpurp5 = "0%";
      this.opacity_dotstableCblack1 = "0%";
      this.opacity_dotstableCblack3 = "0%";
      this.opacity_dotstableCblack5 = "0%";
      this.opacity_dotstableCpurp1 = "0%";
      this.opacity_dotstableCpurp3 = "0%";
      this.opacity_dotstableCpurp5 = "0%";
      this.opacity_dotstableAblack2 = "0%";
      this.opacity_dotstableAblack4 = "0%";
      this.opacity_dotstableApurp1 = "0%";
      this.opacity_dotstableApurp5 = "0%";
      this.opacity_dotstableZblack2 = "0%";
      this.opacity_dotstableZblack4 = "0%";
      this.opacity_dotstableZpurp1 = "0%";
      this.opacity_dotstableZpurp5 = "0%";
      this.opacity_dotstableKpurp2 = "0%";
      this.opacity_dotstableKpurp3 = "0%";
      this.opacity_dotstableKpurp4 = "0%";

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

      // Text
      setTimeout(() => {
        parent.opacity_text_opaque = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_opaque = "0%";
      }, 5500);
      setTimeout(() => {
        parent.opacity_text_space = "100%";
      }, 5500);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 7000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 7500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 8000);

      // Wall 1 appears:
      setTimeout(() => {
        parent.opacity_wall1 = "100%";
      }, 500);
      setTimeout(() => {
        parent.opacity_wall1 = "85%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_wall1 = "100%";
      }, 1500);
    },
    animate1() {
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

      // Room 1 Choice
      setTimeout(() => {
        parent.opacity_choice3 = "100%";
      }, 700);

      // Present Room 2
      setTimeout(() => {
        parent.opacity_room2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_tablesAZsm = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_tableK = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_avatar04b = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_you2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_wall2 = "100%";
      }, 2000);

      // Present dots for tables A and Z
      setTimeout(() => {
        parent.opacity_dotstableAblack2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableApurp5 = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableZblack4 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableZpurp1 = "0%";
      }, 2000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_text_offend = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_disappear = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow2 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 7000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 7500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 8000);
    },

    animate2() {
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
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_offend = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_disappear = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow3 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 7000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 7500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 8000);
    },

    animate3() {
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
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "0%";
      }, 7000);
      setTimeout(() => {
        parent.opacity_text_offend = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_disappear = "0%";
      }, 0);

      // Press A or Z.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowAZ = true;
        this.press = "A or Z";
        parent.opacity_pressAZ = "100%";
        parent.opacity_presskey = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_pressAZ = "0%";
        parent.opacity_presskey = "0%";
      }, 3000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_pressAZ = "100%";
        parent.opacity_presskey = "100%";
      }, 3500);
    },

    animateA() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotstableKpurp3 = "0%";
        parent.opacity_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predAsm = "100%";
        parent.opacity_predA2sm = "100%";
        parent.opacity_predZsm = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predAsm = "0%";
      }, 550);
      setTimeout(() => {
        parent.opacity_wall2 = "0%";
      }, 800);
      setTimeout(() => {
        parent.opacity_predA2sm = "0%";
        parent.opacity_predZ2sm = "0%";
      }, 800);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_offend = "0%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_disappear = "0%";
      }, 0);

      // Their choice
      setTimeout(() => {
        parent.opacity_choiceAsm = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_choiceZsm = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_chosethey1 = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_chosethey2 = "0%";
      }, 4000);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow4 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 7000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7500);
    },
    animateZ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotstableKpurp3 = "0%";
        parent.opacity_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predAsm = "0%";
        parent.opacity_predZsm = "100%";
        parent.opacity_predZ2sm = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predZsm = "0%";
      }, 550);
      setTimeout(() => {
        parent.opacity_wall2 = "0%";
      }, 800);
      setTimeout(() => {
        parent.opacity_predA2sm = "0%";
        parent.opacity_predZ2sm = "0%";
      }, 800);

      // Their choice
      setTimeout(() => {
        parent.opacity_choiceAsm = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_choiceZsm = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_chosethey1 = "0%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_chosethey2 = "0%";
      }, 4000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_offend = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "100%";
      }, 5000);
      setTimeout(() => {
        parent.opacity_text_disappear = "0%";
      }, 0);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow4 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 6500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 7000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 7500);
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
      setTimeout(() => {
        parent.opacity_choiceA = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_choiceZ = "100%";
      }, 0);

      // Kill pred choice feedback:
      setTimeout(() => {
        parent.opacity_choseyou1 = "0%";
        parent.opacity_choseyou2 = "0%";
        parent.opacity_chosethey1 = "0%";
        parent.opacity_chosethey2 = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_opaque = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_space = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_finality = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_offend = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predAfalse = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_predZtrue = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_disappear = "100%";
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
      }, 11500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 12000);
    },
  },
};
</script>

<style scoped>
</style>