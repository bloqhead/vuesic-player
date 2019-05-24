<template>
  <div class="search">
    <form class="search__form" @submit.prevent>
      <input
        v-model="searchQuery"
        type="search"
        class="search__field"
        placeholder="Search Your Library"
        @keyup="submitQuery"
      >
      <p v-if="this.$store.state.searchQuery">Filtered by: {{this.$store.state.searchQuery}}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {},
  methods: {
    submitQuery(event) {
      const query = event.target.value;
      // update the search query in the state so we can access it elsewhere
      this.$store.commit('updateSearchQuery', query);
    },
  },
};
</script>

<style>
</style>
