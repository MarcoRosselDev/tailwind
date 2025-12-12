import { useState } from "react";
import type {
  Temperature,
  WindSpeed,
  Precipitations,
  UnitOfMesure,
} from "./types";

type Params = {
  ht: (string: Temperature) => void;
  hw: (string: WindSpeed) => void;
  hp: (string: Precipitations) => void;
  hu: (string: UnitOfMesure) => void;
  um: string;
};

export default function MyHeader({ ht, hw, hp, um }: Params) {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleSwitch() {}

  return (
    <header className="flex justify-between">
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
      <button
        onClick={() => setMenuVisible((prev) => !prev)}
        className="border bg-neutral-700 z-10"
      >
        <img
          src="/images/icon-units.svg"
          alt="imagen de el menu desplegable que representa un engranaje"
        />
        <p>Units</p>
      </button>
      <div
        className={`absolute top-20 z-10 right-9 ${
          menuVisible ? "" : "hidden"
        }`}
      >
        <button onClick={handleSwitch}>Switch to {um}</button>
        <ul className="border">
          Temperature
          <li onClick={() => ht("Celsius (°C)")}>Celsius (°C)</li>
          <li onClick={() => ht("Fahrenheit (°F)")}>Fahrenheit (°F)</li>
        </ul>
        <ul className="border">
          Wind Speed
          <li onClick={() => hw("km/h")}>km/h</li>
          <li onClick={() => hw("mph")}>mph</li>
        </ul>
        <ul className="border">
          Precipitation
          <li onClick={() => hp("Millimeters (mm)")}>Millimeters (mm)</li>
          <li onClick={() => hp("Inches (in)")}>Inches (in)</li>
        </ul>
      </div>
      {/* <Units /> */}
    </header>
  );
}
