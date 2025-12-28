const weatherCodeMap = {
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
  3: "over-cast",
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

export function getWeatherCondition(code) {
  // Acceso directo O(1) al valor
  const condition = weatherCodeMap[code];

  // Si no encuentra el código, devolvemos un valor por defecto
  if (!condition) {
    console.warn(
      `Código meteorológico desconocido: ${code}. Usando valor por defecto.`
    );
    return "partly-cloudy"; // o 'unknown' si defines ese tipo
  }

  return condition;
}

console.log(getWeatherCondition(0));
console.log(getWeatherCondition(1));
console.log(getWeatherCondition(75));
console.log(getWeatherCondition(999));

const obj = {
  0: 3,
  1: 61,
  2: 2,
  3: 85,
  4: 71,
  5: 71,
  6: 3,
};
console.log(obj.length);

for (let i = 0; i < obj.length; i++) {
  console.log("asdf");
}
