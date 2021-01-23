import Vue from "vue";
import InfoBox from "../components/boxes/InfoBox.vue";

const components = { InfoBox };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
