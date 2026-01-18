//import Section_a from "./sections/Section_a";

import { useState, type FormEvent } from "react";

export default function Main_app(props: any) {
  let handlerSetCity = props.handlerSetCity;
  const [city, setCity] = useState("");
  function handlerSubmit(event: FormEvent) {
    event.preventDefault();
    handlerSetCity(city);
    setCity("");
  }

  return (
    <>
      <h1 className="font-bricolage-b text-[49px] p-6 leading-tight">
        How's the sky looking today?
      </h1>
      {/* form */}
      <div className="flex w-full justify-center">
        <form
          onSubmit={handlerSubmit}
          className="mt-5 flex text-[20px] w-full font-DM-semibold flex-col gap-3 desktop:flex-row max-w-[610px]"
        >
          <div className="flex gap-3 w-full p-3 focus-within:outline cursor-pointer text-own-neutral-0  bg-own-neutral-700 rounded-xl">
            <img
              src="/images/icon-search.svg"
              className="w-5.5 ml-2"
              alt="icono de lupa"
            />
            <input
              type="text"
              name="search"
              onChange={(e) => setCity(e.target.value)}
              className="outline-none  w-55 desktop:w-auto"
              placeholder="Seach for a place..."
            />
          </div>
          <button className="cursor-pointer bg-own-blue-500 w-full p-3  rounded-xl desktop:max-w-[120px]">
            Search
          </button>
        </form>
      </div>
      <div>
        {/* <Section_a
          city="Berlin"
          country="Germany"
          date="10 feb 2026"
          temperature="19 C"
          wheater="sunny"
          key={20}
        /> */}
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
      <div></div>
    </>
  );
}
