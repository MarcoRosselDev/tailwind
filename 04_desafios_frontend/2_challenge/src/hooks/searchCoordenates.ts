import type { CoordinatesProps, LocatioFormat } from "../types/location_types";
import useFetch from "./useFetch";

export default function searchCoordenates(city: string): LocatioFormat | null {
  const { data, err_message, isLoading }: CoordinatesProps = useFetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  if (err_message) {
    console.log(
      "algo salio mal buscando las coordenadas de la ciudad: " + city
    );
    return null;
  }
  return {
    coordenadas: {
      latitude: data?.results[0].latitude,
      longitude: data?.results[0].longitude,
    },
    isLoading,
  };
}

//{ data: CoordinatesApiResponse | null; isLoading: boolean; err_message: string | null;}
