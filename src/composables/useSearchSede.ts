// import { ref } from "vue";
// import { Sede } from "src/sedes/domain/Sede";
import { storeToRefs } from "pinia";

import { useSedesStore } from "src/store/sedesStore";

const store = useSedesStore();
const setBusqueda = store.setBusqueda;

export function useSearchSede() {
  return { setBusqueda };
}

export const useSedesResults = () => {
  const { resultados } = storeToRefs(store);
  return resultados;
};

export const isSearching = () => {
  const { isSearching } = storeToRefs(store);
  return isSearching;
};

export const useBusqueda = () => {
  const { busqueda } = storeToRefs(store);
  return { busqueda, clearBusqueda: store.clearBusqueda };
};
