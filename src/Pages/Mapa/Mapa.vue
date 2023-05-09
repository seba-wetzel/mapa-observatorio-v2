<script setup lang="ts">
import HelloWorld from "src/components/HelloWorld.vue";
import Sede from "src/components/Sede.vue";
import { useSedes } from "src/composables/useSedes";

const sedes = useSedes();
console.log(sedes);
</script>

<template>
  <div>
    <Sede v-for="(sede, i) in sedes" :key="i" :msg="sede.nombre" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
