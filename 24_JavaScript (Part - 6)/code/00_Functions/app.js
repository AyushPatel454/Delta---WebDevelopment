// ---> Functions
// Functions are a set of statements that perform a task or calculates a value.

// - Function Definition
function hello() {
    // Function body
    // do something...
    console.log("Hello from function");
}

// - Function calling
hello(); // Hello from function

console.log("====================================");
function print1to11() {
    for (let i = 1; i <= 11; i++) {
        console.log(i);
    }
}

print1to11(); // function calling

console.log("====================================");
console.log("Practice Qs - 2")
console.log("Create a function to roll a dice & always display the value of the dice (1 to 6)");

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Dice: " + dice);
}

rollDice(); // function calling

// - Function with Arguments
// Arguments are the values that are passed to the function when it is called.
console.log("====================================");
console.log("---> Function with Arguments");

function printInfo(name, age) {
    console.log("Name: " + name, "Age: " + age);
}
console.log("printInfo('Amy', '21');");
printInfo("Amy", "21"); // function calling
console.log("printInfo('Ash');");
printInfo("Ash"); // function calling

console.log("====================================");
console.log("Create a function for find average of 3 numbers");

function calculateAvgOf3(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log("Average of 3 numbers: " + avg);
}
console.log("calculateAvgOf3(10, 20, 30);");
calculateAvgOf3(10, 20, 30); // function calling

console.log("====================================");
console.log("Create a function that prints the multiplication table of a number");

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num * i);
    }
}

console.log("printTable(4);");
printTable(4); // function calling

// - Return Statement
// The return statement stops the execution of a function and returns a value from that function.
console.log("====================================");
console.log("---> Return Statement");

function sum(a, b) {
    return a + b;
}

console.log("sum(10, 20);");
let result = sum(10, 20); // function calling
console.log("result: " + result);

console.log("====================================");
console.log("Create a function that take age as input and return true if age is greater than 18 otherwise return false");

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log("checkAge(20);");
let result2 = checkAge(20); // function calling
console.log("Output of Function " + result2);
if(result2){
    console.log("You are eligible for voting");
}else{
    console.log("You are not eligible for voting");
}

// Practice Qs - 5
console.log("====================================");
console.log("Practice Qs - 5");
console.log("Create a function that returns the sum of number from 1 to n.");

function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("sumOfN(10);");
let result3 = sumOfN(10); // function calling
console.log("Sum of 1 to 10: " + result3);

// concatenation of all strings in an array
console.log("====================================");
console.log("Create a Function that returns the concatenation of all strings in an array");

function concatStringsOfArrays(arr) {
    let str = "";

    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length - 1) {
            str += " "; // adding space between strings.
        }
    }

    console.log("str = "+str);

    return str;
}

console.log("concatStringsOfArrays(['Hello', 'World']);");
let result4 = concatStringsOfArrays(["Hello", "World"]); // function calling
console.log("Output of Function: " + result4);

// ---> Scope
// Scope determines the accessibility (visibility) of variables, objects, and functions from different part of the code.
// - Function Scope: Variables defined inside a function are only accessible from inside that function.
// - Block Scope: Variables defined inside a block are only accessible from inside that block.
// - Lexical Scope: 

// - Function Scope
console.log("====================================");
console.log("---> Function Scope");
name = "Maery"; // Global Scope
function printName() {
    let name = "John"; // Function Scope
    console.log("Function Name: " + name); // Use function scope variable first. (Priority High)
    console.log("Global Name: " + this.name); // Use global scope variable. (Priority Medium)
}

printName(); // function calling

// - Block Scope
console.log("====================================");
console.log("---> Block Scope");
console.log("Variable declared inside a {} block can not be accessed from outside the block.");
console.log("It is apply only on let and const keyword.");
console.log("var keyword has global scope so it can be accessed from outside the block.")

{
    let a = 10; // Block Scope // not accessible outside the block.
    const b = 20; // Block Scope // not accessible outside the block.
    var c = 30; // It can access outside the block also. (Global Scope)s
}
console.log("var c = " + c); // 30
console.log("let a = " + "ReferenceError: a is not defined"); 
console.log("contst b = " + "ReferenceError: b is not defined");

// - Lexical Scope
console.log("====================================");
console.log("---> Lexical Scope");
console.log("A variable defined outside a function can be accessible inside another function defined after the variable declaration.");
console.log("The opposite is NOT true");
function outer() {
    console.log("Inside outer() function");
    let x = 20;
    let y = 30;

    function inner() { // has Function scope. That's why we can not call inner() function outside the outer() function.
        console.log("Inside inner() function");
        console.log("x = " + x); // Lexical Scope
        console.log("y = " + y); //Lexical Scope
    }
    inner();
}
console.log("outer();");
outer(); // function calling

// ---> Function Expression
console.log("====================================");
console.log("---> Function Expression");
console.log("A function can be assigned to a variable.\nAlso called as nameless function or anonymous function.");

let add = function (a, b) { // function definition
    return a + b;
}
console.log("add(1,2);");
let result5 = add(1,2); // function calling
console.log("result = " + result5);

let namaste = function () { // function definition
    console.log("Hello from function");
}
console.log("namaste();");
namaste();

// ---> Higher Order Function
// A function that takes another function as an argument or returns another function as a result is called a higher order function.
console.log("====================================");
console.log("---> Higher Order Function");
console.log("A function that takes another function as an argument or returns another function as a result is called a higher order function.");
console.log("--------");
console.log("Take Function Argument");
let greet = function() {
    console.log("Good Morning");
}

// higher order function
function multipleGreet(func, num) { // func ---> greet(), num ---> 3s
    for(let i = 0; i < num; i++) {
        func();
    }
}

console.log("multipleGreet(greet, 3);");
multipleGreet(greet, 3); // function calling
multipleGreet(function() {console.log("Namste...!!");}, 2); // function calling"

console.log("--------");
console.log("Return Function");
function oddEvenTest(request) {
    if(request == 'odd') {
        return function(num) {
            console.log(!(num % 2 == 0));
        }
    } else  if(request == 'even') {
        return function(num) {
            console.log((num % 2 == 0));
        }
    } else {
        return function() {
            console.log("Wrong request!");
        }
    }
}

let odd = oddEvenTest('odd');
console.log("odd(4);");
odd(4); // function calling

let even = oddEvenTest('even');
console.log("even(4);");
even(4); // function calling

let wrong = oddEvenTest('wrong');
console.log("wrong();");
wrong(); // function calling

// ---> Methods
// Actions that can be perfomed on objects.
console.log("====================================");
console.log("---> Methods");
console.log("Actions that can be perfomed on objects.");

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
}

console.log("calculator.add(10, 20): "+calculator.add(20, 30));
console.log("calculator.sub(10, 20): "+calculator.sub(20, 30));
console.log("calculator.mul(10, 20): "+calculator.mul(20, 30));

console.log("-------");
console.log("Methods (Shorthand)");
calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
};
console.log("calculator.add(10, 20): "+calculator.add(20, 30));
console.log("calculator.sub(10, 20): "+calculator.sub(20, 30));
console.log("calculator.mul(10, 20): "+calculator.mul(20, 30));