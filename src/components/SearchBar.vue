<template>
  <div
    class="fixed w-full md:w-72 flex items-center border border-gray-400 rounded-lg px-3 py-2 bg-white text-gray-600"
  >
    <button>
      <ArrowLeftIcon class="w-6 h-6" @click="hide" />
    </button>
    <input
      :value="modelValue"
      @input="update"
      ref="inputRef"
      type="text"
      placeholder="Buscar..."
      class="flex-grow ml-2 text-sm focus:outline-none"
    />
    <button @click="clear">
      <MagnifyingGlassIcon
        v-if="typeof modelValue === 'string' && modelValue.length <= 0"
        class="w-6 h-6"
      />

      <XMarkIcon v-else class="w-6 h-6" />
    </button>
  </div>
</template>
<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/outline";
import { useAutoFocus } from "src/composables/useAutoFocus";
const { modelValue } = defineProps<{ modelValue: string }>();
const emits = defineEmits(["update:modelValue", "hide"]);

const inputRef = useAutoFocus();

const clear = () => {
  emits("update:modelValue", "");
};

const update = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};
const hide = () => {
  emits("hide");
};
</script>
