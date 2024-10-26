// if-else statement
console.log("Example of if-else statement:");
let temperature = 25;

if(temperature > 30){
    console.log("It's a hot day. Stay hyderated!");
}else if(temperature >= 20 && temperature <= 30){
    console.log("The weather is pleasant.☺");
}else{
    console.log("It's a bit chilly. Wear a jacket!");
}

// While loop

console.log("Example of while loop:");
let count=5;

console.log("Starting countdown from 5:");

while( count > 0){
    console.log(count);
    count--;
}

// do-while loop
console.log("Example of do-while loop:");

let userInput;
let attempts=0;

do{
    userInput = prompt("Enter a number between 1 and 10:");
    attempts++;
    if(userInput < 1|| userInput > 10){
        console.log("Invalid input. Try again.");
    }
}while(userInput < 1 || userInput > 10);

console.log("You entered a valid number:", userInput);
console.log("Number of attempts:", attempts);







