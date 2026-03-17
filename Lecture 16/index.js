let obj = {
    name : "Sujay",
    age : 19,
    gender : "male",
    city : "Jamshedpur"
};

// for in loop, I can access keys of an object

for(let key in obj) {
    console.log(key, obj[key]);
}
// Output
// name Sujay
// age 19
// gender male
// city Jamshedpur

// Object.keys(obj), we can also access the keys of an object using this
console.log(Object.keys(obj)); // [ 'name', 'age', 'gender', 'city' ]


// Now we have 2 methods to access the keys of an object, so what is the difference between the 2 methods?
let obj2 = Object.create(obj); // this is used to create prototype, now we can access the key value pairs of obj inside obj2
obj2.money = 500;
obj2.id = "suii";
console.log(obj2); // { money: 500, id: 'suii' }
console.log(obj2.name); // Sujay

// If we use Object.keys(obj) method
console.log(Object.keys(obj2)); // [ 'money', 'id' ] can only access the keys of obj2, it cannot access the inherited keys of obj

// If we use for in loop
for(let key in obj2) {
    console.log(key); // can access the keys of the inherited obj also
}
// Output
// money
// id
// name
// age
// gender
// city

// Now the question is every object which we create, it inherit the key value pairs of Object.prototype, so when we use for in loop which prints the keys of the inherited object also, then why the keys of Object.prototype is not getting printed