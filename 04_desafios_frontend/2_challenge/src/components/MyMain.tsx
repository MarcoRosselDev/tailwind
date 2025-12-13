import type { MetricObject } from "./types";

type MyMainProps = {
  metricS: MetricObject;
};

export default function MyMain({ metricS }: MyMainProps) {
  return (
    <main className="pt-10 w-full desktop:max-w-[1000px]">
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

        <div className="grid text-3xl w-full gap-9 desktop-2:grid-cols-3 desktop-2:grid-rows-4 mt-10">
          {/* izquierda a, b,c */}
          <div className="desktop-2:col-span-2 desktop-2:row-span-4 grid desktop-2:grid-rows-4 desktop-2:gap-7">
            {/* A */}
            <div
              className="rounded-4xl desktop:rounded-2xl desktop:row-span-2 bg-no-repeat 
                  bg-[url(/images/bg-today-small.svg)] bg-contain desktop:bg-cover bg-center desktop:bg-[url(/images/bg-today-large.svg)] desktop:bg-image-desktop  h-[310px] desktop:h-[250px] flex flex-col justify-center desktop:flex-row"
            >
              {/* A desktop izquierda */}
              <div className=" pt-3">
                <h1 className="font-DM-bold">Berlin, Germany</h1>
                <p className="text-lg mt-2 text-[21px]">Tusday, Aug 5, 2025</p>
              </div>
              {/* A desktop deracha */}
              <div className="flex justify-center pt-4">
                <img
                  src="/images/icon-sunny.webp"
                  alt="sun image"
                  className="w-36 h-36"
                />
                <h1 className="text-[105px] font-DM-semibold-italic">68°</h1>
              </div>
            </div>
            {/* fin A */}
            <div className="p-6 bg-blue-500">B-4</div>
            <div className="p-6 bg-blue-600">C -7</div>
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
