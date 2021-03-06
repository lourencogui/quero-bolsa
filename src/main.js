import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfoCircle,
  faPlusCircle,
  faTimes,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faComments,
  faEnvelope,
  faHeart
} from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWhatsapp);
library.add(faInfoCircle);
library.add(faUserCircle);
library.add(faPlusCircle);
library.add(faComments);
library.add(faEnvelope);
library.add(faHeart);
library.add(faTimes);
library.add(faChevronDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

import "vue-slider-component/theme/antd.css";

new Vue({
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
