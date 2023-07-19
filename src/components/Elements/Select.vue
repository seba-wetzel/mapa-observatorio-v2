<script setup lang="ts">
import { computed } from "vue";
export interface PropType<T> {
  modelValue: T;
  options: T;
  label: string;
  multiple?: boolean;
}
const props = defineProps<PropType<string[]>>();
const emits = defineEmits(["update:modelValue"]);
const all = computed(() => props.modelValue.length === props.options.length);

const titulo = computed(() => {
  if (all.value) return "Ninguna";
  return "Todas";
});

const toggle = () => {
  if (props.modelValue.length === props.options.length) {
    emits("update:modelValue", []);
  } else {
    emits("update:modelValue", [...props.options]);
  }
};
</script>

<template>
  <v-select
    :modelValue="props.modelValue"
    @update:modelValue="emits('update:modelValue', $event)"
    :items="props.options"
    :label="props.label"
    :multiple="props.multiple"
  >
    <template v-if="props.multiple" v-slot:selection="{ item, index }">
      <v-chip v-if="index < 4">
        <span>{{ item.title }}</span>
      </v-chip>
      <span v-if="index === 4" class="text-grey text-caption align-self-center">
        (y {{ props.options.length - 4 }} más)
      </span>
    </template>
    <template v-if="props.multiple" v-slot:prepend-item>
      <v-list-item :title="titulo" @click="toggle">
        <template v-slot:prepend>
          <v-checkbox-btn
            color="indigo-darken-4"
            :value="!all"
          ></v-checkbox-btn>
        </template>
      </v-list-item>
    </template>
  </v-select>
</template>
