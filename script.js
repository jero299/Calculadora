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
//funcion para usar las teclas numericas
function teclas(event) {
    // Obtiene el código de la tecla presionada
    let tecla = event.key || event.which;

    // Obtén el campo de texto
      var input = document.getElementById("result");
  
    // Agrega el número al valor actual del campo de texto
      input.value += tecla;
  
    // Previene que se ejecute el comportamiento por defecto del evento de la tecla presionada
      event.preventDefault();
    }
  
  