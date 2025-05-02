// Update clock every second
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", { hour12: false });
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme toggle logic
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Apply stored theme on load
if (currentTheme === "dark") {
  document.body.classList.add("dark");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
