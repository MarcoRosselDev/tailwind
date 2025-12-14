import type { MetricObject } from "./types";

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
              {/* A desktop izquierda */}
              <div className=" pt-3 flex flex-col desktop:items-start justify-center">
                <h1 className="font-DM-bold">Berlin, Germany</h1>
                <p className="text-lg mt-2 font-DM">Tusday, Aug 5, 2025</p>
              </div>
              {/* A desktop deracha */}
              <div className="flex justify-center pt-4 items-center">
                <img
                  src="/images/icon-sunny.webp"
                  alt="sun image"
                  className="w-30 h-30"
                />
                <h1 className="text-[95px] font-DM-semibold-italic">68°</h1>
              </div>
            </div>
            {/* fin A */}

            {/* B */}
            <div className="grid grid-cols-2 gap-4 mt-3 desktop-2:grid-cols-4 desktop-2:row-span-1">
              <div className="p-5 bg-own-neutral-600 rounded-xl h-30 flex flex-col items-start justify-between">
                <p className="text-lg ">Feels Like</p>
                <h1 className="font-DM">64°</h1>
              </div>
              <div className="p-5  bg-own-neutral-600 rounded-xl h-30 flex flex-col items-start justify-between">
                <p className="text-lg">Humidity</p>
                <h1 className="font-DM">46%</h1>
              </div>
              <div className="p-5 bg-own-neutral-600 rounded-xl h-30 flex flex-col items-start justify-between">
                <p className="text-lg ">Wind</p>
                <h1 className="font-DM">9 mph</h1>
              </div>
              <div className="p-5  bg-own-neutral-600 rounded-xl h-30 flex flex-col items-start justify-between">
                <p className="text-lg">Precipitation</p>
                <h1 className="font-DM">0 in</h1>
              </div>
            </div>
            {/* fin B */}

            {/* C */}
            <div className="desktop-2:row-span-25 flex flex-col text-start text-xl">
              <h1 className="">Daily forecast</h1>
              <div className="grid gird-cols-3 gap-3 row-span-2 desktop-2:grid-cols-7">
                {/* lunes */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Tue</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* lunes */}
                {/* martes */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Wed</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* martes */}
                {/* miercoles */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Thu</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* miercoles */}
                {/* jueves */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Fri</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* jueves */}
                {/* viernes */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Sat</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* viernes */}
                {/* sabado */}
                <div className="h-45 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Sun</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* sabado */}
                {/* domingo */}
                <div className="h-45 col-span-3  desktop-2:col-span-1 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
                  <p>Mon</p>
                  <img
                    src="/images/icon-storm.webp"
                    className="w-15 h-15"
                    alt="image of a storm"
                  />
                  <div className="flex justify-between w-full">
                    <p>68°</p>
                    <p>57°</p>
                  </div>
                </div>
                {/* domingo */}
              </div>
            </div>
            {/* fin C */}
          </div>
          {/* derecha d */}
          <div className="p-6 bg-green-500 desktop:col-span-1 row-span-4">
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
