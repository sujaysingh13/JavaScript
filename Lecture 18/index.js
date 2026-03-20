// reduce

const arr = [10, 20, 30, 40, 50];

// const result = arr.reduce(callback function, initialization)

const result = arr.reduce((acc, curr) => { // curr me ek ek karke array se value ayga
    return acc + curr; // jo v return karenge wo acc ke ander store ho jyga
}, 0); // acc will be acc = 0, we have initialized
console.log(result);
// acc = 0, curr = 10 -> 0 + 10 then get stored in acc
// acc = 10, curr = 20 -> 10 + 20 then get stored in acc
// acc = 30, curr = 30 -> 30 + 30 then get stored in acc
// acc = 60, curr = 40 -> 60 + 40 then get stored in acc
// acc = 100, curr = 50 -> 100 + 50 then get stored in acc
// acc = 150 then get stored in result

// one liner
const result2 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result2);

// reduce me v hum index or array le sakte h



let arr1 = ["orange", "apple", "banana", "orange", "apple", "banana", "orange", "grapes"];
// Output should be
// {
//     orange : 3,
//     apple : 2,
//     banana : 2,
//     grapes : 1
// }
const result3 = arr1.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr)) { // ye check karta h ki curr naam ka key object me h ki nahi
        acc[curr]++; // aagar h to value ko ++ kar denge
    } else {
        acc[curr] = 1; // or aagar nahi h to curr naam ka key banake uska value 1 rakh denge
    }
    return acc; // changed acc ko update kar denge
}, {});

console.log(result3); // { orange: 3, apple: 2, banana: 2, grapes: 1 }


// short form
const result4 = arr1.reduce((acc, curr) => {
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr] = 1;
    return acc;
}, {});
console.log(result4); // { orange: 3, apple: 2, banana: 2, grapes: 1 }