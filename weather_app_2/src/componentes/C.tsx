import { getWeatherCondition } from "../utils/codigo_clima";
import Card from "./Card";

type sub_card = {
  day: string;
  minima: number;
  maxima: number;
  weather_code: number;
};

function SubCard({ day, minima, maxima, weather_code }: sub_card) {
  const clima = getWeatherCondition(weather_code);

  return (
    <Card>
      <h1>{day}</h1>
      <p>{clima}</p>
      <p>min: {minima}</p>
      <p>max: {maxima}</p>
    </Card>
  );
}

type arrays_expected = {
  days: Array<string>;
  climas: Array<number>;
  temperatureMin: Array<number>;
  maxs: Array<number>;
};

type array_expected = {
  time: Date[] | undefined;
  weatherCode: Float32Array<ArrayBufferLike> | undefined;
  temperatureMax: Float32Array<ArrayBufferLike> | undefined;
  temperatureMin: Float32Array<ArrayBufferLike> | undefined;
};

export default function C({
  weatherCode,
  time,
  temperatureMin,
  temperatureMax,
}: array_expected) {
  if (!temperatureMin) return <p>Something go wrong</p>;
  const tsx = temperatureMin.map((value, index, array) => {
    return (
      <SubCard
        day={time ? time[index].toDateString() : "2-1-26"}
        maxima={temperatureMax ? temperatureMax[index] : 20}
        minima={value}
        weather_code={weatherCode ? weatherCode[index] : 1}
      />
    );
  });

  return (
    <Card>
      {/* 7 dias siguientes al actual */}
      {tsx}
    </Card>
  );
}
