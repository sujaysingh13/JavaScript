let obj1 = {
    a : 1,
    b : 2
};

// Shallow copy
let obj2 = obj1; // both have the same memory address
obj2.a = 10;
console.log(obj2, obj1); // { a: 10, b: 2 } { a: 10, b: 2 } both objects get changed

// Deep copy
let obj3 = structuredClone(obj1); // both have different memory address
obj3.a = 30;
console.log(obj3, obj1); // { a: 30, b: 2 } { a: 10, b: 2 } here obj1 is not getting changed



// Nested Object
const user = {
    name : "Sujay",
    balance : 500,
    address : {
        pincode : 832108,
        city : "Jamshedpur"
    }
};

console.log(user.address); // { pincode: 832108, city: 'Jamshedpur' }
console.log(user.address.pincode); // 832108

const user2 = Object.assign({}, user);
user2.name = "Ashish";
user2.address.pincode = 832104;
console.log(user2, user);
// {
//   name: 'Ashish',
//   balance: 500,
//   address: { pincode: 832104, city: 'Jamshedpur' }
// } {
//   name: 'Sujay',
//   balance: 500,
//   address: { pincode: 832104, city: 'Jamshedpur' }
// }
// name value which is outside the nested object is not changed but pincode value which is inside the nested object has changed in both the objects
// Using Object.assign means outside the nested object it is deep copy and inside the nested object it is shallow copy, even if we use spread operator ... it also works the same way
// If we want to make a seperate copy of an object which is completely a deep copy then the best method is to use structuredClone



const new1 = {
    name : "Sujay",
    age : 19,
    gender : "Male"
};

Object.freeze(new1);

new1.name = "Ashish"; // we can't modify the value of a key
new1.balance = 500; // we can't add a key value pair
delete new1.gender; // we can't delete a key value pair
console.log(new1); // { name: 'Sujay', age: 19, gender: 'Male' } nothing is changed


const new2 = {
    name : "Sujay",
    age : 19,
    gender : "Male"
};

Object.seal(new2);

new2.name = "Ashish"; // we can modify the values of the existing keys
new2.balance = 500; // we can't add a key value pair
delete new2.gender; // we can't delete a key value pair
console.log(new2); // { name: 'Ashish', age: 19, gender: 'Male' } name value get changed



// Destructruing of an object

let obj = {
    name : "Sujay",
    money : 500,
    balance : 30,
    age : 19
};

const {name, age, balance} = obj;
console.log(name, age, balance); // Sujay 19 30

const {name:full_name, age:Umar, balance:amount} = obj; // if we want to change the variable name then we can do like this
console.log(full_name, Umar, amount); // Sujay 19 30

const {name:fullName, age:agee, ...objj} = obj; // this is used when we want to take out some values and rest left over values we want to keep in another object
console.log(fullName, agee); // Sujay 19
console.log(objj); // { money: 500, balance: 30 }



const arr = [3, 5, 2, 1, 7];
const [first, second] = arr;
console.log(first, second); // 3 5

// If we only want to take out 5, 1, 7 then
const [ , five, , one, seven] = arr;
console.log(five, one, seven); // 5 1 7

// If we want to take out some values and keep rest left over values in another array then
const [three, fivee, ...arr1] = arr;
console.log(three, fivee); // 3 5
console.log(arr1); // [ 2, 1, 7 ]


let ob = {
    name : "Sujay",
    age : 19,
    address : {
        pincode : 832108,
        city : "Jamshedpur"
    }
};

const {name:myName} = ob;
const {address} = ob; // if we do this then we will get the whole nested object
console.log(myName); // Sujay
console.log(address); // { pincode: 832108, city: 'Jamshedpur' }
// If we want to get a value which is inside the nested object
// first method
const {address:adds} = ob;
const {pincode} = adds;
console.log(pincode); // 832108
// second method sort method
const {address:{city}} = ob;
console.log(city); // Jamshedpur



let obb = {
    name : "Sujay",
    age : 19,
    arr : [90, 40, 60, 80],
    address : {
        pincode : 832108,
        city : "Jamshedpur",
        state : "Jharkhand"
    }
};

// If we want to print 90 using Destructruing
const {arr:[ninty]} = obb;
console.log(ninty); // 90



let userr = {
    name : "Sujay",
    amount : 500,
    greet : function() {
        console.log("Hello Coder Army");
    },
    meet : function() {
        return 20;
    }
};

userr.greet(); // Hello Coder Army this is how we call the function which is inside the object
console.log(userr.meet()); // 20