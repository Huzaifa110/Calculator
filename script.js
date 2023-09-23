let screen = document.getElementById('screen');
let currentInput = '';

screen.innerText = '';

function appendToScreen(value) {
    if (screen.innerText === 'Error') {
        currentInput = ''; 
        screen.innerText = '';
    }
    currentInput += value;
    screen.innerText += value;
}

function clearScreen() {
    currentInput = '';
    screen.innerText = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    screen.innerText = currentInput;
}

function calculate() {
    let result;
    try {
        result = eval(currentInput);

        if (isFinite(result)) {
            screen.innerText = result;
        } else {
            screen.innerText = 'Error';
        }
    } catch (error) {
        screen.innerText = 'Error';
    }
}
