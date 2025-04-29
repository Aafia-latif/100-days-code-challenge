// Create elements
const app = document.getElementById("app");

const container = document.createElement("div");
container.style.maxWidth = "700px";
container.style.margin = "50px auto";
container.style.padding = "30px";
container.style.background = "#f9f9f9";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 0 15px rgba(0,0,0,0.1)";
container.style.fontFamily = "Arial, sans-serif";

const title = document.createElement("h2");
title.textContent = "User Submission Form";
title.style.textAlign = "center";
title.style.marginBottom = "20px";
title.style.color = "#333";

const form = document.createElement("form");
form.id = "myForm";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "15px";

// Input fields
const fields = [
  { id: "name", type: "text", placeholder: "Enter your name" },
  { id: "email", type: "email", placeholder: "Enter your email" },
  { id: "phone", type: "tel", placeholder: "Enter your phone number" },
];

fields.forEach(({ id, type, placeholder }) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.required = true;
  input.style.padding = "10px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";
  input.style.fontSize = "16px";
  form.appendChild(input);
});

// Submit Button
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "submit";
submitBtn.style.padding = "10px";
submitBtn.style.backgroundColor = "#4CAF50";
submitBtn.style.color = "#fff";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "6px";
submitBtn.style.fontSize = "16px";
submitBtn.style.cursor = "pointer";
form.appendChild(submitBtn);

// Toggle Button
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show Records";
toggleBtn.id = "toggleTableBtn";
toggleBtn.style.marginTop = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.backgroundColor = "#007BFF";
toggleBtn.style.color = "#fff";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "6px";
toggleBtn.style.fontSize = "16px";
toggleBtn.style.cursor = "pointer";

// Table
const table = document.createElement("table");
table.id = "recordTable";
table.style.display = "none";
table.style.width = "100%";
table.style.marginTop = "30px";
table.style.borderCollapse = "collapse";
table.style.fontSize = "16px";

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr style="background-color: #333; color: #fff;">
    <th style="padding: 10px;">Name</th>
    <th style="padding: 10px;">Email</th>
    <th style="padding: 10px;">Phone</th>
    <th style="padding: 10px;">Action</th>
  </tr>
`;

const tbody = document.createElement("tbody");
tbody.id = "tableBody";

table.appendChild(thead);
table.appendChild(tbody);

// Assemble the UI
container.appendChild(title);
container.appendChild(form);
container.appendChild(toggleBtn);
container.appendChild(table);
app.appendChild(container);

// Form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const data = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  data.push({ name, email, phone });
  localStorage.setItem("formSubmissions", JSON.stringify(data));

  this.reset();
  loadTable();
});

// Load table records
function loadTable() {
  const data = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  tbody.innerHTML = "";

  data.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="padding: 10px; border: 1px solid #ccc;">${entry.name}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${entry.email}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${entry.phone}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">
        <button onclick="removeRecord(${index})" style="
          padding: 5px 10px;
          background-color: #dc3545;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        ">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Remove single record
function removeRecord(index) {
  const data = JSON.parse(localStorage.getItem("formSubmissions")) || [];
  data.splice(index, 1);
  localStorage.setItem("formSubmissions", JSON.stringify(data));
  loadTable();
}

// Toggle table visibility
toggleBtn.addEventListener("click", () => {
  const visible = table.style.display !== "none";
  table.style.display = visible ? "none" : "table";
  toggleBtn.textContent = visible ? "Show Records" : "Hide Records";
});

// Initial load
window.onload = loadTable;
