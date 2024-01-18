/**
 * This file demonstrates the usage of 'this' keyword in arrow functions and normal functions.
 * 
 * Important points about 'this' keyword in arrow functions:
 * - Arrow functions do not have their own 'this' value.
 * - 'this' in an arrow function refers to the enclosing lexical scope.
 * - Arrow functions are not suitable for methods or constructors that require their own 'this' value.
 * 
 * Important points about 'this' keyword in normal functions:
 * - 'this' in a normal function refers to the object that is calling the function.
 * - The value of 'this' can change depending on how the function is called.
 * - 'this' can be explicitly set using the call(), apply(), or bind() methods.
 */

// ---> this with arrow function & normal function.
const student = {
    name: "Amy",
    marks: 95,
    prop: this, // this refers to the enclosing lexical scope. // window object
    getName: function() {
        console.log("this: ",this); // this refers to the object that is calling the function. // student object
        return this.name; // return student object name property.
    },
    getMarks: () => {
        console.log("this: ",this); // this refers to the enclosing lexical scope. // window object
        return this.marks; // return window object marks property. // undefined // because window object does not have marks property.
    },
    getInfo1: function() {
        setTimeout( () => { // Lexical scope // function() --> setTimeOut() --> () => {} student object (enclosing lexical scope)
            console.log("setTimeout() with arrow function.");
            console.log("student.getInfo1();");
            console.log("this: ",this); // student object // because setTimeout() is called on student object.
        }, 2000);
    },
    getInfo2: function() {
        setTimeout( function() { // Parent scope // setTimeOut() --> function() --> Window (parent scope) // Because setTimeout is called on window object.
            console.log("setTimeout() with Normal function.");
            console.log("student.getInfo2();");
            console.log("this: ",this); // window object // because setTimeout() is called on window object.
        }, 2000);
    
    }
}

console.log("student.getName();");
student.getName();

console.log("student.getMarks();");
student.getMarks();

student.getInfo1();

student.getInfo2();