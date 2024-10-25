// Naming conventions
//  1- no reserved words
//  2- cannot start with a number
//  3-cannot use hyphens

const numOne= 22;
const numTwo=23;



// Scopes
//  1- global scope
//  2- local scope / block
//  3- module scope
//  4-script scope
//  5-function scope

console.log("**Global Scope**");
// var is a Globally scoped
var globalVar="I'm a global variable";
// let is Block Scoped
let scriptVar="I'm a script-scoped variable";

console.log("This variable is Accessible anywhere:",globalVar);
console.log("This variable is Accessible anywhere in this script:  ",scriptVar);

console.log("**Function Scope**");
function testFunctionScope(){
    // function scope
    var functionVar = "I'm a function-scoped variable.";
    console.log("Accessible inside the function: " ,functionVar);
}

testFunctionScope();
// console.log(functionVar); //  functionVar is not accessible outside the function.

console.log("**Block Scope**");
if(true){
    // block scope
    let blockVar= "I'm a Block-scoped variable.";
    var localVar= "I'm a Local variable(Function or global scope)";

    console.log("Accessible inside the block:  ",blockVar);
    console.log("Accessible inside the block:  ",localVar);
}

// console.log(blockVar); //  blockVar is not accessible outside the Block.
console.log("Accessible outside the block due to var's function/global scope");
console.log(localVar);

console.log("**Script scope**");
var newGlobalVar = "I'm attached to the window object.";
let scriptLet= "I'm script-scoped, not attached to wimdow";
const scriptConst= "I'm also a script-scoped, not attached to window";


console.log(newGlobalVar);
console.log(scriptLet);
console.log(scriptConst);

console.log("**Accessing these script-scoped variables with window objects**");

console.log(window.newGlobalVar);
// both are undefined because they doesn't  attach to window
console.log(window.scriptLet);
console.log(window.scriptConst);
console.log("Both are undefined because they doesn't  attach to window");


// console.log("**Module Scope**");

// var moduleVar = "I'm a var in Module scope.";
// let moduleLet= "I'm a let variable in module scope.";
// const moduleConst= "I'm a const variable in module scope.";

// console.log(moduleVar);
// console.log(moduleLet);
// console.log(moduleConst);

// trying to access  variables through the window object
// console.log("**Accessing these module-scoped variables with window objects**");

// console.log("Var in module scope not in global scope");
// console.log(window.moduleVar);
// console.log(window.moduleLet);
// console.log(window.moduleConst);
// console.log("All are undefined because they are not attached to window");



// operators
//  1- Arithmetic operators(+, -, *,/),%(modulus), **(exponent)
//  2-Assignment operator(=)

console.log("**Arithematic Operators goes here**");
console.log("Sum==> ", numOne + numTwo);
console.log("Difference==> ", numOne - numTwo);
console.log("Multiply==> ", numOne * numTwo);
console.log("Division==> ", numOne / numTwo);
console.log("Modulus==> ", numOne % numTwo);
console.log("Exponent==> ", numOne ** numTwo);


// Comparison operator
// 1-equal(==,===)
// 2-greater than(>)
// 3-less than(<)

console.log("**Comparison '==,===' Operators goes here**");
console.log("Check only equality ",22==22);
console.log("This operator '==' Convert type second argument according to type of first Argument");
console.log(22=="22");
console.log("Check equality and type ",22==="22");


console.log("**Comparison '>,>=,< ' Operators goes here**");
console.log(22 > "21");
console.log(22 >= "21");
console.log(20 >= "21");
console.log(20 <= "21");


// Logical Operators
// 1-and(&&)
// 2-or(||)
// 3-not(!!)


console.log("**AND Operator '&&' goes here**");
console.log("And operator===", true&&true);
console.log("And operator===", true&&false);

console.log("**OR Operator '||' goes here**");
console.log("OR operator===", true||true);
console.log("OR operator===", true||false);

console.log("**NOT Operator '!!' goes here**");
console.log("NOT operator===", !!true);
console.log("NOT operator===", !!false);