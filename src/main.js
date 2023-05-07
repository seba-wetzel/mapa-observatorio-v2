import { createApp } from "vue";
import "./style.css";

import router from "src/Routes/index.js";
import App from "src/App.vue";
const app = createApp(App);
app.use(router);
app.mount("#app");
