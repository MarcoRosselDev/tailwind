import { useEffect, useState } from "react";
import searchCoordenates from "./searchCoordenates";
import useFetch from "./useFetch";
import type {
  CoordinatesApiResponse,
  LocatioFormat,
  MainObj,
} from "../types/location_types";

export default function searchWeather(city: string): MainObj {
  const {
    err_message,
    isLoading,
    data: data_coordenation,
  }: {
    data: LocatioFormat | null | object;
    isLoading: boolean;
    err_message: string | null;
  } = searchWeather(city);
  console.log(err_message, isLoading, data_coordenation);

  return { data: data_coordenation, err_message, isLoading };
  //    const {latitude,longitude} = data
  //    const {data, err_message, isLoading} = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=4${data.latitude}&longitude=${data.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m`)
}

/* const [obj, setObj] = useState<MainObj>({
  data: {},
  err_message: "",
  isLoading: true,
});

const [myLocation, setMyLocation] = useState<LocatioFormat>({
  latitude: 0,
  longitude: 0,
});

useEffect(() => {
  const { data, err_message, isLoading } = searchCoordenates(city);
  if (err_message) {
    setObj((prev) => ({
      ...prev,
      err_message: err_message,
      isLoading: isLoading,
    }));
    return;
  }
  setObj({ data: { resultado: data }, err_message, isLoading });
  setMyLocation({
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
  });
}, []); */

/* useEffect(() => {
  const { data, err_message, isLoading } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=4${myLocation.latitude}&longitude=${myLocation.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m`
  );
  if (err_message) {
    setObj((prev) => ({
      ...prev,
      err_message: `Las latitudes no funcionaron latitude: ${myLocation.latitude} and longitude: ${myLocation.longitude}`,
    }));
    return;
  }
  setObj({ err_message, isLoading, data: { data } });
}, [myLocation]); */
