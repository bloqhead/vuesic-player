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
    searchQuery: state => state.searchQuery,
  },
  mutations: {
    updateSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    fetchItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    fetchData({ commit }) {
      Vue.http
        .get('../api/data.json')
        .then(res => res.json())
        .then(data => commit('fetchItems', data))
        .catch(err => console.log(err));
    },
  },
});
