import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    // TODO move this to an API call instead
    // have the data static for now because it was easier
    // to do the filtering on
    items: [
      {
        title: 'Up the Cuts',
        artist: 'Against Me!',
        album: 'New Wave',
        file: '',
        cover: '',
      },
      {
        title: 'Bunny Room',
        artist: 'Soft Kill',
        album: 'Savior',
        file: '',
        cover: '',
      },
      {
        title: 'Memories of Green',
        artist: 'Vangelis',
        album: 'Blade Runner',
        file: '',
        cover: '',
      },
      {
        title: 'Victory Lap',
        artist: 'Propagandhi',
        album: 'Victory Lap',
        file: '',
        cover: '',
      },
      {
        title: 'Shook Ones, Pt. II',
        artist: 'Mobb Deep',
        album: 'The Infamous',
        file: '',
        cover: '',
      },
      {
        title: 'All Star',
        artist: 'Smash Mouth',
        album: 'Astro Lounge',
        file: '',
        cover: '',
      },
      {
        title: 'Quiet Light',
        artist: 'The National',
        album: 'I Am Easy to Find',
        file: '',
        cover: '',
      },
      {
        title: 'Back to You',
        artist: 'Timecop1983',
        album: 'Night Drive',
        file: '',
        cover: '',
      },
      {
        title: "'Merican",
        artist: 'Descendents',
        album: 'Cool to Be You',
        file: '',
        cover: '',
      },
      {
        title: 'Wolf Totem',
        artist: 'The HU',
        album: 'Wolf Totem',
        file: '',
        cover: '',
      },
    ],
    searchQuery: '',
    activeSortTrigger: '',
    activeSortValue: '',
    playState: 'paused',
    currentTrack: '',
  },
  getters: {
    getSortTriggers: (state) => state.sortTriggers,
    getActiveSortTrigger: (state) => state.activeSortTrigger,
    searchQuery: (state) => state.searchQuery,
    filterListBySearchQuery: (state) => {
      const query = state.searchQuery.trim().toLowerCase();
      return state.items.filter(
        (item) => item.title.toLowerCase().indexOf(query) > -1
      );
    },
    sortListByAttribute: (state) => (criteria) => {
      const query = criteria.toLowerCase();
      state.items.sort((a, b) =>
        a[query] < b[query] ? -1 : a[query] > b[query] ? 1 : 0
      );
    },
  },
  actions: {},
  mutations: {
    updateSearchQuery: (state, payload) => (state.searchQuery = payload),
    updateSortCriteria: (state, payload) => (state.activeSortValue = payload),
    updateSortTrigger: (state, payload) => (state.activeSortTrigger = payload),
  },
});
