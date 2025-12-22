export type MainObj = {
  err_message: null | string;
  isLoading: boolean;
  data: object | null; // futuramente cambiar al type WeatherObject
};

export type LocatioFormat = {
  latitude: number | undefined;
  longitude: number | undefined;
};

export type LocationResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin3: string;
  admin4: string;
};

export type CoordinatesApiResponse = {
  results: LocationResult[];
  generationtime_ms: number;
};
