<template>
  <div class="home">
    <img src="../assets/logo.png">
    <QuoteList :src="soundListUrl" />
  </div>
</template>

<script>
import QuoteList from "@/components/QuoteList.vue";

export default {
  name: "home",
  components: {
    QuoteList
  },
  data: function() {
    return {
      soundListUrl:
        "https://raw.githubusercontent.com/2ec0b4/kaamelott-soundboard/master/sounds/sounds.json"
    };
  }
};
</script>
