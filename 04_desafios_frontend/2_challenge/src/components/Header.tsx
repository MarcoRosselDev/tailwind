import { useState } from "react";

const Header = () => {
  // 1. Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Tu logo y otros elementos del header aquí */}

        {/* 2. Botón para abrir/cerrar el menú (ícono hamburguesa) */}
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {/* Icono de hamburguesa - puedes reemplazarlo */}
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </button>

        {/* 3. Menú de navegación principal para escritorio */}
        <nav className="hidden md:block">
          {/* Enlaces de navegación para pantallas grandes */}
        </nav>
      </div>

      {/* 4. Menú desplegable para móviles */}
      {/* Contenedor principal con posición absoluta */}
      <div className="absolute w-full md:hidden">
        {/* 
                  Overlay semi-transparente (opcional).
                  Se muestra solo cuando el menú está abierto.
                */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-10"
            onClick={toggleMenu} // Cierra el menú al tocar fuera
          ></div>
        )}

        {/* 
                  El menú en sí.
                  Las clases clave controlan la posición y la animación.
                */}
        <nav
          className={`
                        fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-20
                        transform transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
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
    </header>
  );
};

export default Header;
