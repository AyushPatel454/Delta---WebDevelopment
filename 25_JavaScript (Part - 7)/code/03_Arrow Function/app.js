// ---> Arrow Functions
const sum = (a, b) => {
    console.log(a+b);
};

console.log("sum(1,2);");
sum(1,2);

const square = (n) => {
    return n*n;
};

console.log("square(3): ",square(3));

// For single argument
// Directly return the value
const square2 = n => n*n; // Implicit return
console.log("square2(3): ",square2(3));

// No argument
const hello = () => {
    console.log("Hello World!");
};

console.log("hello();");
hello();


// Implicit return
const cube = n => (n*n*n);
console.log("cube(3): ",cube(3));