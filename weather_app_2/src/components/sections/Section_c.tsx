import c_to_f from "../../utils/c_to_f";
import { getWeatherCondition } from "../../utils/codigo_clima";
import only_day from "../../utils/only_day";

export default function Section_c({ info }: any) {
  let metricSistem = info.metricSistem;
  let daily = info.weatherData.daily;

  let cs = [];
  for (let i = 0; i < 7; i++) {
    let day = only_day(daily.time[i]);
    let clima = getWeatherCondition(daily.weatherCode[i]);
    let min_c = daily.temperatureMin[i].toFixed(0);
    let max_c = daily.temperatureMax[i].toFixed(0);
    let min = metricSistem ? min_c : c_to_f(min_c).toFixed(0);
    let max = metricSistem ? max_c : c_to_f(max_c).toFixed(0);
    let comp = <C_comp day={day} max={max} min={min} wheater={clima} key={i} />;
    cs.push(comp);
  }

  return (
    <div>
      <h1 className="text-left">Daily forecast</h1>
      <div
        className="grid grid-cols-3 gap-4 grid-rows-3
      desktop-2:grid-cols-7 desktop-2:grid-rows-1"
      >
        {cs}
        {/* <C_comp day="Tue" max={68} min={57} wheater="snow" />
        <C_comp day="Wed" max={68} min={57} wheater="rain" />
        <C_comp day="Thu" max={68} min={57} wheater="snow" />
        <C_comp day="Fri" max={68} min={57} wheater="storm" />
        <C_comp day="Sat" max={68} min={57} wheater="sunny" />
        <C_comp day="Sun" max={68} min={57} wheater="rain" />
        <C_comp day="Mon" max={68} min={57} wheater="storm" /> */}
      </div>
    </div>
  );
}

function C_comp({ day, wheater, min, max }: any) {
  return (
    <div
      className=" bg-own-neutral-700 rounded-xl w-full p-3 h-43
      flex flex-col items-center justify-between
      text-lg 
    "
    >
      <p className="font-DM-semibold">{day}</p>
      <img
        src={`/images/icon-${wheater}.webp`}
        className="w-13 h-13 "
        alt="image of a storm"
      />
      <div className="flex justify-between w-full">
        <p className="font-DM-semibold">{min}°</p>
        <p>{max}°</p>
      </div>
    </div>
  );
}
