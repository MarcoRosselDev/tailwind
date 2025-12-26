# Logica en la peticion API

la documentacion de open-meteo API no procesa las llamadas por nombre de ciudad o pais, en su lugar utiliza las coordenadas latitud y longitud.  
Por los que se requiere una llamada previa de la misma API pero que proporciona la funionalidad de entregar la latitud y longitud si le damos el nomber de una ciudad.

```javascript
// url ciudad to coordenadas
fetch("https://geocoding-api.open-meteo.com/v1/search?name=[NOMBRE_DE_LA_CIUDAD]&count=1")
// retorna un json:
{
  "results": [
    {
      "id": 3117735,
      "name": "Madrid",
      "latitude": 40.4165,
      "longitude": -3.70256,
      ...
    }
  ]
}
// luego utilizamos esta info para llamar a la URL API principal
fetch("https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.70256&current=temperature_2m,wind_speed_10m&hourly=temperature_2m")

// reorna otro json, pero ahora con la info que necesitamos
{
  "latitude": -38.75,
  "longitude": -72.625,
  "generationtime_ms": 0.06401538848876953,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 109.0,
  "current_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature_2m": "°C",
    "wind_speed_10m": "km/h"
  },
  "current": {
    "time": "2025-12-17T07:45",
    "interval": 900,
    "temperature_2m": 11.9,
    "wind_speed_10m": 5.9
  },
  "hourly_units": {
    "time": "iso8601",
    "temperature_2m": "°C"
  }, ...
}
```

# AI HELPS

solicite ayuda en la parte de el llamado a la API para que me prepare la url con la informacion que solicita el proyecto
el input fue el siguiente:

```javascript
/* quiero realizar una peticion a la api de clima https://open-meteo.com/ , pero tengo que customizar la url para que solicite los siguientes datos:
Feels Like,
Humidity,
wind,
precipitation,
Hourly forecast (de este necesito 8 horas seguidas ,por ejemplo 8pm, 9pm, ... y asi),
Daily forecast (de este necesito los 7 siguientes dias a partir del dia actual).
de toda esta informacion quiero saber si se puede solicitar en Fahrengheit y Celsius o tengo que escoger uno de los dos por peticion.
el tema de la longitud y latitude lo tengo solucionado realizando una peticion previa, por ahora se que devo solicitar la informacion de la siguiente forma:
un fetch a el link https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
 y luego encadenar los parametros que te mencione previamente con un &, puedes ayudarme? */
```

el output fue excelente y resumio toda la documentacion en la siguiente url:

```javascript
// URL construida con los parámetros
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41
    &hourly=apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m
    &daily=apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max
    &forecast_hours=8
    &forecast_days=7
    &temperature_unit=fahrenheit
    &wind_speed_unit=mph
    &precipitation_unit=inch
    &timezone=auto`;
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
