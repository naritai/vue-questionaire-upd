<template>
  <div class="report">
    <h3>{{ `${jsonReport ? "JSON" : "Your answers" }` }}</h3>
    <div class="not-answered" v-if="report.length === 0 && !jsonReport">
      You not answered any question
    </div>
    <div class="json" v-else-if="jsonReport">
      {{ jsonReport }}
      <QuestionaireButton
        class="report-btn"
        text="Start again"
        v-bind:onClick="clearState"
      />
    </div>
    <div v-else>
      <ul>
        <li v-for="(answer, idx) in report" v-bind:key="idx">
          {{ answer.text }} ----> {{ answer.positive ? "YES" : "NO" }}
        </li>
      </ul>
      <QuestionaireButton
        class="report-btn"
        v-bind:onClick="generateJSONReport"
        v-bind:disabled="report.length === 0"
        text="Generate JSON"
      />
    </div>
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
      report: state => state.questionaire.answeredQuestions,
      jsonReport: state => state.questionaire.jsonReport
    })
  }
})
export default class QuestionaireReport extends Vue {
  generateJSONReport() {
    const jsonReport = JSON.stringify(this.report);
    this.$store.dispatch("SET_JSON_REPORT", jsonReport)
    .then(() => {
      this.$store.dispatch("CLEAR_ANSWERED_QUESTIONS")
    });
  }

  clearState() {
    this.$store.dispatch("CLEAR_STATE")
      .then(() => this.$store.dispatch("FETCH_QUESTIONS"));
  }
}
</script>

<style lang="scss" scoped>
.report {
  width: 650px;
  padding: 15px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

  & .json {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.3em;
  }

  & .not-answered {
    font-size: 1.5em;
  }

  & .report-btn {
    margin-top: 100px;
  }

  & h3 {
    font-size: 3.3em;
    margin: 0;
  }
  & li {
    font-size: 1.5em;
  }
}
</style>
