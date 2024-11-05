// JavaScript: Expressions, Statements, Function Declarations, and Function Expressions

// 1. Expression Example
let expressionResult = 5 + 3 * 2; // An arithmetic expression that evaluates to 11

// 2. Statement Example
let statementExample = 10; // A simple statement
statementExample = expressionResult; // Assigning the value of expressionResult to statementExample

// 3. Function Declaration Example
function greet(name) {
    return `Hello, ${name}!`; // Returns a greeting
}
let greeting = greet("Anabil"); // Calls the function and stores the result

// 4. Function Expression Example
const farewell = function(name) {
    return `Goodbye, ${name}!`; // Returns a farewell message
};
let farewellMessage = farewell("Anabil"); // Calls the function expression and stores the result

// Task Execution
console.log(expressionResult);
console.log(statementExample);
console.log(greeting);
console.log(farewellMessage);


// JavaScript: Function Declarations Examples

// 1. Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}
let rectangleArea = calculateArea(5, 10);
console.log("Rectangle Area:", rectangleArea);

// 2. Function to find the maximum of three numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
let maximumValue = findMax(3, 7, 5);
console.log("Maximum Value:", maximumValue);

// 3. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join(''); // Reverses the string
}
let reversed = reverseString("JavaScript");
console.log("Reversed String:", reversed);

// 4. Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1); //
}
let factResult = factorial(5); // Calls the function
console.log("Factorial of 5:", factResult);

// 5. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Calls the function
console.log("Even Numbers:", evenNumbers);

// 6. Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // Converts Celsius to Fahrenheit
}
let fahrenheit = celsiusToFahrenheit(25); // Calls the function
console.log("25°C to Fahrenheit:", fahrenheit);


// JavaScript: Function Expressions Examples

// 1. Function Expression to calculate the square of a number
const square = function(num) {
    return num * num;
};
let squareResult = square(4);
console.log("Square of 4:", squareResult);

// 2. Function Expression to check if a number is prime
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
let primeCheck = isPrime(11);
console.log("Is 11 prime?", primeCheck);

// 3. Function Expression to calculate the sum of an array of numbers
const sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
let sumResult = sumArray([1, 2, 3, 4, 5]);
console.log("Sum of array [1, 2, 3, 4, 5]:", sumResult);

// 4. Function Expression to convert kilometers to miles
const kilometersToMiles = function(km) {
    return km * 0.621371;
};
let milesResult = kilometersToMiles(10);
console.log("10 kilometers in miles:", milesResult);

// 5. Function Expression for a simple countdown
const countdown = function(num) {
    if (num < 0) return; // Stop if number is less than 0
    console.log(num);
    countdown(num - 1);
};
console.log("Countdown from 5:");
countdown(5);
