<template>
  <div class="questionaire-header">
    <QuestionMover />
    <QuestionaireCounter
      v-bind:total="questions.length"
      v-bind:answered="currentIdx"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionMover from "./QuestionMover.vue";
import QuestionaireCounter from "./QuestionaireCounter.vue";
import { mapState } from "vuex";

@Component({
  components: {
    QuestionMover,
    QuestionaireCounter
  },
  computed: {
    ...mapState({
      questions: state => state.questionaire.questions,
      answered: state => state.questionaire.answeredQuestions,
      currentIdx: state => state.questionaire.currentQuestionIdx
    })
  }
})
export default class QuestionaireHeader extends Vue {}
</script>

<style lang="scss" scoped>
.questionaire-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
