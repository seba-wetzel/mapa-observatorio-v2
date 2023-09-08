import { ref, computed, watchEffect } from "vue";
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
  const needle = ref<string>("");

  const selectedSede = ref<Sede | null>(null);
  const { filtros } = storeToRefs(filtersStore);

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

  // watchEffect(() => {
  //   if (!!!busqueda.value) console.log("busqueda vacia");
  //   if (!!!busqueda.value) return [];
  //   applyFilters();
  //   resultados.value = filteredSedes.value.filter(({ nombre }) =>
  //     nombre.toLowerCase().includes(busqueda.value.toLowerCase().trim())
  //   );
  // });

  const resultados = computed(() => {
    if (!!!busqueda.value) return [];
    applyFilters();
    return filteredSedes.value.filter(({ nombre }) =>
      nombre.toLowerCase().includes(needle.value)
    );
  });

  const setAllSedes = async () => {
    sedes.value = await getAllSedes();
  };

  const setSelectedSede = (sede: Sede) => {
    selectedSede.value = sede;
  };

  const setSelectedSedeByID = (id: string) => {
    const sede = sedes.value.find((sede) => sede.id === id);
    if (!!!sede) return;
    setSelectedSede(sede);
  };

  const clearSelectedSede = () => (selectedSede.value = null);

  const searchSedeByName = (name: string) => {
    // console.log("searchSedeByName", name);
    needle.value = name.toLowerCase().trim();
  };

  const markers = computed(() => {
    const toFilter = busqueda.value ? resultados.value : sedes.value;
    return toFilter
      .map((sede) => {
        const {
          ubicacion: { coordenadas },
          ...data
        } = sede;
        return {
          ...data,
          lat: coordenadas?.lat,
          lng: coordenadas?.lng,
        };
      })
      .filter((sede) => sede?.lat && sede.lng);
  });
  const isSearching = computed(() => {
    return busqueda.value.length > 0;
  });

  const setBusqueda = (value: string) => {
    busqueda.value = value;
  };
  const clearBusqueda = () => {
    busqueda.value = "";
    clearSelectedSede();
  };

  watchDebounced(
    busqueda,
    () => {
      searchSedeByName(busqueda.value);
    },
    { debounce: 500, maxWait: 1000 }
  );

  return {
    sedes,
    resultados,
    selectedSede,
    busqueda,
    clearBusqueda,
    isSearching,
    setBusqueda,
    searchSedeByName,
    setAllSedes,
    setSelectedSede,
    clearSelectedSede,
    setSelectedSedeByID,
    markers,
  };
});
