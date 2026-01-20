export default function mm_to_in(mm: number): number {
  // Factor de conversión: 1 mm = 0.0393700787 pulgadas
  const conversionFactor = 0.0393700787;

  // Realizar la conversión
  const inches = mm * conversionFactor;

  return inches;
}
