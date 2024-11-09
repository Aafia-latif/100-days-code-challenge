// JavaScript Practice: Callbacks, Array Insertion, and Random Deletion

console.log("=== Array Operations and Callbacks ===");

// --- Callback Function Example ---
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

// Callback function definition
function callbackExample() {
  console.log("This is the callback function being executed.");
}

// Using the callback
greet("Anbil", callbackExample);

// --- Insert Value in Array ---
let numbers = [1, 2, 3, 4, 5];
console.log("Initial Array:", numbers);

// Function to insert a value into an array at a specific index
function insertValue(arr, index, value) {
  arr.splice(index, 0, value);
}

insertValue(numbers, 2, 99); // Insert 99 at index 2
console.log("Array after insertion:", numbers);

// --- Delete a Random Number from Array ---
function deleteRandom(arr) {
  if (arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Deleting number at index ${randomIndex}:`, arr[randomIndex]);
    arr.splice(randomIndex, 1);
  } else {
    console.log("Array is empty, cannot delete.");
  }
}

deleteRandom(numbers); // Delete a random number
console.log("Array after random deletion:", numbers);

// --- Practice Tasks ---

// Task 1: Use a callback to perform an action after an array modification
function performAfterModification(arr, callback) {
  console.log("Array before modification:", arr);
  callback(arr);
  console.log("Array after modification:", arr);
}

performAfterModification(numbers, (arr) => insertValue(arr, 1, 42)); // Insert 42 at index 1

// Task 2: Add a random number between 1-100 to the array and log it
function addRandomNumber(arr) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  arr.push(randomNum);
  console.log(`Added random number ${randomNum} to array:`, arr);
}

addRandomNumber(numbers);

// Task 3: Remove a number at a specific index using a callback
function removeAtIndex(arr, index, callback) {
  if (index >= 0 && index < arr.length) {
    console.log(`Removing number at index ${index}: ${arr[index]}`);
    callback(arr, index);
  } else {
    console.log("Invalid index.");
  }
}

removeAtIndex(numbers, 2, (arr, index) => arr.splice(index, 1));
console.log("Array after removing specific index:", numbers);

// --- Additional Practice Tasks ---

// Task 4: Find the sum of all numbers in an array using a callback
function sumArray(arr, callback) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  callback(sum);
}

sumArray(numbers, (result) => console.log("Sum of array elements:", result));

// Task 5: Check if a number exists in the array using a callback
function checkIfExists(arr, num, callback) {
  const exists = arr.includes(num);
  callback(exists, num);
}

checkIfExists(numbers, 99, (exists, num) => {
  console.log(
    `Number ${num} ${exists ? "exists" : "does not exist"} in the array.`
  );
});

// Task 6: Filter out odd or even numbers based on a callback
function filterArray(arr, callback) {
  const filteredArray = arr.filter(callback);
  console.log("Filtered array:", filteredArray);
}

// Filter even numbers
filterArray(numbers, (num) => num % 2 === 0);

// Task 7: Sort the array in ascending or descending order using a callback
function sortArray(arr, comparator) {
  const sortedArray = [...arr].sort(comparator);
  console.log("Sorted array:", sortedArray);
}

// Sort in ascending order
sortArray(numbers, (a, b) => a - b);

// Sort in descending order
sortArray(numbers, (a, b) => b - a);

// Task 8: Find the maximum and minimum value in the array using a callback
function findMinMax(arr, callback) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  callback(min, max);
}

findMinMax(numbers, (min, max) => {
  console.log(`Minimum: ${min}, Maximum: ${max}`);
});

// Task 9: Execute a callback on each element of the array (like custom forEach)
function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

customForEach(numbers, (element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Task 10: Create a callback-based function to double each element in the array
function modifyArray(arr, modifierCallback) {
  const modifiedArray = arr.map(modifierCallback);
  console.log("Modified array:", modifiedArray);
}

// Double each element
modifyArray(numbers, (num) => num * 2);
