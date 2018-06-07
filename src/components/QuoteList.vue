<template>
  <div>
    <h2>test</h2>
    <ul>
      <li v-for="(quote, key) in quoteList" :key="key">
        <Quote :quote="quote" />
      </li>
    </ul>
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";

export default {
  name: "QuoteList",
  props: ["src"],
  components: {
    Quote
  },
  data: function() {
    return {
      quoteList: []
    };
  },
  methods: {
    fetchQuoteList: function() {
      fetch(this.src)
        .then(response => response.json())
        .then(json => {
          this.quoteList = json;
        });
    }
  },
  created: function() {
    this.fetchQuoteList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  li {
    list-style: none;
  }
}
</style>
