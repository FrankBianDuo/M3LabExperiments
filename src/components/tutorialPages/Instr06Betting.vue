<template>
  <b-modal
    id="modal-center-Instr06Betting"
    size="xl"
    centered
    title="Instruction Page 6 of 10"
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
          v-bind:style="{ opacity: this.opacity_room2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/you1.png')"
          v-bind:style="{ opacity: this.opacity_you1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/you2.png')"
          v-bind:style="{ opacity: this.opacity_you2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tablesCD.png')"
          v-bind:style="{ opacity: this.opacity_tablesCD, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tablesAZ.png')"
          v-bind:style="{ opacity: this.opacity_tablesAZ, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tableK.png')"
          v-bind:style="{ opacity: this.opacity_tableK, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/wall2.png')"
          v-bind:style="{ opacity: this.opacity_wall2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressCD.png')"
          v-bind:style="{ opacity: this.opacity_pressCD, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressAZ.png')"
          v-bind:style="{ opacity: this.opacity_pressAZ, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/pressJK.png')"
          v-bind:style="{ opacity: this.opacity_pressJK, transition: 'opacity 0.2s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predA.png')"
          v-bind:style="{ opacity: this.opacity_predA, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/predZ.png')"
          v-bind:style="{ opacity: this.opacity_predZ, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceD.png')"
          v-bind:style="{ opacity: this.opacity_choiceD, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceC.png')"
          v-bind:style="{ opacity: this.opacity_choiceC, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceA.png')"
          v-bind:style="{ opacity: this.opacity_choiceA, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choiceZ.png')"
          v-bind:style="{ opacity: this.opacity_choiceZ, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/bet.png')"
          v-bind:style="{ opacity: this.opacity_bet, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/betnot.png')"
          v-bind:style="{ opacity: this.opacity_betnot, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          v-bind:style="{ opacity: this.opacity_choseyou1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/choseyou2.png')"
          v-bind:style="{ opacity: this.opacity_choseyou2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/chosethey1.png')"
          v-bind:style="{ opacity: this.opacity_chosethey1, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/chosethey2.png')"
          v-bind:style="{ opacity: this.opacity_chosethey2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Avatars/av09a.png')"
          v-bind:style="{ opacity: this.opacity_avatar09a, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Avatars/av09b.png')"
          v-bind:style="{ opacity: this.opacity_avatar09b, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          v-bind:style="{ opacity: this.opacity_dotstableDpurp5, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          v-bind:style="{ opacity: this.opacity_dotstableCpurp1, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          v-bind:style="{ opacity: this.opacity_dotstableAblack2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableAblack4.png')"
          v-bind:style="{ opacity: this.opacity_dotstableAblack4, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          v-bind:style="{ opacity: this.opacity_dotstableZblack2, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/Dots/dotstableZblack4.png')"
          v-bind:style="{ opacity: this.opacity_dotstableZblack4, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text01_whychoose.png')"
          v-bind:style="{ opacity: this.opacity_text_whychoose, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text02_surething.png')"
          v-bind:style="{ opacity: this.opacity_text_surething, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text03_betnotbet.png')"
          v-bind:style="{ opacity: this.opacity_text_betnotbet, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text04_pressJK.png')"
          v-bind:style="{ opacity: this.opacity_text_pressJK, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text05a_regardless.png')"
          v-bind:style="{ opacity: this.opacity_text_regardless, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text05b_allow.png')"
          v-bind:style="{ opacity: this.opacity_text_allow, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/Betting_text05c_prevent.png')"
          v-bind:style="{ opacity: this.opacity_text_prevent, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Graphics specific to this page -->
        <img
          :src="require('../../assets/Instructions/Instr05_Social/other.png')"
          v-bind:style="{ opacity: this.opacity_other, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/whosdots.png')"
          v-bind:style="{ opacity: this.opacity_whosdots, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotsblue5.png')"
          v-bind:style="{ opacity: this.opacity_dotsblue5, transition: 'opacity 5.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotsblue1.png')"
          v-bind:style="{ opacity: this.opacity_dotsblue1, transition: 'opacity 5.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotspink5.png')"
          v-bind:style="{ opacity: this.opacity_dotspink5, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotspink1.png')"
          v-bind:style="{ opacity: this.opacity_dotspink1, transition: 'opacity 4.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr06_Betting/theygot.png')"
          v-bind:style="{ opacity: this.opacity_theygot, transition: 'opacity 0.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
  name: "Instr06Betting",
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

      opacity_text_whychoose: "0%",
      opacity_text_surething: "0%",
      opacity_text_betnotbet: "0%",
      opacity_text_pressJK: "0%",
      opacity_text_regardless: "0%",
      opacity_text_allow: "0%",
      opacity_text_prevent: "0%",

      opacity_other: "100%",
      opacity_whosdots: "0%",
      opacity_dotsblue5: "100%",
      opacity_dotsblue1: "100%",
      opacity_dotspink5: "100%",
      opacity_dotspink1: "100%",
      opacity_theygot: "0%",

      opacity_room1: "100%",
      opacity_room2: "0%",
      opacity_you1: "100%",
      opacity_you2: "0%",
      opacity_tablesCD: "100%",
      opacity_tablesAZ: "0%",
      opacity_tableK: "0%",
      opacity_wall2: "0%",
      opacity_pressCD: "0%",
      opacity_pressAZ: "0%",
      opacity_pressJK: "0%",
      opacity_choiceD: "0%",
      opacity_choiceC: "0%",
      opacity_choiceA: "0%",
      opacity_choiceZ: "0%",
      opacity_predA: "0%",
      opacity_predZ: "0%",
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
      opacity_avatar09a: "100%",
      opacity_avatar09b: "0%",
      opacity_dotstableDblack1: "100%",
      opacity_dotstableDblack3: "0%",
      opacity_dotstableDblack5: "0%",
      opacity_dotstableDpurp1: "0%",
      opacity_dotstableDpurp3: "0%",
      opacity_dotstableDpurp5: "100%",
      opacity_dotstableCblack1: "0%",
      opacity_dotstableCblack3: "0%",
      opacity_dotstableCblack5: "100%",
      opacity_dotstableCpurp1: "100%",
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
      if (modalId != "modal-center-Instr06Betting") {
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
      this.$bvModal.show("modal-center-Instr05Social");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Instr07Psych");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Instr06Betting");

      this.opacity_other = "100%";
      this.opacity_whosdots = "0%";
      this.opacity_dotsblue5 = "100%";
      this.opacity_dotsblue1 = "100%";
      this.opacity_dotspink5 = "100%";
      this.opacity_dotspink1 = "100%";
      this.opacity_theygot = "0%";

      this.opacity_text_whychoose = "0%";
      this.opacity_text_surething = "0%";
      this.opacity_text_betnotbet = "0%";
      this.opacity_text_pressJK = "0%";
      this.opacity_text_regardless = "0%";
      this.opacity_text_allow = "0%";
      this.opacity_text_prevent = "0%";
      this.opacity_presskey = "0%";
      this.opacity_room1 = "100%",
      this.opacity_room2 = "0%",
      this.opacity_you1 = "100%",
      this.opacity_you2 = "0%",
      this.opacity_tablesCD = "100%",
      this.opacity_tablesAZ = "0%",
      this.opacity_tableK = "0%";
      this.opacity_wall2 = "0%";
      this.opacity_pressCD = "0%";
      this.opacity_pressAZ = "0%";
      this.opacity_pressJK = "0%";
      this.opacity_choiceD = "0%";
      this.opacity_choiceC = "0%";
      this.opacity_choiceA = "0%";
      this.opacity_choiceZ = "0%";
      this.opacity_predA = "0%";
      this.opacity_predZ = "0%";
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
      this.opacity_avatar09a = "100%";
      this.opacity_avatar09b = "0%";
      this.opacity_dotstableDblack1 = "100%";
      this.opacity_dotstableDblack3 = "0%";
      this.opacity_dotstableDblack5 = "0%";
      this.opacity_dotstableDpurp1 = "0%";
      this.opacity_dotstableDpurp3 = "0%";
      this.opacity_dotstableDpurp5 = "100%";
      this.opacity_dotstableCblack1 = "0%";
      this.opacity_dotstableCblack3 = "0%";
      this.opacity_dotstableCblack5 = "100%";
      this.opacity_dotstableCpurp1 = "100%";
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

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 2000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 2500);

      // Fade out other --> Fade in you
      setTimeout(() => {
        parent.opacity_other = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_dotspink5 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_dotspink1 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_dotstableDpurp5 = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_dotstableCpurp1 = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_whosdots = "100%";
      }, 4000);
      setTimeout(() => {
        parent.opacity_dotsblue5 = "0%";
      }, 6500);
      setTimeout(() => {
        parent.opacity_dotsblue1 = "0%";
      }, 6500);
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
        parent.opacity_choiceD = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_theygot = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_whosdots = "0%";
      }, 0);

      // Present Room 2
      setTimeout(() => {
        parent.opacity_room2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_tablesAZ = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_tableK = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_avatar09b = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_you2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_wall2 = "100%";
      }, 2000);

      // Present dots for tables A and Z
      setTimeout(() => {
        parent.opacity_dotstableAblack4 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableApurp1 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableZblack2 = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dotstableZpurp5 = "100%";
      }, 2000);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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
      }, 6000);
      setTimeout(() => {
        parent.opacity_pressAZ = "0%";
        parent.opacity_presskey = "0%";
      }, 6500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_pressAZ = "100%";
        parent.opacity_presskey = "100%";
      }, 7000);
    },
    animateA() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotstableKpurp3 = "100%";
        parent.opacity_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predA = "100%";
        parent.opacity_predZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_theygot = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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
      }, 4500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 5000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 5500);
    },
    animateZ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);

      // Prediction Feedback Up
      setTimeout(() => {
        parent.opacity_dotstableKpurp3 = "100%";
        parent.opacity_pressAZ = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predA = "0%";
        parent.opacity_predZ = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_theygot = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "100%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
      }, 0);

      // Press J or K.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflowJK = true;
        this.press = "J or K";
        parent.opacity_pressJK = "100%";
        parent.opacity_presskey = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_pressJK = "0%";
        parent.opacity_presskey = "0%";
      }, 500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_pressJK = "100%";
        parent.opacity_presskey = "100%";
      }, 1000);
    },

    animateJ() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      this.opacity_pressJK = "0%"
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Control Feedback Give
      setTimeout(() => {
        patent.opacity_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        patent.opacity_pressJK = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_bet = "100%";
        parent.opacity_betnot = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predA = "0%";
        parent.opacity_predZ = "0%";
      }, 0);setTimeout(() => {
        parent.opacity_bet = "0%";
        parent.opacity_betnot = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_wall2 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_choiceA = "100%";
        parent.opacity_choiceZ = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_chosethey1 = "0%";
        parent.opacity_chosethey2 = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_got1 = "100%";
        parent.opacity_got3 = "0%";
      }, 2400);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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
      }, 3500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 4000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 4500);
    },
    animateK() {
      let parent = this;
      setTimeout(() => (parent.mutex = false), 3600);
      setTimeout(() => (parent.locked = false), 3600);
      this.opacity_pressJK = "0%"
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 3000);

      // Control Feedback Keep
      setTimeout(() => {
        patent.opacity_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        patent.opacity_pressJK = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_bet = "0%";
        parent.opacity_betnot = "100%";
      }, 0);
      setTimeout(() => {
        parent.opacity_predA = "0%";
        parent.opacity_predZ = "0%";
      }, 0);setTimeout(() => {
        parent.opacity_bet = "0%";
        parent.opacity_betnot = "0%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_wall2 = "0%";
      }, 1500);
      setTimeout(() => {
        parent.opacity_choiceA = "100%";
        parent.opacity_choiceZ = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_chosethey1 = "0%";
        parent.opacity_chosethey2 = "0%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_got1 = "0%";
        parent.opacity_got3 = "100%";
      }, 2400);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 2500);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_allow = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_prevent = "0%";
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
      }, 3500);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 4000);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 4500);
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
        parent.opacity_choiceZ = "0%";
      }, 0);

      // Kill pred choice feedback:
      setTimeout(() => {
        parent.opacity_choseyou1 = "0%";
        parent.opacity_choseyou2 = "0%";
        parent.opacity_chosethey1 = "0%";
        parent.opacity_chosethey2 = "0%";
        parent.opacity_got1 = "0%";
        parent.opacity_got2 = "0%";
        parent.opacity_got3 = "0%";
        parent.opacity_got4 = "0%";
        parent.opacity_got5 = "0%";
      }, 0);

      // Text swap
      setTimeout(() => {
        parent.opacity_text_whychoose = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_surething = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_betnotbet = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_pressJK = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_regardless = "100%";
      }, 800);
      setTimeout(() => {
        parent.opacity_text_allow = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_text_prevent = "100%";
      }, 5200);

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
      }, 10500);
      setTimeout(() => {
        parent.nbc = "success";
      }, 11000);
    },
  },
};
</script>

<style scoped>
</style>