<template>
  <div class="flex">
    <label :for="props.label" class="flex items-center cursor-pointer">
      <div v-if="props.left" class="px-2">{{ props.label }}</div>
      <!-- toggle -->
      <div class="relative">
        <input
          :id="props.label"
          type="checkbox"
          class="hidden"
          :modelValue="state"
          @change="state = !state"
        />
        <!-- path -->
        <div
          class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"
        ></div>
        <!-- crcle -->
        <div
          class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"
        ></div>
      </div>
      <div v-if="!props?.left" class="px-2">{{ props.label }}</div>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  checked: boolean;
  onChange?: Function;
  label: string;
  left?: boolean;
}
import { ref } from "vue";
const props = defineProps<Props>();
const state = ref(false);
</script>
<style scoped>
.toggle-path {
  transition: background 0.3s ease-in-out;
}
.toggle-circle {
  top: 0.2rem;
  left: 0.25rem;
  transition: all 0.3s ease-in-out;
}
input:checked ~ .toggle-circle {
  transform: translateX(100%);
}
input:checked ~ .toggle-path {
  @apply bg-blue-500;
}
</style>
