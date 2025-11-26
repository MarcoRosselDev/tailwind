export default function Medidas() {
  return (
    // medidas especiales con --spacing-[nombre x]: nnn px;
    // para limitarlo solo a width --width-[nombre x] : nn px;
    // util para no tener conflictos con otras variables en css con el mismo nombre
    <div className="bg-red-500 w-marc h-123">
      <p className="h-full">medidas</p>
    </div>
  );
}

// h-scren = height: 100vh <---- 100% de la ventana
// h-full = height: 100%; <---- 100% de su contenedor
