<template>
  <div id="app">
    <TitleBar/>
    <Controls/>
    <Search/>
    <Playlist/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar';
import Controls from './components/Controls';
import Search from './components/Search';
import Playlist from './components/Playlist';

export default {
  name: 'app',
  components: {
    TitleBar,
    Controls,
    Search,
    Playlist,
  },
};
</script>

<style>
</style>
