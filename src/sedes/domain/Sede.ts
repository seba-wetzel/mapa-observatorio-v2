import type { Ubicacion } from "./Ubicacion";
export interface Sede {
  id?: number | null | undefined | string;
  tipo: string;
  nombre: string;
  ubicacion: Ubicacion;
  telefono: string;
  email: string | null;
  link_prin: string | null;
  link_int: string | null;
  descripcion: string | null;
  comentarios: string | null | undefined;
}
