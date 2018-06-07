<template>
  <div>
    <audio :src="soundFile" controls autoplay></audio>
  </div>
</template>

<script>
import Discord from Discordjs;

export default {
  name: "MediaPlayer",
  props: ["soundFileName"],
  data: function() {
    return {
      baseUrl:
        "https://raw.githubusercontent.com/2ec0b4/kaamelott-soundboard/master/sounds/"
    };
  },
  computed: {
    soundFile() {
      return this.soundFileName
        ? this.baseUrl + this.soundFileName
        : this.soundFileName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
