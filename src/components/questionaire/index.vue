<template>
  <div class="questionaire">
    <QuestionaireCounter
      v-bind:total="questions.length"
      v-bind:answered="answered.length"
    />
    <BaseLoadingIndicator v-if="loading" />
    <BaseErrorIndicator v-else-if="error" />
    <QuestionaireReport v-else-if="questions.length === answered.length" />
    <QuestionContainer v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireCounter from "./QuestionaireCounter.vue";
import QuestionaireReport from "./QuestionaireReport.vue";
import QuestionContainer from "./QuestionContainer.vue";

import { mapState } from "vuex";

@Component({
  components: {
    QuestionaireCounter,
    QuestionaireReport,
    QuestionContainer
  },
  computed: {
    ...mapState({
      questions: state => state.questionaire.questions,
      answered: state => state.questionaire.answeredQuestions,
      loading: state => state.questionaire.loading,
      error: state => state.questionaire.error
    })
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
  background-color: #d74e09;
  border-radius: 2px;
}
</style>
