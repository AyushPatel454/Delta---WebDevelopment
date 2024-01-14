let max = parseInt(prompt("Enter the maximum number:"));
console.log("The maximum number is: " + max);

let random = Math.floor(Math.random() * max) + 1;
console.log("The random number is: " + random);

let check = prompt("Enter the number to check:\n\nEnter 'quit' to exist...!!");

if(check == 'quit') {
    console.log("You quit the game");
    alert("You quit the game");
} else {
    check = parseInt(check);
}


while(check != random && check != 'quit') {
    if(check < random) {
        console.log("You Entered: " + check + "\n\nThe number is too low");
        alert("The number is too low");
    } else if(check > random) {
        console.log("You Entered: " + check + "\n\nThe number is too high");
        alert("The number is too high");
    }

    check = prompt("Enter the number to check:\n\nEnter 'quit' to exist...!!");
    if(check == 'quit') {
        console.log("You quit the game");
        alert("You quit the game");
        break;
    }
    check = parseInt(check);
}

if(check == random) {
    console.log("You Entered: " + check + "\n\nYou got it right !!")
    alert("You got it right !!");
}