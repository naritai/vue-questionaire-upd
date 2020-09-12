<template>
  <div class="question-counter">
    Questions {{ `${answered}/${total}` }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class QuestionaireCounter extends Vue {
  @Prop({ default: 0 }) readonly total: number;
  @Prop({ default: 0 }) readonly answered: number;
}
</script>

<style lang="scss">
.question-counter {
  margin-left: auto;
  font-size: 1.5em;
  padding: 5px;
}
</style>
