const totalDisplay = document.querySelector("#totalDisplay");

function displayThis(input){
   totalDisplay.textContent += input;
};

function operate(){
totalDisplay.textContent = eval(totalDisplay.textContent);
};

function backSpace(){
totalDisplay.textContent = totalDisplay.textContent.slice(0, -1);
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    totalDisplay.textContent = "";
});

const dontPush = document.querySelector("#fun");
dontPush.addEventListener("click", ()=> {
totalDisplay.textContent = "80085";
return "80085";
});