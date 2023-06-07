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