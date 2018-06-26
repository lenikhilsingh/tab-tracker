// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import store from "@/store/store";
import { sync } from "vuex-router-sync";
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "@/components/globals/Panel";
// vuex router sync used to sunc routes whenever there's a change
// this is why you see route_changed event being fired in the vue section of chrome debugger tools

Vue.config.productionTip = false;

Vue.use(Vuetify);
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed);
Vue.component("panel", Panel);
//   to store the sync to the router
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
