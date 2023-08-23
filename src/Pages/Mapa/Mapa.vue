<script setup lang="ts">
import MapaContainer from "src/components/MapaContainer.vue";
import SearchContainer from "src/components/SearchContainer.vue";
import { useSedes } from "src/composables/useSedes";
import { useMenuStore } from "src/store/menuStores";

const { markers } = useSedes();
const { setMenus } = useMenuStore();
const menus = [
  { name: "filters", isOpen: false },
  { name: "search", isOpen: false },
];
setMenus(menus);
</script>

<template>
  <SearchContainer
    class="absolute flex flex-col w-[100dvw] max-h-[100dvh] md:w-96"
  />
  <MapaContainer :markers="markers" class="absolute -z-10 rounded-lg" />
</template>
