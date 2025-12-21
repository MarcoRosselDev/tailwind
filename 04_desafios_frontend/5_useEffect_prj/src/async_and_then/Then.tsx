import { useEffect, useState } from "react";

type FakeApi = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
function App() {
  const [data, setData] = useState<FakeApi | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err_message, setErr_message] = useState<null | string>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error en la API, o error controlado");
      })
      .then((res_json: FakeApi) => {
        setData(res_json);
        return;
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.log({ message: err.message });
          setErr_message(err.message);
          return;
        } else {
          console.log("error mas grave");
          setErr_message("error mas grave");
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (err_message) return <p>error : {err_message}</p>;
  if (isLoading || !data) return <p>cargando...</p>;

  return (
    <div className="h-dvh bg-blue-900">
      {/* main div */}
      <div>
        <p>{data.completed}</p>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.userId}</p>
      </div>
    </div>
  );
}

export default App;

/* 
const [menu, setMenu] = useState(false);
  const [data, setData] = useState<null | FakeApi>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState<boolean | string>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/4")
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) setData(json);
        throw new Error("error en el servidor");
      })
      .catch((e) => {
        if (e instanceof Error) {
          setErrorState(e.message);
          return;
        }
        setErrorState("error mas grave");
        console.log("error mas grave");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Is Loading ...</p>;
  if (errorState) return <p>error : {errorState}</p>;

  if (!data) return <p>no data amiguito</p>;
*/
