import type { MetricObject } from "./types";
import C_comp from "./C_comp";
import B_comp from "./B_comp";
import A_comp from "./A_comp";

type MyMainProps = {
  metricS: MetricObject;
};

export default function MyMain({ metricS }: MyMainProps) {
  return (
    <main className="pt-10 w-full desktop:max-w-[1300px]">
      {/* primero la logica si la API responde, sino retornar un div de error de API
      esta logica es posible por que el header se muestra si o si,segun el diseño espesificado */}
      <div className="text-center">
        {/* si todo va bien primero el buscador */}
        <h1 className="font-bricolage-b text-[49px] p-6 leading-tight">
          How's the sky looking today?
        </h1>
        <div className="flex w-full justify-center">
          <form className="mt-5 flex text-[20px] w-full font-DM-semibold flex-col gap-3 desktop:flex-row max-w-[610px]">
            <div className="flex gap-3 w-full p-3 focus-within:outline cursor-pointer text-own-neutral-0  bg-own-neutral-600 rounded-xl">
              <img
                src="/images/icon-search.svg"
                className="w-5.5 ml-2"
                alt="icono de lupa"
              />
              <input
                type="text"
                name="search"
                className="outline-none"
                placeholder="Seach for a place..."
              />
            </div>
            <button className="cursor-pointer bg-own-blue-500 w-full p-3  rounded-xl desktop:max-w-[120px]">
              Search
            </button>
          </form>
        </div>
        {/* main grid */}

        <div className="grid desktop-2:grid-cols-3 desktop-2:grid-rows-6 mt-10 text-3xl w-full gap-6 ">
          {/* izquierda a, b,c */}
          <div className="desktop-2:col-span-2 desktop-2:row-span-4 grid desktop-2:grid-rows-4 desktop-2:gap-1">
            {/* A */}
            <div
              className="rounded-4xl desktop:rounded-2xl desktop:row-span-2 bg-no-repeat desktop:justify-between desktop:p-6
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

            {/* B */}
            <div className="grid grid-cols-2 gap-4 mt-3 desktop-2:grid-cols-4 desktop-2:row-span-1">
              <B_comp info="64°" title="Feels Like" />
              <B_comp info="46%" title="Humidity" />
              <B_comp info="9 mph" title="Wind" />
              <B_comp info="0 in" title="Precipitation" />
            </div>
            {/* fin B */}

            {/* C */}
            <div className="desktop-2:row-span-25 flex flex-col text-start text-xl">
              <h1 className="">Daily forecast</h1>
              <div className="grid gird-cols-3 row-span-2 desktop-2:grid-cols-7">
                {/* lunes */}
                <C_comp day="Tue" max={68} min={57} wheater="snow" />
                <C_comp day="Wed" max={68} min={57} wheater="rain" />
                <C_comp day="Thu" max={68} min={57} wheater="snow" />
                <C_comp day="Fri" max={68} min={57} wheater="storm" />
                <C_comp day="Sat" max={68} min={57} wheater="sunny" />
                <C_comp day="Sun" max={68} min={57} wheater="rain" />
                <C_comp day="Mon" max={68} min={57} wheater="storm" />
                {/* domingo */}
              </div>
            </div>
            {/* fin C */}
          </div>
          {/* derecha d */}
          <div className="p-6 border desktop:col-span-1 row-span-4">
            <p>D-7 days</p>
          </div>
        </div>
        {/*end main grid */}
      </div>
      <p>{metricS.sistem}</p>
      <p>{metricS.temperature}</p>
      <p>{metricS.windPeed}</p>
      <p>{metricS.precipitation}</p>
    </main>
  );
}
