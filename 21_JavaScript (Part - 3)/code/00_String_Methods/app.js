// Trim(): Removes whitespace from both ends of a string.
console.log("-----------------------------------Trim()-----------------------------------");
let msg = "       Hello      world                 ";
console.log(msg.trim());

let res = msg.trim();
console.log(`res = ${res}`);
console.log(`msg = ${msg}`);

console.log("-----------------------------------toUpperCase()-----------------------------------");
msg = "Random String";
console.log(`msg = ${msg}`);
console.log(msg.toUpperCase());

console.log("-----------------------------------toLowerCase()-----------------------------------");
msg = "Random String";
console.log(`msg = ${msg}`);
console.log(msg.toLowerCase());

console.log("-----------------------------------indexOf(arg)-----------------------------------");
msg = "ILoveJavaScript";
console.log(`msg = ${msg}`);
console.log(`msg.indexOf('Love') = ${msg.indexOf('Love')}`);                // 1
console.log(`msg.indexOf('JavaScript') = ${msg.indexOf('JavaScript')}`);    // 5
console.log(`msg.indexOf('java') = ${msg.indexOf('java')}`);                // -1 (java is not found)

console.log("-----------------------------------Method Chaining-----------------------------------");
// Left to Right
msg = "        hello       ";
console.log(`msg = ${msg}`);
let newMsg = msg.trim().toUpperCase(); // trim() first, then toUpperCase() // Left to Right // "      hello     " -> hello -> HELLO
console.log(`newMsg = ${newMsg}`); // HELLO

console.log("-----------------------------------slice(st, end not inclusive)-----------------------------------");
msg = "IloveJavaScript";
console.log(`msg = ${msg}`);
console.log(`msg.slice(2, 6) = ${msg.slice(2, 6)}`); // oveJ
console.log(`msg.slice(2) = ${msg.slice(2)}`); // oveJavaScript
console.log(`msg.slice(-6) = msg.slice(length - 6) = msg.slice(${msg.length} - 6) = msg.slice(${msg.length - 6}) = ${msg.slice(-6)}`); // JavaScript

console.log("-----------------------------------relplace(OldValue, NewValue)-----------------------------------");
msg = "IloveJavaScript";
console.log(`msg = ${msg}`);
console.log(`msg.replace('JavaScript', 'Python') = ${msg.replace('JavaScript', 'Python')}`); // IlovePython

console.log("-----------------------------------repeat(count)-----------------------------------");
msg = "Hare Krishna";
console.log(`msg = ${msg}`);
console.log(`msg.repeat(3) = ${msg.repeat(3)}`); // Hare KrishnaHare KrishnaHare Krishna