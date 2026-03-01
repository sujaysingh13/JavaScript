// For printing today's day
switch(new Date().getDay()) { // here we will get number between 0-6
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    default:
        console.log("Not a valid day");
}
// In switch === is used, if we give "0" then it will not match with the case 0


// for loop
for(let i = 0; i < 20; i++) {
    console.log("Sujay");
}

// sum of first 10 n numbers
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i; 
}
console.log(`Sum = ${sum}`);


// Nested loop
// for printing this pattern
// 12345
// 12345
// 12345
// 12345
// 12345
// 12345
for(let i = 1; i <= 6; i++) {
    let result = ""; // this is the way which we have to use for printing in a single line
    for(let j = 1; j <= 5; j++) {
        result += j;
    }
    console.log(result);
}



let arr = [10, 30, 40, 50];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Output
// 10
// 30
// 40
// 50


let obj = {
    name : "Sujay",
    age : 19,
    amount : 500,
    city : "Jamshedpur"
};

const a = Object.values(obj); // this will store all the values of the obj in a in the form of array
console.log(a); // [ 'Sujay', 19, 500, 'Jamshedpur' ]
for(let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
// Output
// Sujay
// 19
// 500
// Jamshedpur

const keys = Object.keys(obj); // this will store all the keys of the obj in b in the form of array
console.log(keys); // [ 'name', 'age', 'amount', 'city' ]
for(let i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]]);
}
// Output
// Sujay
// 19
// 500
// Jamshedpur