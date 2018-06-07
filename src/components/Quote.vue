<template>
  <div v-if="quote">
    <button v-on:click="play">{{ quote.title }}</button>
  </div>
</template>

<script>
/* global bus */
export default {
  name: "Quote",
  props: ["quote"],
  methods: {
    play: function() {
      bus.$emit("play", this.quote.file);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
