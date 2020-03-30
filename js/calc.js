function getHistory(){
	return document.getElementById("historial-value").innerText;
}
function printHistory(num){
	document.getElementById("historial-value").innerText=num;
}
function getDisplay(){
	return document.getElementById("display").innerText;
}
function printDisplay(num){
	if(num==""){
		document.getElementById("display").innerText=num;
	}
else{
		document.getElementById("display").innerText=getFormattedNumber(num);
	}
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var opera = document.getElementsByClassName("opera");
for(var i =0;i<opera.length;i++){
	opera[i].addEventListener('click',function(){
		if(this.id=="on"){
			printHistory("");
			printDisplay("");
		}

		else{
			var display=getDisplay();
			var history=getHistory();
			if(display==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(display!="" || history!=""){
				display= display==""?display:reverseNumberFormat(display);
				history=history+display;
				if(this.id=="="){
					var result=eval(history);
					printDisplay(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printDisplay("");
				}
			}
		}

	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var display=reverseNumberFormat(getDisplay());
		if(display!=NaN){ //if output is a number
			display=display+this.id;
			printDisplay(display);
		}
	});
}


//ahora los efectos en las teclas
var tecla = document.querySelectorAll('.tecla');
  for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    })
  }
  for (var i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    })
  }
