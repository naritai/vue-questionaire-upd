<template>
  <div class="question-mover">
    <button
      @click="prevQuestion"
      v-bind:disabled="currentIdx === 0 || jsonReport.length > 0"
    >
      <i class="material-icons">arrow_left</i>
    </button>

    <button
      @click="nextQuestion"
      v-bind:disabled="currentIdx >= questions.length"
    >
      <i class="material-icons">arrow_right</i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireButton from "./QuestionaireButton.vue";
import { mapState } from "vuex";

@Component({
  components: {
    QuestionaireButton
  },
  computed: {
    ...mapState({
      currentIdx: state => state.questionaire.currentQuestionIdx,
      questions: state => state.questionaire.questions,
      jsonReport: state => state.questionaire.jsonReport
    })
  }
})
export default class QuestionMover extends Vue {
  nextQuestion() {
    this.$store.dispatch("NEXT_QUESTION");
  }

  prevQuestion() {
    this.$store.dispatch("PREV_QUESTION");
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.material-icons {
  font-size: 5em;
}

button {
  width: 70px;
  height: 70px;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin: 0;
  margin-right: 20px;

  cursor: pointer;
  border-radius: 2px;
}

button:hover {
  color: $main-background-color;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
