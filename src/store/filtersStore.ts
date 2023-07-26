// import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Provincia } from "src/sedes/domain/Ubicacion";
import type { TipoSede } from "src/sedes/domain/Sede";

interface Filters {
  provincias?: Provincia[] | [];
  tiposSedes?: TipoSede[] | [];
}
//const menuMap = new Map<string, Filters>();
const initValues: Filters = {
  provincias: [],
  tiposSedes: [],
};
const filtros = useStorage<Filters>("filtros", initValues, sessionStorage);

export const useFiltersStore = defineStore("filtros", () => {
  const setProvincias = (value: Provincia[] | []) => {
    filtros.value.provincias = value;
  };
  const setTiposSedes = (value: TipoSede[] | []) => {
    filtros.value.tiposSedes = value;
  };

  return {
    filtros,
    setProvincias,
    setTiposSedes,
  };
});
