<template>
  <div class="search">
    <form class="search__form" @submit.prevent>
      <input
        type="search"
        class="search__field"
        placeholder="Search by title..."
        @keyup="submitQuery"
      >
    </form>
  </div>
</template>

<script>
export default {
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
