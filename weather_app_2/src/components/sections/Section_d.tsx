import { useState } from "react";
import c_to_f from "../../utils/c_to_f";
import { getWeatherCondition } from "../../utils/codigo_clima";

export default function Section_d({ info }: any) {
  let metricSistem = info.metricSistem;
  let hourly = info.weatherData.hourly;
  const [menuForecast, setMenuForecast] = useState(false);
  const [day, setDay] = useState(0);

  let hourly_formated = Array(7).fill(null);
  hourly_formated[0] = Array(8).fill(null);
  hourly_formated[1] = Array(8).fill(null);
  hourly_formated[2] = Array(8).fill(null);
  hourly_formated[3] = Array(8).fill(null);
  hourly_formated[4] = Array(8).fill(null);
  hourly_formated[5] = Array(8).fill(null);
  hourly_formated[6] = Array(8).fill(null);

  let arr_1 = info.weatherData.hourly.time;

  for (let i = 0; i < arr_1.length; i++) {
    let day = arr_1[i].getDay();
    let hour = arr_1[i].getHours();
    let temp = hourly.temperature_2m[i]?.toFixed(0);
    let temp_f = c_to_f(temp).toFixed(0);
    let index = hour - 15;
    let clima = getWeatherCondition(hourly.weather_code[i]);
    if (hour >= 15 && hour <= 22) {
      hourly_formated[day][index] = { day, hour, temp, temp_f, clima };
    }
  }

  function handleComps(day: number) {
    let comps = [];
    for (let i = 0; i < 8; i++) {
      comps.push(
        <D_compo
          key={i}
          forecast={hourly_formated[day][i].clima}
          hour={hourly_formated[day][i].hour}
          info={
            metricSistem
              ? hourly_formated[day][i].temp
              : hourly_formated[day][i].temp_f
          }
        />,
      );
    }
    return comps;
  }

  function handleDay(day: number) {
    setDay(day);
  }
  function dayConverter(day: number) {
    let day_converted = "";
    switch (day) {
      case 0:
        day_converted = "Monday";
        break;
      case 1:
        day_converted = "Tusday";
        break;
      case 2:
        day_converted = "Wednesday";
        break;
      case 3:
        day_converted = "Thusday";
        break;
      case 4:
        day_converted = "Friday";
        break;
      case 5:
        day_converted = "Saturday";
        break;
      case 6:
        day_converted = "Sunday";
        break;
      default:
        break;
    }
    return day_converted;
  }

  return (
    <div
      className="desktop:col-span-1 row-span-2
      bg-own-neutral-700 p-6 rounded-2xl "
    >
      {/* div transparente para que se cierre el menu nav si se clickea fuera de el */}
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-transparent ${
          menuForecast ? "" : "hidden"
        }`}
        onClick={() => setMenuForecast((prev) => !prev)}
      ></div>

      {/* header D whit nav */}
      <div className="flex flex-row justify-between  w-full relative">
        <h1 className="text-xl font-DM-bold">Hourly forecast</h1>
        <button
          onClick={() => setMenuForecast((prev) => !prev)}
          className="rounded-md bg-own-neutral-600 z-10 p-2.5 h-9 pl-3 pr-3 gap-3 flex text-sm items-center justify-between cursor-pointer focus:outline-own-neutral-200 focus:outline-2"
        >
          <p className="font-DM-semibold">{dayConverter(day)}</p>
          <img
            className="w-2.5 h-3"
            src="/images/icon-dropdown.svg"
            alt="imagen de el menu desplegable que representa un engranaje"
          />
        </button>
        <div
          className={`font-DM-semibold text-lg w-50 absolute right-0 border border-own-neutral-600 mt-10 z-10 p-2 rounded-xl bg-own-neutral-700 ${
            menuForecast ? "" : "hidden"
          }`}
        >
          <ul className="text-left">
            <li
              className={`${day === 0 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(0)}
            >
              Monday
            </li>
            <li
              className={`${day === 1 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(1)}
            >
              Tuesday
            </li>
            <li
              className={`${day === 2 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(2)}
            >
              Wednesday
            </li>
            <li
              className={`${day === 3 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(3)}
            >
              Thursday
            </li>
            <li
              className={`${day === 4 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(4)}
            >
              Friday
            </li>
            <li
              className={`${day === 5 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(5)}
            >
              Saturday
            </li>
            <li
              className={`${day === 6 ? "border border-own-neutral-600 bg-own-neutral-600 rounded-lg" : ""} p-2`}
              onClick={() => handleDay(6)}
            >
              Sunday
            </li>
          </ul>
        </div>
      </div>
      {/* comps */}
      {handleComps(day)}
    </div>
  );
}

function D_compo({ forecast, hour, info }: any) {
  return (
    <div
      className="flex justify-between p-4 w-full
bg-own-neutral-600 mt-4 rounded-lg text-lg"
    >
      {/* left */}
      <div className="flex items-center">
        <img
          src={`/images/icon-${forecast}.webp`}
          className="w-8 h-8 text-lg absolute"
          alt=""
        />
        <h1 className="font-DM-semibold ml-10.5">{hour}</h1>
      </div>
      {/* right */}
      <p className="font-DM-light text-[15px]">{info}°</p>
    </div>
  );
}
