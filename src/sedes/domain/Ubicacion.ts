export interface Ubicacion {
  ciudad?: string;
  direccion?: string;
  coordenadas?: Coordenadas;
  provincia?: Provincia;
  place_id?: string | null;
}
export interface Coordenadas {
  lng: number;
  lat: number;
}

export type Provincia = (typeof provincias)[number];

const provincias: string[] = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
  "Tucumán",
  "Entre Ríos",
  "Salta",
  "Chaco",
  "Corrientes",
  "Santiago del Estero",
  "San Juan",
  "Jujuy",
  "Río Negro",
  "Formosa",
  "Neuquén",
  "Chubut",
  "San Luis",
  "La Pampa",
  "La Rioja",
  "Catamarca",
  "Santa Cruz",
  "Tierra del Fuego",
];

export const provinciasArgentinas: Provincia[] = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
  "Tucumán",
  "Entre Ríos",
  "Salta",
  "Chaco",
  "Corrientes",
  "Santiago del Estero",
  "San Juan",
  "Jujuy",
  "Río Negro",
  "Formosa",
  "Neuquén",
  "Chubut",
  "San Luis",
  "La Pampa",
  "La Rioja",
  "Catamarca",
  "Santa Cruz",
  "Tierra del Fuego",
];
