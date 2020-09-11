<template>
  <nav class="main-navigation">
    <router-link to="/">Questionaire</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style lang="scss">
@import "@/scss/_variables";

.main-navigation {
  padding: 10px 0;
  margin-right: auto;

  a {
    font-weight: bold;
    color: $link-color;
    font-size: 2em;
    margin-right: 0.5em;
    text-decoration: none;

    &.router-link-exact-active {
      color: $link-color-active;
    }
  }
}
</style>
