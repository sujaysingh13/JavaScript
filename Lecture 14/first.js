// Adding two numbers
function sum(num1, num2) { // num1 and num2 are called parameters 
    console.log(num1 + num2);
}

sum(10, 20); // 10 and 20 are called arguments



// Miltiplication of two numbers
function multiply(num1, num2) {
    return num1*num2;
}

let result = multiply(3, 5);
console.log(result); // 15

console.log(multiply(2, 5)); // 10



const fun1 = function() {
    console.log("Sujay");
    console.log("Ashish");
    return "Mukesh";
    // after return no code line will be exicuted
}

console.log(fun1());



// Arrow function
const sum1 = (num1, num2) => {
    return num1+num2;
}
console.log(sum1(3, 4)); // 7


const sum2 = (num1, num2) => num1+num2; // this will also work in the same way we don't have to write the return also it will return automatically
sum2(3, 4);

// Calculating cube of a number
// Using simple function
const cube = function(num) {
    return num*num*num;
}
console.log(cube(8)); // 512

// Using arrow function
const cube1 = num => num*num*num; // if we have only one parameter then we can remove the () also
console.log(cube1(8)); // 512



const sum = function(...num) { // using rest operator
    console.log(num); // [ 2, 4, 5 ]  [ 2, 4, 5, 6, 2 ] num is a array which contains all my numbers
    result = 0;
    for(i = 0; i < num.length; i++) {
        result = result + num[i];
    }
    return result;
}
    

console.log(sum(2, 4, 5)); // 11
console.log(sum(2, 4, 5, 6, 2)); // 19



const obj = {
    name : "Sujay",
    age : 19,
    amount : 500
};

const funn1 = function(obj1) {
    console.log(obj1.name, obj1.amount); // Sujay 500
}
funn1(obj);

const funn2 = function({name, amount}) { // using Destructruing of an object
    console.log(name, amount); // Sujay 500 same ountput
}
funn2(obj);




const check = function(obj1) {
    obj1.name = "Ashish";
    console.log(obj1.name); // Ashish
    console.log(obj.name); // Ashish
}
check(obj);
console.log(obj); // { name: 'Ashish', age: 19, amount: 500 } obj is also changed when i changed obj1
// This means when we pass an object in a function it is pass by reference