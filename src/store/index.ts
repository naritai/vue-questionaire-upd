import Vue from "vue";
import Vuex from "vuex";
import questionaire from "@/store/module/questionaire.ts";
import { createLogger } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    questionaire
  },
  plugins: [createLogger()]
});

export default store;
