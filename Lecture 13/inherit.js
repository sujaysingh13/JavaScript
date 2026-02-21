let user1 = {
    name : "Sujay",
    age : 19
};

let user2 = {
    amount : 20,
    money : 50
};

console.log(user2.amount); // 20
console.log(user2.money); // 50
console.log(user2.name); // undefined user2 can't access the keys of user1


let userr1 = {
    name : "Sujay",
    age : 19
};

let userr2 = {
    amount : 20,
    money : 50
};

userr2.__proto__ = userr1; // this means userr2 inherited the properties of userr1

console.log(userr2.name); // Sujay now after using .__proto__ we can access the keys of userr1 also


let arr = [10, 20, 30, 40];
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ == null); // true
console.log(Array.prototype.__proto__ == Object.prototype); // true
console.log(Object.prototype.__proto__ == null); // true