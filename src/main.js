import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

var bus = new Vue();
window.bus = bus;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
