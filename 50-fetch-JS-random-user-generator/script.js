const generateBtn = document.getElementById("generateBtn");
const userCard = document.getElementById("userCard");
const showTableBtn = document.getElementById("showTableBtn");
const backBtn = document.getElementById("backBtn");

const generatorView = document.getElementById("generatorView");
const tableView = document.getElementById("tableView");
const userTableBody = document.getElementById("userTableBody");

// Generate user
generateBtn.addEventListener("click", async () => {
  userCard.innerHTML = "Loading...";

  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Image" />
      <h2>${user.name.first} ${user.name.last}</h2>
      <p>${user.email}</p>
    `;

    saveUser(user);
  } catch (err) {
    userCard.innerHTML = `<p style="color:red;">Failed to load user.</p>`;
  }
});

// Save user to localStorage
function saveUser(user) {
  let users = JSON.parse(localStorage.getItem("previousUsers")) || [];

  if (!users.find((u) => u.email === user.email)) {
    users.push({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.thumbnail,
    });

    localStorage.setItem("previousUsers", JSON.stringify(users));
  }
}

// Show table view
showTableBtn.addEventListener("click", () => {
  generatorView.classList.add("hidden");
  tableView.classList.remove("hidden");
  loadUserTable();
});

// Back to generator
backBtn.addEventListener("click", () => {
  tableView.classList.add("hidden");
  generatorView.classList.remove("hidden");
});

// Load user data into table
function loadUserTable() {
  const users = JSON.parse(localStorage.getItem("previousUsers")) || [];
  userTableBody.innerHTML = "";

  if (users.length === 0) {
    userTableBody.innerHTML = `<tr><td colspan="3">No users found.</td></tr>`;
    return;
  }

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${user.picture}" alt="Thumb" /></td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    `;
    userTableBody.appendChild(row);
  });
}
