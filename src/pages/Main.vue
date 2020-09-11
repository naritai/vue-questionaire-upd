<template>
  <div class="home">
    <Question msg="test" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Question from "@/components/questionaire/Question.vue"; // @ is an alias to /src

@Component({
  components: {
    Question
  }
})
export default class Home extends Vue {}
</script>
