<template>
  <div class="flex flex-col" :class="menuState ? 'bg-white' : 'bg-transparent'">
    <SearchBar
      class="sticky p-4 m-1 border border-gray-400 rounded-lg bg-white text-gray-700"
    />
    <Transition mode="in-out" name="fade">
      <ResultsContainer v-if="menuState" class="overflow-y-auto flex-grow" />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { watchEffect } from "vue";
import SearchBar from "src/components/SearchBar.vue";
import ResultsContainer from "src/components/ResultsContainer.vue";
import { useMenuState } from "src/composables/useMenu";

const menuState = useMenuState("search");
watchEffect(() => {
  console.log(menuState);
});
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
