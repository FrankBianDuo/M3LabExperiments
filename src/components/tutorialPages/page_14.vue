<template>
  <b-modal
    :id="this.page_id"
    size="xl"
    centered
    :title="this.center_title"
    v-model="show"
    :hide-footer="true"
    :no-close-on-backdrop="false"
    :no-close-on-esc="true"
    :hide-header-close="true"
  >
    <b-container class="align-bottom" :style="this.windowsize">
      <div style="text-align: center;">
        <img
          :src="require('../../assets/tutorials/Page14.png')"
          v-bind:style="{ maxWidth: '70%', height: 'auto', marginTop: '10%', transform: 'translate(-50%, 0)', position: 'absolute', opacity: this.opacity_1, transition: 'opacity 0.5s' }"
        />
      </div>
    </b-container>
    <b-button
      @click="$bvModal.hide(`modal-center-instruction14`)"
      v-b-modal.modal-center-instruction13
      variant="outline-primary"
      size="lg"
    >Back</b-button>
    <b-button
      @click="$bvModal.hide(`modal-center-instruction14`)"
      v-b-modal.modal-center-instruction15
      style="float: right;"
      variant="outline-primary"
      size="lg"
    >Next</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "Tutorial14",
  props: ["windowsize"],
  components: {},
  data() {
    return {
      page_num: "14",
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
  methods: {},
};
</script>


<style scoped>
</style>