-- Copyright © 2023 az0ox. All rights reserved.

let displayValue = "";
const inputCalc = document.getElementById("display");

window.addEventListener('message', function(event) {
    let item = event.data;
    if (item.display === true && item.type === "calc") {
        $('body').fadeIn(500);
        document.body.style.display = "flex";
        displayValue = "";
    }
})

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function copyDisplayValueInClipboard() {
    navigator.clipboard.writeText(displayValue);
}

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        $('body').fadeOut(500);
        displayValue = "";
        $.post('https://azx_calc/closeCalc')
    }
})
