import format_date from "../utils/format_date.ts";
import { getWeatherCondition } from "../utils/codigo_clima.ts";
import Card from "./Card.tsx";

type A = {
  country: string | undefined;
  city: string | undefined;
  date: Date | undefined;
  weather_code: number | undefined;
  temperature: number | undefined;
};

export default function A({
  city,
  country,
  date,
  temperature,
  weather_code,
}: A) {
  const f_data = format_date(date);

  let clima;
  if (weather_code) {
    clima = getWeatherCondition(weather_code);
  } else {
    clima = "suny";
  }

  return (
    <Card>
      <h1>seccion A</h1>
      <p>{city}</p>
      <p>{country}</p>
      <p>{f_data}</p>
      <p>{temperature}</p>
      <p>{clima}</p>
    </Card>
  );
}
