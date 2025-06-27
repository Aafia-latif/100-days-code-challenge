const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
