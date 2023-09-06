<script setup lang="ts">
import MapaContainer from "src/components/MapaContainer.vue";
import Navbar from "src/components/NavBar.vue";
import Info from "src/components/Info.vue";
import { setMenus } from "src/composables/useMenu";

const menus = [
  { name: "filters", isOpen: false },
  { name: "search", isOpen: false },
];
setMenus(menus);
</script>

<template>
  <v-layout>
    <Navbar
      class="absolute flex flex-col w-[100dvw] max-h-[100dvh] md:w-96 z-20"
    />
    <MapaContainer class="absolute -z-10 rounded-lg" />
    <Info />
  </v-layout>
</template>
<style>
/* Se deshabilita el scroll para dar soporte al bottom sheet */
html {
  overflow: hidden;
  overscroll-behavior: none;
}
</style>
