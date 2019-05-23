<template>
  <div id="app">
    <TitleBar/>
    <Search/>
    <Playlist/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar';
import Search from './components/Search';
import Playlist from './components/Playlist';

export default {
  name: 'app',
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {},
  components: {
    TitleBar,
    Search,
    Playlist,
  },
};
</script>

<style>
</style>
