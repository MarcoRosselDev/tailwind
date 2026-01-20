export type WeatherCondition =
  | "sunny"
  | "partly-cloudy"
  | "overcast"
  | "drizzle"
  | "rain"
  | "snow"
  | "storm"
  | "fog";

const weatherCodeMap: Record<number, WeatherCondition> = {
  0: "sunny",
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  56: "drizzle",
  57: "drizzle",
  45: "fog",
  48: "fog",
  1: "partly-cloudy",
  2: "partly-cloudy",
  3: "overcast",
  61: "rain",
  63: "rain",
  65: "rain",
  66: "rain",
  67: "rain",
  80: "rain",
  81: "rain",
  82: "rain",
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snow",
  85: "snow",
  86: "snow",
  95: "storm",
  96: "storm",
  99: "storm",
};

export function getWeatherCondition(code: number): WeatherCondition {
  // Acceso directo O(1) al valor
  const condition = weatherCodeMap[code];

  // Si no encuentra el código, devolvemos un valor por defecto
  if (!condition) {
    console.warn(
      `Código meteorológico desconocido: ${code}. Usando valor por defecto.`,
    );
    return "partly-cloudy"; // o 'unknown' si defines ese tipo
  }

  return condition;
}

/* // Ejemplo de función traductora simple
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

const codigos = {
  0:"sunny",
  51:"drizzle", 
  53:"drizzle", 
  55:"drizzle", 
  56:"drizzle", 
  57:"drizzle", 
  45:"fog", 
  48:"fog", 
  1:"partly-cloudy", 
  2:"partly-cloudy", 
  3:"over-cast", 
  61:"rain", 
  63:"rain", 
  65:"rain", 
  66:"rain", 
  67:"rain", 
  80:"rain", 
  81:"rain", 
  82:"rain", 
  71:"snow", 
  73:"snow", 
  75:"snow", 
  77:"snow", 
  85:"snow", 
  86:"snow", 
  95:"storm", 
  96:"storm", 
  99:"storm", 
}
 */
