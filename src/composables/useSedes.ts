import { Sede } from "src/sedes/domain/Sede";

import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useSedesStore } from "src/store/sedesStore";
const store = useSedesStore();

export function useSedes() {
  store.setAllSedes();
  const sedes = storeToRefs(store);
  onMounted(async () => {
    await store.setAllSedes();
  });
  return sedes;
}

export const isSedeSelected = () => {
  return computed((): [boolean, Sede | null] => [
    !!store.selectedSede?.ubicacion,
    store.selectedSede,
  ]);
};

export const isThisSedeSelected = (id: Sede["id"]) => {
  return computed(() => store.selectedSede?.id === id);
};

export const setSelectedSedeByID = (id: string) => {
  store.setSelectedSedeByID(id);
};

export const setSelectedSede = (sede: Sede) => {
  if (sede) store.setSelectedSede(sede);
};

export const getSelectedSede = () => {
  return computed(() => store.selectedSede);
};
