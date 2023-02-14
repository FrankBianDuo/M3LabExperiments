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
        <b-form-group id="input-group-1" label="How many hours of sleep have you had within the last 24 hours, including naps?" label-for="input-1">
          <b-form-input
            id="input-1"
            type="number"
            v-model="form.sleep01"
            required
            placeholder="Enter the number of hours here..."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="How many hours do you typically sleep with one day (24 hours), including naps?" label-for="input-2">
          <b-form-input
            id="input-2"
            type="number"
            v-model="form.sleep02"
            required
            placeholder="Enter the number of hours here..."
          ></b-form-input>
        </b-form-group>
        
        <b-form-group
          id="input-group-3"
          label="I see myself as: extraverted, enthusiastic."
          label-for="input-3"
        >
          <b-form-select id="input-3" v-model="form.bigfive01" :options="bigfive01" required></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="I see myself as: critical, quarrelsome."
          label-for="input-4"
        >
          <b-form-select
            id="input-4"
            v-model="form.bigfive02"
            :options="bigfive02"
            required
            placeholder="Enter here"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="I see myself as: dependable, self-disciplined."
          label-for="input-5"
        >
          <b-form-select
            id="input-5"
            v-model="form.bigfive03"
            :options="bigfive03"
            required
            placeholder="Enter here"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-6"
          label="I see myself as: anxious, easily upset."
          label-for="input-6"
        >
          <b-form-select
            id="input-6"
            v-model="form.bigfive04"
            :options="bigfive04"
            required
            placeholder="Enter here"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-7"
          label="I see myself as: open to new experiences, complex."
          label-for="input-7"
        >
          <b-form-select id="input-7" v-model="form.bigfive05" :options="bigfive05" required></b-form-select>
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
  name: "Survey4",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "4",
      form: {
        sleep01: "",
        bigfive01: "",
        bigfive02: "",
        bigfive03: "",
        bigfive04: "",
        bigfive05: "",
      },
      bigfive01: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive02: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive03: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive04: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
      ],
      bigfive05: [
        { text: "Select One", value: null },
        "Disagree strongly",
        "Disagree moderately",
        "Disagree a little",
        "Neither agree nor disagree",
        "Agree a little",
        "Agree moderately",
        "Agree strongly",
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
        this.form.sleep01 != "" &&
        this.form.sleep02 != "" &&
        this.form.bigfive01 != "" &&
        this.form.bigfive02 != "" &&
        this.form.bigfive03 != "" &&
        this.form.bigfive04 != "" &&
        this.form.bigfive05 != ""
      );
    },
  },
  methods: {
    go_to_next() {
      this.$bvModal.hide("modal-center-survey" + this.page_num);
      this.$bvModal.show(
        "modal-center-survey" + (Number(this.page_num) + 1).toString()
      );
      this.$emit("Survey4Done", this.form);
    },
    go_to_back() {
      this.$bvModal.hide("modal-center-survey" + this.page_num);
      this.$bvModal.show(
        "modal-center-survey" + (Number(this.page_num) - 1).toString()
      );
      this.$emit("Survey4Done", this.form);
    },
  },
};
</script>


<style scoped>
</style>