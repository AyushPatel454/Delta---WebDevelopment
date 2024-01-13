/**
 * Represents a simple to-do app.
 * Allows users to add, delete, and list tasks.
 */
let todo = [];

let req = prompt("please enter your request");



while (true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }

    if(req == "list") { // Printing all task in console
        console.log("********** TO DO LIST **********");
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i+1}: ${todo[i]}`);
        }
        console.log("********************************");
    } else if(req == "add") {
        let task = prompt("please enter your task");
        todo.push(task);
        console.log(`${task} added to the list`);
    } else if(req == "delete") {
        let index = parseInt(prompt("Enter task number for delete"));
        todo.splice(index-1, 1);
        console.log(`task at index ${index} deleted`);
    } else {
        console.log("please enter valid request!!");
    }

    req = prompt("please enter your request");
}