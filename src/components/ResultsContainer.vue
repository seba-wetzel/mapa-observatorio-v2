<script setup lang="ts">
import Result from "src/components/Result.vue";
import ShowMap from "./Elements/ShowMap.vue";
import { useSedesResults } from "src/composables/useSearchSede";
const resultados = useSedesResults();

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
      <ShowMap />
    </div>
  </div>
</template>
