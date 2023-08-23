<template>
  <div
    class="flex flex-col"
    :class="menuState || optionsState ? 'bg-white h-full' : 'bg-transparent'"
  >
    <SearchBar
      class="sticky p-4 m-1 border border-gray-400 rounded-lg bg-white text-gray-700"
    />
    <Transition mode="in-out" name="fade">
      <ResultsContainer v-if="menuState" class="overflow-y-auto flex-grow" />
    </Transition>
    <Transition mode="in-out" name="fade">
      <ConfigContainer v-if="optionsState" class="overflow-y-auto flex-grow" />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import SearchBar from "src/components/SearchBar.vue";
import ResultsContainer from "src/components/ResultsContainer.vue";
import ConfigContainer from "./ConfigContainer.vue";
import { useMenuState } from "src/composables/useMenu";
const menuState = useMenuState("search");
const optionsState = useMenuState("options");
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
