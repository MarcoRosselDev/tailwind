import type { MetricObject } from "./types";
import C_comp from "./C_comp";
import B_comp from "./B_comp";
import A_comp from "./A_comp";
import { useState } from "react";
import D_compo from "./D_comp";

type MyMainProps = {
  metricS: MetricObject;
};

export default function MyMain({ metricS }: MyMainProps) {
  const [menuForecast, setMenuForecast] = useState(false);

  return (
    <main className="pt-10 w-full desktop:max-w-[1300px]">
      {/* primero la logica si la API responde, sino retornar un div de error de API
      esta logica es posible por que el header se muestra si o si,segun el diseño espesificado */}
      <div className="text-center">
        {/* si todo va bien primero el buscador */}
        <h1 className="font-bricolage-b text-[49px] p-6 leading-tight">
          How's the sky looking today?
        </h1>
        {/* form */}
        <div className="flex w-full justify-center">
          <form className="mt-5 flex text-[20px] w-full font-DM-semibold flex-col gap-3 desktop:flex-row max-w-[610px]">
            <div className="flex gap-3 w-full p-3 focus-within:outline cursor-pointer text-own-neutral-0  bg-own-neutral-700 rounded-xl">
              <img
                src="/images/icon-search.svg"
                className="w-5.5 ml-2"
                alt="icono de lupa"
              />
              <input
                type="text"
                name="search"
                className="outline-none  w-55 desktop:w-auto"
                placeholder="Seach for a place..."
              />
            </div>
            <button className="cursor-pointer bg-own-blue-500 w-full p-3  rounded-xl desktop:max-w-[120px]">
              Search
            </button>
          </form>
        </div>
        {/* main grid */}

        <div
          className="grid grid-cols-1 
        desktop-2:grid-cols-3 desktop-2:grid-rows-2 mt-10 text-3xl w-full gap-6"
        >
          {/* izquierda a, b,c */}
          <div
            className="desktop-2:col-span-2 desktop-2:row-span-2
          grid grid-cols-1 desktop-2:gap-1
          col-span-1
          "
          >
            {/* A */}
            <div
              className="rounded-4xl desktop:rounded-2xl  bg-no-repeat desktop:justify-between desktop:p-6
                  bg-[url(/images/bg-today-small.svg)] bg-contain desktop:bg-cover bg-center desktop:bg-[url(/images/bg-today-large.svg)] desktop:bg-image-desktop  h-[310px] desktop-2:h-[285px] flex flex-col justify-center desktop:flex-row"
            >
              <A_comp
                city="Berlin"
                country="Germany"
                date="Tusday, Aug 5, 2025"
                temperature="68°"
                wheater="storm"
              />
            </div>
            {/* fin A */}

            {/* B y C juntos */}
            <div className="pt-0 desktop-2:h-[400px] flex flex-col justify-between ">
              {/* B */}
              <div className="grid grid-cols-2 gap-4 mt-3 desktop-2:grid-cols-4 desktop-2:row-span-1">
                <B_comp info="64°" title="Feels Like" />
                <B_comp info="46%" title="Humidity" />
                <B_comp info="9 mph" title="Wind" />
                <B_comp info="0 in" title="Precipitation" />
              </div>
              <div>
                <h1 className="text-left">Daily forecast</h1>
                <div
                  className="grid grid-cols-3 gap-4 grid-rows-3
              desktop-2:grid-cols-7 desktop-2:grid-rows-1"
                >
                  <C_comp day="Tue" max={68} min={57} wheater="snow" />
                  <C_comp day="Wed" max={68} min={57} wheater="rain" />
                  <C_comp day="Thu" max={68} min={57} wheater="snow" />
                  <C_comp day="Fri" max={68} min={57} wheater="storm" />
                  <C_comp day="Sat" max={68} min={57} wheater="sunny" />
                  <C_comp day="Sun" max={68} min={57} wheater="rain" />
                  <C_comp day="Mon" max={68} min={57} wheater="storm" />
                </div>
              </div>
            </div>
          </div>
          {/* derecha d */}
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
                <p className="font-DM-semibold">Tuesday</p>
                <img
                  className="w-2.5 h-3"
                  src="/images/icon-dropdown.svg"
                  alt="imagen de el menu desplegable que representa un engranaje"
                />
              </button>
              <div
                className={`font-DM-semibold text-lg w-[200px] absolute right-0 border mt-10 z-10 p-2 rounded-xl bg-own-neutral-700 ${
                  menuForecast ? "" : "hidden"
                }`}
              >
                <ul className="text-left">
                  <li className={`p-2 border rounded-lg`}>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Fridat</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ul>
              </div>
            </div>
            {/* comps */}
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
            <D_compo forecast="storm" hour="3 PM" info="68°" />
          </div>
        </div>
        {/*end main grid */}
      </div>
      <p>{metricS.sistem}</p>
      <p>{metricS.temperature}</p>
      <p>{metricS.windPeed}</p>
      <p>{metricS.precipitation}</p>
      <p>boton hourly forecast activo o no :{menuForecast.toString()}</p>
    </main>
  );
}
