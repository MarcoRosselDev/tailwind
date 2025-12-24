export default async function fetch_weather(lat: number, long: number) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m`
    );
    if (!response.ok) {
      return {
        d: {},
        err_m: `Error en la busqueda de coordenadas, no se encontro la ciudad en las coordenadas ${lat} and ${long}`,
      };
    }
    const json = await response.json();
    //console.log(json);
    return {
      d: json,
      err_m: "",
    };
  } catch (error) {
    console.log(error);
    return { err_obj: error, err_m: `Error mas grave buscando de weather` };
  }
}
