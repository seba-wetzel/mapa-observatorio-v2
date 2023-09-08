<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useSedes } from "src/composables/useSedes";
import { setSelectedSedeByID, getSelectedSede } from "src/composables/useSedes";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSearchSede } from "src/composables/useSearchSede";

const map = ref<any>(null);
const { markers } = useSedes();
const selectedSede = getSelectedSede();
const { setBusqueda } = useSearchSede();

watch(
  () => selectedSede.value,
  (sede) => {
    if (sede) {
      setBusqueda(sede.nombre);
      map.value.setView(
        [sede.ubicacion.coordenadas?.lat, sede.ubicacion.coordenadas?.lng],
        15
      );
    }
  }
);

// const props = defineProps({
//   markers: {
//     type: Array,
//     default: () => [],
//   },
// });

onMounted(() => {
  map.value = L.map("mapContainer", {
    zoomControl: false,
    attributionControl: false,
  }).setView([-42, -64], 4);
  L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
    maxZoom: 15,
    minZoom: 4,
  }).addTo(map.value);
  // map.value.boxZoom.disable();
});

watch(
  () => markers.value,
  (markers: any, oldMakers: any) => {
    //find if this two arrays are excatly the same
    if (JSON.stringify(markers) !== JSON.stringify(oldMakers)) {
      map.value.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          map.value.removeLayer(layer);
        }
      });
      markers.forEach((marker: any) => {
        L.marker([marker.lat, marker.lng])
          .addTo(map.value)
          .on("click", () => {
            // console.log(marker);
            setSelectedSedeByID(marker.id);
            //
          });
        // .bindPopup(marker.nombre);
      });
    }
  }
);
</script>

<template>
  <article class="block absolute w-full h-full">
    <div id="mapContainer"></div>
  </article>
</template>

<style scoped>
#mapContainer {
  min-width: 100%;
  min-height: 100%;
}
</style>
