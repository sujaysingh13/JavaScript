// Global scope, Local scope(Functional scope), Block scope

// These are global scope variables, we can use these anywhere
let a = 10;
var b = 20;
const c = 30;

function greet() {
    // These are Local scope(Functional scope) variables, we can use these only inside this function
    let a1 = 10;
    var b1 = 20;
    const c1 = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

greet();

// console.log(a1); // this will give error

// var allows us to declare mutiple variables with the same name that's why we avoid using var
// var amount = 400;
// var amount = 500;
// var amount = 40;

// let will not allow us to declare mutiple variables with the same name that's why we use let
// let d = 4;
// let d = 5;
// let d = 6;

if(true) {
    // These are Block scope variables, we can use these only inside this if block
    let a2 = 10;
    var b2 = 20; // this is not block scope variable because we have used var
    const c2 = 30;
}

// console.log(a2); // this will give error
// console.log(b2); // this will not give error




// console.log(a3); // this will give an error, cannot print before declaring the variable
// console.log(b3); // undefined this will not give any error
// console.log(c3); // this will also give an error, cannot print before declaring the variable
let a3 = 4;
var b3 = 5;
const c3 = 6;


greeet(); // we can call this function before creating the function
function greeet() {
    console.log("Hello Greeet");
}

// meet(); // we cannot call this function before creating this function this will give an error
const meet = function() {
    console.log("Hello Meet");
}
meet(); // we have to call the function after creating the function