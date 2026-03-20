// set me sare unique value hoti h 

const set1 = new Set([10, 20, 30, 40]);
console.log(set1); // Set(4) { 10, 20, 30, 40 }

const set2 = new Set([10, 20, 30, 40, 10, 30]); // ye same values allow nahi karta h
console.log(set2); // Set(4) { 10, 20, 30, 40 } 

console.log(typeof set1); // object

const set3 = new Set();
// add
set3.add(4);
set3.add(6);
set3.add("Sujay");
set3.add(30);
console.log(set3); // Set(4) { 4, 6, 'Sujay', 30 }
console.log(set3.size); // 4

// delete
set3.delete(6);
console.log(set3); // Set(3) { 4, 'Sujay', 30 }
console.log(set3.size); // 3

// has
const user_id = new Set(["sujaysingh.15", "ashishgope.12", "mukeshkumar.11"]);
let new_user = "sujaysingh.15";
console.log(user_id.has(new_user)); // true ye check karta h ki ye value set ke ander present h ki nahi

// clear
user_id.clear(); // set ko pura clear karne ke liye
console.log(user_id); // Set(0) {} 



// array ko set me convert karne ke liye
let arr = [10, 30, 20, 10, 40, 50, 30];
const set5 = new Set(arr);
console.log(set5); // Set(5) { 10, 30, 20, 40, 50 }
// fir set ko array me convert karne ke liye
arr = [...set5]; // spread operator ek ek karke set se element nikalke array me dal dega
console.log(arr); // [ 10, 30, 20, 40, 50 ]


// union
let set4 = new Set([10, 20, 30, 40, 50]);
let set6 = new Set([10, 20, 70, 80]);
let set7 = new Set([...set4, ...set6]); // ye ek ek karke pahle set4 ka elements nikalke add karega fir set 6 ka
console.log(set7); // Set(7) { 10, 20, 30, 40, 50, 70, 80 }

// intersection
let set8 = new Set([...set4].filter((num) => set6.has(num)));
console.log(set8); // Set(2) { 10, 20 }

// Iterate over set
// for of loop
for(let value of set4) {
    console.log(value);
}
// Output
// 10
// 20
// 30
// 40
// 50

// forEach
set4.forEach((value) => console.log(value));
// Output
// 10
// 20
// 30
// 40
// 50