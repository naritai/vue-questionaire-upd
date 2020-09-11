<template>
  <div class="questionaire">
    <QuestionaireHeader />
    <QuestionaireBody />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireHeader from "./QuestionaireHeader.vue";
import QuestionaireBody from "./QuestionaireBody.vue";

@Component({
  components: {
    QuestionaireHeader,
    QuestionaireBody
  }
})
export default class Questionaire extends Vue {
  mounted() {
    this.$store.dispatch("FETCH_QUESTIONS");
  }
}
</script>

<style lang="scss">
.questionaire {
  padding: 20px;
  min-height: 580px;
  background-color: #d74e09;
  border-radius: 2px;
}
</style>
