import Vue from "vue";
import Vuex from "vuex";
import { ProductService } from "../service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    loadingState: false,
    filteredData: [],
  },
  mutations: {
    setTitle(state, payload) {
      // set title in vuex
      state.title = payload;
    },
    setFilteredData(state, payload) {
      state.filteredData = payload;
    },
    setLoadingState(state, payload) {
      state.loadingState = payload;
    },
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
    getLoadingState(state) {
      return state.loadingState;
    },
  },
  actions: {
    async loadProducts({ commit, state }) {
      commit("setLoadingState", true);
      const _title = state.title;

      try {
        const data = await ProductService.getProductList(_title);
        commit("setFilteredData", data);
      } catch (error) {
        console.log("error while fetching data");
      } finally {
        commit("setLoadingState", false);
      }
    },
  },
  modules: {},
});
