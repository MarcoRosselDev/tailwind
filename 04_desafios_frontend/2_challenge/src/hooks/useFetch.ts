import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err_message, setErr_message] = useState<null | string>(null);

  useEffect(() => {
    async function call_end() {
      try {
        const call = await fetch(url);
        if (!call.ok) {
          throw new Error("Error de la api fake api");
        }
        const data = (await call.json()) as T; // asi le decimos que cuando se convierta en json se comporte como el type FakeApi
        setData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log({ message: err.message });
          setErr_message(err.message);
          return;
        } else {
          console.log("error mas grave");
          setErr_message("error mas grave");
        }
      } finally {
        setIsLoading(false);
      }
    }
    call_end();
  }, []);

  return { data, isLoading, err_message };
}
