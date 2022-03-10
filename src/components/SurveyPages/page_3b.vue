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
      <img
        :src="require('../../assets/Free Response/Rank_03.png')"
        style="width: 54%; height: auto; transform: translate(-50%, 0%); margin-left: 50%;"
      />
      <b-form>

        <b-form-group id="input-group-1" label="1st:" label-for="input-1" style="float: left; width: 20%; height: 16%; transform: translate(50%, 8%);">
          <b-form-select id="input-1" v-model="form.optn_3_1" :options="ABCD" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="2nd:" label-for="input-2" style="float: left; width: 20%; height: 16%; transform: translate(50%, 8%);">
          <b-form-select id="input-2" v-model="form.optn_3_2" :options="ABCD" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="3rd:" label-for="input-3" style="float: left; width: 20%; height: 16%; transform: translate(50%, 8%);">
          <b-form-select id="input-3" v-model="form.optn_3_3" :options="ABCD" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="4th:" label-for="input-4" style="float: left; width: 20%; height: 16%; transform: translate(50%, 8%);">
          <b-form-select id="input-4" v-model="form.optn_3_4" :options="ABCD" required></b-form-select>
        </b-form-group>

      </b-form>
    </b-container>
    <b-button :disabled="block" variant="outline-primary" size="lg">Back</b-button>
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
  name: "Survey3",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "3",
      form: {optn_3_1: "", optn_3_2: "", optn_3_3: "", optn_3_4: ""},
      ABCD: [{ text: "", value: null }, "A", "B", "C", "D"],
    };
  },
  computed: {
    page_id() {
      return "modal-center-survey" + this.page_num;
    },
    center_title() {
      return "Survey page " + this.page_num + " of 4";
    },
    block() {
      return !(
        this.form.optn_3_1 != "" &&
        this.form.optn_3_2 != "" &&
        this.form.optn_3_3 != "" &&
        this.form.optn_3_4 != "" 
      );
    },
  },
  methods: {
    go_to_next() {
      if (this.form.optn_3_1 != this.form.optn_3_2 && 
        this.form.optn_3_1 != this.form.optn_3_3 &&
        this.form.optn_3_1 != this.form.optn_3_4 &&
        this.form.optn_3_2 != this.form.optn_3_3 &&
        this.form.optn_3_2 != this.form.optn_3_4 &&
        this.form.optn_3_3 != this.form.optn_3_4) {
        this.$bvModal.hide("modal-center-survey" + this.page_num);
        this.$bvModal.show(
            "modal-center-survey" + (Number(this.page_num) + 1).toString()
        );
        this.$emit("Survey3Done", this.form);
      }
    },
  },
};
</script>

<style scoped>
</style>