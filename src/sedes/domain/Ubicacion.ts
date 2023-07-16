export interface Ubicacion {
  direccion?: string;
  ciudad?: string;
  provincia?: string;
  provincia_IATA?: string | null;
  coordenadas?: {
    lat: number;
    lng: number;
  };
  place_id?: string | null;
}
