// ---> setTimeout

/**
 * Executes a function after a specified delay.
 * 
 * @param {Function} callback - The function to be executed.
 * @param {number} delay - The delay in milliseconds before the function is executed.
 * @param {...any} args - Optional arguments to be passed to the function.
 * @returns {number} - A unique identifier for the timeout.
 * 
 * @description
 * The setTimeout function is used to schedule the execution of a function after a specified delay.
 * It takes in a callback function, a delay in milliseconds, and optional arguments to be passed to the function.
 * The function is executed only once after the specified delay.
 * The return value is a unique identifier for the timeout, which can be used to cancel the timeout using the clearTimeout function.
 */


// Example usage:

function greet() {
  console.log('I am executed after 4 seconds.');
}
console.log("Before setTimeout");

setTimeout(greet, 4000); // execute greet after 4 seconds.s

console.log("setTimeout was called");

// Example 2:
console.log("Hi there");
// Welcome user after 4 seconds.
setTimeout(() => {
    console.log("Yellow World.");
}, 4000);
console.log("Welcome to");