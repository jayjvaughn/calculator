function operate(){

};

function add(a, b) {
    let c = a + b;
    return c;
};

function subtract(a, b) {
    let c = a - b;
    return c;
};

function multiply(a, b) {
    let c = a * b;
    return c;
};

function divide(a, b) {
    let c = a / b;
    return c;
};
divide(20, 5);

const totalDisplay = document.querySelector("#totalDisplay");

function displayThisNumber(input){
    totalDisplay.textContent += input;
};

// --constants-- all my number button functionality
const clear = document.querySelector("#clear");
clear.addEventListener("click", displayThisNumber(""));

const one = document.querySelector("#one");
one.addEventListener("click", displayThisNumber(1));









// const two = document.querySelector("#two");
// two.addEventListener("click", ()=> {
// total.textContent = 2;
// return 2;
// });
// const three = document.querySelector("#three");
// three.addEventListener("click", ()=> {
// total.textContent = 3;
// return 3;
// });
// const four = document.querySelector("#four");
// four.addEventListener("click", ()=> {
// total.textContent = 4;
// return 4;
// });
// const five = document.querySelector("#five");
// five.addEventListener("click", ()=> {
// total.textContent = 5;
// return 5;
// });
// const six = document.querySelector("#six");
// six.addEventListener("click", ()=> {
// total.textContent = 6;
// return 6;
// });
// const seven = document.querySelector("#seven");
// seven.addEventListener("click", ()=> {
// total.textContent = 7;
// return 7;
// });
// const eight = document.querySelector("#eight");
// eight.addEventListener("click", ()=> {
// total.textContent = 8;
// return 8;
// });
// const nine = document.querySelector("#nine");
// nine.addEventListener("click", ()=> {
// total.textContent = 9;
// return 9;
// });
// const zero = document.querySelector("#zero");
// zero.addEventListener("click", ()=> {
// total.textContent = 0;
// return 0;
// });
// const decimal = document.querySelector("#decimal");
// decimal.addEventListener("click", ()=> {
// total.textContent = ".";
// return ".";
// });
// const dontPush = document.querySelector("#fun");
// dontPush.addEventListener("click", ()=> {
// total.textContent = "80085";
// return "80085";
// });
