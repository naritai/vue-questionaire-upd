<template>
  <button v-bind:disabled="disabled" @click="onClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop() readonly text: string;
  @Prop() readonly disabled: boolean;
  @Prop() onClick: (event) => void;
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

button {
  width: $btn-width;
  height: $btn-height;
  margin: 20px 20px 20px 0;
  border: 2px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  font-size: 2em;
  background-color: $main-background-color;
  color: $main-text-color;
}

button:hover {
  background-color: transparent;
  border: 2px solid $main-background-color;
}

button:disabled {
  opacity: 0.7;
  background-color: $main-background-color;
  cursor: default;
}
</style>
