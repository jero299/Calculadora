// Función para agregar operaciones
function appendToResult(value) {
  const input = document.getElementById("result");
  const currentValue = input.value;
  
  // Validar operadores duplicados
  const lastChar = currentValue[currentValue.length - 1];
  if (isOperator(lastChar) && isOperator(value)) {
    return; // No se permite agregar operador duplicado
  }
  
  input.value = currentValue + value;
}

// Función auxiliar para verificar si un carácter es un operador (+, -, *, /)
function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/' || char === '.';
}

// Función para realizar el cálculo
function calculate() {
  let result = document.getElementById("result").value;
  let answer = eval(result);
  document.getElementById("result").value = answer;
}

// Función para evitar escribir letras
function restringirTeclas(event) {
  // Obtiene el valor actual del input
  let value = event.target.value;
  
  // Elimina todos los caracteres que no sean números, operadores, o el punto decimal
  let newValue = value.replace(/[^0-9+.\-\/*]/g, "");
  
  // Actualiza el valor del input con el nuevo valor restringido
  event.target.value = newValue;
}

// Función para borrar el contenido del campo de texto
function borrar() {
  let input = document.getElementById("result");
  input.value = "";
}

// Evento para borrar usando el botón "C" y la tecla "Backspace"
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace"){
    borrar();
    event.preventDefault();
  }
});

// Evento para obtener el resultado al presionar la tecla "Enter"
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculate();
    event.preventDefault();
  }
});






 



  