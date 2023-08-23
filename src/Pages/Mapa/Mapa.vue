<script setup lang="ts">
import MapaContainer from "src/components/MapaContainer.vue";
import Navbar from "src/components/NavBar.vue";

import { useMenuStore } from "src/store/menuStores";

const { setMenus } = useMenuStore();
const menus = [
  { name: "filters", isOpen: false },
  { name: "search", isOpen: false },
];
setMenus(menus);
</script>

<template>
  <Navbar class="absolute flex flex-col w-[100dvw] max-h-[100dvh] md:w-96" />
  <MapaContainer class="absolute -z-10 rounded-lg" />
</template>
