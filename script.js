const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    //eval() is a JavaScript function that evaluates a string as code and executes it.
//It's powerful but risky, as it can run malicious or unintended code if not used carefully.
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
