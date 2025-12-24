import type { MetricObject } from "./types";
import BodySearch from "./BodySearch";
import searchWeather from "../hooks/searchWeather";
import searchCoordenates from "../hooks/searchCoordenates";
import { useEffect, useState } from "react";
import weather from "../hooks/weather2";
import type { MainObj } from "../types/location_types";

type MyMainProps = {
  metricS: MetricObject;
};

export default function MyMain({ metricS }: MyMainProps) {
  const [data, setData] = useState<MainObj | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err_message, setErr_message] = useState<null | string>(null);

  //const [menuForecast, setMenuForecast] = useState(false);

  /* const { data, err_message, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ); */

  useEffect(() => {
    const result = searchCoordenates("berlin");
    if (result?.coordenadas.latitude) {
      console.log("this is first", result.coordenadas.latitude);
      const { data, isLoading, err_message } = weather(
        result.coordenadas.latitude,
        result.coordenadas.longitude
      );
      if (err_message) {
        setErr_message(err_message);
        return;
      }
      setData({ data, isLoading, err_message });
      setIsLoading(isLoading);
    }
  }, []);
  //const { data, isLoading, err_message } = searchCoordenates("berlin");

  if (isLoading)
    return (
      <main className="pt-10 w-full desktop:max-w-[1300px]">
        <div className="text-center">
          {/* si todo va bien primero el buscador */}
          <p>cargando...</p>
          {/*end main grid */}
        </div>
      </main>
    );

  if (!data || err_message) {
    return (
      <main className="pt-10 w-full desktop:max-w-[1300px]">
        <div className="text-center">
          {/* si todo va bien primero el buscador */}
          <p>Error : {err_message}</p>
          {/*end main grid */}
        </div>
      </main>
    );
  }

  return (
    <main className="pt-10 w-full desktop:max-w-[1300px]">
      {/* primero la logica si la API responde, sino retornar un div de error de API
      esta logica es posible por que el header se muestra si o si,segun el diseño espesificado */}
      <div className="text-center">
        {/* si todo va bien primero el buscador */}
        <BodySearch />
        {/*end main grid */}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <p>{metricS.sistem}</p>
      <p>{metricS.temperature}</p>
      <p>{metricS.windPeed}</p>
      <p>{metricS.precipitation}</p>
      <p>boton hourly forecast activo o no :{menuForecast.toString()}</p> */}
    </main>
  );
}
