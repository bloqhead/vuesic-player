import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    items: [],
    searchQuery: '',
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
  },
  mutations: {
    updateSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    fetchItems(state, items) {
      state.items = items.sort();
    },
  },
  actions: {
    fetchData({ commit }) {
      const api = '../api/data.json';
      return new Promise((resolve, reject) => {
        Vue.http
          .get(api)
          .then((res) => {
            commit('fetchItems', res.body);
            resolve();
          })
          .catch((err) => {
            console.log(err.statusText);
          });
      });
    },
    sortByAttribute({ commit }, criteria) {
      // this is kept generic so we don't have
      // to make new actions for each attribute filter
      console.log(`Filtered by: ${criteria}`);
    },
  },
});
