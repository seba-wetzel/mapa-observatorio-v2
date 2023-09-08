<script setup lang="ts">
import BottomSheet from "./Elements/BottomSheet.vue";
import { isSedeSelected } from "src/composables/useSedes";

const sede = isSedeSelected();
</script>
<template>
  <BottomSheet v-if="sede[0]" class="w-[100dvw] md:w-96">
    <template #title>
      {{ sede[1]?.nombre }}
    </template>
    <template #content>
      <ul class="px-4 text-lg font-medium">
        <li>Tipo: {{ sede[1]?.tipo_long }}</li>
        <li>
          Dirección:{{ sede[1]?.ubicacion.direccion }} -
          {{ sede[1]?.ubicacion.ciudad }}
        </li>
        <li>Telefono: {{ sede[1]?.telefono }}</li>
        <li>Correo: {{ sede[1]?.email }}</li>
      </ul>
    </template>
  </BottomSheet>
</template>

<style scoped></style>
