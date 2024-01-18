// ---> this keyword
// this keyword is used to access the object's properties inside the object.
const student = {
    name: "Amy",
    age: 21,
    eng: 94,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3; // without this keyword get error. // ERROR: Uncaught ReferenceError: eng is not defined
        console.log("Avg: " + avg);
        console.log("this: ",this); // print the object's properties. // {name: "Amy", age: 21, eng: 94, math: 93, phy: 97, getAvg: ƒ getAvg()}
    }
};

console.log("student.getAvg();");
student.getAvg();

console.log("------------");
console.log("this: ",this);
console.log("Window {window: Window, self: Window, document: document, name: \"\", location: Location, …}");
console.log("window is the global object in the browser. It is the browser window. It is top level object. It contains all the properties, methods, objects, etc & contain the js code we write.")
console.log("Below both are same.\nwindow.alert()\nalert();");

// ---> Try & Catch.
console.log("=================================");
console.log("---> Try & Catch");
console.log("Try & Catch is used to handle the error.");

console.log("hello1");
console.log("hello2");
try {
    console.log("In try Block");
    console.log(a); // ERROR: Uncaught ReferenceError: a is not defined
} catch(err) {
    console.log("In catch Block");
    console.log("caught the error... a is not defined");
    console.log("ERROR: ",err); // ReferenceError: a is not defined
}
console.log("hello3");

// ---> Try catch & finally.
console.log("=================================");
console.log("---> Try catch & finally");
console.log("Try catch & finally is used to handle the error.");
console.log("Finally: is always executed. It is used to execute the important code. If error occur or not but it execute the code.");

console.log("hello1");
console.log("hello2");
try {
    console.log("In try Block");
    console.log(a); // ERROR: Uncaught ReferenceError: a is not defined
} catch(err) {
    console.log("In catch Block");
    console.log("caught the error... a is not defined");
    console.log("ERROR: ",err); // ReferenceError: a is not defined
} finally {
    console.log("In finally Block");
}