<template>
  <div class="shadow-black drop-shadow bg-white py-2 px-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col my-2 mr-4 overflow-hidden">
        <h6 class="font-bold text-black">
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
      <div class="flex flex-col justify-center text-blue-500">
        <div class="flex flex-row gap-4 items-end">
          <a
            v-if="sede.telefono"
            :href="`tel:${sede.telefono}`"
            class="flex flex-col items-center"
          >
            <div class="border-blue-600 rounded-full border-[1px] p-2">
              <PhoneIcon class="w-5 h-5" />
            </div>
            <p class="text-xs mt-1">Llamar</p>
          </a>
          <button class="flex flex-col items-center">
            <div class="border-blue-600 rounded-full border-[1px] p-2">
              <MapPinIcon class="w-5 h-5" />
            </div>
            <p class="text-xs mt-1">Ubicar</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Sede } from "src/sedes/domain/Sede";
const { sede } = defineProps<{ sede: Sede }>();
import { MapPinIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>
