/* export default function format_date(dateString: string) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Usamos toLocaleDateString y luego removemos la coma después del mes si existe
  return date.toLocaleDateString("en-US", options).replace(/,(\s*\d+)/, "$1"); // Remueve la coma después del mes
}
 */

export default function format_date(dateString: Date | undefined) {
  const date = new Date(dateString ? dateString : new Date());

  return date.toLocaleDateString("en-US", {
    weekday: "long", // Tuesday
    year: "numeric", // 2025
    month: "short", // Aug
    day: "numeric", // 5
  });
}
