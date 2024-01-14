// ---> Object Literals
const student = { // const: student is a constant and cannot be reassigned. Chaninng of Address is not possible
    name: "Amy",
    age: 21,
    gender: "Female",
    hobbies: ["Traveling", "Reading", "Singing", "Coding"],
};
console.log(student);
console.log("typeof student: ", typeof student);
// ---> Accessing the properties of an object using dot notation.
console.log("student.name: ", student.name);
console.log("student.age: ", student.age);
console.log("student.gender: ", student.gender);
console.log("student.hobbies: ", student.hobbies,"\n---------");

// ---> Another way to access.
console.log("student[name]: ", student["name"]);
console.log("student[age]: ", student["age"]);
console.log("student[gender]: ", student["gender"]);
console.log("student[hobbies]: ", student["hobbies"]);

console.log("=====================================");
// ---> Creating Post
console.log("Creating Post");
const post = {
    username: "@amy2519",
    content: "This is my #firstPost",
    likes: 95,
    reposts: 9,
    tags: ["@ash1925", "@shradha12", "@kiaan13"],
};
console.log(post);

// ---> Get Values:- (Conversion in Get Values)
// JavaScript automatically convert object key to String.
// Even if we made the number as a key,  the number will be converted to String.
console.log("=====================================");
console.log("Get Values:- (Conversion in Get Values)");
let obj = {
    1: 'a',
    3: 'b',
    true: 'c',
    null: 'd',
    undefined: 'e',
};
console.log("obj: ", obj);
console.log("obj[1]: ", obj[1]);
console.log("obj['1']: ", obj['1']);
// obj.1; // Syntax Error: Unexpected number
console.log("obj.1: SyntaxError: Unexpected number"); // SyntaxError: Unexpected number
console.log("------");
console.log("obj[3]: ", obj[3]);
console.log("obj['3']: ", obj['3']);
// obj.3; // Syntax Error: Unexpected number
console.log("obj.3: SyntaxError: Unexpected number"); // SyntaxError: Unexpected number
console.log("------");
console.log("obj[true]: ", obj[true]);
console.log("obj['true']: ", obj['true']);
console.log("obj.false: ", obj.false);
console.log("------");
console.log("obj[null]: ", obj[null]);
console.log("obj['null']: ", obj['null']);
console.log("obj.null: ", obj.null);
console.log("------");
console.log("obj[undefined]: ", obj[undefined]);
console.log("obj['undefined']: ", obj['undefined']);
console.log("obj.undefined: ", obj.undefined);
console.log("------");

// ---> Add new property
console.log("=====================================");
console.log("Add new property");
let students = {
    name: "Amy",
    age: 21,
    marks: 95,
    city: "Dwarka",
};
console.log("students: ", students);
console.log("Add new property: gender");
students.gender = "Female";
console.log("student.gender = \"Female\";");
console.log("students: ", students);

// ---> Update value of a property
console.log("=====================================");
console.log("Update value of a property");
students = {
    name: "Amy",
    age: 21,
    marks: 95,
    city: "Dwarka",
};
console.log("students: ", students);
console.log("students.city: ", students.city);
console.log("Change city to - Vrundavan");
students.city = "Vrundavan";
console.log("students.city: = \"Vrundavan\";");
console.log("students.city: ", students.city);
console.log("students: ", students);

// ---> Delete a property
console.log("=====================================");
console.log("Delete a property");
students = {
    name: "Amy",
    age: 21,
    marks: 95,
    city: "Dwarka",
};
console.log("students: ", students);
console.log("Delete property: city");
delete students.city;
console.log("delete students.city;");
console.log("students: ", students);

// ---> Object of Objects
console.log("=====================================");
console.log("Object of Objects");
let classInfo ={
    amy: {
        name: "Amy",
        age: 21,
        marks: 95,
        city: "Dwarka",
    },
    ash: {
        name: "Ash",
        age: 21,
        marks: 90,
        city: "Vrundavan",
    },
    shradha: {
        name: "Shradha",
        age: 20,
        marks: 92,
        city: "Mumbai",
    },
};
console.log("classInfo: ", classInfo);
console.log("classInfo.amy: ", classInfo.amy);
console.log("classInfo.ash: ", classInfo.ash);
console.log("classInfo.shradha: ", classInfo.shradha);
console.log("--------");
console.log("classInfo.amy.name: ", classInfo.amy.name);
console.log("classInfo.amy.city: ", classInfo.amy.city);
console.log("--------");
console.log("Change ash's city to Dwarka");
classInfo.ash.city = "Dwarka";
console.log("classInfo.ash.city = \"Dwarka\";");
console.log("classInfo.ash.city: ", classInfo.ash.city);
console.log("classInfo.ash: ", classInfo.ash);
console.log("classInfo: ", classInfo);

