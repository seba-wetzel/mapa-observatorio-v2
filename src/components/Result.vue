<script setup lang="ts">
import { MapPinIcon, PhoneIcon } from "@heroicons/vue/24/outline";

import { Sede } from "src/sedes/domain/Sede";
const { sede } = defineProps<{ sede: Sede }>();
// import { useSedesStore } from "src/store/sedesStore";
import { isThisSedeSelected, setSelectedSede } from "src/composables/useSedes";
import { useMenu } from "src/composables/useMenu";
const { close: showMap } = useMenu("search");
// const store = useSedesStore();

const selectSede = () => {
  setSelectedSede(sede);
  showMap();
};
const isSelected = isThisSedeSelected(sede.id);
</script>

<template>
  <div class="shadow-black drop-shadow bg-white py-2 px-4">
    <v-divider></v-divider>
    <div class="flex flex-row justify-between">
      <div class="flex flex-col my-2 mr-4 overflow-hidden">
        <h6 class="font-bold text-black line-clamp-2 hover:line-clamp-none">
          {{ sede.nombre }}
        </h6>
        <p
          class="text-sm text-gray-500 w-auto overflow-ellipsis overflow-hidden whitespace-nowrap"
          :class="sede.descripcion ? 'text-gray-500' : 'italic'"
        >
          {{ sede.descripcion ? sede.descripcion : "Sin descripción" }}
        </p>
        <p
          class="text-sm text-gray-500 w-auto overflow-ellipsis overflow-hidden whitespace-nowrap"
          :class="sede.comentarios ? 'text-gray-500' : 'italic'"
        >
          {{ sede.comentarios ? sede.comentarios : "Sin comentarios" }}
        </p>
      </div>
      <div
        class="flex flex-col justify-center text-blue-500"
        :class="isSelected ? 'text-red-600' : ''"
      >
        <div class="flex flex-row gap-4 items-end">
          <a
            v-if="sede.telefono"
            :href="`tel:${sede.telefono}`"
            class="flex flex-col items-center"
          >
            <div
              class="border-blue-600 rounded-full border-[1px] p-2"
              :class="isSelected ? 'border-red-600' : ''"
            >
              <PhoneIcon class="w-5 h-5" />
            </div>
            <p class="text-xs mt-1">Llamar</p>
          </a>
          <button @click="selectSede" class="flex flex-col items-center">
            <div
              class="border-blue-600 rounded-full border-[1px] p-2"
              :class="isSelected ? 'border-red-600' : ''"
            >
              <MapPinIcon class="w-5 h-5" />
            </div>
            <p class="text-xs mt-1">Ubicar</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
