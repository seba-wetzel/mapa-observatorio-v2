import type { Ubicacion } from "./Ubicacion";
export interface Sede {
  tipo: string;
  nombre: string;
  ubicacion: Ubicacion;
  telefono: string;
  email: string | null;
  link_prin: string | null;
  link_int: string | null;
  descripcion: string;
  comentarios: string | null;
}
