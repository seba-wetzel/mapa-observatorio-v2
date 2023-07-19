import type { Ubicacion } from "./Ubicacion";
// export interface Sede {
//   id?: number | null | undefined | string;
//   tipo: string;
//   nombre: string;
//   ubicacion: Ubicacion;
//   telefono: string;
//   email: string | null;
//   link_prin: string | null;
//   link_int: string | null;
//   descripcion: string | null;
//   comentarios: string | null | undefined;
// }

export interface Sede {
  id?: number | null | undefined | string;
  descripcion?: string;
  link_prin?: string;
  ubicacion: Ubicacion;
  tipo: TipoSede;
  id_usuario: string;
  link_int: string;
  simple: string;
  telefono: string;
  nombre: string;
  comentarios?: string;
  email?: string;
  timestamp: Timestamp;
}

const tipos = [
  "organizacion",
  "organismo_pub",
  "organismo_priv",
  "equipo",
  "otro",
] as const;

export type TipoSede = (typeof tipos)[number];
export const tipos_sedes: TipoSede[] = [
  "organizacion",
  "organismo_pub",
  "organismo_priv",
  "equipo",
  "otro",
];

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}
