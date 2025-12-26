import type {
  CoordinatesApiResponse,
  LocationResult,
  TypeCoordenate,
} from "../types/type_coordenates";

export default async function fetch_coordenates(
  city: string
): Promise<TypeCoordenate> {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  if (!response.ok) {
    return {
      lat: 0,
      long: 0,
      error_ms: `No se encontraron las coordenadas de la ciudad ${city}, intenta otra ciudad`,
      city: "test city name",
      country: "test country name",
    };
  }
  const json: CoordinatesApiResponse = await response.json();
  console.log(json);
  const info: LocationResult = json.results[0];
  return {
    lat: info.latitude,
    long: info.longitude,
    error_ms: null,
    city: info.name,
    country: info.country,
  };
}
