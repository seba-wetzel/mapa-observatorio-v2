<template>
  <div id="mapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = ref<any>(null);

const props = defineProps({
  markers: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {
  map.value = L.map("mapContainer").setView([-32, -64], 5);
  L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
    attribution:
      'Mapa &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 15,
    minZoom: 5,
  }).addTo(map.value);
});

watch(
  () => props.markers,
  (markers) => {
    markers.forEach((marker: any) => {
      L.marker([marker.lat, marker.lng]).addTo(map.value);
    });
  }
);
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>
