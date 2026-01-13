// Non Primitive data type
// Array, Object, funtion

// Array

let arr = [10, 20, 50, "sujay", "ashish"];
console.log(arr);
console.log(typeof arr);

// Object
// key : value

let obj = {
    user_name : "Sujay",
    account_number : 574839279222,
    balance : 420
}

console.log(obj);
console.log(typeof obj);

// function

function fun1() {
    console.log("Hello Coder Army");
    return 10;
}
console.log(fun1());

let fun2 = () => {
    console.log("Hello Coder Army");
}
fun2();
console.log(typeof fun2);

let fun3 = function() {
    console.log("Hello Coder Army");
}
fun3();

// Type conversion

// String into Number

let account_balance = "100";
let num = Number(account_balance);
console.log(num);
console.log(typeof num);
console.log(typeof account_balance);
let account = "100xs";
console.log(Number(account));

// Boolean into Number

let x = true;
console.log(Number(x));
let x1 = false;
console.log(Number(x1));

// null into Number

let x2 = null;
console.log(Number(x2));

// undefined into Number

let x3;
console.log(Number(x3));

// Number into String

let ab = 20;
console.log(String(ab));
console.log(typeof String(ab));

// Boolean into String

let ax = true;
console.log(String(ax));
console.log(typeof String(ax));
let ax1 = false;
console.log(String(ax1));
console.log(typeof String(ax1));

// Number into Boolean

let n = 1;
console.log(Boolean(n));
let n1 = 0;
console.log(Boolean(n1));
let n2 = 153;
console.log(Boolean(n2));

// String into Boolean

let str = "sujay";
console.log(Boolean(str));
let str1 = "";
console.log(Boolean(str1));
let str2 = " ";
console.log(Boolean(str2));