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

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','%'];

    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
