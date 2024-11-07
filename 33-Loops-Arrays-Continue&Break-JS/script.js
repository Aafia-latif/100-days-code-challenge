// Array Declaration
const numbersArray = [10, 20, 30, 40, 50];
console.log("Numbers array:", numbersArray);

// Some Tasks goes here

// Task 1: Sum all numbers in the array using a for loop
let sum = 0;
for (let index = 0; index < numbersArray.length; index++) {
    sum += numbersArray[index];
}
console.log("Sum of numbers:", sum);

// Task 2: Loop through array and use 'continue' to skip even numbers
console.log("Odd numbers in the array:");
for (let index = 0; index < numbersArray.length; index++) {
    if (numbersArray[index] % 2 === 0) continue; // Skip even numbers
    console.log(numbersArray[index]);
}

// Task 3: Loop through array and stop when a specific number is found using 'break'
const target = 30;
console.log("Finding number 30 in the array:");
for (let index = 0; index< numbersArray.length; index++) {
    if (numbersArray[index] === target) {
        console.log(`Found ${target} at index ${index}`);
        break; // Exit loop when target is found
    }
}


// Task 4: Use 'for...of' loop to display array elements
console.log("Displaying numbers using 'for...of' loop:");
for (const num of numbersArray) {
    console.log(num);
}

// Task 5: Array of strings - Filter and log names starting with 'A'
const namesArray = ["Anabil", "Alia", "Aafia", "Asra", "Maa G💖"];
console.log("Names starting with 'M':");
for (const name of namesArray) {
    if(typeof name === "string" && !name.startsWith("M")) { // Ensure 'name' is a string and starts with 'M'
        continue; // Skip names not starting with 'M'
        }
    // console.log(namesArray);
    console.log(name);

}

// Task 6: Find the maximum number in the array
let maxNum = numbersArray[0];
for (let index = 1; index < numbersArray.length; index++) {
    if (numbersArray[index] > maxNum) {
        maxNum = numbersArray[index];
    }
}
console.log("Maximum number in the array:", maxNum);

// Task 7: Calculate the average of the array
let total = 0;
for (const num of numbersArray) {
    total += num;
}
const average = total / numbersArray.length;
console.log("Average of numbers:", average);

// Task 8: Check if all numbers in the array are positive
let allPositive = true;
for (const num of numbersArray) {
    if (num <= 0) {
        allPositive = false;
        break; // Stop checking if any number is non-positive
    }
}
console.log("Are all numbers positive?", allPositive);

// Task 9: Print the square of each number in the array using 'for...of' loop
console.log("Squares of each number in the array:");
for (const num of numbersArray) {
    console.log("Square Root of", num, "is ",num ** 2);
}

// Task 10: Count how many names are shorter than 5 characters in the names array
let shortNameCount = 0;
for (const name of namesArray) {
    if (namesArray.length < 5) {
        shortNameCount++;
    }
}
console.log("Number of names shorter than 5 characters:", shortNameCount);