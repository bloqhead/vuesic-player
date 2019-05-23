<template>
  <div class="search">
    <form class="search__form" @submit.prevent>
      <input
        type="search"
        class="search__field"
        placeholder="Search Your Library"
        @keyup="submitQuery"
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,
    };
  },
  computed: {},
  methods: {
    submitQuery(event) {
      // update the search query in the state so we can access it elsewhere
      this.$store.commit('updateSearchQuery', event.target.value);
    },
  },
};
</script>

<style>
</style>
