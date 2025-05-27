const output = document.getElementById("output");

function print(title, purpose, example) {
  output.innerText = `✅ Feature: ${title}\n\n📌 Purpose:\n${purpose}\n\n💻 Output:\n${example}`;
}

function showFeature(feature) {
  switch (feature) {
    case "variables":
      let name = "Aisha";
      const country = "Pakistan";
      print(
        "let & const",
        "let allows reassignment (block-scoped). const creates constants that can't be reassigned.",
        `let name = "Aisha"\nconst country = "Pakistan"\n\nName: ${name}\nCountry: ${country}`
      );
      break;

    case "arrow":
      const greet = (user) => `Hello, ${user}! Welcome to ES6 🎉`;
      print(
        "Arrow Function",
        "Arrow functions provide a shorter syntax and do not bind their own 'this'.",
        greet("Danish")
      );
      break;

    case "template":
      const lang = "JavaScript";
      print(
        "Template Literals",
        "Template literals use backticks and ${} for variable interpolation in strings.",
        `We're learning modern ${lang} with \`backticks\` and \${expressions}!`
      );
      break;

    case "destructure":
      const student = { id: 101, grade: "A", section: "Blue" };
      const { id, grade, section } = student;
      print(
        "Destructuring",
        "Destructuring lets you unpack values from arrays or properties from objects.",
        `const { id, grade, section } = student\nID: ${id}, Grade: ${grade}, Section: ${section}`
      );
      break;

    case "default":
      function welcome(user = "Guest") {
        return `Welcome, ${user}!`;
      }
      print(
        "Default Parameters",
        "Default function parameters let you set default values if no argument is provided.",
        `${welcome()}\n${welcome("Maria")}`
      );
      break;

    case "spreadRest":
      const arr1 = [1, 2, 3];
      const arr2 = [...arr1, 4, 5];
      const total = (...nums) => nums.reduce((a, b) => a + b, 0);
      print(
        "Spread & Rest",
        "Spread (...) expands arrays. Rest (...) collects multiple args into an array.",
        `Spread: [...arr1, 4, 5] = [${arr2}]\nRest (sum): total(10, 20, 30) = ${total(
          10,
          20,
          30
        )}`
      );
      break;

    default:
      print("Unknown", "Please select a feature to learn.", "");
  }
}
