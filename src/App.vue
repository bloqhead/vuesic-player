<template>
  <div id="app">
    <TitleBar/>
    <Search/>
    <Playlist/>
    <p class="instructions">
      <strong>Instructions:</strong> Type into the search bar to instantly start searching by title. To sort items alphabetically by their attributes, click the column titles (e.g. &quot;Title&quot;, &quot;Artist&quot;, and &quot;Album&quot;)
    </p>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar';
import Search from './components/Search';
import Playlist from './components/Playlist';

export default {
  name: 'app',
  components: {
    TitleBar,
    Search,
    Playlist,
  },
};
</script>

<style>
</style>
