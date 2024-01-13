// Arrays
let student = ["Amy", "Ash", "Tom", "Jerry"];
console.log(student);
console.log(`student = ${student}`);
console.log(`student[0] = ${student[0]}`);
console.log(`student[1] = ${student[1]}`);
console.log(`typeof student = ${typeof student}`);

// ---> Creating Arrays
let arr1 = [1, 2, 3, 4, 5]; // number array
let arr2 = [1, 2, "Amy", "Ash", true, false]; // mixed array
let arr3 = [10, 1.6, true] // mixed array
let arr4 = []; // empty array

console.log(arr2[2][0]); // A

// ---> Arrays are Mutable
console.log("---> Arrays are Mutable");
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]
fruits[1] = "Pineapple";
console.log(`fruits[1] = ${fruits[1]}`);
console.log(fruits); // ["Apple", "Pineapple", "Orange"]
console.log(`length of furits = ${fruits.length}`);

fruits[10] = "Kiwi";
console.log(`fruits[10] = Kiwi`); // ["Apple", "Pineapple", "Orange", empty × 7, "Kiwi"]
console.log(fruits);
console.log(`length of fruits = ${fruits.length}`); // 11

// ---> Array Methods
let car = ["BMW", "Audi", "Mercedes"];
console.log(car);

// ---> push() - add element at the end of the array
console.log("---> push(): add element at the end of the array");
car.push("Ferrari");
console.log(car); // ["BMW", "Audi", "Mercedes", "Ferrari"]
car.push("Porsche", "Lamborghini");
console.log(car); // ["BMW", "Audi", "Mercedes", "Ferrari", "Porsche", "Lamborghini"]

// ---> pop() - remove element from the end of the array
console.log("---> pop(): remove element from the end of the array");
let lastCar = car.pop(); // Lamborghini
console.log(lastCar); // Lamborghini
console.log(car); // ["BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]

// ---> unshift() - add element at the beginning of the array
console.log("---> unshift(): add element at the beginning of the array");
car.unshift("Ford"); 
console.log(car); // ["Ford", "BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]
car.unshift("Honda", "Toyota");
console.log(car); // ["Honda", "Toyota", "Ford", "BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]

// ---> shift() - remove element from the beginning of the array
console.log("---> shift(): remove element from the beginning of the array");
let firstCar = car.shift(); // Honda
console.log(firstCar); // Honda
console.log(car); // ["Toyota", "Ford", "BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]

// ---> indexOf() - return the index of the first occurence of the element
console.log("---> indexOf(): return the index of the first occurence of the element");
console.log(car); // ["Toyota", "Ford", "BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]
let index = car.indexOf("BMW");
console.log(`car.indexOf("BMW) = ${index}`); // 2
console.log(`car.indexOf("Ferrari") = ${car.indexOf("Ferrari")}`); // 5
console.log(`car.indexOf("Ford") = ${car.indexOf("Ford")}`); // 1
console.log(`car.indexOf("Honda") = ${car.indexOf("Honda")}`); // -1

// ---> includes() - return true if the element is in the array
console.log("---> includes(): return true if the element is in the array");
console.log(car); // ["Toyota", "Ford", "BMW", "Audi", "Mercedes", "Ferrari", "Porsche"]
console.log(`car.includes("BMW") = ${car.includes("BMW")}`); // true
console.log(`car.includes("Ferrari") = ${car.includes("Ferrari")}`); // true
console.log(`car.includes("Alto") = ${car.includes("Alto")}`); // false

// ---> concat() - combine two arrays
console.log("---> concat(): combine two arrays");
let arr5 = ["Amy", "Ash"];
let arr6 = ["Tom", "Jerry"];
console.log("arr1: ",arr5); // ["Amy", "Ash"]
console.log("arr2: ",arr6); // ["Tom", "Jerry"]
let arr7 = arr5.concat(arr6);
console.log("arr1.concat(arr2): ",arr7); // ["Amy", "Ash", "Tom", "Jerry"]

// ---> reverse() - reverse the order of the elements
console.log("---> reverse(): reverse the order of the elements");
let arr8 = ["Amy", "Ash", "Tom", "Jerry"];
console.log("arr1: ",arr8); // ["Amy", "Ash", "Tom", "Jerry"]
console.log("arr1.reverse(): ",arr8.reverse()); // ["Jerry", "Tom", "Ash", "Amy"]

// ---> slice() - return a new array from the given start index to the end index
console.log("---> slice(): return a new array from the given start index to the end index");
let arr9 = ["Amy", "Ash", "Tom", "Jerry"];
console.log("arr1: ",arr9); // ["Amy", "Ash", "Tom", "Jerry"]
console.log("arr1.slice(2): ",arr9.slice(2)); // ["Tom", "Jerry"]
console.log("arr1.slice(0, 2): ",arr9.slice(0, 2)); // ["Amy", "Ash"]
console.log(`arr1.slice(-2): ${arr9.slice(-2)}`); // ["Tom", "Jerry"]

