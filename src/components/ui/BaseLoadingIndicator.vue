<template>
  <h3 class="loading-indicator">Loading...</h3>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseLoadingIndicator extends Vue {}
</script>

<style lang="scss">
@import "@/scss/_variables";

.loading-indicator {
  font-size: 3em;
  color: $main-text-color;
}
</style>
