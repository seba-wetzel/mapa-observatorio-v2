import { onMounted, ref } from "vue";
import { Sede } from "src/sedes/domain/Sede";
import { useSedesStore } from "src/store/sedesStore";

export function useSedes() {
  const sedes = ref([] as Sede[]);
  const store = useSedesStore();
  onMounted(async () => {
    await store.setAllSedes();
    sedes.value = store.sedes;
  });
  return sedes;
}
