import Card from "./Card";

type B = {
  feels_like: number | undefined;
  humedity: number | undefined;
  wind: number | undefined;
  precipitation: number | undefined;
};

export default function B({ feels_like, humedity, wind, precipitation }: B) {
  return (
    <Card>
      <h1>Seccion B</h1>
      <Card>
        <p>Feels like</p>
        <p>{feels_like} °</p>
      </Card>
      <Card>
        <p>humedity</p>
        <p>{humedity} %</p>
      </Card>
      <Card>
        <p>wind</p>
        <p>{wind} km/h</p>
      </Card>
      <Card>
        <p>precipitation</p>
        <p>{precipitation} mm</p>
      </Card>
    </Card>
  );
}
