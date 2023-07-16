import { createApp } from "vue";
import "./style.css";
import router from "src/Routes/index.js";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "src/App.vue";

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
});

app.use(router);
app.use(pinia);
app.use(vuetify);

app.mount("#app");
