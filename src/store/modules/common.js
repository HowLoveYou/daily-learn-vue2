// import api from "@/api/index.js";

const state = {
  collapse: false, //是否展开
  globalLoading: false, //全局loading
};

const getters = {};

const mutations = {
  SET_COLLAPSE(state, data) {
    state.collapse = data;
  },
  CHANGE_COLLAPSE(state) {
    state.collapse = !state.collapse;
  },
  //设置全局loading
  SET_GLOBAL_LOADING(state, data) {
    state.globalLoading = data;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
