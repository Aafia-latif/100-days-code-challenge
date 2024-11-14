// Callback Function Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Higher-Order Function that takes a callback
function processUserInput(callback) {
  const userName = "Anabil";
  callback(userName);
}

// Example Task 1: Using processUserInput with greet as callback
console.log("Example Task 1:");
processUserInput(greet);

// Array Methods (Commonly used HOF in JavaScript)

// Example Array for tasks
const numbers = [1, 2, 3, 4, 5];

// 1. forEach - Executes a provided function once for each array element
console.log("Example Task 2:");
numbers.forEach((num) => console.log(num * 2));

// 2. map - Creates a new array populated with the results of calling a provided function on every element
console.log("Example Task 3:");
const squared = numbers.map((num) => num * num);
console.log("Squared Array:", squared);

// 3. filter - Creates a new array with all elements that pass the test implemented by the provided function
console.log("Example Task 4:");
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 4. reduce - Reduces the array to a single value by accumulating results
console.log("Example Task 5:");
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// 5. find - Returns the first element that satisfies the provided testing function
console.log("Example Task 6:");
const found = numbers.find((num) => num > 3);
console.log("First number greater than 3:", found);

// 6. some - Tests if at least one element in the array passes the provided function
console.log("Example Task 7:");
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Contains even number:", hasEven);

// 7. every - Tests if all elements in the array pass the provided function
console.log("Example Task 8:");
const allPositive = numbers.every((num) => num > 0);
console.log("All numbers are positive:", allPositive);

// Example Callback Function in Array Method
console.log("Example Task 9: Callback in Array Method (filter)");
const fruits = ["apple", "banana", "cherry", "apricot", "blueberry"];
const aFruits = fruits.filter((fruit) => fruit.startsWith("a"));
console.log("Fruits that start with 'a':", aFruits);

// Task 10: Higher-Order Function that returns a function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // Returns a function that doubles a number
console.log("Example Task 10:");
console.log("Double of 5:", double(5));

// Additional Examples for Practice

// Practice 1: Use forEach to calculate and log the square of each number in an array
console.log("Practice 1:");
numbers.forEach((num) => console.log(`Square of ${num}:`, num * num));

// Practice 2: Use map to convert all strings in an array to uppercase
console.log("Practice 2:");
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperCaseFruits);

// Practice 3: Use reduce to find the maximum number in an array
console.log("Practice 3:");
const maxNum = numbers.reduce(
  (max, num) => (num > max ? num : max),
  numbers[0]
);
console.log("Maximum number:", maxNum);

// Practice 4: Use find to locate the first number in the array greater than 2
console.log("Practice 4:");
const firstGreaterThanTwo = numbers.find((num) => num > 2);
console.log("First number greater than 2:", firstGreaterThanTwo);

// Practice 5: Use filter to find all fruits with more than 5 letters
console.log("Practice 5:");
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with more than 5 letters:", longFruits);
