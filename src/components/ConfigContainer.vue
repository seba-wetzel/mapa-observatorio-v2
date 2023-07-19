<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { provinciasArgentinas } from "src/sedes/domain/Ubicacion.ts";
import type { Provincia } from "src/sedes/domain/Ubicacion.ts";
import { tipos_sedes } from "src/sedes/domain/Sede";
import type { TipoSede } from "src/sedes/domain/Sede";
import { useFilters } from "src/composables/useFilters";
import Select from "src/components/Elements/Select.vue";

const filters = useFilters();

const provincias = ref<Provincia[]>([]);
const tipos = ref<TipoSede[]>([]);

onMounted(() => {
  provincias.value = filters.filtros.value?.provincias ?? [];
  tipos.value = filters.filtros.value?.tiposSedes ?? [];
});
watch([provincias, tipos], (prev) => {
  console.log("el watch", prev);
  filters.setProvincias(provincias.value);
  filters.setTiposSedes(tipos.value);
});
</script>
<template>
  <div class="flex flex-col justify-end bg-white">
    <div class="flex flex-grow overflow-y-auto flex-wrap">
      <v-container>
        <p class="text-center font-semibold">Filtros de busqueda</p>
        <p class="font-light">Provincias</p>
        <Select
          v-model="provincias"
          :options="provinciasArgentinas"
          label="Provincias seleccionadas"
          multiple
        />
        <p class="font-light">Tipos de sedes</p>
        <Select
          v-model="tipos"
          :options="tipos_sedes"
          label="Tipos de sedes seleccionadas"
        />
      </v-container>
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
      Cerrar
    </div>
  </div>
</template>
