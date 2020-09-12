<template>
  <div class="question-container">
    <SlideFadeTransition>
      <QuestionaireQuestion
        v-if="show"
        v-bind:question="currentQuestion.text" 
      />
    </SlideFadeTransition>
    <div>
      <QuestionaireButton
        v-bind:disabled="!show"
        v-bind:onClick="answerYes" text="YES"
      />
      <QuestionaireButton
        v-bind:disabled="!show"
        v-bind:onClick="answerNo" text="NO"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireQuestion from "./QuestionaireQuestion.vue";
import QuestionaireButton from "./QuestionaireButton.vue";
import SlideFadeTransition from "@/components/animations/SlideFadeTransition.vue";

import { mapState } from "vuex";

@Component({
  components: {
    QuestionaireQuestion,
    QuestionaireButton,
    SlideFadeTransition
  },
  computed: {
    ...mapState({
      currentQuestion: state => state.questionaire.currentQuestion,
      questionIdx: state => state.questionaire.currentQuestionIdx,
      show: state => state.questionaire.isShouldShowQuestion
    })
  }
})
export default class QuestionContainer extends Vue {
  answerYes(): void {
    this.$store.dispatch("ANSWER_QUESTION", {
      ...this.currentQuestion,
      positive: true
    })
    .then(() => this.$store.dispatch("HIDE_QUESTION_FOR_MS", 700))
    .then(() => this.$store.dispatch("NEXT_QUESTION"));
  }

  answerNo(): void {
    this.$store.dispatch("ANSWER_QUESTION", {
      ...this.currentQuestion,
      positive: false
    })
    .then(() => this.$store.dispatch("HIDE_QUESTION_FOR_MS", 700))
    .then(() => this.$store.dispatch("NEXT_QUESTION"));
  }
}
</script>

<style lang="scss">
.question-container {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
