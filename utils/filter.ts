// Archivo de ejemplo de funcion para filtrar dinamicamente las sedes por provincia (hay que ajustarlo para respetar el shape de las sedes y la ubicacion real)
interface Sede {
  nombre: string;
  ubicacion: string;
}

const sedes: Sede[] = [
  { nombre: "Sede 1", ubicacion: "Buenos Aires" },
  { nombre: "Sede 2", ubicacion: "Córdoba" },
  { nombre: "Sede 3", ubicacion: "Santa Fe" },
  { nombre: "Sede 4", ubicacion: "Mendoza" },
  { nombre: "Sede 5", ubicacion: "Tucumán" },
  { nombre: "Sede 6", ubicacion: "Entre Ríos" },
  { nombre: "Sede 7", ubicacion: "Salta" },
  { nombre: "Sede 8", ubicacion: "Chaco" },
  { nombre: "Sede 9", ubicacion: "Corrientes" },
  { nombre: "Sede 10", ubicacion: "Santiago del Estero" },
  { nombre: "Sede 11", ubicacion: "San Juan" },
  { nombre: "Sede 12", ubicacion: "Jujuy" },
  { nombre: "Sede 13", ubicacion: "Río Negro" },
  { nombre: "Sede 14", ubicacion: "Formosa" },
  { nombre: "Sede 15", ubicacion: "Neuquén" },
  { nombre: "Sede 16", ubicacion: "Chubut" },
  { nombre: "Sede 17", ubicacion: "San Luis" },
  { nombre: "Sede 18", ubicacion: "La Pampa" },
  { nombre: "Sede 19", ubicacion: "La Rioja" },
  { nombre: "Sede 20", ubicacion: "Catamarca" },
  { nombre: "Sede 21", ubicacion: "Santa Cruz" },
  { nombre: "Sede 22", ubicacion: "Tierra del Fuego" },
  { nombre: "Sede 23", ubicacion: "Buenos Aires" },
  { nombre: "Sede 24", ubicacion: "Córdoba" },
  { nombre: "Sede 25", ubicacion: "Santa Fe" },
  { nombre: "Sede 26", ubicacion: "Mendoza" },
  { nombre: "Sede 27", ubicacion: "Tucumán" },
  { nombre: "Sede 28", ubicacion: "Entre Ríos" },
  { nombre: "Sede 29", ubicacion: "Salta" },
  { nombre: "Sede 30", ubicacion: "Chaco" },
  { nombre: "Sede 31", ubicacion: "Corrientes" },
  { nombre: "Sede 32", ubicacion: "Santiago del Estero" },
  { nombre: "Sede 33", ubicacion: "San Juan" },
  { nombre: "Sede 34", ubicacion: "Jujuy" },
  { nombre: "Sede 35", ubicacion: "Río Negro" },
  { nombre: "Sede 36", ubicacion: "Formosa" },
  { nombre: "Sede 37", ubicacion: "Neuquén" },
  { nombre: "Sede 38", ubicacion: "Chubut" },
  { nombre: "Sede 39", ubicacion: "San Luis" },
  { nombre: "Sede 40", ubicacion: "La Pampa" },
  { nombre: "Sede 41", ubicacion: "La Rioja" },
  { nombre: "Sede 42", ubicacion: "Catamarca" },
  { nombre: "Sede 43", ubicacion: "Santa Cruz" },
  { nombre: "Sede 44", ubicacion: "Tierra del Fuego" },
  { nombre: "Sede 45", ubicacion: "Buenos Aires" },
  { nombre: "Sede 46", ubicacion: "Córdoba" },
  { nombre: "Sede 47", ubicacion: "Santa Fe" },
  { nombre: "Sede 48", ubicacion: "Mendoza" },
  { nombre: "Sede 49", ubicacion: "Tucumán" },
  { nombre: "Sede 50", ubicacion: "Entre Ríos" },
];

const provinciasArgentinas: string[] = [
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

const filter = (sede) =>
  filterBy.some((provincia) => provincia === sede.ubicacion);
const results = sedes.filter(filter);
console.log(
  results.sort((a, b) => {
    if (a.ubicacion < b.ubicacion) {
      return -1;
    } else if (a.ubicacion > b.ubicacion) {
      return 1;
    } else {
      return 0;
    }
  })
);
