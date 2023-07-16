<script setup lang="ts">
import { ref } from "vue";
import ToggleInput from "src/components/Elements/ToggleInput.vue";
import Collapse from "src/components/Elements/Collapse.vue";
import { provinciasArgentinas } from "src/utils/filter.ts";
const init = Array(provinciasArgentinas.length).fill(true);
let checkbox = ref([...init]);
</script>
<template>
  <div class="flex flex-col justify-end bg-white">
    <div class="flex-grow">
      <Collapse title="Filtros por provincias">
        <div v-for="(provincia, i) in provinciasArgentinas" :key="provincia">
          <ToggleInput
            :label="provincia"
            :checked="checkbox[i]"
            class="flex justify-start"
          />
        </div>
      </Collapse>
    </div>
    <div
      class="sticky bottom-0 left-0 right-0 flex shadow-black shadow-sm bg-white"
    >
      <!-- <button
          @click="showMap"
          class="flex flex-row flex-grow justify-center font-bold text-blue-500 m-2"
        >
          <MapIcon class="inline w-6 h-6" /> Mostrar mapa
        </button> -->
    </div>
  </div>
</template>
