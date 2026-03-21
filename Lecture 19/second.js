greet(); // Hello World

function greet() {
    console.log("Hello World");
}

greet(); // Hello World

meet(); // ReferenceError: Cannot access 'meet' before initialization

let meet = () => {
    console.log("Hello Second");
}

meet(); // Hello Second