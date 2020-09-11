<template>
  <div class="question">
    {{ text }}
    MESSAGE IS: {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Question extends Vue {
  text = "Question Component";
  @Prop() msg: string;
}
</script>
