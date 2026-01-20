import c_to_f from "../../utils/c_to_f";
import kph_to_mph from "../../utils/kph_to_mph";
import mm_to_in from "../../utils/mm_to_in";

function B_comp({ info, title }: any) {
  return (
    <div className="p-5 bg-own-neutral-700 rounded-xl h-30 flex flex-col items-start justify-between">
      <p className="text-lg ">{title}</p>
      <h1 className="font-DM">{info}</h1>
    </div>
  );
}

export default function Section_b({ info }: any) {
  let metricSistem = info.metricSistem;
  let humedity = info.weatherData.current.relative_humidity_2m;
  let wind_c = info.weatherData.current.wind_speed_10m;
  let wind = metricSistem ? wind_c.toFixed(0) : kph_to_mph(wind_c).toFixed(0);
  let feels_like_celcius = info.weatherData.current.apparent_temperature;
  let feels_like = metricSistem
    ? feels_like_celcius.toFixed(0)
    : c_to_f(feels_like_celcius).toFixed(0);

  //console.log(info);
  let mm = info.weatherData.current.precipitation;
  let precipitation = metricSistem ? mm.toFixed(0) : mm_to_in(mm).toFixed(0);

  return (
    <div className="grid grid-cols-2 gap-4 mt-3 desktop-2:grid-cols-4 desktop-2:row-span-1">
      <B_comp info={`${feels_like}°`} title="Feels Like" />
      <B_comp info={`${humedity}%`} title="Humidity" />
      <B_comp info={`${wind} ${metricSistem ? "km/h" : "mph"}`} title="Wind" />
      <B_comp
        info={`${precipitation} ${metricSistem ? "mm" : "in"}`}
        title="Precipitation"
      />
    </div>
  );
}
