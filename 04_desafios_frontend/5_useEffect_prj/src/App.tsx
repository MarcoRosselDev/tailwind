import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hi man, what'up");
  }, [count]);

  return (
    <div className="h-dvh bg-blue-900">
      <button
        className="border p-3 bg-black text-white"
        onClick={() => setCount((prev) => (prev += 1))}
      >
        count : {count}
      </button>
    </div>
  );
}

export default App;
