let num1 = 10;
let str1 = "10";
// Always String will be converted into a Number
console.log(num1==str1); //str1 will be converted into a number which is 10, so 10==10 is true

let num = 10;
let str = "20";
console.log(num==str); //str will be converted into a number which is 20, so 10==20 is false

let num3 = 10;
let str3 = "30";
console.log(num3<str3); //str3 will be converted into a number which is 30, so 10<30 is true

let num4 = 10;
let str4 = "30x";
console.log(num4<str4); //str4 will be converted into a number which is NaN, so 10<NaN is false

let num5 = 10;
let str5 = "10";
// In === first type check, then compare the values
console.log(num5===str5); // here type is different it will return false

console.log(20===20); // true
console.log(40===20); // false

// null==(with any other type except undefined) is false
console.log(null==undefined); // true
console.log(null===undefined); // false typeof null is object and typeof undefined is undefined

console.log(null==0); // false null==(with any other type except undefined) is false
// null will be converted into number type
console.log(null<0); // 0<0 false
console.log(null>0); // 0>0 false
console.log(null<=0); // 0<=0 true
console.log(null>=0); // 0>=0 true

console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN); //false

let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1==abc2==abc3); // abc1==abc2 is true then true==abc3 means 1==123 is false

console.log(true==1); //true
console.log(false==0); //true

console.log("sujay"=="sujay"); //true

console.log(4&5);
console.log(11&14);
console.log(11|14);
console.log(5^7);
console.log(5<<3);
console.log(20>>2);