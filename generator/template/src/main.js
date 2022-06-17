import Vue from "vue";
import { Button } from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axiosPlugin from "./plugins/axios";

import "./assets/styles/base.css";

Vue.config.productionTip = false;

Vue.component(Button.name, Button);

Vue.use(axiosPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
