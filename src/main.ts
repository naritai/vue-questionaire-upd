import Vue from "vue";
import VueMq from "vue-mq";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/reset.scss";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    laptop: 1250,
    desktop: Infinity
  }
});

// register global components
const requireComponent = require.context(
  "./components",
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName: any) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  );

  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


