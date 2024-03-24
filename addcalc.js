
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}



function deleteLastCharacter() {
  const currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function toggleNegative() {
  const currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
    document.getElementById('display').value = -currentValue;
  }
}

function squareRoot() {
  const currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue) && currentValue >= 0) {
    document.getElementById('display').value = Math.sqrt(currentValue);
  } else {
    document.getElementById('display').value = 'Error';
  }
}
