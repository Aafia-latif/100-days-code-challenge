// Style the entire page
document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, sans-serif";
document.body.style.background = "linear-gradient(135deg, #e0c3fc, #8ec5fc)";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";
document.body.style.alignItems = "center";

// Header styling
const header = document.querySelector("header");
header.style.textAlign = "center";
header.style.marginTop = "30px";

const title = document.querySelector("h1");
title.style.color = "#2c3e50";
title.style.marginBottom = "10px";

const subtitle = document.querySelector(".subtitle");
subtitle.style.color = "#34495e";
subtitle.style.marginBottom = "30px";
subtitle.style.fontSize = "18px";

// Container styling
const container = document.querySelector(".container");
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr";
container.style.gap = "20px";
container.style.width = "90%";
container.style.maxWidth = "800px";
container.style.padding = "0 20px";
container.style.marginBottom = "20px";

// Card styling
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.backgroundColor = "white";
  card.style.padding = "20px";
  card.style.borderRadius = "15px";
  card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
  card.style.transition = "transform 0.3s ease, background 0.3s ease";
  card.style.textAlign = "center";

  const h2 = card.querySelector("h2");
  h2.style.color = "#6a11cb";

  const p = card.querySelector("p");
  p.style.color = "#555";
  p.style.marginTop = "10px";

  // Hover effect
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.02)";
    card.style.backgroundColor = "#f0f0f0";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.backgroundColor = "white";
  });
});

// Button styling
const buttonWrapper = document.querySelector(".button-wrapper");
buttonWrapper.style.margin = "30px";

const button = document.getElementById("highlight-btn");
button.style.padding = "12px 24px";
button.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
button.style.border = "none";
button.style.color = "white";
button.style.fontSize = "16px";
button.style.borderRadius = "50px";
button.style.cursor = "pointer";
button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
button.style.transition = "background 0.3s ease, transform 0.3s ease";

// Button hover
button.addEventListener("mouseover", () => {
  button.style.transform = "scale(1.05)";
});
button.addEventListener("mouseout", () => {
  button.style.transform = "scale(1)";
});

// DOM Traversing and highlighting
let current = document.querySelector(".card");
button.addEventListener("click", () => {
  if (current) {
    current.style.backgroundColor = "white";
  }
  current = current?.nextElementSibling;
  if (current && current.classList.contains("card")) {
    current.style.backgroundColor = "#ffe082";
  } else {
    current = document.querySelector(".card");
    current.style.backgroundColor = "#ffe082";
  }
});
