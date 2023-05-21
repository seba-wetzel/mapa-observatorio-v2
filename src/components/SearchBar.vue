<template>
  <div
    class="flex items-center border border-gray-400 rounded-lg px-3 py-2 bg-white text-gray-600"
  >
    <input
      v-model="busqueda"
      ref="inputRef"
      type="text"
      placeholder="Buscar..."
      class="flex-grow ml-2 text-sm focus:outline-none"
    />
    <button @click="clear">
      <MagnifyingGlassIcon v-if="busqueda.length <= 0" class="w-6 h-6" />

      <XMarkIcon v-else class="w-6 h-6" />
    </button>
    <div v-if="results.length > 0" class="absolute z-10 w-full">
      <div
        v-for="sede in results"
        :key="sede.id"
        class="bg-white border border-gray-400 rounded-lg px-3 py-2 text-gray-600"
      >
        {{ sede.nombre }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useAutoFocus } from "src/composables/useAutoFocus";
import { useSearchSede } from "src/composables/useSearchSede";
// import { Sede } from "src/sedes/domain/Sede";
const busqueda = ref<string>("");
// const resultado = ref([] as Sede[]);
const inputRef = useAutoFocus();
const { results, search } = useSearchSede();
const clear = () => {
  busqueda.value = "";
};
watch(
  () => busqueda.value,
  (value) => {
    search(value);
    // console.log(search(value));
  }
);
watch(
  () => results,
  (value) => {
    console.log("Resultados", value);
  }
);
</script>
