// Function to practice basic array methods
function arrayMethods() {
  let fruits = ["Apple", "Banana", "Cherry"];
  console.log("Initial array:", fruits);

  console.log("Array methods...");

  // 1. push - Adds an element to the end of the array
  fruits.push("Orange");
  console.log("After push('Orange'):", fruits);

  // 2. pop - Removes the last element from the array
  fruits.pop();
  console.log("After pop():", fruits);

  // 3. shift - Removes the first element from the array
  fruits.shift();
  console.log("After shift():", fruits);

  // 4. unshift - Adds an element to the beginning of the array
  fruits.unshift("Strawberry");
  console.log("After unshift('Strawberry'):", fruits);
}

// Function to practice creating and accessing an object
function objects() {
  // Creating an object
  let person = {
    firstName: "Muhammad",
    lastName: "Aamar",
    age: 36,
    job: "Designer",
    // Method to get full name
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  // Accessing object properties and methods
  console.log("Object details...");

  console.log("Name:", person.getFullName());
  console.log("Age:", person.age);
  console.log("Job:", person.job);
}
