let str = "apple";
// let str = "app";
// let str = "banana";

if(str[0] === "a" && str.length > 3) {
    console.log("Good String");
} else {
    console.log("Bad String");
}

// ---> Question 2: Predict the output of following code:
let num = 12;

if((num % 3 === 0) && ( (num+1 == 15) || (num-1 == 11) )) {
    console.log("Safe"); // Answer
} else {
    console.log("unsafe");
}