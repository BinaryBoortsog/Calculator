const display = document.getElementById("display");

function appendToDisplay(input){
    if (display.value === "" && (input === "+" || input === "-" || input === "*" || input === "/")) {
        return;
    }
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "error"   
    }

}