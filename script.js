//funcion para agregar operaciones
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
//funcion para realizar el calculo 
function calculate() {
    let result = document.getElementById("result").value;
    let answer = eval(result); 
    document.getElementById("result").value = answer;
  }

//funcion para evitar escribir letras
document.getElementById("calculadora").addEventListener("input", (e) => {
  let value = e.target.value;
  e.target.value = value.replace(/[^A-Z\d-]/g, "");
});

 
//funcion para usar las teclas numericas
function teclas(event) {
    // Obtiene el código de la tecla presionada
    let tecla = event.key || event.which;

   // funcion para obtener el resultado presionando enter
    if (tecla === "Enter") {
      calculate();
      event.preventDefault();
      return;
    }

    // Obtén el campo de texto
      let input = document.getElementById("result");
  
    // Agrega el número al valor actual del campo de texto
      input.value += tecla;
  
    // Previene que se ejecute el comportamiento por defecto del evento de la tecla presionada
      event.preventDefault();{ }
    }
    
    

 //funcion para borrar usando el boton C Y usando backspace
 function borrar() {
  let input = document.getElementById("result");
  input.value = "";
 }
 document.addEventListener("keydown", function(event){
  if (event.key === "Backspace"){
    borrar();
    event.preventDefault();
  }
 })
 



  