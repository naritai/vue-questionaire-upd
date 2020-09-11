
import MockApiService from "@/services/mock-api";
const mockApi = new MockApiService();

const defaultState = {
  questions: [],
  answeredQuestions: [],
  loading: false,
  error: false,
  currentQuestion: { text: "default question ?"},
  currentQuestionIdx: 0,
  jsonReport: ""
};

const state = {
  ...defaultState
};
const getters = {};
const mutations = {
  SET_QUESTIONS(state: any, newQuestions: []) {
    state.questions = newQuestions;
  },
  SET_LOADING(state: any, payload: boolean) {
    state.loading = payload;
  },
  SET_ERROR(state: any, error: any) {
    state.error = error;
  },
  SET_CURRENT_QUESTION(state: any, question: any) {
    state.currentQuestion = question;
  },
  INC_IDX(state: any, payload: number) {
    state.currentQuestionIdx = payload;
  },
  DEC_IDX(state: any, payload: number) {
    state.currentQuestionIdx = payload;
  },
  ANSWER_QUESTION(state: any, question: any) {
    // TODO: handle back and rewrite problem
    state.answeredQuestions = [...state.answeredQuestions, question];
  },
  CLEAR_ANSWERED_QUESTIONS(state: any) {
    state.answeredQuestions = [];
  },
  SET_JSON_REPORT(state: any, report: string) {
    state.jsonReport = report;
  },
  CLEAR_STATE(state: any) {
    state.questions = [];
    state.answeredQuestions = [];
    state.loading = false;
    state.error = false;
    state.currentQuestion = { text: "default question ?"};
    state.currentQuestionIdx = 0;
    state.jsonReport = "";
  }
};
const actions = {
  FETCH_QUESTIONS: async ({ commit, state }: any) => {
    commit("SET_LOADING", true);
    commit("SET_QUESTIONS", []);
    try {
      const newQuestions: any = await mockApi.getQuestions();
      commit("SET_QUESTIONS", newQuestions);
      commit("SET_CURRENT_QUESTION", newQuestions[state.currentQuestionIdx])
      commit("SET_LOADING", false);
    } catch(error) {
      commit("SET_ERROR", error);
      commit("SET_LOADING", false);
      commit("SET_QUESTIONS", []);
    } 
  },
  SET_QUESTIONS: async ({ commit }: any, questions: []) => {
    commit("SET_LOADING", true);
    commit('SET_QUESTIONS', questions);
    commit("SET_LOADING", false);
  },
  SET_CURRENT_QUESTION: async ({ commit }: any, question: any) => {
    commit("SET_CURRENT_QUESTION", question);
  },
  ANSWER_QUESTION: async ({ commit }: any, question: any) => {
    commit("ANSWER_QUESTION", question);
  },
  NEXT_QUESTION: async({ commit, state }: any) => {
    const nextIdx = state.currentQuestionIdx += 1;
    const nextQuestion = state.questions[nextIdx];
    if (nextQuestion) {
      commit("SET_CURRENT_QUESTION", nextQuestion);
      commit("INC_IDX", nextIdx);
    }
  },
  PREV_QUESTION: async({ commit, state }: any) => {
    const prevIdx = state.currentQuestionIdx -= 1;
    const prevQuestion = state.questions[prevIdx];
    if (prevIdx >= 0 && prevQuestion) {
      commit("SET_CURRENT_QUESTION", prevQuestion);
      commit("DEC_IDX", prevIdx);
    }
  },
  CLEAR_ANSWERED_QUESTIONS: async({ commit }: any) => {
    commit("CLEAR_ANSWERED_QUESTIONS");
  },
  SET_JSON_REPORT: async({ commit }: any, report: string) => {
    commit("SET_JSON_REPORT", report);
  },
  CLEAR_STATE: async({ commit }: any) => {
    commit("CLEAR_STATE");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
