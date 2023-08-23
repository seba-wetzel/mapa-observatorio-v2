import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { watchDebounced } from "@vueuse/core";

import { Sede } from "src/sedes/domain/Sede";
import { getAllSedes } from "src/sedes/application/getAllSedes";

import { useFiltersStore } from "src/store/filtersStore";
const filtersStore = useFiltersStore();

export const useSedesStore = defineStore("sedes", () => {
  const sedes = ref<Sede[]>([]);
  const filteredSedes = ref<Sede[]>([]);
  // const resultados = ref<Sede[]>([]);
  const busqueda = ref<string>("");

  const applyFilters = () => {
    const provincias = filtros.value.provincias;
    const tipos = filtros.value.tiposSedes;

    const filterProvincia = (sede: Sede) =>
      provincias?.some((provincia) => provincia === sede.ubicacion.provincia);

    const filterTipo = (sede: Sede) =>
      tipos?.some((tipo) => tipo === sede.tipo);

    const filtered = sedes.value.filter(filterProvincia).filter(filterTipo);
    filteredSedes.value = filtered;
  };

  const resultados = computed(() => {
    if (!!!busqueda.value) return [];
    applyFilters();
    return filteredSedes.value.filter(({ nombre }) =>
      nombre.toLowerCase().includes(busqueda.value)
    );
  });

  const selectedSede = ref<Sede | null>(null);
  const { filtros } = storeToRefs(filtersStore);
  console.log({ filtros });

  const setAllSedes = async () => {
    sedes.value = await getAllSedes();
  };

  const setSelectedSede = (sede: Sede) => {
    selectedSede.value = sede;
  };

  const searchSedeByName = (name: string) => {
    const needle = name.toLowerCase().trim();
    busqueda.value = needle;
  };

  const markers = computed(() => {
    const toFilter = busqueda.value ? resultados.value : sedes.value;
    return toFilter
      .map((sede) => sede?.ubicacion?.coordenadas)
      .filter((sede) => sede?.lat && sede.lng);
  });
  const isSearching = computed(() => {
    return busqueda.value.length > 0;
  });

  const setBusqueda = (value: string) => {
    busqueda.value = value;
  };

  watchDebounced(
    busqueda,
    () => {
      searchSedeByName(busqueda.value);
    },
    { debounce: 500, maxWait: 1000 }
  );

  // watch(
  //   () => filtros.value,
  //   () => {
  //     const provincias = filtros.value.provincias;
  //     const tipos = filtros.value.tiposSedes;

  //     const filterProvincia = (sede: Sede) =>
  //       provincias?.some((provincia) => provincia === sede.ubicacion.provincia);

  //     const filterTipo = (sede: Sede) =>
  //       tipos?.some((tipo) => tipo === sede.tipo);

  //     const filtered = sedes.value.filter(filterProvincia).filter(filterTipo);
  //     filteredSedes.value = filtered;
  //   },
  //   { immediate: true }
  // );

  return {
    sedes,
    resultados,
    selectedSede,
    busqueda,
    isSearching,
    setBusqueda,
    searchSedeByName,
    setAllSedes,
    setSelectedSede,
    markers,
  };
});