// ---> splice() - remove elements from the array and add new elements
console.log("---> splice(): remove elements from the array and add new elements");
let arr10 = ["audi", "bmw", "mercedes", "ferrari", "porsche"];
console.log("arr1: ",arr10); // ["audi", "bmw", "mercedes", "ferrari", "porsche"]
// remove elements from index 3 to end (4)
arr10.splice(3); // Return removed elements - ["ferrari", "porsche"]
console.log("arr1.splice(3)\narr1 =",arr10); // ["audi", "bmw", "mercedes"]
// remove 2 elemnts from index number 1
arr10.splice(1, 2); // Return removed elements - ["bmw", "mercedes"]
console.log("arr1.splice(1,2)\narr1 =",arr10); // ["audi"]
// add new elements at index number 0
arr10.splice(0, 0, "honda", "toyota", "fortuner"); // Return removed elements - []
console.log("arr1.splice(0, 0, \"honda\", \"toyota\", \"fortuner\")\narr1 = ",arr10); // ["honda", "toyota", "audi", "fortuner"]
// replace elements from index number 2
arr10.splice(2, 1, "ford", "chevrolet"); // Return removed elements - ["audi"]
console.log("arr1.splice(2, 1, \"ford\", \"chevrolet\")\narr1 = ",arr10); // ["honda", "toyota", "ford", "chevrolet", "fortuner"]

// ---> sort() - sort the elements in ascending order
console.log("---> sort(): sort the elements in ascending order");
console.log("NOTE: This method internally convert Array items into string after that it sort the items in ascending order");
console.log("NOTE: This method use when we have string or character items in array");
console.log("NOTE: This method does not proper work with numbers");
console.log("NOTE: This method change the original array");
let arr11 = ["Amy", "Ash", "Tom", "Jerry"];
console.log("arr1: ",arr11); // ["Amy", "Ash", "Tom", "Jerry"]
console.log("arr1.sort(): ",arr11.sort()); // ["Amy", "Ash", "Jerry", "Tom"]
console.log("arr1: ",arr11); // ["Amy", "Ash", "Jerry", "Tom"]
let arr12 = [33, 4, 1111, 222];
console.log("arr2: ",arr12); // [33, 4, 1111, 222]
console.log("arr2.sort(): ",arr12.sort()); // [1111, 222, 33, 4]
console.log("arr2: ",arr12); // [1111, 222, 33, 4]

// ---> Array References
// Address in memory.
// When we create an Array that time in memory REFERNCE VARIABLE is created. It holds the first element address of the array.
console.log("---> Array References");
console.log("[1] == [1] = ",[1] == [1],"--> Because both array have different location in memory that's why they contain different address value."); // false
console.log("[1] === [1] = ",false,"--> Because both array have different location in memory that's why they contain different address value."); // false
console.log("**** Copying Array ****");
console.log("Any updation in original array will reflect in copied array and vice versa.");
let num = [1, 2, 3, 4, 5]; // num ---> is Reference Variable
console.log("num = ",num); // [1, 2, 3, 4, 5]
let arrCopy = num;
console.log("let arrCopy = num\narrCopy = ",arrCopy); // [1, 2, 3, 4, 5]
arrCopy.push(6);
console.log("arrCopy.push(6)\narrCopy = ",arrCopy,"\nnum = ",num); // [1, 2, 3, 4, 5, 6]
num.pop();
console.log("num.pop()\nnum = ",num,"\narrCopy = ",arrCopy); // [1, 2, 3, 4, 5]")

// ---> Constant Array
// we can change the elements of the array but we can not change the array itself.
// we can perform all operations: push(), pop(), shift(), unshift(), indexOf(), includes(), concat(), reverse(), slice(), splice(), sort(), etc...
// But we can not assign/create new Array.
console.log("---> Constant Array");
console.log("we can change the elements of the array but we can not change the array itself.we can perform all operations: push(), pop(), shift(), unshift(), indexOf(), includes(), concat(), reverse(), slice(), splice(), sort(), etc... But we can not assign/create new Array.");
const arr13 = [1, 2, 3];
console.log("arr13 = ",arr13); // [1, 2, 3]
arr13.push(4);
console.log("arr13.push(4)\narr13 = ",arr13); // [1, 2, 3, 4]
arr13.pop();
console.log("arr13.pop()\narr13 = ",arr13); // [1, 2, 3]
arr13[0] = 10;
console.log("arr13[0] = 10\narr13 = ",arr13); // [10, 2, 3]
console.log("*** We see above we can perform all operations on constant array except assign/create new Array ***");
// arr13 = [4, 5, 6]; // TypeError: Assignment to constant variable.
console.log("arr13 = [4, 5, 6] --> TypeError: Assignment to constant variable.");

// ---> Nested Array
console.log("---> Nested Array");
let nestedArr = [
    ["Amy", "Ash"],
    ["Tom", "Jerry"]
];
console.log("nestedArr = ",nestedArr); // [["Amy", "Ash"], ["Tom", "Jerry"]]
console.log("nestedArr[0] = ",nestedArr[0]); // ["Amy", "Ash"]
console.log("nestedArr[0][0] = ",nestedArr[0][0]); // Amy
console.log("nestedArr[0][1] = ",nestedArr[0][1]); // Ash

