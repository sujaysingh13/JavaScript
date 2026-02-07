const arr = [2, 35, 1, 8, 9, "sujay", true, 8];
console.log(arr);
console.log(arr.length); // 7
console.log(arr[0]); // 2
console.log(arr[5]); // sujay we can not take -ve index in this
console.log(arr.at(0)); // 2
console.log(arr.at(6)); // true
console.log(arr.at(-2)); // sujay we can take -ve index using .at()


// When both arrays have same values and same memory location in heap memory

const newArr = arr;
console.log(newArr);
// here memory addresses gets compared
console.log(newArr == arr); // true because both are pointing to the same memory location in heap memory


// When both arrays have same values but different memory location in heap memory

const newArr2 = structuredClone(arr); // using this the values get copied and stored in new memory location in heap memory
console.log(newArr2);
// here memory addresses gets compared
console.log(newArr2 == arr); // false because now both arrays have same values but pointing to the different memory location in heap memory


// push

arr.push(30); // for inserting value at the end of the array
arr.push(50);
console.log(arr);

// pop

arr.pop(); // delete the last value of the array
arr.pop();
arr.pop();
console.log(arr);

// unshift

arr.unshift(10); // for inserting value at the start of the array
arr.unshift(30);
console.log(arr);

// shift

arr.shift(); // delete the first value of the array
console.log(arr);

// delete

delete arr[0];
// the value gets deleted but the space still remains in the array
console.log(arr); // [ <1 empty item>, 2, 35, 1, 8, 9, 'sujay' ]



console.log(arr);
console.log(arr.indexOf(8)); // 3 returns the first index of the element
console.log(arr.lastIndexOf(8)); // 7 returns the last index of the element
console.log(arr.includes(1)); // true because value 1 is present in the array
console.log(arr.includes(10)); // false because value 10 is not present in the array



// slice

console.log(arr);
console.log(arr.slice(2, 4)); // [ 1, 8 ] returns an array from index 2-3
console.log(arr.slice(2, 5)); // [ 1, 8, 9 ] returns an array from index 2-4
console.log(arr); // there is no change in the original array, slice returns a new array


splice

console.log(arr);
// splice(starting index, total number of values you want to delete, add value)
console.log(arr.splice(2, 5)); // [ 1, 8, 9, 'sujay', true ] returns the new array of the deleted elements
console.log(arr); // [ 2, 35, 8 ] splice alse returns a new array but it also deletes those elements from the original array

arr.splice(2, 3, 10, "ashish", "mukesh", 20); // this will delete 3 elements from index 2 and then add the elements from index 2
console.log(arr);
arr.splice(2, 0, 22); // this will not delete any element and add the new elements from index 2
console.log(arr);



// using .toString() the elements of array get attached by ,
console.log(arr.toString()); // 2,35,1,8,9,sujay,true,8 converts the array into a string
console.log(typeof arr.toString()); // string
// using .join("*") the elements of array get attached by *
console.log(arr.join("-")); // 2-35-1-8-9-sujay-true-8



// concat

let arr1 = [2, 35, 6, 11];
let arr2 = [5, 12, 19, 20];
let arr4 = [56, 87, 33, 20];
let arr3 = arr1.concat(arr2, arr4); // merges all the arrays
console.log(arr3);

arr1.push(arr2);
console.log(arr1); // [ 2, 35, 6, 11, [ 5, 12, 19, 20 ] ] array inside array
console.log(arr1[4][0]); // 5



// 2D Array

let arr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
console.log(arr2d); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(arr2d[0]); // [ 1, 2, 3 ]
console.log(arr2d[1]); // [ 4, 5, 6 ]
console.log(arr2d[2]); // [ 7, 8, 9 ]
console.log(arr2d[1][2]); // 6




// 3D Array

let arr3d = [[1, 2, [3, 4]], [5, 6], [7, 8]]; // 3D Array
console.log(arr3d[0][2][1]); // 4



// How to convert 2D and 3D Array into a 1D Array

// .flat() or .flat(1) for 2D Array into a 1D Array, if we do not write anything inside 1 is default
// .flat(2) for 3D Array into a 1D Array
// .flat(Infinity) best option this converts any [2, 3, 4, 5 and so on]D Array into 1D Array


let arrr2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // 2D Array
let newArr1 = arrr2d.flat(); // this converts 2D Array into a 1D Array
console.log(newArr1);



let arrr3d = [[1, 2, 3, [10, 20, 30]], [4, 5, 6], [7, 8, 9]]; // 3D Array
let newArrr = arrr3d.flat(2);
console.log(newArrr);



// How to check it is a array or not

let abc = [1, 2, 3, 4];
console.log(Array.isArray(abc)); // true