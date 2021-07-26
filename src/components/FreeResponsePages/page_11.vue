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
        :src="require('../../assets/Free Response/Free Response 11.png')"
        style="width: 60%; height: auto; transform: translate(-50%, -10%); margin-left: 50%;"
      />
      <b-form-textarea
        style="transform: translate(0%, 20%);"
        id="textarea"
        v-model="text"
        placeholder="In 1-3 sentences, please explain which option they would choose and why in terms of beliefs, desires, emotions, and other mental states.
They would probably choose option ___ because..."
        rows="5"
        max-rows="5"
      ></b-form-textarea>
    </b-container>
    <b-button variant="outline-primary" @click="this.go_to_back" size="lg">Back</b-button>
    <b-button
      style="float: right;"
      @click="this.go_to_next"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "FR11",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "11",
      text: "",
    };
  },
  computed: {
    page_id() {
      return "modal-center-FR" + this.page_num;
    },
    center_title() {
      return "Free Response page " + this.page_num + " of 13";
    },
  },
  methods: {
    go_to_back() {
      this.$bvModal.hide("modal-center-FR" + this.page_num);
      this.$bvModal.show(
        "modal-center-FR" + (Number(this.page_num) - 1).toString()
      );
    },
    go_to_next() {
      this.$bvModal.hide("modal-center-FR" + this.page_num);
      this.$bvModal.show(
        "modal-center-FR" + (Number(this.page_num) + 1).toString()
      );
      this.$emit("FR11Done", this.text);
    },
  },
};
</script>


<style scoped>
</style>