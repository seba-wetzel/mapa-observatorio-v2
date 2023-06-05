import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useSedesStore } from "src/store/sedesStore";

export function useSedes() {
  const store = useSedesStore();
  store.setAllSedes();
  const sedes = storeToRefs(store);
  onMounted(async () => {
    await store.setAllSedes();
  });
  return sedes;
}
