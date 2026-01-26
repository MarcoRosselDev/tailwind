import { useState } from "react";

export default function Switch({
  id,
  inicialState,
  handleDt,
}: {
  id: number;
  inicialState: boolean;
  handleDt: (index: number, bool: boolean) => void;
}) {
  const [activo, setActivo] = useState(inicialState);

  const manejarClick = () => {
    const nuevoEstado = !activo;
    setActivo(nuevoEstado);
    // hacer algo mas
    handleDt(id, nuevoEstado);
  };
  return (
    <button
      type="button"
      className={`
          w-10 h-5
          ${activo ? "bg-ks-red-700" : "bg-ks-nautral-300"}
          relative inline-flex items-center rounded-full
          transition-colors duration-300 ease-in-out
          focus:outline-none
          cursor-pointer
        `}
      onClick={manejarClick}
      aria-checked={activo}
      role="switch"
    >
      <span
        className={`
            w-4 h-4
            transform ${activo ? "translate-x-6" : "translate-x-1"}
            bg-white rounded-full shadow-md
            transition-transform duration-300 ease-in-out
          `}
      />
    </button>
  );
}
