export default function format_date(dateString: Date | undefined) {
  const date = new Date(dateString ? dateString : new Date());

  return date.toLocaleDateString("en-US", {
    weekday: "long", // Tuesday
    year: "numeric", // 2025
    month: "short", // Aug
    day: "numeric", // 5
  });
}
