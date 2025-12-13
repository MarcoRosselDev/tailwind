import { useState } from "react";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import type { MetricObject } from "./components/types";

function App() {
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
      <MyHeader HMS={handleMetricSistem} metricS={metricSistem} />
      <MyMain metricS={metricSistem} />
    </div>
  );
}

export default App;
