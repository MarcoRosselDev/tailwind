import c_to_f from "../../utils/c_to_f";
import { getWeatherCondition } from "../../utils/codigo_clima";
import format_date from "../../utils/format_date";

export default function Section_a({ info }: any) {
  let metricSistem = info.metricSistem;
  let current = info.weatherData.current;
  let coordenates = info.coordenates;
  let city = coordenates.name;
  let country = coordenates.country;
  let weather_code = current.weather_code;
  let weather = getWeatherCondition(weather_code);
  let date_base = current.time;
  let date = format_date(date_base);
  let temperature = metricSistem
    ? current.temperature_2m.toFixed(0)
    : c_to_f(current.temperature_2m).toFixed(0);
  return (
    <div
      className="rounded-4xl desktop:rounded-2xl  bg-no-repeat desktop:justify-between desktop:p-6
      bg-[url(/images/bg-today-small.svg)] bg-contain desktop:bg-cover bg-center desktop:bg-[url(/images/bg-today-large.svg)] desktop:bg-image-desktop  h-77.5 desktop-2:h-71.25 flex flex-col justify-center desktop:flex-row"
    >
      {/* A desktop izquierda */}
      <div className=" pt-3 flex flex-col desktop:items-start justify-center">
        <h1 className="font-DM-bold">
          {city}, {country}
        </h1>
        <p className="text-lg mt-2 font-DM">{date}</p>
      </div>
      {/* A desktop deracha */}
      <div className="flex justify-center pt-4 items-center">
        <img
          src={`/images/icon-${weather}.webp`}
          alt="sun image"
          className="w-30 h-30"
        />
        <h1 className="text-[95px] font-DM-semibold-italic">{temperature}°</h1>
      </div>
    </div>
  );
}
