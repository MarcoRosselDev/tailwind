import { useState } from "react";
import NavHeader from "./components/NavHeader";
import type { MetricObject } from "./types/header_types";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [metricSistem, setMetricSistem] = useState<MetricObject>({
    sistem: "Metric",
    temperature: "Celsius (°C)",
    windPeed: "km/h",
    precipitation: "Millimeters (mm)",
  });

  function handleMetricSistem() {
    if (metricSistem.sistem === "Metric") {
      setMetricSistem({
        sistem: "Imperial",
        temperature: "Fahrenheit (°F)",
        windPeed: "mph",
        precipitation: "Inches (in)",
      });
    } else {
      setMetricSistem({
        sistem: "Metric",
        temperature: "Celsius (°C)",
        windPeed: "km/h",
        precipitation: "Millimeters (mm)",
      });
    }
  }

  return (
    <div className="bg-own-neutral-900 font-DM-light min-h-screen text-own-neutral-200 p-4 text-sm flex flex-col justify-top items-center">
      <NavHeader HMS={handleMetricSistem} metricS={metricSistem} />
      {isLoading ? <p>Loading</p> : <div>this is loaded</div>}
    </div>
  );
}
