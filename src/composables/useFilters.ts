import { storeToRefs } from "pinia";
import { useFiltersStore } from "src/store/filtersStore";

const store = useFiltersStore();

export const useFilters = () => {
  const filters = storeToRefs(store);

  return {
    filtros: filters.filtros,
    setProvincias: store.setProvincias,
    setTiposSedes: store.setTiposSedes,
  };
};
