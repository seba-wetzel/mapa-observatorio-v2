import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useFiltersStore } from "src/store/filtersStore";

const store = useFiltersStore();

export const useFilters = () => {
  const filters = storeToRefs(store);
  const provincias = computed({
    get() {
      return filters.filtros.value?.provincias ?? [];
    },
    set(value) {
      store.setProvincias(value);
    },
  });
  const tipos = computed({
    get() {
      return filters.filtros.value?.tiposSedes ?? [];
    },
    set(value) {
      store.setTiposSedes(value);
    },
  });

  return {
    filtros: filters.filtros,
    provincias,
    tipos,
  };
};
