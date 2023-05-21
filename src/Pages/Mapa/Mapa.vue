<script setup lang="ts">
import { computed } from "vue";
import MapaContainer from "src/components/MapaContainer.vue";
import SearchBar from "src/components/SearchBar.vue";
import { useSedes } from "src/composables/useSedes";

const sedes = useSedes();
const markers = computed(() =>
  sedes.value
    .map((sede) => sede?.ubicacion?.coordenadas)
    .filter((sede) => sede.lat && sede.lng)
);
</script>

<template>
  <div class="flex flex-col flex-grow">
    <SearchBar />
    <MapaContainer :markers="markers" class="-z-10 rounded-lg" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
