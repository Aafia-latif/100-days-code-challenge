let currentCard = null;

export const renderWeather = (data) => {
  removeCard();
  const weatherDiv = document.getElementById("weatherResult");
  weatherDiv.innerHTML = "";

  const { name, main, weather } = data;
  const condition = weather[0].main;

  const card = document.createElement("div");
  card.className = "weather-card";
  card.innerHTML = `
    <h2>${name}</h2>
    <div class="temperature">${main.temp}°C</div>
    <p>${weather[0].description}</p>
    ${getLottieIcon(condition)}
  `;

  currentCard = card;
  weatherDiv.appendChild(card);

  setTimeout(() => {
    document.addEventListener("click", dismissOnClickOutside);
  }, 10);
};

export const renderError = (msg) => {
  removeCard();
  document.getElementById("weatherResult").innerHTML = `<p>${msg}</p>`;
};

export const renderLoading = () => {
  removeCard();
  document.getElementById(
    "weatherResult"
  ).innerHTML = `<p id="loading">Loading...</p>`;
};

const dismissOnClickOutside = (e) => {
  if (currentCard && !currentCard.contains(e.target)) {
    removeCard();
    document.removeEventListener("click", dismissOnClickOutside);
  }
};

const removeCard = () => {
  const card = document.querySelector(".weather-card");
  if (card) card.remove();

  const loading = document.getElementById("loading");
  if (loading) loading.remove();
};

const getLottieIcon = (condition) => {
  let src;
  switch (condition.toLowerCase()) {
    case "clear":
      src = "https://assets7.lottiefiles.com/packages/lf20_y9squx.json";
      break;
    case "clouds":
      src = "https://assets2.lottiefiles.com/packages/lf20_jmBauI.json";
      break;
    case "rain":
    case "drizzle":
      src = "https://assets9.lottiefiles.com/packages/lf20_kOfPKE.json";
      break;
    case "thunderstorm":
      src = "https://assets6.lottiefiles.com/packages/lf20_UJNc2t.json";
      break;
    case "snow":
      src = "https://assets2.lottiefiles.com/private_files/lf30_e3pteeho.json";
      break;
    case "mist":
    case "fog":
    case "haze":
      src = "https://assets6.lottiefiles.com/packages/lf20_mf5j5kua.json";
      break;
    default:
      src = "https://assets7.lottiefiles.com/packages/lf20_y9squx.json";
  }

  return `
    <lottie-player
      src="${src}"
      background="transparent"
      speed="1"
      style="width: 100px; height: 100px; margin: 0 auto"
      autoplay
      loop>
    </lottie-player>
  `;
};
