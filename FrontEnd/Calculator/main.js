const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function squareRoot(){
    try {
        const result = Math.sqrt(eval(display.value));
        if(isNaN(result)) throw new Error();
        display.value = result;        
    } catch {
        display.value = "Error";
    }
}

function clearEntry(){
    display.value ="";
}

function percentage(){
    try {
        display.value = eval(display.value)/100;
    } catch {
        display.value = "Error";
    }
}