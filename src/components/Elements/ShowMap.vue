<script setup lang="ts">
import { MapIcon } from "@heroicons/vue/24/outline";
import { useMenu } from "src/composables/useMenu";
const { close: showMap } = useMenu("options");
const { close: closeSearch } = useMenu("search");

const close = () => {
  closeSearch();
  showMap();
};
</script>
<template>
  <button
    @click="close"
    class="flex flex-row flex-grow justify-center font-bold text-blue-500 m-2"
  >
    <MapIcon class="inline w-6 h-6" /> Mostrar mapa
  </button>
</template>
