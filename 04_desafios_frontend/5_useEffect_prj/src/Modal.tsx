import { useEffect } from "react";

export function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("contador o temporizador iniciado");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("temporizador detenido");
    };
  }, []);

  return (
    <div className="border bg-pink-300 text-blue-700 p-3 absolute top-10">
      <p>item 1</p>
      <p>item 2</p>
      <p>item 3</p>
    </div>
  );
}
