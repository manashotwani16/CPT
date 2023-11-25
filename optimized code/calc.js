function validateInput(inputValue) {
    return /^[+-]?\d+(\.\d+)?$/.test(inputValue);
}

function performOperation(operation, inputValue) {
    if (validateInput(inputValue)) {
        document.getElementById('input-box').value = operation(inputValue);
    } else {
        alert('Please enter a valid number');
    }
}

function cosFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.cos, inputValue);
}

function sinFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.sin, inputValue);
}

function tanFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.tan, inputValue);
}

function lnFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.log, inputValue);
}

function logFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.log10, inputValue);
}

function sqrtFunction() {
    const inputValue = document.getElementById('input-box').value;
    performOperation(Math.sqrt, inputValue);
}

function factorialFunction() {
    const inputValue = document.getElementById('input-box').value;
    if (/^\d+$/.test(inputValue)) {
        let factorial = 1;
        for (let i = 1; i <= inputValue; i++) {
            factorial *= i;
        }
        document.getElementById('input-box').value = factorial;
    } else {
        alert('Please enter a valid non-negative integer.');
    }
}
