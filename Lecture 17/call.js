// call back function

function names(fun) { // yaha fun ke andar mera greet function h
    console.log("Hello I am name");
    fun(); // yaha se mai greet function ko call kar sakta hu
}

function greet() {
    console.log("I am call back function");
}

names(greet); // jab hum ek function ko as an arrgument pass karte h tab us function ko hum call back function kehte h
// Output
// Hello I am name
// I am call back function

// hum ayse karke v function ko bhej sakte h
names(function () {
    console.log("I am call back function");
});
// Output
// Hello I am name
// I am call back function


// where we use this call back function
function fetchData() {
    console.log("I am fetching data");
}

setInterval(fetchData, 5000); // ye function h jisme hum apne function ko as an arrgument pass karte h or time ko pass karte h in milliseconds, to ye hamare function ko run karte rehta h har kuch time me jo time hum pass karenge