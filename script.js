let proximo = Math.floor(Math.random() * 99) + 0;
document.getElementById("first").innerText = "Número atual :"+proximo;
let time = 5;
let num1 = Math.floor(Math.random() * 99) + 0;
let num2 = Math.floor(Math.random() * 99) + 0;
let num3 = Math.floor(Math.random() * 99) + 0;
let num4 = Math.floor(Math.random() * 99) + 0;
let num5 = Math.floor(Math.random() * 99) + 0;
let num6 = Math.floor(Math.random() * 99) + 0;
let num7 = Math.floor(Math.random() * 99) + 0;
let num9 = Math.floor(Math.random() * 99) + 0;
let num10 = Math.floor(Math.random() * 99) + 0;
let num11 = Math.floor(Math.random() * 99) + 0;
let num12 = Math.floor(Math.random() * 99) + 0;
let num13 = Math.floor(Math.random() * 99) + 0;
let num14 = Math.floor(Math.random() * 99) + 0;
let num15 = Math.floor(Math.random() * 99) + 0;
document.getElementById("button1").innerText = num1;
document.getElementById("button2").innerText = num2;
document.getElementById("button3").innerText = num3;
document.getElementById("button4").innerText = num4;
document.getElementById("button5").innerText = num5;
document.getElementById("button6").innerText = num6;
document.getElementById("button7").innerText = num7;
document.getElementById("button9").innerText = num9;
document.getElementById("button10").innerText = num10;
document.getElementById("button11").innerText = num11;
document.getElementById("button12").innerText = num1;
document.getElementById("button13").innerText = num13;
document.getElementById("button14").innerText = num14;
document.getElementById("button15").innerText = num15;
let tempoRestante = 10;
function verificar(){
	if(document.getElementById("button1").innerText=="C"){
		if(document.getElementById("button6").innerText=="C"){
			if(document.getElementById("button11").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="C"){
		if(document.getElementById("button2").innerText=="C"){
			if(document.getElementById("button3").innerText=="C"){
				if(document.getElementById("button4").innerText=="C"){
					if(document.getElementById("button5").innerText=="C"){
						alert("voce ganhou!");
						location.reload();
					}
				}
			}
		}
	}
	if(document.getElementById("button2").innerText=="C"){
		if(document.getElementById("button7").innerText=="C"){
			if(document.getElementById("button12").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button3").innerText=="C"){
		if(document.getElementById("button6").innerText=="C"){
			if(document.getElementById("button13").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="C"){
		if(document.getElementById("button6").innerText=="C"){
			if(document.getElementById("button11").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button1").innerText=="C"){
		if(document.getElementById("button6").innerText=="C"){
			alert("voce ganhou!");
			location.reload();
		}
	}
	if(document.getElementById("button4").innerText=="C"){
		if(document.getElementById("button9").innerText=="C"){
			if(document.getElementById("button14").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button5").innerText=="C"){
		if(document.getElementById("button10").innerText=="C"){
			if(document.getElementById("button15").innerText=="C"){
				alert("voce ganhou!");
				location.reload();
			}
		}
	}
	if(document.getElementById("button6").innerText=="C"){
		if(document.getElementById("button7").innerText=="C"){
			if(document.getElementById("button9").innerText=="C"){
				if(document.getElementById("button10").innerText=="C"){
					alert("voce ganhou!");
					location.reload();
				}
			}
		}
	}
	if(document.getElementById("button11").innerText=="C"){
		if(document.getElementById("button12").innerText=="C"){
			if(document.getElementById("button13").innerText=="C"){
				if(document.getElementById("button14").innerText=="C"){
					if(document.getElementById("button15").innerText=="C"){
						alert("voce ganhou!")
						location.reload();
					}
				}
			}
		}
	}
}
function loop(){
	setTimeout(function(){
		time -= 1;
		if(time<=-1){
			proximo = Math.floor(Math.random() * 99) + 0;
			document.getElementById("first").innerText = "Número atual :"+proximo;
			time = 5;
			tempoRestante -= 1;
		}
		if(tempoRestante<=-1){
			alert("voce perdeu! Proxima partida");
			location.reload();
		}
		loop();
	}, 1000);
}
loop();
function clique1(){
	if(document.getElementById("button1").innerText==proximo){
		document.getElementById("button1").innerText = "C";
	}
	verificar();
}
function clique2(){
	if(document.getElementById("button2").innerText==proximo){
		document.getElementById("button2").innerText = "C";
	}
	verificar();
}
function clique3(){
	if(document.getElementById("button3").innerText==proximo){
		document.getElementById("button3").innerText = "C";
	}
	verificar();
}
function clique4(){
	if(document.getElementById("button4").innerText==proximo){
		document.getElementById("button4").innerText = "C";
	}
	verificar();
}
function clique5(){
	if(document.getElementById("button5").innerText==proximo){
		document.getElementById("button5").innerText = "C";
	}
	verificar();
}
function clique6(){
	if(document.getElementById("button6").innerText==proximo){
		document.getElementById("button6").innerText = "C";
	}
	verificar();
}
function clique7(){
	if(document.getElementById("button7").innerText==proximo){
		document.getElementById("button7").innerText = "C";
	}
	verificar();
}
function clique8(){
	if(document.getElementById("button8").innerText==proximo){
		document.getElementById("button8").innerText = "C";
	}
	verificar();
}
function clique9(){
	if(document.getElementById("button9").innerText==proximo){
		document.getElementById("button9").innerText = "C";
	}
	verificar();
}
function clique10(){
	if(document.getElementById("button10").innerText==proximo){
		document.getElementById("button10").innerText = "C";
	}
	verificar();
}
function clique11(){
	if(document.getElementById("button11").innerText==proximo){
		document.getElementById("button11").innerText = "C";
	}
	verificar();
}
function clique12(){
	if(document.getElementById("button12").innerText==proximo){
		document.getElementById("button12").innerText = "C";
	}
	verificar();
}
function clique13(){
	if(document.getElementById("button13").innerText==proximo){
		document.getElementById("button13").innerText = "C";
	}
	verificar();
}
function clique14(){
	if(document.getElementById("button14").innerText==proximo){
		document.getElementById("button14").innerText = "C";
	}
	verificar();
}
function clique15(){
	if(document.getElementById("button15").innerText==proximo){
		document.getElementById("button15").innerText = "C";
	}
	verificar();
}
