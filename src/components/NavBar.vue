<script setup lang="ts">
import SearchBar from "src/components/SearchBar.vue";
import ResultsContainer from "src/components/ResultsContainer.vue";
import ConfigContainer from "./ConfigContainer.vue";
import { useMenuState, closeAllMenus } from "src/composables/useMenu";
const menuState = useMenuState("search");
const optionsState = useMenuState("options");
</script>

<template>
  <nav
    class="flex flex-col max-h-[100dvh]"
    :class="menuState || optionsState ? 'bg-white h-full' : 'bg-transparent'"
    v-click-outside="closeAllMenus"
  >
    <SearchBar
      class="sticky p-4 m-2 border border-gray-400 rounded-lg bg-white text-gray-700"
    />
    <v-fade-transition>
      <ResultsContainer v-if="menuState" class="overflow-y-auto flex-grow" />
    </v-fade-transition>

    <v-fade-transition>
      <ConfigContainer v-if="optionsState" class="overflow-y-auto flex-grow" />
    </v-fade-transition>
  </nav>
</template>
<style scoped>
nav {
  transition: background-color 0.3s ease-in-out;
}
</style>
