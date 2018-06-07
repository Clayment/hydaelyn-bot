<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <MediaPlayer :soundFileName="soundFileName"/>    
    <router-view/>
  </div>
</template>

<script>
/* global bus */

import MediaPlayer from "@/components/MediaPlayer.vue";

export default {
  name: "App",
  data: function() {
    return {
      soundFileName: false
    };
  },
  components: {
    MediaPlayer
  },
  mounted() {
    bus.$on("play", soundFileName => (this.soundFileName = soundFileName));
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
