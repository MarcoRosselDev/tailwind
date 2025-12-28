export type Weather_data = {
  current: {
    time: Date;
    temperature_2m: number;
    weather_code: string;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
  };
  hourly: {
    time: Date[];
    weather_code: Float32Array<ArrayBufferLike> | null;
    temperature_2m: Float32Array<ArrayBufferLike> | null;
  };
  daily: {
    time: Date[];
    weatherCode: Float32Array<ArrayBufferLike>;
    temperatureMax: Float32Array<ArrayBufferLike>;
    temperatureMin: Float32Array<ArrayBufferLike>;
  };
};

export type WeatherCondition =
  | "sunny"
  | "partly-cloudy"
  | "over-cast"
  | "drizzle"
  | "rain"
  | "snow"
  | "storm"
  | "fog";
