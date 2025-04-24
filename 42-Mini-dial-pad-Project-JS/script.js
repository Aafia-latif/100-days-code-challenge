// Prompt the user for their name
const userName = prompt("Welcome! What's your name?");
if (userName) {
  alert(`Hello, ${userName}! Let's start dialing.`);
} else {
  alert("No name entered. Proceeding anonymously.");
}

// Create the main container
const container = document.createElement("div");
document.body.appendChild(container);
container.style.maxWidth = "350px";
container.style.margin = "50px auto";
container.style.padding = "20px";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "20px";
container.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
container.style.backgroundColor = "#fefefe";
container.style.fontFamily = "Arial, sans-serif";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

// Add greeting header
const greeting = document.createElement("h2");
greeting.textContent = `📞 Dial Pad - Hello, ${userName || "Guest"}!`;
greeting.style.marginBottom = "20px";
greeting.style.fontSize = "24px";
greeting.style.color = "#007BFF";
container.appendChild(greeting);

// Create input display
const display = document.createElement("input");
display.type = "text";
display.disabled = true;
display.style.fontSize = "24px";
display.style.padding = "10px";
display.style.width = "200px";
display.style.textAlign = "center";
display.style.marginBottom = "20px";
display.style.border = "2px solid #007BFF";
display.style.borderRadius = "10px";
display.style.boxShadow = "inset 0 0 5px rgba(0,0,0,0.1)";
display.style.backgroundColor = "#f9f9f9";
container.appendChild(display);

// Create dial pad grid
const dialPad = document.createElement("div");
dialPad.style.display = "grid";
dialPad.style.gridTemplateColumns = "repeat(3, 60px)";
dialPad.style.gap = "10px";
container.appendChild(dialPad);

// Create digit buttons and add them to the grid
const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
buttons.forEach((num) => {
  const btn = document.createElement("button");
  btn.textContent = num;
  styleDialButton(btn); // Apply styles
  btn.addEventListener("click", () => {
    display.value += num; // Append digit to display
  });
  dialPad.appendChild(btn);
});

// Create control button container
const controls = document.createElement("div");
controls.style.marginTop = "20px";
controls.style.display = "flex";
controls.style.flexWrap = "wrap";
controls.style.justifyContent = "center";
container.appendChild(controls);

// Create and append Copy button
const copyBtn = createControlButton("Copy", "#17a2b8", () => {
  navigator.clipboard
    .writeText(display.value)
    .then(() => alert("Copied to clipboard!"))
    .catch(() => alert("Clipboard access denied."));
});

// Create and append Delete button
const deleteBtn = createControlButton("Delete", "#ffc107", () => {
  display.value = display.value.slice(0, -1); // Remove last digit
});

// Create and append Reset button
const resetBtn = createControlButton("Reset", "#dc3545", () => {
  display.value = ""; // Clear all input
});

// Create and append Dark Mode Toggle
let darkMode = false;
const darkModeBtn = createControlButton("Toggle Dark Mode", "#343a40", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#121212" : "#fff";
  document.body.style.color = darkMode ? "#e0e0e0" : "#000";
  container.style.backgroundColor = darkMode ? "#1e1e1e" : "#fefefe";
  container.style.boxShadow = darkMode
    ? "0 10px 20px rgba(255,255,255,0.05)"
    : "0 10px 20px rgba(0,0,0,0.1)";
  display.style.backgroundColor = darkMode ? "#2c2c2c" : "#f9f9f9";
  display.style.color = darkMode ? "#0f0" : "#000";
});

// Add all control buttons to container
[copyBtn, deleteBtn, resetBtn, darkModeBtn].forEach((btn) => {
  controls.appendChild(btn);
});

// Helper function to style digit buttons
function styleDialButton(btn) {
  btn.style.padding = "15px";
  btn.style.fontSize = "18px";
  btn.style.borderRadius = "12px";
  btn.style.backgroundColor = "#f1f1f1";
  btn.style.border = "none";
  btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  btn.style.transition = "all 0.2s ease";
  btn.style.cursor = "pointer";
  btn.onmouseover = () => {
    btn.style.backgroundColor = "#d6e4ff";
    btn.style.transform = "scale(1.05)";
  };
  btn.onmouseleave = () => {
    btn.style.backgroundColor = "#f1f1f1";
    btn.style.transform = "scale(1)";
  };
}

// Helper function to create styled control buttons
function createControlButton(text, bgColor, onClickFunc) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.padding = "10px 20px";
  btn.style.fontSize = "16px";
  btn.style.margin = "5px";
  btn.style.borderRadius = "6px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = bgColor;
  btn.style.color = "#fff";
  btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  btn.style.transition = "all 0.2s ease";
  btn.onclick = onClickFunc;
  btn.onmouseover = () => (btn.style.opacity = "0.8");
  btn.onmouseleave = () => (btn.style.opacity = "1");
  return btn;
}
