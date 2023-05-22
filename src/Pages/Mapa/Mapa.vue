<script setup lang="ts">
import { computed } from "vue";
import MapaContainer from "src/components/MapaContainer.vue";
import SearchContainer from "src/components/SearchContainer.vue";
import { useSedes } from "src/composables/useSedes";

const sedes = useSedes();
const markers = computed(() =>
  sedes.value
    .map((sede) => sede?.ubicacion?.coordenadas)
    .filter((sede) => sede.lat && sede.lng)
);
</script>

<template>
  <SearchContainer />
  <MapaContainer :markers="markers" class="absolute -z-10 rounded-lg" />
</template>
