import { ref, watch } from "vue";

export function useAutoFocus() {
  const inputRef = ref<HTMLInputElement | null>(null);
  watch(
    () => inputRef.value,
    () => {
      inputRef.value?.focus();
    }
  );
  return inputRef;
}
