import { createApp } from "vue";
import "src/styles/style.css";
import router from "src/Routes/index.js";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import {
  VLayout,
  VContainer,
  VSelect,
  VChip,
  VListItem,
  VCheckbox,
  VBtn,
  VIcon,
} from "vuetify/components";
import { ClickOutside } from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// import { VBottomSheet } from "vuetify/labs/VBottomSheet";

import App from "src/App.vue";

const app = createApp(App);
const pinia = createPinia();

const vuetify = createVuetify({
  components: {
    VLayout,
    VContainer,
    VSelect,
    VChip,
    VListItem,
    VCheckbox,
    VBtn,
    VIcon,
  },
  directives: {
    ClickOutside,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(router);
app.use(pinia);
app.use(vuetify);

app.mount("#app");
