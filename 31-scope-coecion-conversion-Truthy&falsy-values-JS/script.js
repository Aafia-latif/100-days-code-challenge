// Variables Scope
function variableScope(){
    var globalVar ="I'm a global variable";  // Function-scoped with "var"

    if(true){
        let blockVar = "I'm a block-scoped variable"  // Block-scoped with "let"
    }

    console.log(globalVar);
    // console.log(blockVar);// Uncommenting this will cause an error because 'blockVar' is block-scoped
}

console.log("Variable Scope: ");
variableScope();

// Type coercion and conversion
let num = "10";
let numConverted = Number(num);//  Explicit Conversion (String to Number)
let coercedResult = num-1;// Implicit Coercion (String 'num' to Number during subtraction)

console.log("Type Conversion:");
console.log("Converted '10' (String) to",numConverted, "using Number()");

console.log("Type Coercion:");
console.log("'10'-1 = ", coercedResult );

// Truthy and Falsy Values
let truthyValues = [true,1,"hello",[],{}];
let falsyValues = [false, 0,"",null,undefined,NaN];

console.log("Truthy Values: ");
truthyValues.forEach(function(value){
    if(value) console.log(value," is truthy.");
});

console.log("Falsy Values: ");
falsyValues.forEach(function(value){
    if(!value) console.log(value," is falsy.");
});


