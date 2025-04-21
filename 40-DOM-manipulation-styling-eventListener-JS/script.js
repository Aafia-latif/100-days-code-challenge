// Apply styling dynamically via JavaScript
document.body.style.margin = "0";
document.body.style.padding = "2rem";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.fontFamily = "Segoe UI, sans-serif";
document.body.style.transition = "background-color 0.3s, color 0.3s";

const container = document.querySelector(".container");
container.style.maxWidth = "600px";
container.style.margin = "auto";
container.style.backgroundColor = "white";
container.style.padding = "2rem";
container.style.borderRadius = "1rem";
container.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";

const heading = document.getElementById("main-heading");
heading.style.textAlign = "center";
heading.style.color = "#2c3e50";

document.querySelectorAll('input[type="text"]').forEach((input) => {
  input.style.width = "100%";
  input.style.padding = "10px";
  input.style.margin = "0.5rem 0 1rem";
  input.style.borderRadius = "5px";
  input.style.border = "1px solid #ccc";
  input.style.fontSize = "1rem";
});

document.querySelectorAll("button").forEach((button) => {
  button.style.padding = "10px 15px";
  button.style.marginRight = "0.5rem";
  button.style.marginBottom = "1rem";
  button.style.fontSize = "1rem";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#3498db";
  button.style.color = "white";
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#2980b9";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#3498db";
  });
});

const todoList = document.getElementById("todo-list");
todoList.style.listStyle = "none";
todoList.style.padding = "0";

// Dark Mode toggle
const toggleDarkMode = () => {
  const isDark = document.body.classList.toggle("dark-mode");

  document.body.style.backgroundColor = isDark ? "#1c1c1c" : "#f4f4f4";
  container.style.backgroundColor = isDark ? "#2c2c2c" : "white";

  document.querySelectorAll('input[type="text"], button').forEach((el) => {
    el.style.backgroundColor = isDark ? "#444" : "";
    el.style.color = isDark ? "white" : "";
    el.style.border = isDark ? "none" : "1px solid #ccc";
  });

  document.querySelectorAll("li").forEach((li) => {
    li.style.backgroundColor = isDark ? "#3c3c3c" : "#ecf0f1";
    li.style.color = isDark ? "#f4f4f4" : "#000";
  });
};

// Dynamic Heading Update
const inputBox = document.getElementById("input-box");
inputBox.addEventListener("input", () => {
  heading.textContent = inputBox.value || "Hello DOM!";
});

// Change Background Color
const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const colors = ["#f1c40f", "#1abc9c", "#e74c3c", "#9b59b6", "#95a5a6"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Toggle Dark Mode
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", toggleDarkMode);

// To-Do List Functionality
const addTaskBtn = document.getElementById("add-task");
const todoInput = document.getElementById("todo-input");

addTaskBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Base style
  li.style.background = "#ecf0f1";
  li.style.margin = "0.5rem 0";
  li.style.padding = "10px";
  li.style.borderRadius = "5px";
  li.style.cursor = "pointer";

  // Toggle completed class
  li.addEventListener("click", () => {
    const completed = li.style.textDecoration === "line-through";
    li.style.textDecoration = completed ? "none" : "line-through";
    li.style.color = completed ? "#000" : "gray";
  });

  todoList.appendChild(li);
  todoInput.value = "";
});
