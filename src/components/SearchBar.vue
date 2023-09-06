<script setup lang="ts">
import { ref } from "vue";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { useSearchSede } from "src/composables/useSearchSede";
import { useMenu } from "src/composables/useMenu";

const { setBusqueda } = useSearchSede();
const inputTex = ref<string>("");

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
  inputTex.value = "";
  setBusqueda("");
  closeSearch();
};
const show = () => {
  openSearch();
  closeOptions();
};

const hide = () => {
  closeSearch();
  closeOptions();
};

const showOptiones = () => {
  console.log("showOptiones");
  openOptions();
};
const onUpdate = (event: Event) => {
  const { value } = <HTMLInputElement>event.target;
  setBusqueda(value);
};
</script>

<template>
  <aside class="flex items-center">
    <button v-if="menuState || optionsMenu" @click="hide">
      <ArrowLeftIcon class="w-6 h-6" />
    </button>
    <button v-else @click="showOptiones">
      <Bars3Icon class="w-6 h-6" />
    </button>
    <input
      v-model="inputTex"
      @focus="show"
      @input="onUpdate"
      type="text"
      placeholder="Buscar..."
      class="flex-grow ml-2 text-sm focus:outline-none"
    />
    <button v-if="inputTex.length === 0">
      <MagnifyingGlassIcon class="w-6 h-6" />
    </button>
    <button v-else @click="clear">
      <XMarkIcon class="w-6 h-6" />
    </button>
  </aside>
</template>
