import { useEffect, useState } from "react";
import NavHeader from "./components/NavHeader";
//import type { MetricObject } from "./types/header_types";
//import getData from "./utils/getData";
import Api_error from "./components/Api_error";
import Main_app from "./components/Main_app";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retry, setRetry] = useState(0);

  // si metricSistem = true ===> Celcius else Farenheit
  const [metricSistem, setMetricSistem] = useState<Boolean>(true);

  function handleMetricSistem() {
    setMetricSistem((prev) => !prev);
  }

  async function getData(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let data_json = await response.json();
        setData(data_json);
      } else {
        throw new Error("Error de la api fake api");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log({ message: err.message });
        return;
      } else {
        console.log("error mas grave");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/todos/12398123");
  }, []);

  function handleRetry() {
    setRetry((prev) => prev++);
    setIsLoading(true);
    console.log(retry);
    getData("https://jsonplaceholder.typicode.com/todos/1");
  }

  return (
    <div className="bg-own-neutral-900 font-DM-light min-h-screen text-own-neutral-200 p-4 text-sm flex flex-col justify-top items-center">
      <NavHeader HMS={handleMetricSistem} metricS={metricSistem} />
      {isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <Main_app data={data} />
      ) : (
        <Api_error retryFn={handleRetry} />
      )}
    </div>
  );
}
