const obj = {
    0 : 20, // we can access this using obj["0"] or obj[0] both are allowed but can't use obj.0 or obj."0"
    1 : 50,
    2 : 70,
    name : "Sujay", // we can also write "name" : "Sujay" both are same, at the end keys are stored as a string
    account_balance : 500,
    gender : "Male",
    age : 19,
    // account number : 54782, // like this we can't give space in key name
    "account number" : 54782, // we can give space in key name by using "" but then we can't access this value by obj.account number or obj."account number" we have to use obj["account number"]
    undefined : 30, // we can access this using obj.undefined or obj[undefined] or obj["undefined"]
    null : "ashish" // we can access this using obj.null or obj[null] or obj["null"]
};

console.log(obj);
// {
//   '0': 20,
//   '1': 50,
//   '2': 70,
//   name: 'Sujay',
//   account_balance: 500,
//   gender: 'Male',
//   age: 19,
//   'account number': 54782
// }
console.log(typeof obj); // object



// For accessing values of the object
// Here we do not give the key within ""
console.log(obj.name); // Sujay
console.log(obj.account_balance); // 500
console.log(obj.gender); // Male
console.log(obj.age); // 19

// Here we have to give the key within ""
console.log(obj["name"]); // Sujay
console.log(obj["account_balance"]); // 500
console.log(obj["gender"]); // Male
console.log(obj["age"]); // 19

// Special case if the key is a number
console.log(obj["0"]); // 20
console.log(obj[0]); // 20
console.log(obj["1"]); // 50
console.log(obj[1]); // 50
console.log(obj["2"]); // 70
console.log(obj[2]); // 70


// Array is also like object
const arr = [10, 20, 30];
// This array is stored like this in an object form
const arr1 = {
    0 : 10,
    1 : 20,
    2 : 30,
    length : 3
};

// That's why when we have to find the length of the array we use
console.log(arr1.length); // we just print the value of the length key


console.log(obj.undefined); // 30
console.log(obj[undefined]); // 30
console.log(obj["undefined"]); // 30

console.log(obj.null); // ashish
console.log(obj[null]); // ashish
console.log(obj["null"]); // ashish



// Second method to create an object
const person = new Object();
console.log(person); // {}

// Add
person.name = "Sujay";
person.age = 19;
person.gender = "Male";
console.log(person); // { name: 'Sujay', age: 19, gender: 'Male' }

// Delete
delete person.age;
console.log(person); // { name: 'Sujay', gender: 'Male' }

// Modify or Update
person.name = "Ashish";
console.log(person); // { name: 'Ashish', gender: 'Male' }



// Third method to create an object
class People {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let per1 = new People("Sujay", 19, "Male");
let per2 = new People("Ashish", 20, "Male");
let per3 = new People("Mukesh", 21, "Male");
console.log(per1); // People { name: 'Sujay', age: 19, gender: 'Male' }
console.log(per2); // People { name: 'Ashish', age: 20, gender: 'Male' }
console.log(per3); // People { name: 'Mukesh', age: 21, gender: 'Male' }




let objj = {
    name : "Sujay",
    age : 19,
    account_balance : 500,
    gender : "Male"
};

const arrr = Object.keys(objj); // this returns an array of all the keys
console.log(arrr); // [ 'name', 'age', 'account_balance', 'gender' ]

const arrr1 = Object.values(objj); // this returns an array of all the values
console.log(arrr1); // [ 'Sujay', 19, 500, 'Male' ]

const arrr3 = Object.entries(objj); // this returns an 2D array of both keys and values
console.log(arrr3);
// [
//   [ 'name', 'Sujay' ],
//   [ 'age', 19 ],
//   [ 'account_balance', 500 ],
//   [ 'gender', 'Male' ]
// ]


// Combining multiple objects

// const objj1 = {a:1, b:2};
// const objj2 = {c:3, d:4};

// const objj3 = Object.assign(objj1, objj2); // here the objj1 is also getting changed because the first object is always the target object
// console.log(objj3); // { a: 1, b: 2, c: 3, d: 4 }
// console.log(objj1); // { a: 1, b: 2, c: 3, d: 4 }
// console.log(objj2); // { c: 3, d: 4 }


const objj1 = {a:1, b:2};
const objj2 = {c:3, d:4};

const objj3 = Object.assign({}, objj1, objj2); // here the target object is the empty object so our previous objects remains unchanged 
console.log(objj3); // { a: 1, b: 2, c: 3, d: 4 }
console.log(objj1); // { a: 1, b: 2 }
console.log(objj2); // { c: 3, d: 4 }

// Combining using spread operator
const objj4 = {...objj1, ...objj2, ...objj3};
console.log(objj4); // { a: 1, b: 2, c: 3, d: 4 }