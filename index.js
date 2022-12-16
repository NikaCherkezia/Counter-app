let startingNum = 0;
let counter = document.getElementById("count-el");
let savedEl = document.getElementById("save-el");

function increment() {
    startingNum+=1;
    counter.textContent = startingNum;
}

function reset() {
    startingNum = 0;
    counter.textContent = startingNum;
    // savedEl.textContent = "Saved Elements:";
}

function save() {
    let countedSavedEl = startingNum + " - ";
    savedEl.textContent += countedSavedEl;
}


// PRACTICE

let userName = "Nika";
let userLastname = "Cherkezia";


function greetings(name, lastName) {
    console.log("Hi " + name + " " + lastName);
}

greetings(userName, userLastname);