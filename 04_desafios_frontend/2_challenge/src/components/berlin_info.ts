type MyObj = {
  latitude: number
  longitude: number
}

async function city_coordenadas(city: string) {
  let coordenadas<MyObj> = {};
  const data = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  const json = await data.json();

  //console.log(json.results[0]);
  await coordenadas.latitude = json.results[0]["latitude"];
  await coordenadas.longitude = json.results[0]["longitude"];
  return await coordenadas;
}

const d = city_coordenadas().then((response) => console.log(response));

//console.log(d);

/* 
{
  results: [
    {
      id: 2950159,
      name: 'Berlin',
      latitude: 52.52437,
      longitude: 13.41053,
      elevation: 74,
      feature_code: 'PPLC',
      country_code: 'DE',
      admin1_id: 2950157,
      admin3_id: 6547383,
      admin4_id: 6547539,
      timezone: 'Europe/Berlin',
      population: 3426354,
      postcodes: [Array],
      country_id: 2921044,
      country: 'Germany',
      admin1: 'State of Berlin',
      admin3: 'Berlin, Stadt',
      admin4: 'Berlin'
    }
  ],
  generationtime_ms: 1.2100935
}
*/
