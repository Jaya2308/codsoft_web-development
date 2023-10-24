let displayValue = "0";

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function appendSymbol(symbol) {
  if (displayValue === "0") {
    displayValue = symbol;
  } else {
    displayValue += symbol;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteDigit() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
  updateDisplay();
}

updateDisplay();