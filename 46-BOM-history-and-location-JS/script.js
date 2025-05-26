// ========== Location Info Functions ==========
function updateLocationInfo() {
  document.getElementById("href").textContent = window.location.href;
  document.getElementById("hostname").textContent = window.location.hostname;
  document.getElementById("protocol").textContent = window.location.protocol;
  document.getElementById("pathname").textContent = window.location.pathname;
  document.getElementById("hash").textContent =
    window.location.hash || "(none)";
  document.getElementById("referrer").textContent =
    document.referrer || "(none)";

  updateSearchParams();
}

function updateSearchParams() {
  const paramsContainer = document.getElementById("search-params");
  paramsContainer.innerHTML = "";

  const searchParams = new URLSearchParams(window.location.search);
  if ([...searchParams].length === 0) {
    const li = document.createElement("li");
    li.textContent = "(none)";
    paramsContainer.appendChild(li);
    return;
  }
  for (const [key, value] of searchParams) {
    const li = document.createElement("li");
    li.textContent = `${key}: ${value}`;
    paramsContainer.appendChild(li);
  }
}

// ========== Geolocation ==========
function updateGeolocation() {
  const geoEl = document.getElementById("geolocation");
  if (!navigator.geolocation) {
    geoEl.textContent = "Geolocation not supported by your browser";
    return;
  }

  geoEl.textContent = "Fetching location...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      geoEl.textContent = `Lat: ${position.coords.latitude.toFixed(
        4
      )}, Lon: ${position.coords.longitude.toFixed(4)}`;
    },
    (error) => {
      geoEl.textContent = `Permission denied or unavailable`;
    }
  );
}

// ========== History Info Functions ==========
function updateHistoryInfo() {
  document.getElementById("history-length").textContent = window.history.length;
}

// ========== Navigation Log ==========
const historyLogEl = document.getElementById("history-log");
let navigationLog = JSON.parse(sessionStorage.getItem("navigationLog") || "[]");

function addLogEntry(action, url, state = null) {
  const timestamp = new Date().toLocaleTimeString();
  navigationLog.push({ action, url, state, time: timestamp });
  sessionStorage.setItem("navigationLog", JSON.stringify(navigationLog));
  renderLog();
}

function renderLog() {
  historyLogEl.innerHTML = "";
  if (navigationLog.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No navigation actions logged yet.";
    historyLogEl.appendChild(li);
    return;
  }

  for (const entry of navigationLog) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${entry.action}</strong> at <em>${
      entry.time
    }</em>: ${entry.url} ${
      entry.state ? `(state: ${JSON.stringify(entry.state)})` : ""
    }`;
    historyLogEl.appendChild(li);
  }
}

// ========== History API buttons ==========
document.getElementById("back-btn").addEventListener("click", () => {
  history.back();
  addLogEntry("Back", document.location.href);
});
document.getElementById("forward-btn").addEventListener("click", () => {
  history.forward();
  addLogEntry("Forward", document.location.href);
});
document.getElementById("reload-btn").addEventListener("click", () => {
  location.reload();
  addLogEntry("Reload", document.location.href);
});

// Push State and Replace State helpers:
let pushCount = 0;
document.getElementById("push-state-btn").addEventListener("click", () => {
  pushCount++;
  const stateObj = { page: `Page ${pushCount}`, timestamp: Date.now() };
  const url = `?page=${pushCount}`;
  history.pushState(stateObj, `Page ${pushCount}`, url);
  addLogEntry("pushState", window.location.href, stateObj);
  updateLocationInfo();
});
document.getElementById("replace-state-btn").addEventListener("click", () => {
  const stateObj = { replaced: true, timestamp: Date.now() };
  const url =
    window.location.href.split("?")[0] + `?replaced=true&time=${Date.now()}`;
  history.replaceState(stateObj, "Replaced State", url);
  addLogEntry("replaceState", window.location.href, stateObj);
  updateLocationInfo();
});
document.getElementById("clear-log-btn").addEventListener("click", () => {
  navigationLog = [];
  sessionStorage.removeItem("navigationLog");
  renderLog();
});

// ========== Navigate Section ==========
document.getElementById("go-btn").addEventListener("click", () => {
  const url = document.getElementById("url-input").value.trim();
  if (!url) {
    alert("Please enter a valid URL");
    return;
  }
  try {
    // Ensure valid URL
    const validUrl = new URL(url);
    window.location.href = validUrl.href;
  } catch {
    alert("Invalid URL format");
  }
});

// ========== Dark Mode Toggle ==========
const darkToggle = document.getElementById("dark-mode-toggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkToggle.checked);
});

// ========== Popstate Event ==========
window.addEventListener("popstate", (event) => {
  addLogEntry("popstate", window.location.href, event.state);
  updateLocationInfo();
});

// ========== Initialize ==========
function init() {
  updateLocationInfo();
  updateHistoryInfo();
  updateGeolocation();
  renderLog();
}
init();
