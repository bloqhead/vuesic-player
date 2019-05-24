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
      },
      {
        title: 'Bunny Room',
        artist: 'Soft Kill',
        album: 'Savior',
      },
      {
        title: 'Memories of Green',
        artist: 'Vangelis',
        album: 'Blade Runner',
      },
      {
        title: 'Victory Lap',
        artist: 'Propagandhi',
        album: 'Victory Lap',
      },
      {
        title: 'Shook Ones, Pt. II',
        artist: 'Mobb Deep',
        album: 'The Infamous',
      },
      {
        title: 'All Star',
        artist: 'Smash Mouth',
        album: 'Astro Lounge',
      },
      {
        title: 'Quiet Light',
        artist: 'The National',
        album: 'I Am Easy to Find',
      },
      {
        title: 'Back to You',
        artist: 'Timecop1983',
        album: 'Night Drive',
      },
      {
        title: "'Merican",
        artist: 'Dscendents',
        album: 'Cool to Be You',
      },
      {
        title: 'Wolf Totem',
        artist: 'The HU',
        album: 'Wolf Totem',
      },
    ],
    searchQuery: '',
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
    filterListBySearchQuery: (state) => {
      const query = state.searchQuery.trim().toLowerCase();
      const items = state.items;
      if (!query.length) return items;
      return items.filter((item) => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          return items;
        }
      });
    },
  },
  mutations: {
    updateSearchQuery: (state, payload) => (state.searchQuery = payload),
    fetchItems: (state, items) => (state.items = items),
    sortItemsByAttribute: (state, items, criteria) => {},
  },
  actions: {
    sortByAttribute: ({ commit }, criteria) => {
      console.log(`Filtered by: ${criteria}`);
    },
  },
});
