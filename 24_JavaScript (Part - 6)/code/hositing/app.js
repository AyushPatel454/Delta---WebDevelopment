function method1() {
    x = 4; // Initialize x

    console.log("x:",x); // 4;
    var x; // Declare x
}

function method2() {
    var x; // Declare x
    x = 4; // Initialize x
    console.log("x:",x); // 4
}

function method3() {
    var x = 1; // Initialize x
    var y = 2; // Initialize y

    console.log("x:",x,"y:",y); // x: 1 y: 2
}

function method4() {
    var x = 1; // Initialize x

    console.log("x:",x,"y:",y); // x: 1 y: undefined
    var y = 2; // Initialize y
}

function method5() {
    var x = 1; // Initialize x
    var y; // Declare y

    console.log("x:",x,"y:",y); // x: 1 y: undefined
    y = 2; // Initialize y
}

method1(); // calling function.
method2(); // calling function.
method3(); // calling function.
method4(); // calling function.
method5(); // calling function.