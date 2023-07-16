<script setup lang="ts">
import { ref } from "vue";
interface Props {
  title: string;
}
const collapsed = ref(false);
const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-row">
    <button @click="collapsed = !collapsed">
      <svg
        v-if="collapsed"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        ></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <h1 class="text-2xl font-bold" @click="collapsed = !collapsed">
      {{ props.title }}
    </h1>
  </div>
  <div>
    <transition name="fade">
      <div v-if="collapsed">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

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
