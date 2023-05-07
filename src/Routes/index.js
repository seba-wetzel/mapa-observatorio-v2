import { createRouter, createWebHistory } from "vue-router";
import { routes } from "src/Routes/routes.js";
console.log({ routes });
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
