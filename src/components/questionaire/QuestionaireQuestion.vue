<template>
  <div class="question" :class="$mq">
    <h3>{{ question }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class QuestionaireQuestion extends Vue {
  @Prop() readonly question: string;
}
</script>

<style lang="scss" scoped>
.question {
  width: 650px;
  padding: 15px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  overflow-wrap: break-word;
  text-align: center;
}

h3 {
  font-size: 3.3em;
}

.mobile {
  width: 100%;
  & h3 {
    font-size: 2.6em;
  }
}
</style>
