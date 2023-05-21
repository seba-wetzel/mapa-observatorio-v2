// import { ref } from "vue";
// import { Sede } from "src/sedes/domain/Sede";
import { storeToRefs } from "pinia";
import { useSedesStore } from "src/store/sedesStore";

export function useSearchSede() {
  const store = useSedesStore();
  const { filter: results } = storeToRefs(store);
  const search = store.searchSedeByName;
  return { results, search };
}
