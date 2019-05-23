<template>
  <div class="search">
    <form class="search__form" @submit.prevent>
      <input
        type="search"
        class="search__field"
        placeholder="Search Your Library"
        @keyup="prepareQuery"
      >
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
  methods: {
    prepareQuery(event) {
      this.$data.searchQuery = event.target.value || null;
      console.log(this.$data.searchQuery);
    },
  },
};
</script>

<style>
</style>
