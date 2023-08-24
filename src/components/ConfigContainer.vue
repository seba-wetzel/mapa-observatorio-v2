<script setup lang="ts">
import Select from "src/components/Elements/Select.vue";
import ShowMap from "./Elements/ShowMap.vue";
import { provinciasArgentinas } from "src/sedes/domain/Ubicacion.ts";
import { tipos_sedes } from "src/sedes/domain/Sede";
import { useFilters } from "src/composables/useFilters";

const { provincias, tipos } = useFilters();
</script>
<template>
  <div class="flex flex-grow flex-col justify-end bg-white">
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
          multiple
        />
      </v-container>
    </div>
    <div
      class="sticky bottom-0 left-0 right-0 flex shadow-black shadow-sm bg-white"
    >
      <ShowMap />
    </div>
  </div>
</template>
