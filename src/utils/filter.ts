// Archivo de ejemplo de funcion para filtrar dinamicamente las sedes por provincia (hay que ajustarlo para respetar el shape de las sedes y la ubicacion real)

import { Ubicacion } from "src/sedes/domain/Ubicacion";
import { tipos_sedes } from "src/sedes/domain/Sede";
export interface Sede {
  nombre: string;
  ubicacion: Ubicacion;
}

const sedes: Sede[] = [
  { nombre: "Sede 1", ubicacion: { provincia: "Buenos Aires" } },
  { nombre: "Sede 2", ubicacion: { provincia: "Córdoba" } },
  { nombre: "Sede 3", ubicacion: { provincia: "Santa Fe" } },
  { nombre: "Sede 4", ubicacion: { provincia: "Mendoza" } },
  { nombre: "Sede 5", ubicacion: { provincia: "Tucumán" } },
  { nombre: "Sede 6", ubicacion: { provincia: "Entre Ríos" } },
  { nombre: "Sede 7", ubicacion: { provincia: "Salta" } },
  { nombre: "Sede 8", ubicacion: { provincia: "Chaco" } },
  { nombre: "Sede 9", ubicacion: { provincia: "Corrientes" } },
  { nombre: "Sede 10", ubicacion: { provincia: "Santiago del Estero" } },
  { nombre: "Sede 11", ubicacion: { provincia: "San Juan" } },
  { nombre: "Sede 12", ubicacion: { provincia: "Jujuy" } },
  { nombre: "Sede 13", ubicacion: { provincia: "Río Negro" } },
  { nombre: "Sede 14", ubicacion: { provincia: "Formosa" } },
  { nombre: "Sede 15", ubicacion: { provincia: "Neuquén" } },
  { nombre: "Sede 16", ubicacion: { provincia: "Chubut" } },
  { nombre: "Sede 17", ubicacion: { provincia: "San Luis" } },
  { nombre: "Sede 18", ubicacion: { provincia: "La Pampa" } },
  { nombre: "Sede 19", ubicacion: { provincia: "La Rioja" } },
  { nombre: "Sede 20", ubicacion: { provincia: "Catamarca" } },
  { nombre: "Sede 21", ubicacion: { provincia: "Santa Cruz" } },
  { nombre: "Sede 22", ubicacion: { provincia: "Tierra del Fuego" } },
  { nombre: "Sede 23", ubicacion: { provincia: "Buenos Aires" } },
  { nombre: "Sede 24", ubicacion: { provincia: "Córdoba" } },
  { nombre: "Sede 25", ubicacion: { provincia: "Santa Fe" } },
  { nombre: "Sede 26", ubicacion: { provincia: "Mendoza" } },
  { nombre: "Sede 27", ubicacion: { provincia: "Tucumán" } },
  { nombre: "Sede 28", ubicacion: { provincia: "Entre Ríos" } },
  { nombre: "Sede 29", ubicacion: { provincia: "Salta" } },
  { nombre: "Sede 30", ubicacion: { provincia: "Chaco" } },
  { nombre: "Sede 31", ubicacion: { provincia: "Corrientes" } },
  { nombre: "Sede 32", ubicacion: { provincia: "Santiago del Estero" } },
  { nombre: "Sede 33", ubicacion: { provincia: "San Juan" } },
  { nombre: "Sede 34", ubicacion: { provincia: "Jujuy" } },
  { nombre: "Sede 35", ubicacion: { provincia: "Río Negro" } },
  { nombre: "Sede 36", ubicacion: { provincia: "Formosa" } },
  { nombre: "Sede 37", ubicacion: { provincia: "Neuquén" } },
  { nombre: "Sede 38", ubicacion: { provincia: "Chubut" } },
  { nombre: "Sede 39", ubicacion: { provincia: "San Luis" } },
  { nombre: "Sede 40", ubicacion: { provincia: "La Pampa" } },
  { nombre: "Sede 41", ubicacion: { provincia: "La Rioja" } },
  { nombre: "Sede 42", ubicacion: { provincia: "Catamarca" } },
  { nombre: "Sede 43", ubicacion: { provincia: "Santa Cruz" } },
  { nombre: "Sede 44", ubicacion: { provincia: "Tierra del Fuego" } },
  { nombre: "Sede 45", ubicacion: { provincia: "Buenos Aires" } },
  { nombre: "Sede 46", ubicacion: { provincia: "Córdoba" } },
  { nombre: "Sede 47", ubicacion: { provincia: "Santa Fe" } },
  { nombre: "Sede 48", ubicacion: { provincia: "Mendoza" } },
  { nombre: "Sede 49", ubicacion: { provincia: "Tucumán" } },
  { nombre: "Sede 50", ubicacion: { provincia: "Entre Ríos" } },
];

export const provinciasArgentinas: string[] = [
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

const filterBy: string[] = [];
filterBy.push(
  provinciasArgentinas[0],
  provinciasArgentinas[11],
  provinciasArgentinas[2],
  "Chubut",
  provinciasArgentinas[22],
  "Tierra del Fuego"
);

const filter = (sede: Sede) =>
  filterBy.some((provincia) => provincia === sede.ubicacion.provincia);
const results = sedes.filter(filter);
results.sort((a, b) => {
  if (a.ubicacion < b.ubicacion) {
    return -1;
  } else if (a.ubicacion > b.ubicacion) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(results);
// console.log(tipos_sedes);
