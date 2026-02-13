import { useEffect, useState } from "react";
import type { Task_types } from "../types/Sortable_Types";

export default function Task({ prass, checked, handleDelete, id, handleStateCheck, showList, onInteractiveClick }: Task_types) {

  // el error anterior se devia a que el checked state tenia el mismo nombre
  // esto generaba los comportamientos indeseados
  const [state, setState] = useState(checked);

  useEffect(() => {
    setState(checked);
  }, [checked]);

  function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    
    // Usar el nuevo estado inmediatamente
    handleStateCheck(id);
    
    if (onInteractiveClick) {
      // Necesitamos crear un evento de mouse para onInteractiveClick
      const mouseEvent = e as unknown as React.MouseEvent;
      onInteractiveClick(mouseEvent);
    }
  }

  function handleDeleteClick(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    handleDelete(id);
    if (onInteractiveClick) {
      onInteractiveClick(e);
    }
  }

  const checkActive = showList === "All" || (showList === "Active" && checked === false);
  const checkInactives = showList === "Completed" && checked;

  return (
    <div
      className={`
        ${checkInactives ? "" : checkActive ? "" : "hidden"}
        flex  border-b border-b-primary-gray-300  w-full p-4
        dark:border-b-primary-navy-850 group
      `}
      onMouseDown={(e) => {
        // Solo permitir drag si se hace click en áreas no interactivas
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'BUTTON' || target.closest('button')) {
          e.preventDefault();
        }
      }}
    >
      <input
        type="checkbox"
        /* name={`checkbox-${id}`}
        id={`checkbox-${id}`} */
        checked={state}
        onChange={handleChecked}  // Cambiado de onClick a onChange
        className="
          appearance-none w-5 h-5 rounded-full border border-gray-300 
          checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
          bg-center bg-no-repeat
          focus:outline-none 
          transition-colors
          duration-200
          cursor-pointer
          focus:border-primary-gray-600
          dark:focus:border-primary-navy-850
          dark:border-primary-navy-850
        "
        onMouseDown={(e) => {
          e.stopPropagation();
          if (onInteractiveClick) {
            onInteractiveClick(e);
          }
        }}
        // También añadir onClick para compatibilidad (opcional)
        onClick={(e) => e.stopPropagation()}
      />
      <div className="ml-3 flex w-full justify-between relative ">
        <p
          className={`font-josefine-400 font-semibold
            ${checked ? "text-primary-gray-300 line-through decoration-primary-gray-600 dark:text-primary-navy-850" : "text-primary-gray-600"}
          `}
        >
          {prass}
        </p>
        <button 
          className="
          absolute right-0 inset-y-0
          w-12 
          flex items-center justify-end
          cursor-pointer
          "
          onClick={handleDeleteClick}
          onMouseDown={(e) => {
            e.stopPropagation();
            if (onInteractiveClick) {
              onInteractiveClick(e);
            }
          }}
        >
          <img
            src="/images/icon-cross.svg"
            className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            alt="icon of a cross"
          />
        </button>
      </div>
    </div>
  );
}