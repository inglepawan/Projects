const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")
let temp;
result.classList.remove("blink");

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32 ;
        result.textContent = temp.toFixed(1) + "℉";
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1) + "℃";
    }
    else{
        result.textContent = "Select a Unit";
        result.style.color = "Red";
        result.classList.remove("blink");           // Remove class
        void result.offsetWidth;                    // Force reflow (important!)
        result.classList.add("blink");
    }
}




