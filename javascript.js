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

// --constants-- all my button functionality
const total = document.querySelector("#totalDisplay");
const one = document.querySelector("#one");
one.addEventListener("click", ()=> {
total.textContent = 1;
return 1;
});

