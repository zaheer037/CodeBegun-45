const display = document.querySelector("#calc-display");
let currentInput = "0";
let operator = null;
let firstOperand = null;

function updateDisplay() {
    display.textContent = currentInput;
}

function handleButtonClick(value) {
    if (value === "C") {
        currentInput = "0";
        operator = null;
        firstOperand = null;
    } else if (value === "backspace") {
        currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
    } else if (value === "=") {
        if (operator && firstOperand !== null) {
            currentInput = calculate(firstOperand, parseFloat(currentInput), operator).toString();
            firstOperand = null;
            operator = null;
        }
    } else if ("0123456789.".includes(value)) {
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        } else if (!(value === "." && currentInput.includes("."))) {
            currentInput += value;
        }
    } else if ("+-*/".includes(value)) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (operator) {
            firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
        }
        operator = value;
        currentInput = "0";
    }
    updateDisplay();
}

function calculate(a, b, op) {
    return op === "+" ? a + b :
           op === "-" ? a - b :
           op === "*" ? a * b :
           op === "/" ? (b !== 0 ? a / b : "Error") : b;
}

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.dataset.value));
});
