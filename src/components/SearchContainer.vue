<template>
  <div class="fixed flex flex-col flex-grow w-full md:w-72">
    <SearchBar v-model="busqueda" @hide="hide" />
    <ResultsContainer
      :busqueda="busqueda"
      class="mt-11 pb-11 h-full overflow-scroll"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "src/components/SearchBar.vue";
import ResultsContainer from "src/components/ResultsContainer.vue";
const busqueda = ref<string>("");

const hide = () => {
  console.log("hide");
};
</script>
