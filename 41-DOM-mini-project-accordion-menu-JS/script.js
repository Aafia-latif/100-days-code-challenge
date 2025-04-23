document.body.style.fontFamily = "ariel, sans-serif, Tahoma, Geneva, Verdana";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.background = "linear-gradient(to right, #c4a6e4, #849ac0)";
document.body.style.color = "#fff";

// Container styling
const container = document.querySelector(".accordion-container");
container.style.width = "70%";
container.style.margin = "30px auto";
container.style.backgroundColor = "#ffffff6c";
container.style.padding = "20px";
container.style.borderRadius = "8px";
container.style.boxShadow = "0px 15px 30px #00000044";

// Heading styling
const heading = document.querySelector("h1");
heading.style.textAlign = "center";
heading.style.marginTop = "40px";
heading.style.color = "#fff";
heading.style.fontSize = "2.5rem";
heading.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";

// Accordion headers
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.style.background = "#333";
  header.style.color = "#fff";
  header.style.cursor = "pointer";
  header.style.padding = "20px";
  header.style.fontSize = "1.2rem";
  header.style.textAlign = "left";
  header.style.width = "100%";
  header.style.border = "none";
  header.style.borderRadius = "5px";
  header.style.marginTop = "15px";
  header.style.transition = "background 0.3s ease";
  header.style.boxSizing = "border-box";

  header.addEventListener("mouseover", () => {
    header.style.background = "#4caf50";
  });

  header.addEventListener("mouseout", () => {
    header.style.background = "#333";
  });

  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Hide other contents
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) item.style.display = "none";
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Accordion contents
document.querySelectorAll(".accordion-content").forEach((content) => {
  content.style.padding = "15px";
  content.style.backgroundColor = "#444";
  content.style.marginTop = "5px";
  content.style.display = "none";
  content.style.borderRadius = "5px";
  content.style.boxSizing = "border-box";
});

// Code blocks
document.querySelectorAll("pre").forEach((pre) => {
  pre.style.backgroundColor = "#222";
  pre.style.color = "#ccc";
  pre.style.padding = "10px";
  pre.style.borderRadius = "4px";
  pre.style.overflowX = "auto";
});

// Anchor tags
document.querySelectorAll("a").forEach((link) => {
  link.style.display = "inline-block";
  link.style.marginTop = "10px";
  link.style.textDecoration = "none";
  link.style.color = "#4caf50";
  link.style.fontWeight = "bold";
  link.style.transition = "color 0.3s ease";

  link.addEventListener("mouseover", () => {
    link.style.color = "#fff";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "#4caf50";
  });
});

// Responsive styles for small screens
if (window.innerWidth <= 768) {
  container.style.width = "90%";
  heading.style.fontSize = "2rem";
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.style.fontSize = "1rem";
  });
}
