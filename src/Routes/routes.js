const Mapa = () => import("src/Pages/Mapa/Mapa.vue");
const Admin = () => import("src/Pages/Admin/Admin.vue");
export const routes = [
  { path: "/", component: Mapa },
  { path: "/admin", component: Admin },
];
