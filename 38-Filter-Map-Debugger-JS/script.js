// JavaScript Filter, Map & Debugger Demo

const users = [
  { name: "Anabil", age: 22, isStudent: true },
  { name: "Ayat", age: 17, isStudent: true },
  { name: "Noor", age: 19, isStudent: false },
  { name: "Ayesha", age: 16, isStudent: true },
  { name: "Fatima", age: 25, isStudent: false },
];

console.log("📋 Original Users Array:", users);

// 1️⃣ FILTER METHOD

const adults = users.filter((user) => user.age >= 18);

console.log("👥 Adults (18+):", adults);

// 2️⃣ MAP METHOD

const greetings = users.map((user) => `Assalamualaikum, ${user.name}! 👋`);
console.log("🗣️ Greetings:", greetings);

// Another map example: Extract only names
const userNames = users.map((user) => user.name);
console.log("📛 User Names:", userNames);

// 3️⃣ COMBINED: FILTER + MAP

const underageStudents = users
  .filter((user) => user.age < 18 && user.isStudent)
  .map((user) => `${user.name} is an underage student (age ${user.age})`);

console.log("🚸 Underage Students Info:", underageStudents);

// 4️⃣ DEBUGGER TOOL

function analyzeUsers(data) {
  console.log("🧪 Analyzing Users...");
  debugger; // 👉 This will pause the code in browser dev tools

  const analysis = data.map((user) => {
    return {
      fullName: user.name.toUpperCase(),
      isAdult: user.age >= 18,
      studentStatus: user.isStudent ? "Student" : "Not a Student",
    };
  });

  return analysis;
}

const analyzedData = analyzeUsers(users);
console.log("🧠 Analyzed User Data:", analyzedData);

// 5️⃣ BONUS: Chained Methods

const studentNames = users
  .filter((user) => user.isStudent)
  .map((user) => user.name.toUpperCase());

console.log("🎓 Uppercase Names of Students:", studentNames);
