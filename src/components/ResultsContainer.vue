<template>
  <div v-if="results.length > 0" class="flex flex-col full-h bg-white">
    <Result v-for="sede in results" :key="sede.id" :sede="sede" />
    <button class="flex font-bold text-blue-500 align-middle justify-start m-4">
      <MapIcon class="inline w-6 h-6" /> Mostrar mapa
    </button>

    <!-- <p class="flex font-bold text-blue-500 align-middle justify-start m-4">
      <MapIcon class="inline w-6 h-6" /> Mostrar mapa
    </p> -->
  </div>
</template>
<script setup lang="ts">
import { watchEffect } from "vue";
import Result from "src/components/Result.vue";
import { useSearchSede } from "src/composables/useSearchSede";
import { MapIcon } from "@heroicons/vue/24/outline";

const { busqueda } = defineProps<{ busqueda: string }>();

const { results, search } = useSearchSede();

watchEffect(() => {
  console.log("busqueda", busqueda);
  search(busqueda);
});
</script>
<style scoped>
.full-h {
  height: 100dvh;
}
</style>
