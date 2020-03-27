Eventos = {
  ;
document.getElementById('1').addEventListener("click",n1);
document.getElementById('2').addEventListener("click",n2);
document.getElementById('3').addEventListener("click",n3);
document.getElementById('4').addEventListener("click",n4);
document.getElementById('5').addEventListener("click",n5);
document.getElementById('6').addEventListener("click",n6);
document.getElementById('7').addEventListener("click",n7);
document.getElementById('8').addEventListener("click",n8);
document.getElementById('9').addEventListener("click",n9);
document.getElementById('0').addEventListener("click",n0);
document.getElementById("on").addEventListener("click", reset);
document.getElementById('mas').addEventListener("click",operas);
document.getElementById('menos').addEventListener("click",operar);
document.getElementById('por').addEventListener("click",operam);
document.getElementById('dividido').addEventListener("click",operad);
document.getElementById("igual").addEventListener("click", showResult);
}

function tamañoTecla(){
  document.getElementByClassName('tecla').style="width:80%";
}

function volverTecla(){
  document.getElementByClassName('tecla').style="width:100%";
}

document.getElementByClassName('tecla').onclick=tamañoTecla;
document.getElementByClassName('tecla').onmouseup=volverTecla;
//Funciones - Escribir números
Teclas {


function n1() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "1";

}

function n2() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "2"
}

function n3() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "3"
}

function n4() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "4"
}

function n5() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "5"
}

function n6() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "6"
}

function n7() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "7"
}

function n8() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "8"
}

function n9() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "9"
}

function n0() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "0"
}

//Funciones - Ejecutar Operaciones
function operas() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "+";
}

function operar() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "-";
}

function operam() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "*";
}

function operad() {
  let actual = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = actual + "/";
}
}
function showResult(){
  let actual = document.getElementById("display").innerHTML;
  let suma = actual.indexOf("+");
  let resta = actual.indexOf("-");
  let multiplica = actual.indexOf("*");
  let divide = actual.indexOf("/");

  if (suma !== -1){
    arr = actual.split("+",2);
    res = parseInt(arr[0]) + parseInt(arr[1]);
    document.getElementById("display").innerHTML = res;
  }
  else if (resta !== -1) {
    arr = actual.split("-",2);
    res = parseInt(arr[0]) - parseInt(arr[1]);
    document.getElementById("display").innerHTML = res;
  }
  else if (multiplica !== -1 ){
    arr = actual.split("*",2);
    res = parseInt(arr[0]) * parseInt(arr[1]);
    document.getElementById("display").innerHTML = res;
  }
  else if (divide !== -1){
    arr = actual.split("/",2);
    res = parseInt(arr[0]) / parseInt(arr[1]);
    document.getElementById("display").innerHTML = res;
  }
}

function reset(){
    document.getElementById("display").innerHTML = " ";
}


//Limitar a 8 caracteres en el display (FAIL)
function limitCaracteres(resultado){
  let result = document.getElementById("display").innerHTML;
  if(result.length >= 8) {
  document.getElementById("display").innerHTML = error;
    }
  }
limitCaracteres();
