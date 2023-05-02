var number1 =document.getElementById("num1");
var number2 =document.getElementById("num2");
var result  =document.getElementById("result");
function add(){
  var num1=Number(number1.value);
  var num2=Number(number2.value);
  result.classList.remove("d-none")
   result.innerHTML=num1+num2;
}
function sub(){
  var num1=Number(number1.value);
  var num2=Number(number2.value)
  result.classList.remove("d-none")
   result.innerHTML=num1-num2;
}
function multiply(){
    var num1=Number(number1.value);
    var num2=Number(number2.value)
    result.classList.remove("d-none")
     result.innerHTML=num1*num2;
}
function divide(){
    var num1=Number(number1.value);
    var num2=Number(number2.value)
    result.classList.remove("d-none")
     result.innerHTML=num1/num2;
}
function clearInput(){
  number1.value="";
  number2.value="";
  result.classList.add("d-none")
}
