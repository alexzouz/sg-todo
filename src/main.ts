import { createPinia } from "pinia";
import { createApp } from "vue";
import VueSidePanel from "vue3-side-panel";
import "vue3-side-panel/dist/vue3-side-panel.css";
import router from "./router";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(VueSidePanel);

app.use(router);
app.mount("#app");
