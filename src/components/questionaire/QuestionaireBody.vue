<template>
  <div class="questionaire-body">
    <BaseLoadingIndicator v-if="loading" />
    <div v-else-if="error">
      <BaseErrorIndicator />
      <QuestionaireButton text="Start again" v-bind:onClick="clearState" />
    </div>
    <QuestionaireReport v-else-if="currentIdx === questions.length" />
    <QuestionContainer v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionaireReport from "./QuestionaireReport.vue";
import QuestionContainer from "./QuestionContainer.vue";
import QuestionaireButton from "./QuestionaireButton.vue";
import { mapState } from "vuex";

@Component({
  components: {
    QuestionaireReport,
    QuestionContainer,
    QuestionaireButton
  },
  computed: {
    ...mapState({
      questions: state => state.questionaire.questions,
      loading: state => state.questionaire.loading,
      error: state => state.questionaire.error,
      currentIdx: state => state.questionaire.currentQuestionIdx
    })
  }
})
export default class QuestionaireBody extends Vue {
  clearState() {
    this.$store.dispatch("CLEAR_STATE")
      .then(() => this.$store.dispatch("FETCH_QUESTIONS"));
  }
}
</script>

<style lang="scss" scoped>
.questionaire-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 2px;
}
</style>
