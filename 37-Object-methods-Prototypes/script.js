// Define a constructor function for a "Person"
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Adding a method using the prototype
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Adding another method using the prototype
Person.prototype.isAdult = function () {
  return this.age >= 18;
};

// Adding a static method directly to the constructor
Person.greet = function () {
  console.log("Hello! This is a static method.");
};

// Create instances of the Person object
const person1 = new Person("Muhammad", "Ali", 29);
const person2 = new Person("Asra", "Hurmat", 32);

// Use the prototype methods
console.log(`Full Name of Person 1: ${person1.getFullName()}`);
console.log(`Is Person 1 an adult? ${person1.isAdult()}`);

console.log(`Full Name of Person 2: ${person2.getFullName()}`);
console.log(`Is Person 2 an adult? ${person2.isAdult()}`);

// Call the static method
Person.greet();

// Modify the prototype at runtime
Person.prototype.greetPerson = function () {
  return `Hello, ${this.getFullName()}!`;
};

// Use the newly added method
console.log(person1.greetPerson());
console.log(person2.greetPerson());

// Check the prototype chain
console.log(person1.hasOwnProperty("getFullName"));
console.log(person1.hasOwnProperty("firstName"));
console.log(Object.getPrototypeOf(person1) === Person.prototype);

// Demonstrate prototype inheritance
function Student(firstName, lastName, age, grade) {
  Person.call(this, firstName, lastName, age); // Call the parent constructor
  this.grade = grade; // Additional property
}

// Inherit the prototype of Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Add a method specific to Student
Student.prototype.getGrade = function () {
  return `Grade: ${this.grade}`;
};

// Create an instance of Student
const student1 = new Student("Bareera", "Hurmat", 22, "A");

// Use inherited and own methods
console.log(`Full Name of Student: ${student1.getFullName()}`);
console.log(`Is Student an adult? ${student1.isAdult()}`);
console.log(student1.getGrade());

// Check the prototype chain for student1
console.log(Object.getPrototypeOf(student1) === Student.prototype);
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
