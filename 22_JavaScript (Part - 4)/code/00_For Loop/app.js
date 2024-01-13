// ---> For loop
console.log("==========================================");
console.log("For loop ( 1 to 4 )"); 
for(let i = 1; i <= 4; i++) {
    console.log(i); // 1 , 2, 3, 4
}

console.log("==========================================");
console.log("For loop - Backward ( 4 to 1 )");
// ---> Backward For looop
for(let i = 4; i >= 1; i--) {
    console.log(i); // 4, 3, 2, 1
}

// ---> Print all odd numbers (1 to 15)
console.log("==========================================");
console.log("Print all odd numbers (1 to 15)");
for(let i = 1; i <= 15; i++) {
    if(i % 2 != 0) {
        console.log(i); // 1, 3, 5, 7, 9, 11, 13, 15
    }
}

// ---> Print all even numbers (1 to 15)
console.log("==========================================");
console.log("Print all even numbers (1 to 15)");
for(let i = 1; i <= 15; i++) {
    if(i % 2 == 0) {
        console.log(i); // 2, 4, 6, 8, 10, 12, 14
    }
}

// ---> Infinite loop
console.log("==========================================");
console.log("Infinite loop\mIt will run forever\nNOTE: it is very bad practice to write infinite loop & our website will be crashed & browser will be hang.");
// for(let i = 1; i <= 10; i--) {
//     console.log(i); // 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ...
// }
// for(let i = 1; i >= 0; i++) {
//     console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...
// }
// for(let i = 1; ; i++) {
//     console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...
// }


// ---> Print the multiplication table of 3
console.log("==========================================");
console.log("Print the multiplication table of 3");
// convert prompt input directly to number
let num = parseInt(prompt("Enter the number"));
for(let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
// Another way
for(let i = num; i <= num * 10; i += 4) {
    console.log(`${i}`);
}

// ---> Nested Loop
console.log("==========================================");
console.log("Nested Loop");
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(`i = ${i} , j = ${j}`);
    }
}

// ---> While loop
console.log("==========================================");
console.log("While loop ( 1 to 4 )");
let i = 1;
while(i <= 4) {
    console.log(i); // 1, 2, 3, 4
    i++;
}
console.log("While loop ( 4 to 1 )");
let j = 4;
while(j >= 1) {
    console.log(j); // 4, 3, 2, 1
    j--;
}

// ---> Favorite Movie game
console.log("==========================================");
console.log("Favorite Movie game");
let favoriteMovie = "Avengers";
let guess = prompt("Enter your favorite movie\nNOTE: If you want to quit the game then type 'quit'");
console.log(guess);
while(guess != favoriteMovie && guess != "quit") {
    guess = prompt("Enter your favorite movie\nNOTE: If you want to quit the game then type 'quit'");
    console.log(guess);
}
if(guess == favoriteMovie) {
    console.log("Congratulations! You guessed the correct movie. --->", guess);
} else {
    console.log("You quit the game.");
}

// ---> Continue keyword & Break keyword
console.log("==========================================");
console.log("Break keyword");
i = 1;
while(i <= 11) {
    if(i == 2) {
        console.log("Continue keyword hit...");
        i++;
        continue;
    }
    if(i == 4) {
        console.log("i = ",i);
        console.log("Break keyword hit...")
        break;
    }
    console.log("i = ", i);
    i++;
}

// ---> Loops with Arrays
console.log("==========================================");
console.log("Loops with Arrays");
let movies = ["Avengers", "Spiderman", "Ironman"];
for(let i = 0; i < movies.length; i++) {
    console.log(i, movies[i]);
}

// ---> Looop with Nested Arrays
console.log("==========================================");
console.log("Looop with Nested Arrays");
let heros = [
    ["Batman", "Superman"],
    ["Ironman", "Hulk"],
    ["Captain America", "Thor"]
];
for(let i = 0; i < heros.length; i++) {
    for(let j = 0; j < heros[i].length; j++) {
        console.log(`[${i}][${j}] - ${heros[i][j]}`);
    }
}

// ---> For of loop
console.log("==========================================");
console.log("For of loop");
let colors = ["red", "green", "blue"];
for(let color of colors) { // let (optional)
    console.log(color);
}
console.log("For of loop with string");
for(letter of "Amy") {
    console.log(letter);
}

// ---> Nested For of loop
console.log("==========================================");
console.log("Nested For of loop");
heroes = [
    ["Batman", "Superman"],
    ["Ironman", "Hulk"],
    ["Captain America", "Thor"]
];
for(let list of heroes) {
    for(let hero of list) {
        console.log(hero);
    }
}
