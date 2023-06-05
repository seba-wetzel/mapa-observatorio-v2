<template>
  <div class="flex items-center">
    <button>
      <ArrowLeftIcon v-if="menuOpen" class="w-6 h-6" @click="hide" />
      <Bars3Icon v-else class="w-6 h-6" @click="show" />
    </button>
    <input
      v-model="inputTex"
      ref="inputRef"
      @focus="show"
      type="text"
      placeholder="Buscar..."
      class="flex-grow ml-2 text-sm focus:outline-none"
    />
    <button @click="clear">
      <MagnifyingGlassIcon v-if="!!!inputTex.length" class="w-6 h-6" />
      <XMarkIcon v-else class="w-6 h-6" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { useSearchSede } from "src/composables/useSearchSede";
import { useMenuStore } from "src/store/menuStores";
import { useAutoFocus } from "src/composables/useAutoFocus";

const emits = defineEmits(["update", "menu"]);
const { setBusqueda } = useSearchSede();
const { inputRef, isFocused } = useAutoFocus();
const inputTex = ref<string>("");
const menuOpen = ref<boolean>(false);
const { setMenu } = useMenuStore();
const update = (value: string) => {
  emits("update", value);
};
const clear = () => {
  inputTex.value = "";
  update("");
};
const show = () => {
  console.log("show");
  menuOpen.value = true;
  setMenu({ name: "search", isOpen: true });
  emits("menu", true);
};

const hide = () => {
  menuOpen.value = false;
  console.log("hide");
  setMenu({ name: "search", isOpen: false });
  emits("menu", false);
};

watch(
  () => inputTex.value,
  (value: string) => {
    update(value);
    setBusqueda(value);
  }
);
watch(
  () => isFocused.value,
  (value: boolean) => {
    console.log("isFocused", value);
    setMenu({ name: "search", isOpen: value });
  }
);
</script>
