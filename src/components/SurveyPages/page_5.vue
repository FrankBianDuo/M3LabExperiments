<template>
  <b-modal
    :id="this.page_id"
    size="xl"
    centered
    :title="this.center_title"
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
    <b-container class="align-bottom" :style="this.windowsize">
      <b-form>
        <b-form-group
          id="input-group-8"
          label="I see myself as: reserved, quiet."
          label-for="input-8"
        >
          <b-form-select id="input-8" v-model="form.bigfive06" :options="bigfive06" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-9"
          label="I see myself as: sympathetic, warm."
          label-for="input-9"
        >
          <b-form-select id="input-9" v-model="form.bigfive07" :options="bigfive07" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-10"
          label="I see myself as: disorganized, careless."
          label-for="input-10"
        >
          <b-form-select id="input-10" v-model="form.bigfive08" :options="bigfive08" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-11"
          label="I see myself as: calm, emotionally stable."
          label-for="input-11"
        >
          <b-form-select id="input-11" v-model="form.bigfive09" :options="bigfive09" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-12"
          label="I see myself as: conventional, uncreative."
          label-for="input-12"
        >
          <b-form-select id="input-12" v-model="form.bigfive10" :options="bigfive10" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-13"
          label="Scientific research is very important and good psychological research
            depends on high quality data from honest and attentive participants.
            Should we use your data? Your answer will not affect your credit."
          label-for="input-13"
        >
          <b-form-select id="input-13" v-model="form.agree" :options="agree" required></b-form-select>
        </b-form-group>
      </b-form>
    </b-container>
    <b-button :disabled="block" variant="outline-primary" @click="this.go_to_back" size="lg">Back</b-button>
    <b-button
      :disabled="block"
      style="float: right;"
      @click="this.go_to_next"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Survey5",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "5",
      form: {
        bigfive06: "",
        bigfive07: "",
        bigfive08: "",
        bigfive09: "",
        bigfive10: "",
        agree: "",
      },
      bigfive06: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive07: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive08: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive09: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive10: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      agree: [
        { text: "Select One", value: null },
        "Yes, include my data",
        "No, exclude my data",
      ],
    };
  },
  computed: {
    page_id() {
      return "modal-center-survey" + this.page_num;
    },
    center_title() {
      return "Survey page " + this.page_num + " of 5";
    },
    block() {
      return !(
        this.form.bigfive06 != "" &&
        this.form.bigfive07 != "" &&
        this.form.bigfive08 != "" &&
        this.form.bigfive09 != "" &&
        this.form.bigfive10 != "" &&
        this.form.agree != ""
      );
    },
  },
  methods: {
    go_to_next() {
      this.$bvModal.hide("modal-center-survey" + this.page_num);
      this.$bvModal.show(
        "modal-center-survey" + (Number(this.page_num) + 1).toString()
      );
      this.$emit("Survey5Done", this.form);
    },
    go_to_back() {
      this.$bvModal.hide("modal-center-survey" + this.page_num);
      this.$bvModal.show(
        "modal-center-survey" + (Number(this.page_num) - 1).toString()
      );
      this.$emit("Survey5Done", this.form);
    },
  },
};
</script>


<style scoped> 
</style>