<template>
  <div class="playlist">
    <div class="playlist__items">
      <header class="playlist__header">
        <ul>
          <li :key="index" v-for="(item, index) in sortTriggers">
            <a
              href="#"
              :data-attr="item.slug"
              :class="{ 'is-active': getActiveSortTrigger === index }"
              @click="updateActiveSortTrigger(index)"
            >{{item.label}}</a>
          </li>
        </ul>
      </header>
      <div class="playlist__content">
        <ul>
          <li :key="index" v-for="(item, index) in filterListBySearchQuery">
            <ul class="playlist__item-details">
              <li>{{item.title}}</li>
              <li>{{item.artist}}</li>
              <li>{{item.album}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      sortTriggers: [
        { label: 'Title', slug: 'title' },
        { label: 'Artist', slug: 'artist' },
        { label: 'Album', slug: 'album' },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapGetters([
      'filterListBySearchQuery',
      'sortListByAttribute',
      'getActiveSortTrigger',
    ]),
  },
  methods: {
    updateActiveSortTrigger(index) {
      const el = event.target;
      const criteria = el.dataset.attr;
      this.$store.commit('updateSortCriteria', criteria);
      this.$store.commit('updateSortTrigger', index);
      this.$store.getters.sortListByAttribute(criteria);
      event.preventDefault();
    },
  },
};
</script>

<style>
</style>
