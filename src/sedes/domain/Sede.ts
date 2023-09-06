import type { Ubicacion } from "./Ubicacion";

export interface Sede {
  id?: number | null | undefined | string;
  descripcion?: string;
  link_prin?: string;
  ubicacion: Ubicacion;
  tipo: TipoSede;
  tipo_long: string;
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
