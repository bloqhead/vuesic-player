<template>
  <div class="playlist">
    <div class="playlist__items">
      <header class="playlist__header">
        <ul>
          <li>
            <a href="#" data-attr="title">Title</a>
          </li>
          <li>
            <a href="#" data-attr="artist">Artist</a>
          </li>
          <li>
            <a href="#" data-attr="album">Album</a>
          </li>
        </ul>
      </header>

      <div class="playlist__content">
        <ul>
          <li :key="index" v-for="(item, index) in this.$store.state.items">
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
export default {
  created() {
    this.$store.dispatch('fetchData');
  },
};
</script>

<style>
</style>
