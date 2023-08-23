<script setup lang="ts">
import Result from "src/components/Result.vue";
import { MapIcon } from "@heroicons/vue/24/outline";
import { useSedesResults } from "src/composables/useSearchSede";
import { useMenuStore } from "src/store/menuStores";
const resultados = useSedesResults();
const { setMenu } = useMenuStore();
const showMap = () => {
  setMenu({ name: "search", isOpen: false });
};

const keyG = (id: string | number | null | undefined) => {
  return id ?? Symbol();
};
</script>

<template>
  <div class="flex flex-col bg-white">
    <div class="flex-grow">
      <Result
        class="text-gray-600"
        v-for="sede in resultados"
        :key="keyG(sede.id)"
        :sede="sede"
      />
    </div>
    <div
      class="sticky bottom-0 left-0 right-0 flex shadow-black shadow-sm bg-white"
    >
      <button
        @click="showMap"
        class="flex flex-row flex-grow justify-center font-bold text-blue-500 m-2"
      >
        <MapIcon class="inline w-6 h-6" /> Mostrar mapa
      </button>
    </div>
  </div>
</template>
