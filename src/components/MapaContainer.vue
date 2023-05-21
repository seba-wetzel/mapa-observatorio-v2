<template>
  <div class="block absolute w-full h-full">
    <div id="mapContainer"></div>
  </div>
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
  map.value = L.map("mapContainer", {
    zoomControl: false,
    attributionControl: false,
  }).setView([-42, -64], 5);
  L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
    maxZoom: 15,
    minZoom: 3,
  }).addTo(map.value);
  map.value.boxZoom.disable();
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
  min-width: 100%;
  min-height: 100%;
}
</style>
