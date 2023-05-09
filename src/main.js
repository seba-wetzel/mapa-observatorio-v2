import { createApp } from "vue";
import "./style.css";
import router from "src/Routes/index.js";
import { createPinia } from "pinia";
import App from "src/App.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount("#app");
