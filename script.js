//funcion para agregar operaciones
function appendToResult(value) {
  const input = document.getElementById("result");
  const currentValue = input.value;
  
  if (value === '.' && !validarPunto()) {
    return; // No se permite agregar el punto decimal
  }
  
  input.value = currentValue + value;
}

//funcion para realizar el calculo 
function calculate() {
    let result = document.getElementById("result").value;
    let answer = eval(result); 
    document.getElementById("result").value = answer;

  }

//funcion para evitar escribir letras
function restringirTeclas(event) {
  // Obtiene el valor actual del input
  let value = event.target.value;
  
  // Elimina todos los caracteres que no sean números, suma, resta, multiplicación o división
  let newValue = value.replace(/[^0-9+.\-\/*]/g, "");
  
  // Actualiza el valor del input con el nuevo valor restringido
  event.target.value = newValue;
}
//TODO crear una variable que cuente los puntos y reinicie el contador para poner numero decimales
function validarPunto() {
  const value = document.getElementById("result").value;
  return !(value.includes('.') && /\.\d*$/.test(value));
}

// Función para borrar el contenido del campo de texto
function borrar() {
  let input = document.getElementById("result");
  input.value = "";
}
 //funcion para borrar usando el boton C Y usando backspace
 document.addEventListener("keydown", function(event){
  if (event.key === "Backspace"){
    borrar();
    event.preventDefault();
  }
 })
 // funcion para obtener el resultado presionando enter
 document.addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    calculate();
    event.preventDefault();
  }
});







 



  