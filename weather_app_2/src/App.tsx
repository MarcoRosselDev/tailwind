import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState, type FormEvent } from "react";
import fetch_coordenates from "./querys/fetch_coordenates";

function App() {
  /* por que separar la data principal y data secundaria?
   por que la peticion se separa en dos pasos :
   1. peticion de las coordenadas entregando un nombre de ciudad de type string
   2. si tenemos las coordenadas realizar la segunda peticion
      peticion del clima segun lo requiere la app entregando una latitud y longitud en type number
  
    entonces de las dos peticiones se extrae informacion que se utilizara en los componentes armados con tailwindcss
    de (1) se obtiene el nombre de la ciudad y el nombre del pais
    de (2) se obtienen los demas datos, notece que en esta peticion no se entrega el nombre ni el pais de las coordenadas entregadas
    por eso la importancia de conserbar la peticion 1 en un estado aparte
    */
  const [data_principal, set_data_principal] = useState({});
  const [data_secundaria, set_data_secundaria] = useState({});
  const [city_name, setCity_name] = useState<string | null>(null);
  const [m_name, setM_name] = useState<string | null>(null); //nomber momentanio para no saturar de solicitudes
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error_msg, setError_msg] = useState<null | string>(null);

  useEffect(() => {
    const late = async () => {
      const { error_ms, lat, long, city, country } = await fetch_coordenates(
        city_name ? city_name : "berlin"
      );
      if (error_ms) {
        setError_msg(error_ms);
      }
      setLatitude(lat);
      setLongitude(long);
      set_data_principal({ error_ms, lat, long, city, country });
    };

    late();
    //console.log(latitude, longitude);
  }, [city_name]);

  useEffect(() => {
    const fetchData = async (lat: number, long: number) => {
      //latitude y longitude de Madrid
      const params = {
        latitude: [lat],
        longitude: [long],
        current:
          "temperature_2m,weather_code,wind_speed_10m,wind_direction_10m",
        hourly: "temperature_2m,precipitation",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);
      // Helper function to form time ranges
      const range = (start: number, stop: number, step: number) =>
        Array.from(
          { length: (stop - start) / step },
          (_, i) => start + i * step
        );
      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];
      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();
      console.log({ timezone, timezoneAbbreviation, latitude, longitude });

      const current = response.current()!;
      const hourly = response.hourly()!;
      const daily = response.daily()!;
      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        current: {
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
          temperature: current.variables(0)!.value(), // Current is only 1 value, therefore `.value()`
          weatherCode: current.variables(1)!.value(),
          windSpeed: current.variables(2)!.value(),
          windDirection: current.variables(3)!.value(),
        },
        hourly: {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature: hourly.variables(0)!.valuesArray()!, // `.valuesArray()` get an array of floats
          precipitation: hourly.variables(1)!.valuesArray()!,
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
      // `weatherData` now contains a simple structure with arrays for datetime and weather data_principal
      for (let i = 0; i < weatherData.daily.time.length; i++) {
        console.log(
          weatherData.daily.time[i].toISOString(),
          weatherData.daily.weatherCode[i],
          weatherData.daily.temperatureMax[i],
          weatherData.daily.temperatureMin[i]
        );
      }
      set_data_secundaria(weatherData);
    };
    fetchData(latitude, longitude);
  }, [latitude, longitude]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setCity_name(m_name);
  }

  return (
    <div className="bg-blue-950 min-h-dvh text-white text-xs">
      <p>test!</p>
      <p>{error_msg}</p>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white p-1 text-black"
          type="text"
          placeholder="city name"
          onChange={(e) => setM_name(e.target.value)}
        />
        <button type="submit" className="bg-pink-400 p-1">
          search
        </button>
      </form>
      <div>
        <h1>primera peticion (coordenadas ,nombres de ciudad y pais)</h1>
        <pre>{JSON.stringify(data_principal, null, 2)}</pre>
        <h1>segunda peticion (data requerida de app)</h1>
        <pre>{JSON.stringify(data_secundaria, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

/* 

const params = {
	latitude: 52.52,
	longitude: 13.41,
	daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "temperature_2m_mean", "apparent_temperature_mean"],
	hourly: ["temperature_2m", "relative_humidity_2m", "wind_speed_10m", "precipitation_probability", "apparent_temperature", "weather_code"],
	current: "temperature_2m",
	timezone: "auto",
};
const url = "https://my-server.tld/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone: ${timezone} ${timezoneAbbreviation}`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const current = response.current()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
	},
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		relative_humidity_2m: hourly.variables(1)!.valuesArray(),
		wind_speed_10m: hourly.variables(2)!.valuesArray(),
		precipitation_probability: hourly.variables(3)!.valuesArray(),
		apparent_temperature: hourly.variables(4)!.valuesArray(),
		weather_code: hourly.variables(5)!.valuesArray(),
	},
	daily: {
		time: Array.from(
			{ length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() }, 
			(_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
		),
		weather_code: daily.variables(0)!.valuesArray(),
		temperature_2m_max: daily.variables(1)!.valuesArray(),
		temperature_2m_min: daily.variables(2)!.valuesArray(),
		temperature_2m_mean: daily.variables(3)!.valuesArray(),
		apparent_temperature_mean: daily.variables(4)!.valuesArray(),
	},
};
*/
