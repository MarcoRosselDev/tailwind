import { useRef, useState, type FormEvent } from "react";
import Section_a from "./sections/Section_a";
import Section_b from "./sections/Section_b";
import Section_c from "./sections/Section_c";
import Section_d from "./sections/Section_d";

export default function Main_app(props: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  let handlerSetCity = props.handlerSetCity;
  const [city, setCity] = useState("");

  function handlerSubmit(event: FormEvent) {
    event.preventDefault();
    handlerSetCity(city);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
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
          className="mt-5 flex text-[20px] w-full font-DM-semibold flex-col gap-3 desktop:flex-row max-w-152.5"
        >
          <div className="flex gap-3 w-full p-3 focus-within:outline cursor-pointer text-own-neutral-0  bg-own-neutral-700 rounded-xl">
            <img
              src="/images/icon-search.svg"
              className="w-5.5 ml-2"
              alt="icono de lupa"
            />
            <input
              ref={inputRef}
              type="text"
              name="search"
              onChange={(e) => setCity(e.target.value)}
              className="outline-none  w-55 desktop:w-auto"
              placeholder="Seach for a place..."
            />
          </div>
          <button className="cursor-pointer bg-own-blue-500 w-full p-3  rounded-xl desktop:max-w-30">
            Search
          </button>
        </form>
      </div>
      <div
        className="grid grid-cols-1 max-w-275
        desktop-2:grid-cols-3 desktop-2:grid-rows-2 mt-10 text-3xl w-full gap-6"
      >
        {/* izquierda a, b, c */}
        <div
          className="desktop-2:col-span-2 desktop-2:row-span-2
          grid grid-cols-1 desktop-2:gap-1
          col-span-1
          "
        >
          <Section_a info={props} />
          <div className="pt-0 desktop-2:h-100 flex flex-col justify-between ">
            <Section_b info={props} />
            <Section_c info={props} />
          </div>
        </div>
        {/* derecha d */}
        <Section_d info={props} />
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      </div>
      <div></div>
    </>
  );
}
