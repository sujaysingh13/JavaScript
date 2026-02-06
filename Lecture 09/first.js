let num1 = 231;

let num2 = new Number(231); // for example it's memory loaction is 6000 in heap memory
let num3 = new Number(231); // for example it's memory loaction is 9000 in heap memory

console.log(num1==num2); // true since here num2 is object it will get converted in number which 231 so 231==231 is true
console.log(num2==num3); // false since here both are objects the address will get compared and 6000==9000 is false

console.log(num2); // [Number: 231]
console.log(typeof num2); // object




let num = 231.68;

console.log(num.toFixed(1)); // 231.7   1 digit after the decimal
console.log(num.toFixed(2)); // 231,68  2 digits after the decimal
console.log(num.toFixed(3)); // 231.680 3 digits after the decimal

console.log(num.toPrecision(4)); // 231.7 total 4 digits
console.log(num.toPrecision(3)); // 232 total 3 digits
console.log(num.toPrecision(5)); // 231.68 total 5 digits
console.log(num.toPrecision(2)); // 2.3e+2 total 2 digits

console.log(num.toExponential(3)); // 2.317e+2 3 digits after decimal and rest in exponential form
console.log(num.toExponential(2)); // 2.32e+2 2 digits after decimal and rest in exponential form

console.log(num.toString()); // converts number into string
console.log(typeof num.toString()); // string

console.log(num.valueOf()); // 231.68 just returns the value




// Math

console.log(Math.E); // 2.718281828459045
console.log(Math.LN10); // 2.302585092994046
console.log(Math.PI); // 3.141592653589793



// floor and ceil
let number = 23.2;
console.log(Math.floor(number)); // 23 this returns only the whole number part not the decimal
console.log(Math.ceil(number)); // 24 this returns the upper number means whole number part + 1


console.log(Math.random()); // 0.6152583087861097 this returns random number 0<=value<1
console.log(Math.floor(Math.random()*10)); // this returns random numbers between 0-9

console.log(Math.floor(Math.random()*10)+1); // this returns random numbers between 1-10

console.log(Math.floor(Math.random()*10)+11); // this returns random numbers between 11-20

// General Formula
// console.log(Math.floor(Math.random()*(number of values)+starting value));
let min = 1;
let max = 11;
console.log(Math.floor(Math.random()*(max-min+1)+min)); // 1-11