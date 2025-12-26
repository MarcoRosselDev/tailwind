import type { MetricObject } from "./types";
import BodySearch from "./BodySearch";
import searchCoordenates from "../hooks/searchCoordenates";
import { useEffect, useState } from "react";
import fetch_coordenadas from "../sec_try/fetch_coordenadas";
import fetch_weather from "../sec_try/fetch_weather";

type MyMainProps = {
  metricS: MetricObject;
};

export default function MyMain({ metricS }: MyMainProps) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err_message, setErr_message] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const c_later = async (city: string) => {
      const { d, err_m } = await fetch_coordenadas(city);
      //setData({ d });
      setErr_message(err_m);
      //setIsLoading(false);
      setLatitude(d?.latitude);
      setLongitude(d?.longitude);
    };
    c_later("berlin");
  }, []);
  //const { data, isLoading, err_message } = searchCoordenates("berlin");

  useEffect(() => {
    const c_laterr = async () => {
      const { d, err_m } = await fetch_weather(latitude, longitude);
      setData({ d });
      setErr_message(err_m);
      setIsLoading(false);
    };
    c_laterr();
  }, [latitude, longitude]);

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
        <BodySearch data={data} />
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
