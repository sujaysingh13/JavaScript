let obj = {};
obj.name = "Sujay";
obj.age = 19;

// Every key has value, writable, enumerable, configurable
console.log(Object.getOwnPropertyDescriptor(obj, "name")); // we get all the information about the key of this object
// Output
// {
//   value: 'Sujay',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// writable: true, we can change the value of this key
// writable: false, we cannot change the value of this key

// configurable: true, we can change the values of writable and enumerable
// configurable: false, we cannot change the values of writable and enumerable


// How to write these properties by own
let objj = {};

// this is how we define the properties of the key while creating the key value pair
Object.defineProperty(objj, "name", {
    value : "Sujay",
    writable : true,
    enumerable : true,
    configurable : true
});

// afterwards if we want to change any property of the key then we can do this
Object.defineProperty(objj, "name", {
    writable : false
});

objj.name = "Ashish"; // we cannot change the value of the key due to writable : false

console.log(objj);


const obj1 = {
    name : "Sujay",
    age : 19,
    account_number : 30001
};

// if we want that the value of account_number should not change then
Object.defineProperty(obj1, "account_number", {
    writable : false
});

obj1.account_number = 20001; // value will not get changed

console.log(obj1.account_number); // 30001


const customer = {
    name : "Sujay",
    age : 19,
    account_number : 123,
    balance : 500
};

const customer2 = Object.create(customer);
customer2.city = "Jamshedpur";
customer2.place = "Gamharia";

Object.defineProperty(customer, "name", {
    enumerable : false
});

// for in loop sari keys ko access karta h even inherited keys ko v access karta h but jin v keys ka enumerable false hota h unhe access nahi karta h
for(let key in customer2) {
    console.log(key);
}
// Output
// city
// place
// age
// account_number
// balance

// To iska mtlb ye h ki Object.prototype ke sare keys ka enumerable : false hoga isly hum for in loop se unhe access nahi kar pate h

console.log(Object.getOwnPropertyDescriptor(customer, "name"));
// Output
// {
//   value: 'Sujay',
//   writable: true,
//   enumerable: false,
//   configurable: true
// }

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
// Output
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }

// aagar mujhe toString ka enumerable ko true karna h to
Object.defineProperty(Object.prototype, "toString", {
    enumerable : true
});

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
// Output
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

for(let key in customer) {
    console.log(key);
}
// Output
// age
// account_number
// balance
// toString abhi ye key v print ho gaya