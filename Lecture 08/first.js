const num = 10;
// num = 20; // This will show error
console.log(num);

const obj = {
    id : 10,
    balance : 200
};

obj.id = 11; // This will not show any error and the value will get changed
console.log(obj);

let obj2 = {
    id : 20,
    money : 300
};

obj = obj2; // This will show error because this will store another memory address location in obj which is not allowed since obj is const

String in JS

let str1 = "Hello Coder Army";
let str2 = 'Hello';
let str3 = `Hello, I am Sujay`; // Best method
console.log(str1, str2, str3);

let price = 50;
console.log("Price of tomato is", price);
console.log(`Price of tomato is ${price}`);

// String concatenation

let s1 = "Hello";
let s2 = " Sujay";
let s3 = s1+s2;
console.log(s3);
console.log(s3.length);

console.log('"Hello Sujay"');
console.log("'Hello Sujay'");

console.log("My name is Sujay.\nMy friend name is Ashish.");
console.log("My name is Sujay.\\nMy friend name is Ashish.");



let special = "Sujay";
console.log(special);
console.log(special[2]);
console.log(special.charAt(2));



console.log(special.toLowerCase());
console.log(special.toUpperCase());



let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder")); // -1
console.log(hero.includes("Coder")); // true
console.log(hero.includes("coder")); // false



let newString = "SujaySingh";
console.log(newString.slice(0, 3));
console.log(newString.substring(0, 3));
console.log(newString.slice(-8, 7)); // In slice we can use -ve index but not in substring



let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji", "Money"));
console.log(str10.replaceAll("Ji", "Money"));



let str11 = "Honey - Money - Sunny - Funny";
console.log(str11.split(" - "));



let str12 = "  Sujay  ";
console.log(str12.length);
console.log(str12.trim().length); // Removes spaces from both start and end



// New way to create string
let latestString = new String("Hello Coder Army");
console.log(latestString);
console.log(typeof latestString); // object