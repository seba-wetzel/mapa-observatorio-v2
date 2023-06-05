<template>
  <div
    class="flex flex-col"
    :class="
      busquedaActiva && menus.getMenu('search')?.isOpen
        ? 'bg-white'
        : 'bg-transparent'
    "
  >
    <SearchBar
      @hide="hide"
      class="sticky p-4 m-1 border border-gray-400 rounded-lg bg-white text-gray-700"
    />
    <ResultsContainer
      v-if="menus.getMenu('search')?.isOpen"
      class="overflow-y-auto flex-grow"
    />
  </div>
</template>
<script setup lang="ts">
import SearchBar from "src/components/SearchBar.vue";
import ResultsContainer from "src/components/ResultsContainer.vue";
import { useMenu } from "src/composables/useMenu";
import { isSearching } from "src/composables/useSearchSede";

const busquedaActiva = isSearching();
const menus = useMenu();
console.log(menus.getMenu("search")?.isOpen);
const hide = (value: boolean) => {
  console.log("hide");
  menus.setMenu({ name: "search", isOpen: value });
};
</script>
