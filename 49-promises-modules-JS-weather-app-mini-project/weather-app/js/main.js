import { fetchWeather } from "./api.js";
import { renderError, renderLoading, renderWeather } from "./render.js";

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return renderError("Please enter a city name!");

  renderLoading();

  try {
    const data = await fetchWeather(city);
    renderWeather(data);
  } catch (err) {
    renderError(err.message);
  }
});
