import { useState } from "react";

export default function SwitchButton({
  inicialActivo = false,
  etiquetaActivo = "Activado",
  etiquetaInactivo = "Desactivado",
  colorActivo = "bg-red-600",
  colorInactivo = "bg-gray-300",
  tamano = "medio",
  //onCambio = () => {}
}) {
  const [activo, setActivo] = useState(inicialActivo);

  // Configuración de tamaños
  const tamaños = {
    pequeño: {
      contenedor: "w-10 h-5",
      circulo: "w-4 h-4",
      traslacion: "translate-x-6",
      texto: "text-xs",
    },
    medio: {
      contenedor: "w-16 h-8",
      circulo: "w-7 h-7",
      traslacion: "translate-x-8",
      texto: "text-sm",
    },
    grande: {
      contenedor: "w-20 h-10",
      circulo: "w-9 h-9",
      traslacion: "translate-x-10",
      texto: "text-base",
    },
  };

  const { contenedor, circulo, traslacion, texto } =
    tamaños["pequeño"] || tamaños.medio;

  const manejarClick = () => {
    const nuevoEstado = !activo;
    setActivo(nuevoEstado);
    //onCambio();
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        className={`
          ${contenedor}
          ${activo ? colorActivo : colorInactivo}
          relative inline-flex items-center rounded-full
          transition-colors duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
          cursor-pointer
        `}
        onClick={manejarClick}
        aria-checked={activo}
        role="switch"
      >
        <span
          className={`
            ${circulo}
            transform ${activo ? traslacion : "translate-x-1"}
            bg-white rounded-full shadow-md
            transition-transform duration-300 ease-in-out
          `}
        />
      </button>

      <span className={`font-medium ${texto}`}>
        {activo ? etiquetaActivo : etiquetaInactivo}
      </span>
    </div>
  );
}

// Ejemplo de uso del componente
/* export default function App() {
  const manejarCambio = (nuevoEstado) => {
    console.log(`Switch cambiado a: ${nuevoEstado ? 'Activado' : 'Desactivado'}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Componente Switch Personalizable</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700">Ejemplos de Switch</h2>
        
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-2">Switch básico (activado por defecto):</p>
            <SwitchButton 
              inicialActivo={true}
              onCambio={manejarCambio}
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Switch con etiquetas personalizadas:</p>
            <SwitchButton 
              etiquetaActivo="ON"
              etiquetaInactivo="OFF"
              onCambio={manejarCambio}
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Diferentes tamaños:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span>Pequeño:</span>
                <SwitchButton 
                  tamano="pequeño"
                  onCambio={manejarCambio}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span>Medio:</span>
                <SwitchButton 
                  tamano="medio"
                  onCambio={manejarCambio}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span>Grande:</span>
                <SwitchButton 
                  tamano="grande"
                  onCambio={manejarCambio}
                />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Switch con colores personalizados:</p>
            <SwitchButton 
              colorActivo="bg-green-600"
              colorInactivo="bg-gray-400"
              etiquetaActivo="Conectado"
              etiquetaInactivo="Desconectado"
              onCambio={manejarCambio}
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Switch desactivado inicialmente:</p>
            <SwitchButton 
              inicialActivo={false}
              onCambio={manejarCambio}
            />
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-1">Estado actual del switch principal:</p>
          <p className="text-sm text-gray-600">
            El switch cambia entre estados al hacer clic. Cuando está activo, el círculo se desplaza hacia la derecha y el fondo se vuelve rojo (o el color que hayas configurado).
          </p>
        </div>
      </div>
    </div>
  );
} */
