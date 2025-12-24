export default async function fetch_coordenadas(city: string) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    if (!response.ok) {
      return {
        d: {},
        err_m: `Error en la busqueda de coordenadas, no se encontro la ciudad ${city}`,
      };
    }
    const json = await response.json();
    console.log({
      latitude: json.results[0].latitude,
      longitude: json.results[0].longitude,
    });
    console.log(json);

    return {
      d: {
        latitude: json.results[0].latitude,
        longitude: json.results[0].longitude,
      },
      err_m: "",
    };
  } catch (error) {
    console.log(error);
    return { err_obj: error, err_m: `Error mas grave buscando en ${city}` };
  }
}
