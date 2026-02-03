// Primitive data type : Immutable
// Non Primitive data type : Mutable

let a = 10;
let b = a;
b = 30;
// call by value
console.log(b);
console.log(a); // Value of a is not changed

let obj1 = {
    id : 97,
    naming : "sujay"
}

let obj2 = obj1;
obj2.id = 96;
// call by reference
console.log(obj1); // obj1 id value is also changed
console.log(obj2);