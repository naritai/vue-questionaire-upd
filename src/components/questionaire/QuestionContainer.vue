<template>
  <div class="question-container">
    <QuestionaireQuestion v-bind:question="currentQuestion.text" />
    <div>
      <QuestionaireButton v-bind:onClick="answerYes" text="YES" />
      <QuestionaireButton v-bind:onClick="answerNo" text="NO" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireQuestion from "./QuestionaireQuestion.vue";
import QuestionaireButton from "./QuestionaireButton.vue";
import { mapState } from "vuex";

@Component({
  components: {
    QuestionaireQuestion,
    QuestionaireButton
  },
  computed: {
    ...mapState({
      currentQuestion: state => state.questionaire.currentQuestion,
      questionIdx: state => state.questionaire.currentQuestionIdx
    })
  }
})
export default class QuestionContainer extends Vue {
  answerYes(): void {
    this.$store.dispatch("ANSWER_QUESTION", {
      ...this.currentQuestion,
      positive: true
    }).then(() => this.$store.dispatch("NEXT_QUESTION"));
  }

  answerNo(): void {
    this.$store.dispatch("ANSWER_QUESTION", {
      ...this.currentQuestion,
      positive: false
    }).then(() => this.$store.dispatch("NEXT_QUESTION"));
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
