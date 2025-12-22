import type {
  CoordinatesApiResponse,
  LocatioFormat,
  MainObj,
} from "../types/location_types";
import useFetch from "./useFetch";

export default function searchCoordenates(city: string): MainObj {
  const {
    data: d,
    err_message,
    isLoading,
  }: {
    data: CoordinatesApiResponse | null;
    isLoading: boolean;
    err_message: string | null;
  } = useFetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  if (err_message) {
    return {
      data: {},
      err_message: "no se encontro la ciudad " + city,
      isLoading,
    };
  }
  const data: LocatioFormat = {
    latitude: d?.results[0].latitude,
    longitude: d?.results[0].latitude,
  };
  return { isLoading, data, err_message };
}
