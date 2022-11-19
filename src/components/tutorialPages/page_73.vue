<template>
  <b-modal
    :id="this.page_id"
    size="xl"
    centered
    title="You must correctly answer this question."
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require(`../../assets/Instructions/Questions TF/${this.gen_question_src(this.wrong_questions[0])['q_img_src']}`)"
          v-bind:style="this.gen_question_src(this.wrong_questions[0])['q_img_style']"
        />
        <img
          :src="require(`../../assets/Instructions/Questions TF/${this.gen_question_src(this.wrong_questions[0])['a_img_src']}`)"
          v-bind:style="this.gen_question_src(this.wrong_questions[0])['a_img_style']"
        />
      </div>
    </b-container>
    <!-- We need to find a way to make the questions hide.  The answers fade in prior to the question and then disappear again. -->

    <b-button
      @click="reveal_False"
      :disabled="this.ans_disable"
      v-bind:style="{ marginLeft: '6%', marginTop: '-16%',  }"
      :variant="this.b_1_style"
      size="lg"
    >False</b-button>
    <b-button
      @click="reveal_True"
      :disabled="this.ans_disable"
      v-bind:style="{ marginRight: '6%', marginTop: '-8%',  }"
      style="float: right;"
      :variant="this.b_2_style"
      size="lg"
    >True</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial73",
  props: {
    windowsize: String,
    previous_ans: Object,
  },
  components: {},
  data() {
    return {
      proceed: true,
      page_num: "73",
      opacity_a: "100%",
      opacity_b: "0%",
      ans_disable: false,
      b_1_style: "primary",
      b_2_style: "primary",
      ans: "t",
      wrong_questions: [20],
    };
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
      // eslint-disable-next-line no-console
      console.log(this.windowsize);
      if (modalId != "modal-center-instruction" + this.page_num) {
        return;
      }
      if (this.mutex == true) {
        return;
      }
      this.question_present();
    });
  },
  methods: {
    // If we ever reach here it means they got some question wrong
    question_present() {
      // eslint-disable-next-line no-console
      console.log("to question_present");
      // Get rid of the placeholder "20"
      this.wrong_questions.pop();
      for (let [key, value] of Object.entries(this.previous_ans)) {
        if (value[0] == false) {
          this.wrong_questions.push(key);
        }
      }
    },
    reset_animation_next() {
      // eslint-disable-next-line no-console
      console.log("to block1");
      // eslint-disable-next-line no-console
      console.log("modal-center-instruction" + this.page_num);
      this.$bvModal.show("modal-center-prediction-task");                   // This takes the participant from the instructions to Experiment 1
      // this.$bvModal.show("modal-center-3");                    // This takes the participant from the instructions to Experiment 3
    },
    reveal_False() {
      this.opacity_a = "0%";
      this.opacity_b = "100%";
      this.ans_disable = true;
      this.button_after("f");
    },
    reveal_True() {
      this.opacity_a = "0%";
      this.opacity_b = "100%";
      this.ans_disable = true;
      this.button_after("t");
    },
    button_after(received_ans) {
      if (this.ans == "f") {
        this.b_1_style = "success";
        this.b_2_style = "danger";
      } else {
        this.b_2_style = "success";
        this.b_1_style = "danger";
      }
      let parent = this;
      setTimeout(() => {
        parent.b_1_style = "primary";
        parent.b_2_style = "primary";
        // They got it right this time
        if (parent.previous_ans[parent.wrong_questions[0]][1] == received_ans) {
          parent.wrong_questions.shift();
          if (parent.wrong_questions.length == 0) {
            parent.reset_animation_next();
          }
        } else {
          parent.wrong_questions.push(parent.wrong_questions.shift());
        }
        parent.ans_disable = false;
        this.opacity_a = "100%";
        this.opacity_b = "0%";
      }, 4000);
    },
    gen_question_src(q_id) {
      var srcmap = {
        20: {
          q_img_src: `Q01a.png`,
          a_img_src: `Q01b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        21: {
          q_img_src: `Q02a.png`,
          a_img_src: `Q02b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        22: {
          q_img_src: `Q03a.png`,
          a_img_src: `Q03b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        23: {
          q_img_src: `Q04a.png`,
          a_img_src: `Q04b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        24: {
          q_img_src: `Q05a.png`,
          a_img_src: `Q05b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        25: {
          q_img_src: `Q06a.png`,
          a_img_src: `Q06b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        26: {
          q_img_src: `Q07a.png`,
          a_img_src: `Q07b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        27: {
          q_img_src: `Q08a.png`,
          a_img_src: `Q08b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        28: {
          q_img_src: `Q09a.png`,
          a_img_src: `Q09b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        29: {
          q_img_src: `Q10a.png`,
          a_img_src: `Q10b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        61: {
          q_img_src: `Q11a.png`,
          a_img_src: `Q11b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        62: {
          q_img_src: `Q12a.png`,
          a_img_src: `Q12b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        63: {
          q_img_src: `Q13a.png`,
          a_img_src: `Q13b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        64: {
          q_img_src: `Q14a.png`,
          a_img_src: `Q14b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        65: {
          q_img_src: `Q15a.png`,
          a_img_src: `Q15b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        66: {
          q_img_src: `Q16a.png`,
          a_img_src: `Q16b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        67: {
          q_img_src: `Q17a.png`,
          a_img_src: `Q17b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
        68: {
          q_img_src: `Q18a.png`,
          a_img_src: `Q18b.png`,
          q_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_a,
            transition: "opacity 0.0s",
          },
          a_img_style: {
            maxWidth: "70%",
            height: "auto",
            marginTop: "0%",
            transform: "translate(-50%, 0)",
            position: "absolute",
            opacity: this.opacity_b,
            transition: "opacity 0.0s",
          },
        },
      };
      return srcmap[q_id];
    },
  },
};
</script>


<style scoped>
</style>