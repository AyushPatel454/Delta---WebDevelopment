/**
 * The setInterval() function is a built-in JavaScript function that repeatedly calls a function or executes a code snippet at a specified interval.
 * It is commonly used for creating animations, updating real-time data, and performing tasks that need to be executed periodically.
 * 
 * Important points about setInterval():
 * - The setInterval() function takes two parameters: a function or code snippet to be executed and the interval time in milliseconds.
 * - The function or code snippet provided as the first parameter will be executed repeatedly at the specified interval until clearInterval() is called.
 * - The interval time determines how often the function or code snippet will be executed.
 * - The setInterval() function returns an interval ID that can be used to stop the execution of the function or code snippet using clearInterval().
 * - If the interval time is set to 0 or a negative value, the function or code snippet will be executed immediately and repeatedly without any delay.
 * 
 * @param {Function} callback - The function or code snippet to be executed repeatedly.
 * @param {number} delay - The interval time in milliseconds.
 * @returns {number} - The interval ID that can be used to stop the execution of the function or code snippet.
 */

// ---> setInterval()
// Example 1: print "Interval function executed..." every 1 second.
const intervalId = setInterval(() => {
    // Code to be executed at each interval
    console.log('Interval function executed...');
}, 1000);

console.log("1st (Interval function executed) Interval ID: ", intervalId);

// To stop the interval after 11 seconds
setTimeout(() => {
    clearInterval(intervalId);
}, 11000);

// Example 2: print hello world every 4 seconds.
let id = setInterval(() => {
    console.log('Hello world');
}, 4000);
console.log("2nd (Hello world) Interval ID: ", id);
