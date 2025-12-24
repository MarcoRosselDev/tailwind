import type { MainObj } from "../types/location_types";
import useFetch from "./useFetch";

export default function weather(
  latitude: number | undefined,
  longitude: number | undefined
): MainObj {
  const { data, err_message, isLoading } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${
      latitude == undefined ? 0 : latitude
    }&longitude=${
      longitude == undefined ? 0 : longitude
    }&current=temperature_2m,wind_speed_10m&hourly=temperature_2m`
  );

  if (err_message) {
    return {
      data: {},
      err_message: `error en API de wehater, no se encontro el clima en las latitudes ${latitude} y longitud ${longitude}`,
      isLoading,
    };
  }
  return { data, err_message, isLoading };
}
