<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { useBusqueda } from "src/composables/useSearchSede";
import { useMenu, closeAllMenus } from "src/composables/useMenu";
const { busqueda, clearBusqueda } = useBusqueda();

const {
  open: openSearch,
  close: closeSearch,
  state: menuState,
} = useMenu("search");

const {
  open: openOptions,
  close: closeOptions,
  state: optionsMenu,
} = useMenu("options");

const clear = () => {
  clearBusqueda();
  closeSearch();
};
const show = () => {
  openSearch();
  closeOptions();
};
</script>

<template>
  <aside class="flex items-center">
    <button name="atras" v-if="menuState || optionsMenu" @click="closeAllMenus">
      <ArrowLeftIcon class="w-6 h-6" />
    </button>
    <button name="menu" v-else @click="openOptions">
      <Bars3Icon class="w-6 h-6" />
    </button>
    <input
      name="busqueda"
      v-model="busqueda"
      @focus="show"
      type="text"
      placeholder="Buscar..."
      class="flex-grow ml-2 text-sm focus:outline-none"
    />
    <button name="buscar" v-if="busqueda.length === 0">
      <MagnifyingGlassIcon class="w-6 h-6" />
    </button>
    <button name="limpiar busqueda" v-else @click="clear">
      <XMarkIcon class="w-6 h-6" />
    </button>
  </aside>
</template>
