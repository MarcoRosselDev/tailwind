import { useRef, type FormEvent } from "react";
import type { FormularioProps } from "../types/FormularioProps";

export default function Formulario({idCounter, handleCount, data, setLocalStorageData, handleSetData}: FormularioProps) {
  const formulario = useRef<null | HTMLFormElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (formulario.current) {
      const datos = new FormData(formulario.current);
      const objetoDatos: any = Object.fromEntries([...datos.entries()]);

      // console.log(objetoDatos);
      if (!objetoDatos.task.trim()) {
        return console.log("vacío");
      }

      const isChecked = objetoDatos.check === "on";

      let newTask = {
        pr: objetoDatos.task,
        id: idCounter,
        //checked: objetoDatos.check ? objetoDatos.check : false,
        checked: isChecked,
      };
      handleCount()

      let prev = [...data];
      prev.push(newTask);
      handleSetData(prev);
      setLocalStorageData(prev);

      formulario.current.reset();
    }
  }


  return (
    <div>
      <form
        ref={formulario}
        className=" bg-primary-gray-50 p-4 flex
      gap-3 rounded-sm items-center h-13"
        onSubmit={handleSubmit}
      >
        <input
          type="checkbox"
          name="check"
          className="
          appearance-none w-5 h-5 rounded-full border border-gray-300 
          checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
          bg-center bg-no-repeat
          focus:outline-none 
          transition-colors
          duration-200
          cursor-pointer
          focus:border-primary-gray-600"
        />
        <input
          type="text"
          name="task"
          id=""
          placeholder="Create a new todo..."
          className="bg-primary-gray-50 w-full"
        />
      </form>
    </div>
  )
  
}