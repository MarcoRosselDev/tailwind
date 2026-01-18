/* import { fetchWeatherApi } from "openmeteo";
//import { getWeatherCondition } from "../componentes/codigo_clima";

export const fetch_weather = async (
  lat: number,
  long: number,
  handler_secundary_data: (data: any) => void,
  loadingHandler: (val: boolean) => void
) => {
  const params = {
    latitude: [lat],
    longitude: [long],
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["", "weather_code", "temperature_2m"],
    current: [
      "temperature_2m",
      "weather_code",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "wind_speed_10m",
    ],
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];
  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
      weather_code: current.variables(1)!.value(),
      relative_humidity_2m: current.variables(2)!.value(),
      apparent_temperature: current.variables(3)!.value(),
      precipitation: current.variables(4)!.value(),
      wind_speed_10m: current.variables(5)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weather_code: hourly.variables(0)!.valuesArray(),
      temperature_2m: hourly.variables(1)!.valuesArray(),
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperatureMax: daily.variables(1)!.valuesArray()!,
      temperatureMin: daily.variables(2)!.valuesArray()!,
    },
  };
  handler_secundary_data(weatherData);
  loadingHandler(false);
};
 */

import { fetchWeatherApi } from "openmeteo";
//import { getWeatherCondition } from "../componentes/codigo_clima";

export const fetch_weather = async (lat: number, long: number) => {
  const params = {
    latitude: [lat],
    longitude: [long],
    /*     daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    hourly: ["", "weather_code", "temperature_2m"], */
    current: [
      "temperature_2m",
      "weather_code",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "wind_speed_10m",
    ],
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];
  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
      weather_code: current.variables(1)!.value(),
      relative_humidity_2m: current.variables(2)!.value(),
      apparent_temperature: current.variables(3)!.value(),
      precipitation: current.variables(4)!.value(),
      wind_speed_10m: current.variables(5)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval(),
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weather_code: hourly.variables(0)!.valuesArray(),
      temperature_2m: hourly.variables(1)!.valuesArray(),
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval(),
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperatureMax: daily.variables(1)!.valuesArray()!,
      temperatureMin: daily.variables(2)!.valuesArray()!,
    },
  };
};
