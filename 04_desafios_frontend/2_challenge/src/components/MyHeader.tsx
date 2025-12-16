import { useState } from "react";
import type { MetricObject } from "./types";

type HeaderProps = {
  HMS: () => void;
  metricS: MetricObject;
};

export default function MyHeader({ HMS, metricS }: HeaderProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="flex justify-between items-center desktop:max-w-[1300px] w-full">
      {/* div transparente para que se cierre el menu nav si se clickea fuera de el */}
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-transparent ${
          menuVisible ? "" : "hidden"
        }`}
        onClick={() => setMenuVisible((prev) => !prev)}
      ></div>

      <img
        src="/images/logo.svg"
        alt="logo weather now app"
        className=" w-36 h-10"
      />
      {/* inicio del nav menu */}
      <div className="relative">
        <button
          onClick={() => setMenuVisible((prev) => !prev)}
          className="rounded-md bg-own-neutral-700 z-10 p-2.5 h-8 w-[92px] flex text-sm items-center justify-between cursor-pointer focus:outline-own-neutral-200 focus:outline-2"
        >
          <img
            className="w-3.5 h-3.5"
            src="/images/icon-units.svg"
            alt="imagen de el menu desplegable que representa un engranaje"
          />
          <p className="font-DM-semibold">Units</p>
          <img
            className="w-2.5 h-3"
            src="/images/icon-dropdown.svg"
            alt="imagen de el menu desplegable que representa un engranaje"
          />
        </button>
        <div
          className={`font-DM-bold absolute right-0 mt-2 z-20 p-2 w-[190px] rounded-xl bg-own-neutral-700 ${
            menuVisible ? "" : "hidden"
          }`}
        >
          <button
            className="rounded-xl bg-own-neutral-700 z-10 p-2 w-full hover:outline-own-neutral-200 focus:outline-own-neutral-200 focus:outline-2 text-left cursor-pointer"
            onClick={HMS}
          >
            Switch to {metricS.sistem === "Imperial" ? "Metric" : "Imperial"}
          </button>
          {/* ul temperature */}
          <ul className="border-b-2 border-b-own-neutral-600 mt-1 w-full">
            <span className="text-own-neutral-300 pl-2 font-DM-light">
              Temperature
            </span>
            <li
              className={`flex gap-3 justify-between mt-2 p-2  rounded-md w-full ${
                metricS.temperature === "Celsius (°C)"
                  ? "bg-own-neutral-600"
                  : ""
              }`}
            >
              Celsius (°C){" "}
              {metricS.temperature === "Celsius (°C)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
            <li
              className={`flex gap-3 justify-between mt-1 mb-1 p-2  rounded-md w-full ${
                metricS.temperature === "Fahrenheit (°F)"
                  ? "bg-own-neutral-600"
                  : ""
              }`}
            >
              Fahrengheit (°F){" "}
              {metricS.temperature === "Fahrenheit (°F)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
          </ul>
          {/* end ul temperature */}

          {/* wind ul */}
          <ul className="border-b-2 border-b-own-neutral-600 mt-1 w-full">
            <span className="text-own-neutral-300 pl-2 font-DM-light">
              Wind speed
            </span>
            <li
              className={`flex gap-3 justify-between mt-2 p-2  rounded-md w-full ${
                metricS.windPeed === "km/h" ? "bg-own-neutral-600" : ""
              }`}
            >
              km/h{" "}
              {metricS.temperature === "Celsius (°C)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
            <li
              className={`flex gap-3 justify-between mt-1 mb-1 p-2  rounded-md w-full ${
                metricS.windPeed === "mph" ? "bg-own-neutral-600" : ""
              }`}
            >
              mph
              {metricS.temperature === "Fahrenheit (°F)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
          </ul>
          {/* end wind ul */}

          {/* precipitation ul */}
          <ul className=" mt-1 w-full">
            <span className="text-own-neutral-300 pl-2 font-DM-light">
              Precipitation
            </span>
            <li
              className={`flex gap-3 justify-between mt-2 p-2  rounded-md w-full ${
                metricS.precipitation === "Millimeters (mm)"
                  ? "bg-own-neutral-600"
                  : ""
              }`}
            >
              Millimeters (mm)
              {metricS.temperature === "Celsius (°C)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
            <li
              className={`flex gap-3 justify-between mt-1 mb-1 p-2  rounded-md w-full ${
                metricS.precipitation === "Inches (in)"
                  ? "bg-own-neutral-600"
                  : ""
              }`}
            >
              Inches (in)
              {metricS.temperature === "Fahrenheit (°F)" ? (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="icon check that confirm the selction sistem unit"
                />
              ) : (
                ""
              )}
            </li>
          </ul>
          {/* end precipitation ul */}
        </div>
      </div>
      {/* <Units /> */}
    </header>
  );
}
