import { ref, watch, computed } from "vue";

export function useAutoFocus() {
  const inputRef = ref<HTMLInputElement | null>(null);
  const isFocused = ref<boolean>(false);
  watch(
    () => inputRef.value,
    () => {
      inputRef.value?.focus();
    }
  );

  return { inputRef, isFocused };
}
