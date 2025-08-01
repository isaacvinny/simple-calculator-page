function calculate(){

    let firstInput = parseInt(document.getElementById("formInput1").value)
    let operation = document.getElementById("selector").value;
    let secondInput = parseInt(document.getElementById("formInput2").value)
    let result;
    
  if (operation === "+") {
    result = firstInput + secondInput;
  } else if (operation === "-") {
    result = firstInput - secondInput;
  } else if (operation === "*") {
    result = firstInput * secondInput;
  } else if (operation === "/") {
    if (secondInput !== 0){
        result = firstInput / secondInput;
    } else {
        result = " cannot divide by 0";
    }
  } else if (operation === "%") {
    result = firstInput % secondInput;
  } else {
    result = "Input valid operations"
  }
  document.getElementById("showResult").innerHTML = firstInput + operation + secondInput + " = " + result;
}
