<template>
  <div class="report">
    <h3>Your answers</h3>
    <ul>
      <li v-for="(answer, idx) in report" v-bind:key="idx">
        {{ answer.text }} --------> {{ answer.positive ? "YES" : "NO" }}
      </li>
    </ul>
    <QuestionaireButton
      v-bind:onClick="generateJSONReport"
      text="Generate JSON"
    />
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
      report: state => state.questionaire.answeredQuestions
    })
  }
})
export default class QuestionaireReport extends Vue {
  generateJSONReport() {
    const jsonReport = JSON.stringify(this.report);
    console.log(jsonReport);
  }
}
</script>

<style lang="scss" scoped>
.report {
  width: 650px;
  padding: 15px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h3 {
    font-size: 3.3em;
  }
  & li {
    font-size: 1.5em;
  }
}
</style>
