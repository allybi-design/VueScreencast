import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

const http = axios.create({
  baseURL: "http:localhost:3000",
  withCredential: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: []
  },
  mutations: {
    INIT_VIDEOS(state, payload) {
      state.videos = payload;
    }
  },
  actions: {
    async initData({ commit }) {
      await http.get("/videos").then(response => {
        commit("INIT_VIDEOS", response.data);
      });
    }
  },
  modules: {}
});
