// for of loop

// isko hum array ke liye use karte h
const arr = [10, 20, 30, 40, 50];

for(let value of arr) {
    console.log(value);
}
// Output
// 10
// 20
// 30
// 40
// 50

// Hum isko String ke liye v use kar sakte h
let str = "Sujay";

for(let value of str) {
    console.log(value);
}
// Output
// S
// u
// j
// a
// y

// for of loop ko hum object ke upar use nahi karte h

const obj = {
    name : "Sujay",
    age : 19,
    gender : "male"
};

// ye loop error dega, obj is not iterable
// for(let value of obj) {
//     console.log(value);
// }

// but aagar mereko obj ke values ko print for of loop se hi karana h
for(let value of Object.values(obj)) { // ye mereko obj ke sare values ka array de dega
    console.log(value);
}
// Output
// Sujay
// 19
// male

for(let value of Object.keys(obj)) { // ye mereko obj ke sare keys ka array de dega
    console.log(value, obj[value]);
}
// Output
// name Sujay
// age 19
// gender male


// for in loop ko hum use karte h object ke liye
// for of loop ko hum use karte h array or string ke liye


forEach
let arr1 = [10, 20, 30, 40, 50];
// forEach ko call back function chahiye hota h
arr1.forEach(function (num) { // yaha ek ek karke array se value ayga fir function execute hoga us value pe
    console.log(num);
});
// Output
// 10
// 20
// 30
// 40
// 50
// yaha pahle 10 ayga num me fir wo function me jake print hua
// fir next time 20 ayga num me fir wo function me jake print hua
// fir next time 30 ayga num me fir wo function me jake print hua
// fir next time 40 ayga num me fir wo function me jake print hua
// fir next time 50 ayga num me fir wo function me jake print hua

// arrow function
arr1.forEach((num) => console.log(num));
// Output
// 10
// 20
// 30
// 40
// 50

// hum array se value ke sath sath index ko v utha sakte h
arr1.forEach((num, index) => console.log(num, index));
// Output
// 10 0
// 20 1
// 30 2
// 40 3
// 50 4

// hum pura ka pura array v le sakte h
arr1.forEach((num, index, a) => a[index] = num * 2);
console.log(arr1); // [ 20, 40, 60, 80, 100 ]

// 1 argument : value
// 2 arguments : value and index
// 3 arguments : value, index and array

function greet(num) {
    console.log(num);
}

arr1.forEach(greet); // greet mera yaha call back function h, ek ek karke value array arr1 se greet function me jyga or execute hoga
// Output
// 20
// 40
// 60
// 80
// 100


// filter
let arr2 = [10, 22, 33, 41, 50];

// filter me v hum value, index and array le sakta h
const result = arr2.filter((num) => { // yaha v hame call back function dena padta h
    return num%2==0; // aagar true hoga to store kar lega array me or aagar false hua to store nahi karega array me
});
console.log(result); // [ 10, 22, 50 ]

// ayse v kar sakte h shortcut me
const result2 = arr2.filter(num => num%2==0);
console.log(result2); // [ 10, 22, 50 ]


const student = [
    {name : "Rohan", age : 22, marks : 70},
    {name : "Mohan", age : 24, marks : 80},
    {name : "Darshan", age : 28, marks : 30},
    {name : "Mohit", age : 32, marks : 40},
    {name : "Shadik", age : 12, marks : 90},
];

const result3 = student.filter(obj => obj.marks > 50);

console.log(result3);
// Output
// [
//   { name: 'Rohan', age: 22, marks: 70 },
//   { name: 'Mohan', age: 24, marks: 80 },
//   { name: 'Shadik', age: 12, marks: 90 }
// ]

// destucture ka use karke
const result4 = student.filter(({marks}) => marks > 50);
console.log(result4);
// Output
// [
//   { name: 'Rohan', age: 22, marks: 70 },
//   { name: 'Mohan', age: 24, marks: 80 },
//   { name: 'Shadik', age: 12, marks: 90 }
// ]


// map
// yaha v hum value, index and array ko le sakte h
const arr4 = [1, 2, 4, 5];
const result5 = arr4.map(num => num*num);
console.log(result5); // [ 1, 4, 16, 25 ]


// forEach me hum kuch return nahi kar sakte sirf values ek ek karke leke execute karte h
// filter ke help se sirf values ko filter karke store kar sakte h array me
// map ke help se hum values ko modify v kar sakte h fir store kar sakte h array me


const arr3 = [1, 2, 3, 4, 5, 6];
const result6 = arr3.filter(num => num%2==0).map(num => num*num);
console.log(result6); // [ 4, 16, 36 ]
// yaha sbse pahle filter hoga 2 filter hoke ayga fir 2 map me jake 2*2 hoga
// fir 4 filter hoga, fir map me jake 4*4 hoga
// fir 6 filter hoga, fir map me jake 6*6 hoga

const result7 = arr3.filter(num => num%2==0).map(num => num*num).map(num => num/2);
console.log(result7); // [ 2, 8, 18 ]
// 2 -> 2*2 -> 4/2 = 2
// 4 -> 4*4 -> 16/2 = 8
// 6 -> 6*6 -> 36/2 = 18