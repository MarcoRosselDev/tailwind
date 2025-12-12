//import Units from "./components/Units";
//import Header from "./components/Header";
import { useState } from "react";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import type {
  Precipitations,
  Temperature,
  WindSpeed,
  UnitOfMesure,
} from "./components/types";

function App() {
  const [temerature, setTemperature] = useState<Temperature>("Celsius (°C)");
  const [windSpeed, setWindSpeed] = useState<WindSpeed>("km/h");
  const [precipitations, setPrecipitations] =
    useState<Precipitations>("Millimeters (mm)");
  const [unitOfMesure, setUnitOfMesure] = useState<UnitOfMesure>("Metric");

  function handleTemperature(str: Temperature) {
    setTemperature(str);
  }
  function handleWindSpeed(str: WindSpeed) {
    setWindSpeed(str);
  }
  function handlePrecipitations(str: Precipitations) {
    setPrecipitations(str);
  }
  function handleUnitOfMesure(str: UnitOfMesure) {
    setUnitOfMesure(str);
  }

  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-0 desktop:max-w-xl p-4">
      <MyHeader
        ht={handleTemperature}
        hp={handlePrecipitations}
        hw={handleWindSpeed}
        hu={handleUnitOfMesure}
        um={unitOfMesure}
      />
      <MyMain
        t={temerature}
        w={windSpeed}
        p={precipitations}
        u={unitOfMesure}
      />
    </div>
  );
}

export default App;
