<template>
  <b-modal
    id="modal-center-Instr05Social"
    size="xl"
    centered
    title="Instruction Page 5 of 10"
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
          v-bind:style="{ opacity: this.opacity_tablesCD, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
          :src="require('../../assets/Instructions/Instr05_Social/Social_text01_social.png')"
          v-bind:style="{ opacity: this.opacity_text_social, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/Social_text02a_redistribute.png')"
          v-bind:style="{ opacity: this.opacity_text_redistribute, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/Social_text02b_notalk.png')"
          v-bind:style="{ opacity: this.opacity_text_notalk, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/Social_text02c_understand.png')"
          v-bind:style="{ opacity: this.opacity_text_understand, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Graphics specific to this page -->
        <img
          :src="require('../../assets/Instructions/Instr00_Graphics/tablesCDsm.png')"
          v-bind:style="{ opacity: this.opacity_tablesCDsm, transition: 'opacity 0.8s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/guess.png')"
          v-bind:style="{ opacity: this.opacity_guess, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/other.png')"
          v-bind:style="{ opacity: this.opacity_other, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/notalk.png')"
          v-bind:style="{ opacity: this.opacity_notalk, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/whosdots.png')"
          v-bind:style="{ opacity: this.opacity_whosdots, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dots5.png')"
          v-bind:style="{ opacity: this.opacity_dots5, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dots1.png')"
          v-bind:style="{ opacity: this.opacity_dots1, transition: 'opacity 1.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotsblue5.png')"
          v-bind:style="{ opacity: this.opacity_dotsblue5, transition: 'opacity 3.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotsblue1.png')"
          v-bind:style="{ opacity: this.opacity_dotsblue1, transition: 'opacity 3.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotspink5.png')"
          v-bind:style="{ opacity: this.opacity_dotspink5, transition: 'opacity 3.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/dotspink1.png')"
          v-bind:style="{ opacity: this.opacity_dotspink1, transition: 'opacity 3.5s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />

        <!-- Eyes -->
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes02.png')"
          v-bind:style="{ opacity: this.opacity_eyes2, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes03.png')"
          v-bind:style="{ opacity: this.opacity_eyes3, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes04.png')"
          v-bind:style="{ opacity: this.opacity_eyes4, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes05.png')"
          v-bind:style="{ opacity: this.opacity_eyes5, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes06.png')"
          v-bind:style="{ opacity: this.opacity_eyes6, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes07.png')"
          v-bind:style="{ opacity: this.opacity_eyes7, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes08.png')"
          v-bind:style="{ opacity: this.opacity_eyes8, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes09.png')"
          v-bind:style="{ opacity: this.opacity_eyes9, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes10.png')"
          v-bind:style="{ opacity: this.opacity_eyes10, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes11.png')"
          v-bind:style="{ opacity: this.opacity_eyes11, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes12.png')"
          v-bind:style="{ opacity: this.opacity_eyes12, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes13.png')"
          v-bind:style="{ opacity: this.opacity_eyes13, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes14.png')"
          v-bind:style="{ opacity: this.opacity_eyes14, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
        />
        <img
          :src="require('../../assets/Instructions/Instr05_Social/eyes15.png')"
          v-bind:style="{ opacity: this.opacity_eyes15, transition: 'opacity 0.0s', maxWidth: '75%', height: 'auto', marginTop: '0%', transform: 'translate(-50%, 0)', position: 'absolute', }"
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
  name: "Instr05Social",
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

      opacity_text_social: "0%",
      opacity_text_redistribute: "0%",
      opacity_text_notalk: "0%",
      opacity_text_understand: "0%",

      opacity_tablesCDsm: "100%",
      opacity_other: "0%",
      opacity_guess: "0%",
      opacity_notalk: "0%",
      opacity_whosdots: "0%",
      opacity_dots5: "0%",
      opacity_dots1: "0%",
      opacity_dotsblue5: "0%",
      opacity_dotsblue1: "0%",
      opacity_dotspink5: "0%",
      opacity_dotspink1: "0%",

      opacity_room1: "100%",
      opacity_room2: "0%",
      opacity_you1: "0%",
      opacity_you2: "0%",
      opacity_tablesCD: "0%",
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
      opacity_dotstableDpurp5: "0%",
      opacity_dotstableCblack1: "0%",
      opacity_dotstableCblack3: "0%",
      opacity_dotstableCblack5: "100%",
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

      opacity_eyes2: "0%",
      opacity_eyes3: "0%",
      opacity_eyes4: "0%",
      opacity_eyes5: "0%",
      opacity_eyes6: "0%",
      opacity_eyes7: "0%",
      opacity_eyes8: "0%",
      opacity_eyes9: "0%",
      opacity_eyes10: "0%",
      opacity_eyes11: "0%",
      opacity_eyes12: "0%",
      opacity_eyes13: "0%",
      opacity_eyes14: "0%",
      opacity_eyes15: "0%",

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
        } else if (parent.keyflowAZ == true && event.keyCode == 65) {
          // redistribute A
          parent.keyflowAZ = false;
          parent.animateA();
        } else if (parent.keyflowAZ == true && event.keyCode == 90) {
          // redistribute Z
          parent.keyflowAZ = false;
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
      if (modalId != "modal-center-Instr05Social") {
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
      this.$bvModal.show("modal-center-Instr04Walls");
    },
    reset_animation_next() {
      this.resetAnimation();
      this.$bvModal.show("modal-center-Instr06Betting");
    },
    resetAnimation() {
      this.$bvModal.hide("modal-center-Instr05Social");

      this.opacity_text_social = "0%";
      this.opacity_text_redistribute = "0%";
      this.opacity_text_notalk = "0%";
      this.opacity_text_understand = "0%";
      this.opacity_tablesCDsm = "100%";
      this.opacity_other = "0%";
      this.opacity_guess = "0%";
      this.opacity_notalk = "0%";
      this.opacity_whosdots = "0%";
      this.opacity_dots5 = "0%";
      this.opacity_dots1 = "0%";
      this.opacity_dotsblue5 = "0%";
      this.opacity_dotsblue1 = "0%";
      this.opacity_dotspink5 = "0%";
      this.opacity_dotspink1 = "0%";
      this.opacity_presskey = "0%";
      this.opacity_room1 = "100%";
      this.opacity_room2 = "0%";
      this.opacity_you1 = "0%";
      this.opacity_you2 = "0%";
      this.opacity_tablesCD = "0%";
      this.opacity_tablesAZ = "0%";
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
      this.opacity_dotstableDpurp5 = "0%";
      this.opacity_dotstableCblack1 = "0%";
      this.opacity_dotstableCblack3 = "0%";
      this.opacity_dotstableCblack5 = "100%";
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

      this.opacity_eyes2 = "0%";
      this.opacity_eyes3 = "0%";
      this.opacity_eyes4 = "0%";
      this.opacity_eyes5 = "0%";
      this.opacity_eyes6 = "0%";
      this.opacity_eyes7 = "0%";
      this.opacity_eyes8 = "0%";
      this.opacity_eyes9 = "0%";
      this.opacity_eyes10 = "0%";
      this.opacity_eyes11 = "0%";
      this.opacity_eyes12 = "0%";
      this.opacity_eyes13 = "0%";
      this.opacity_eyes14 = "0%";
      this.opacity_eyes15 = "0%";

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

      setTimeout(() => {
        parent.opacity_tablesCDsm = "0%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_tablesCD = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_dots1 = "100%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_dots5 = "100%";
      }, 2200);
      setTimeout(() => {
        parent.opacity_other = "100%";
      }, 3000);
      setTimeout(() => {
        parent.opacity_dotsblue1 = "100%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_dotsblue5 = "100%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_dotspink1 = "100%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_dotspink5 = "100%";
      }, 3500);
      setTimeout(() => {
        parent.opacity_dots5 = "0%";
      }, 4800);
      setTimeout(() => {
        parent.opacity_dots1 = "0%";
      }, 4800);
      setTimeout(() => {
        parent.opacity_text_social = "100%";
      }, 6000);

      // Press Space Bar.
      setTimeout(() => {
        this.sbc = "outline-secondary";
        parent.opacity_presskey = "0%";
      }, 0);
      setTimeout(() => {
        this.keyflow1 = true;
        this.press = "space bar";
        parent.opacity_presskey = "100%";
      }, 9000);
      setTimeout(() => {
        parent.opacity_presskey = "0%";
      }, 9500);
      setTimeout(() => {
        this.sbc = "primary";
        parent.opacity_presskey = "100%";
      }, 10000);
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

      // Text swap
      setTimeout(() => {
        parent.opacity_text_social = "0%";
      }, 0);
      setTimeout(() => {
        parent.opacity_text_redistribute = "100%";
      }, 1000);
      setTimeout(() => {
        parent.opacity_text_notalk = "100%";
      }, 2000);
      setTimeout(() => {
        parent.opacity_text_understand = "100%";
      }, 3000);

      // No Talking
      setTimeout(() => {
        parent.opacity_notalk = "100%";
      }, 3200);
      setTimeout(() => {
        parent.opacity_notalk = "0%";
      }, 3800);
      setTimeout(() => {
        parent.opacity_notalk = "100%";
      }, 4400);

      // Eyes
    //   setTimeout(() => {
    //     parent.opacity_eyes2 = "100%";
    //   }, 4600);
    //   setTimeout(() => {
    //     parent.opacity_eyes3 = "100%";
    //   }, 4800);
    //   setTimeout(() => {
    //     parent.opacity_eyes4 = "100%";
    //   }, 5000);
    //   setTimeout(() => {
    //     parent.opacity_eyes5 = "100%";
    //   }, 5200);
    //   setTimeout(() => {
    //     parent.opacity_eyes6 = "100%";
    //   }, 5400);
    //   setTimeout(() => {
    //     parent.opacity_eyes7 = "100%";
    //   }, 5600);
    //   setTimeout(() => {
    //     parent.opacity_eyes8 = "100%";
    //   }, 5800);
    //   setTimeout(() => {
    //     parent.opacity_eyes9 = "100%";
    //   }, 6000);
    //   setTimeout(() => {
    //     parent.opacity_eyes10 = "100%";
    //   }, 6200);
    //   setTimeout(() => {
    //     parent.opacity_eyes11 = "100%";
    //   }, 6400);
    //   setTimeout(() => {
    //     parent.opacity_eyes12 = "100%";
    //   }, 6600);
    //   setTimeout(() => {
    //     parent.opacity_eyes13 = "100%";
    //   }, 6800);
    //   setTimeout(() => {
    //     parent.opacity_eyes14 = "100%";
    //   }, 7000);
    //   setTimeout(() => {
    //     parent.opacity_eyes15 = "100%";
    //   }, 7200);

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