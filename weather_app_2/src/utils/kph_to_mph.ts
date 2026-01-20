export default function kph_to_mph(kph: number): number {
  // Factor de conversión: 1 km/h = 0.62137119223733 mph
  const conversionFactor = 0.62137119223733;

  // Realizar la conversión
  const mph = kph * conversionFactor;

  return mph;
}
