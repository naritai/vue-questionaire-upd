<template>
  <div class="error-indicator">
    Error has happened. We've already send our coders to fix it. Try later.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseErrorIndicator extends Vue {}
</script>

<style lang="scss">
@import "@/scss/_variables";

.error-indicator {
  width: 400px;
  overflow-wrap: break-word;
  font-size: 2em;
  color: $error-message-color;
}
</style>
