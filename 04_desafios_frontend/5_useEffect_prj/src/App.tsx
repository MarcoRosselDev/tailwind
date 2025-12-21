import useFetch from "./hook/useFetch";

type FakeApi = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const { data, err_message, isLoading } = useFetch<FakeApi>(
    "https://jsonplaceholder.typicode.com/todos/4"
  );

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
