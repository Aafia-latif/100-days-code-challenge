// === Apply styles with JavaScript ===

// Body
document.body.style.fontFamily = "sans-serif";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.padding = "20px";

// Heading
const heading = document.getElementById("main-heading");
heading.style.textAlign = "center";
heading.style.color = "#333";
heading.style.marginBottom = "30px";

// Buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.style.margin = "5px";
  button.style.padding = "8px 12px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.fontSize = "14px";
});

// Card Container
const cardContainer = document.querySelector(".card-container");
cardContainer.style.display = "flex";
cardContainer.style.flexWrap = "wrap";
cardContainer.style.gap = "20px";
cardContainer.style.marginTop = "30px";

// Cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.backgroundColor = "#fff";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  card.style.padding = "15px";
  card.style.boxSizing = "border-box";
  card.style.width = "calc(33.333% - 20px)";
  card.style.color = "#555";
  card.style.marginBottom = "20px";
});

// Responsive (basic logic)
if (window.innerWidth < 768) {
  cards.forEach((card) => {
    card.style.width = "100%";
  });
}

// Description paragraph
const description = document.querySelector(".description");
description.style.fontSize = "16px";
description.style.marginBottom = "10px";

// List
const itemList = document.getElementById("item-list");
itemList.style.paddingLeft = "20px";
itemList.style.marginTop = "10px";

// Input and preview
const input = document.getElementById("live-input");
input.style.marginTop = "15px";
input.style.padding = "8px";
input.style.width = "300px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "5px";

const preview = document.getElementById("live-preview");
preview.style.marginTop = "10px";
preview.style.fontStyle = "italic";
preview.style.color = "#333";

// === Functionality ===

const btnChangeText = document.getElementById("change-text");
const btnChangeStyle = document.getElementById("change-style");
const btnAddItem = document.getElementById("add-item");
const btnRemoveItem = document.getElementById("remove-item");

// 1. Change text content
btnChangeText.addEventListener("click", () => {
  description.textContent = "This text was changed using JavaScript!";
});

// 2. Toggle style using class
btnChangeStyle.addEventListener("click", () => {
  heading.classList.toggle("highlight");

  // Define .highlight style manually since we removed CSS
  if (heading.classList.contains("highlight")) {
    heading.style.color = "red";
    heading.style.fontWeight = "bold";
  } else {
    heading.style.color = "#333";
    heading.style.fontWeight = "normal";
  }
});

// 3. Add a new list item
btnAddItem.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

// 4. Remove the last item
btnRemoveItem.addEventListener("click", () => {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});

// 5. Live text preview
input.addEventListener("input", () => {
  preview.textContent = input.value || "Live preview will appear here.";
});

// === Create a DOM Concepts Checklist Card ===
const checklistCard = document.createElement("div");
checklistCard.classList.add("card");

checklistCard.innerHTML = `
  <h3 style="margin-bottom: 10px;">DOM Concepts Checklist ✅</h3>
  <ul style="list-style: none; padding: 0;">
    <li><input type="checkbox" checked disabled> getElementById</li>
    <li><input type="checkbox" checked disabled> querySelector / querySelectorAll</li>
    <li><input type="checkbox" checked disabled> textContent</li>
    <li><input type="checkbox" checked disabled> style (inline via JS)</li>
    <li><input type="checkbox" checked disabled> classList.toggle</li>
    <li><input type="checkbox" checked disabled> createElement</li>
    <li><input type="checkbox" checked disabled> appendChild</li>
    <li><input type="checkbox" checked disabled> removeChild</li>
    <li><input type="checkbox" checked disabled> addEventListener</li>
    <li><input type="checkbox" checked disabled> input.value</li>
    <li><input type="checkbox" checked disabled> input event</li>
    <li><input type="checkbox" checked disabled> children / lastElementChild</li>
    <li><input type="checkbox" checked disabled> innerHTML</li>
  </ul>
`;

checklistCard.style.backgroundColor = "#fff";
checklistCard.style.borderRadius = "10px";
checklistCard.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
checklistCard.style.padding = "15px";
checklistCard.style.boxSizing = "border-box";
checklistCard.style.width = "100%";
checklistCard.style.marginBottom = "20px";

// Insert checklist card at the top
cardContainer.prepend(checklistCard);
