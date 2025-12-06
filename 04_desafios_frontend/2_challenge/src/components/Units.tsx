import { useState } from "react";
import icon_units from "../assets/images/icon-units.svg";
import icon_dropdown from "../assets/images/icon-dropdown.svg";

export default function Units() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="flex gap-2 p-2 pl-2.5 pr-2.5 focus:outline-none border border-neutral-600 rounded-lg bg-neutral-800"
        aria-label="Toggle menu"
      >
        {/* interior del boton */}
        <img src={icon_units} alt="icono de configuracion" />
        <p>Units</p>
        <img
          src={icon_dropdown}
          alt="icono de configuracion"
          /* className="animate-bounce" */
        />
      </button>
      <div className="absolute w-full  border border-amber-300">
        {/* 
          Overlay semi-transparente (opcional).
          Se muestra solo cuando el menú está abierto.
        */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-10"
            onClick={toggleMenu} // Cierra el menú al tocar fuera
          ></div>
        )}

        {/* 
          El menú en sí.
          Las clases clave controlan la posición y la animación.
        */}
        <nav
          className={`
                fixed h-auto w-48 bg-neutral-600  right-4
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-2" : "translate-x-full"}
            `}
        >
          {/* Contenido del menú */}
          <div className="p-6">
            <button
              onClick={toggleMenu}
              className="mb-6 p-2 hover:bg-gray-100 rounded"
              aria-label="Close menu"
            >
              ✕ {/* Icono de cierre */}
            </button>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 hover:text-blue-600">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-blue-600">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-blue-600">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-blue-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
