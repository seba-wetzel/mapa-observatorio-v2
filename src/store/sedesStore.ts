import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { watchDebounced } from "@vueuse/core";

import { Sede } from "src/sedes/domain/Sede";
import { getAllSedes } from "src/sedes/application/getAllSedes";

export const useSedesStore = defineStore("sedes", () => {
  const sedes = ref<Sede[]>([]);
  const resultados = ref<Sede[]>([]);
  const busqueda = ref<string>("");
  const selectedSede = ref<Sede | null>(null);

  const setAllSedes = async () => {
    sedes.value = await getAllSedes();
  };

  const setSelectedSede = (sede: Sede) => {
    selectedSede.value = sede;
  };
  const searchSedeByName = (name: string) => {
    const needle = name.toLowerCase().trim();
    busqueda.value = needle;
    if (!!!needle) {
      resultados.value = [];
      return;
    }

    resultados.value = sedes.value.filter(({ nombre }) =>
      nombre.toLowerCase().includes(needle)
    );
  };
  const markers = computed(() => {
    const toFilter = busqueda.value ? resultados.value : sedes.value;
    return toFilter
      .map((sede) => sede?.ubicacion?.coordenadas)
      .filter((sede) => sede.lat && sede.lng);
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
