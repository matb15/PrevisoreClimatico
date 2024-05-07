import axios from "axios";

async function getLocation(location) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&language=it`;
  const response = await axios.get(url);
  return response.data;
}

export { getLocation };
