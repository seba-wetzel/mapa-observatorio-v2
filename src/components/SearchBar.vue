<template>
  <div class="flex items-center">
    <button v-if="menuState" @click="close">
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
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { useSearchSede } from "src/composables/useSearchSede";
import { useMenu, useMenuState } from "src/composables/useMenu";
import { Input } from "postcss";

const { setBusqueda } = useSearchSede();
const inputTex = ref<string>("");
const { setMenu } = useMenu();
const menuState = useMenuState("search");

const clear = () => {
  inputTex.value = "";
  setBusqueda("");
  setMenu({ name: "search", isOpen: false });
};
const show = () => {
  setMenu({ name: "search", isOpen: true });
};

const hide = () => {
  setMenu({ name: "search", isOpen: false });
};
const close = () => {
  hide();
};
const showOptiones = () => {
  console.log("showOptiones");
  setMenu({ name: "options", isOpen: true });
};
const onUpdate = (event: Event) => {
  const { value } = <HTMLInputElement>event.target;
  setBusqueda(value);
};
</script>
