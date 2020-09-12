<template>
  <div class="main">
    <Questionaire />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Questionaire from "@/components/questionaire"; // @ is an alias to /src

@Component({
  components: {
    Questionaire
  }
})
export default class Main extends Vue {}
</script>

<style lang="scss">
.main {
  width: 100%;
}
</style>