// ---> Array of Objects
console.log("=====================================");
console.log("Array of Objects");
let studentsInfo = [
    {
        name: "Amy",
        age: 21,
        marks: 95,
        city: "Dwarka",
    },
    {
        name: "Ash",
        age: 21,
        marks: 90,
        city: "Vrundavan",
    },
    {
        name: "Shradha",
        age: 20,
        marks: 92,
        city: "Mumbai",
    },
];
console.log("studentsInfo: ", studentsInfo);
console.log("studentsInfo[0]: ", studentsInfo[0]);
console.log("studentsInfo[1]: ", studentsInfo[1]);
console.log("studentsInfo[2]: ", studentsInfo[2]);
console.log("--------");
console.log("studentsInfo[0].name: ", studentsInfo[0].name);
console.log("studentsInfo[0].city: ", studentsInfo[0].city);
console.log("--------");
console.log("Change ash's city to Dwarka");
studentsInfo[1].city = "Dwarka";
console.log("studentsInfo[1].city = \"Dwarka\";");
console.log("studentsInfo[1].city: ", studentsInfo[1].city);
console.log("studentsInfo[1]: ", studentsInfo[1]);
console.log("studentsInfo: ", studentsInfo);
console.log("--------");
console.log("Add new property to Shradha");
studentsInfo[2].gender = "Female";
console.log("studentsInfo[2].gender = \"Female\";");
console.log("studentsInfo[2].gender: ", studentsInfo[2].gender);
console.log("studentsInfo[2]: ", studentsInfo[2]);
console.log("studentsInfo: ", studentsInfo);
console.log("--------");

// ---> Math Object
console.log("=====================================");
console.log("Math Object");
console.log("Math.PI: ", Math.PI);
console.log("Math.E: ", Math.E);
console.log("----------------");
console.log("Math.round(PI): ", Math.round(Math.PI));
console.log("Math.round(E): ", Math.round(Math.E));
console.log("----------------");
console.log("Math.floor(PI): ", Math.floor(Math.PI)," Nearest smallest Integer.");
console.log("Math.floor(E): ", Math.floor(Math.E)," Nearest smallest Integer.");
console.log("----------------");
console.log("Math.ceil(PI): ", Math.ceil(Math.PI), " Nearest largest Integer.");
console.log("Math.ceil(E): ", Math.ceil(Math.E), " Nearest largest Integer.");
console.log("----------------");
console.log("Math.pow(2, 3): ", Math.pow(2, 3));
console.log("----------------");
console.log("Math.sqrt(9): ", Math.sqrt(9));
console.log("----------------");
console.log("Math.abs(-9): ", Math.abs(-9));
console.log("Math.abs(9): ", Math.abs(9));
console.log("----------------");
console.log("Math.min(1, 2, 3): ", Math.min(1, 2, 3));
console.log("----------------");
console.log("Math.max(1, 2, 3): ", Math.max(1, 2, 3));
console.log("----------------");
console.log("Math.random(): ", Math.random()," Generate random number between 0 and 1");
console.log("----------------");

// ---> Random Integers
// Find 1 to 10
console.log("=====================================");
console.log("Generate Random number between 1 to 10");
let step1 = Math.random();
console.log("step1 = ",step1);
let step2 = step1 * 10; // multiply with maximum value we want.
console.log("step2 = ",step2);
let step3 = Math.floor(step2); // removing decimal places.
console.log("step3 = ",step3);
let step4 = step3 + 1; // In random() generate value between 0 to 1 where, 1 is not included. So it generate value for 1 to 9 only but we want to generate value 1 to 10 that's why we add 1.
console.log("step4 = ",step4);
console.log("----------------");
console.log("Another way - using single line");
let random = Math.floor(Math.random() * 10) + 1;
console.log("Math.floor(Math.random() * 10) + 1: ", random); // Generate Random number betwen 1 to 10.

// Generate Random number betwen 30 to 100.
console.log("=====================================");
console.log("Generate Random number between 30 to 100");
// Math.random() * 70 ---> 70 Because we want to generate number between 30 to 100. // & Difference = 100 - 30 = 70
console.log("Math.floor(Math.random() * 70) + 30 + 1: ", Math.floor(Math.random() * 70) + 30 + 1);
