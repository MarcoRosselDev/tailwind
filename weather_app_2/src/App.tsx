import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
import NavHeader from "./components/NavHeader";
import Api_error from "./components/Api_error";
import Main_app from "./components/Main_app";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coordenates, setCoordenates] = useState(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState("berlin");

  // si metricSistem = true ===> Celcius else Farenheit
  const [metricSistem, setMetricSistem] = useState<Boolean>(true);

  function handleMetricSistem() {
    setMetricSistem((prev) => !prev);
  }

  async function fetch_weather(lat: number, long: number) {
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
    setWeatherData(weatherData);
  }
  async function getCoordenates(city: string) {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
      );
      if (response.ok) {
        let data_json = await response.json();
        setCoordenates(data_json.results[0]);
        //console.log(data_json);
        let latt = data_json.results[0].latitude;
        let longg = data_json.results[0].longitude;
        //console.log(latt, longg);
        await fetch_weather(latt, longg);
      } else {
        throw new Error("Error de la peticion de wehater data");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log({ message: err.message });
        return;
      } else {
        console.log("error mas grave en la peticion de weather data");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCoordenates(city);
  }, [city]);

  function handleRetry() {
    setIsLoading(true);
    // ejecutar algo
    getCoordenates("berlin");
  }

  function handlerSetCity(city: string) {
    setCity(city);
  }

  return (
    <div className="bg-own-neutral-900 font-DM-light min-h-screen text-own-neutral-200 p-4 text-sm flex flex-col justify-top items-center">
      <NavHeader HMS={handleMetricSistem} metricS={metricSistem} />
      {isLoading ? (
        <p>Loading</p>
      ) : weatherData ? (
        <Main_app
          handlerSetCity={handlerSetCity}
          coordenates={coordenates}
          weatherData={weatherData}
        />
      ) : (
        <Api_error retryFn={handleRetry} />
      )}
    </div>
  );
}
