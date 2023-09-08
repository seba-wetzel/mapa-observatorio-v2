<script setup lang="ts">
import { MapIcon } from "@heroicons/vue/24/outline";
import { closeAllMenus } from "src/composables/useMenu";
</script>
<template>
  <button
    id="mostrar mapa"
    aria-label="Mostrar mapa"
    @click="closeAllMenus"
    class="flex flex-row flex-grow justify-center font-bold text-blue-500 m-2"
  >
    <MapIcon class="inline w-6 h-6" /> Mostrar mapa
  </button>
</template>
