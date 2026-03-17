// for in loop ko hum array ke sath nahi use karte h
// for in loop ko sirf objects ke liye use karte h

const arr = [10, 20, 30, 40, 50];
arr.name = "Sujay"; // ye hum kar sakte h kyuki at the end array v to object hi hota h, lekin hum ye nahi chahenge ki mere array ka key koi string ho 
for(let key in arr) {
    console.log(key, arr[key]);
}
// Output
// 0 10
// 1 20
// 2 30
// 3 40
// 4 50
// name Sujay 
console.log(arr); // [ 10, 20, 30, 40, 50, name: 'Sujay' ]

// to aagar hum for in loop ko array ke liye use karenge to wo string wali keys jo array me hongi unhe v access kar lega, but hum ye kabhi nahi chahenge ki array me aagar koi galti se string key dal diya hoga to unhe hum access kare, hum string wali keys ko access nahi karna chahenge

// array ke liye basic for loop use karnge
for(let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
// Output
// 0 10
// 1 20
// 2 30
// 3 40
// 4 50
// ye string wale keys ko ignore kar dega aagar koi galti se string keys dal diya hoga array me

console.log(arr); // [ 10, 20, 30, 40, 50, name: 'Sujay' ]
// array me to abhi v string wala key h but hum usko ignore karenge, for loop use karke