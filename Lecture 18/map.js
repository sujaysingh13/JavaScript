// map me v key value pairs hi hote h but isme hum key koi v type ka de sakte h object me key sirf string or symbol hi le sakte the

const map1 = new Map();
// adding key value pairs
map1.set(3,90);
map1.set("Sujay", 19);
map1.set(30, "Ashish");
console.log(map1); // Map(3) { 3 => 90, 'Sujay' => 19, 30 => 'Ashish' }
map1.set("Sujay", 20); // yaha same key likhe h to value update ho jyga
console.log(map1); // Map(3) { 3 => 90, 'Sujay' => 20, 30 => 'Ashish' }

// deleting key value pair
map1.delete(3);
console.log(map1); // Map(2) { 'Sujay' => 20, 30 => 'Ashish' }

// has
console.log(map1.has("Sujay")); // true
console.log(map1.size); // 2

for(let [key, value] of map1) { // destructuring of array
    console.log(key, value);
}
// Output
// Sujay 20
// 30 Ashish

// clear
map1.clear();
console.log(map1); // Map(0) {}


// another way to create map
const map2 = new Map([
    [4, "sujay"],
    ["ashish", "mukesh"],
    [30, 9],
    [63, 78]
]);
console.log(map2); // Map(4) { 4 => 'sujay', 'ashish' => 'mukesh', 30 => 9, 63 => 78 }

// Iterate in map
// for of loop
for(let [key, value] of map2) { // destructuring of array
    console.log(key, value);
}
// // Output
// // 4 sujay
// // ashish mukesh
// // 30 9
// // 63 78