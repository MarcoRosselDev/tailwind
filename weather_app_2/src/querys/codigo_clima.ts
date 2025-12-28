// Ejemplo de función traductora simple
export function traducirClima(codigo: number) {
  const mapaClima = {
    0: "Soleado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    61: "Lluvia leve",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    95: "Tormenta eléctrica",
    // ... agrega todos los códigos que necesites
  };
  console.log(mapaClima[1]);

  //return mapaClima[codigo] || "Código desconocido";
}

// Uso:
//let descripcionClima = traducirClima(respuestaAPI.current.weather_code);
//console.log(`El clima actual es: ${descripcionClima}`); // Ej: "Lluvia moderada"

traducirClima(2);
