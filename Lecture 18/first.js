let obj = {
    name : "Sujay",
    age : 19
};

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("salary")); // false