//import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState, type FormEvent } from "react";
import fetch_coordenates from "./querys/fetch_coordenates";
import { fetch_weather } from "./querys/fatch_weather";
import type { TypeCoordenate } from "./types/type_coordenates";
import type { Weather_data } from "./types/type_weather";

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
  const [data_principal, set_data_principal] = useState<null | TypeCoordenate>(
    null
  );
  const [data_secundaria, set_data_secundaria] = useState<null | Weather_data>(
    null
  );
  const [city_name, setCity_name] = useState<string | null>(null);
  const [m_name, setM_name] = useState<string | null>(null); //nomber momentanio para no saturar de solicitudes
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error_msg, setError_msg] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

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

  function handler_secundary_data(data: any) {
    set_data_secundaria(data);
  }

  useEffect(() => {
    if (latitude == 0 || longitude == 0) {
      return;
    } else {
      fetch_weather(latitude, longitude, handler_secundary_data);
    }
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

      {/* prueba de estados e informacion */}
      <div>
        {!loading && data_principal !== null ? (
          <p>cargando...</p>
        ) : (
          <div>
            <p>{data_principal?.city}</p>
            <p>{data_principal?.country}</p>
            <p>
              Hoy tenemos una temperatuda de{" "}
              {data_secundaria?.current.temperature_2m} C°
            </p>
            <p>codigo de clima : {data_secundaria?.current.weather_code}</p>
          </div>
        )}
      </div>

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
