import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
// library.add(far);
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
