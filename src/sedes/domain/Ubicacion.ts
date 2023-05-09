export interface Ubicacion {
  direccion: string;
  ciudad: string;
  provincia: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
}
