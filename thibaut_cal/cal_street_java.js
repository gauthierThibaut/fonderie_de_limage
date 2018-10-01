var bouton1 = document.getElementById('bouton-1');
var bouton2 = document.getElementById('bouton-2');
var bouton3 = document.getElementById('bouton-3');
var bouton4 = document.getElementById('bouton-4');
var bouton5 = document.getElementById('bouton-5');
var bouton6 = document.getElementById('bouton-6');
var bouton7 = document.getElementById('bouton-7');
var bouton8 = document.getElementById('bouton-8');
var bouton9 = document.getElementById('bouton-9');
var bouton0 = document.getElementById('bouton-0');
var boutonPoint = document.getElementById('bouton-point');
var boutonAddition = document.getElementById('bouton-plus');
var boutonSoustraction = document.getElementById('bouton-moins');
var boutonDivision = document.getElementById('bouton-slash');
var boutonMultiplication = document.getElementById('bouton-etoile');
var boutonEgal = document.getElementById('bouton-egal');
var boutonC = document.getElementById('bouton-c');

var nombre1;
var nombre2;

var operation; // + = 1 / - = 2 / / = 3 / * = 4

var resultatEcran = document.getElementById('resultat');


bouton1.onclick = bouton1Click;
bouton2.onclick = bouton2Click;
bouton3.onclick = bouton3Click;
bouton4.onclick = bouton4Click;
bouton5.onclick = bouton5Click;
bouton6.onclick = bouton6Click;
bouton7.onclick = bouton7Click;
bouton8.onclick = bouton8Click;
bouton9.onclick = bouton9Click;
bouton0.onclick = bouton0Click;
boutonPoint.conclick = boutonPointClick
boutonAddition.onclick = boutonAdditionclick;
boutonSoustraction.onclick = boutonSoustractionclick;
boutonDivision.onclick = boutonDivisionclick;
boutonMultiplication.onclick = boutonMultiplicationclick;
boutonEgal.onclick = boutonEgalClick;
boutonC.onclick = boutonCClick;
resultatEcran.innerHTML = 0;



function  bouton1Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 1;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+1;
		
	}
}

function  bouton2Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 2;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+2;
		
	}
}

function  bouton3Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 3;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+3;
		
	}
}

function  bouton4Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 4;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+4;
		
	}
}

function  bouton5Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 5;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+5;
		
	}
}

function  bouton6Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 6;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+6;
		
	}
}

function  bouton7Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 7;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+7;
		
	}
}

function  bouton8Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 8;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+8;
		
	}
}

function  bouton9Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 9;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+9;
		
	}
}

function  bouton0Click(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 0;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+0;
		
	}
}

function  boutonPointClick(){
	if(resultatEcran.innerHTML == 0){
		resultatEcran.innerHTML= 0;
	}else{
		resultatEcran.innerHTML= resultatEcran.innerHTML+'.';
		
	}
}

function boutonAdditionclick(){
	nombre1 = Number(resultatEcran.innerHTML);
	operation = 1 ;
	resultatEcran.innerHTML = 0 ;
}

function boutonMultiplicationclick(){
	nombre1 = Number(resultatEcran.innerHTML);
	operation = 2 ;
	resultatEcran.innerHTML = 0 ;
}

function boutonSoustractionclick(){
	nombre1 = Number(resultatEcran.innerHTML);
	operation = 3 ;
	resultatEcran.innerHTML = 0 ;
}

function boutonDivisionclick(){
	nombre1 = Number(resultatEcran.innerHTML);
	operation = 4 ;
	resultatEcran.innerHTML = 0 ;
}

function boutonEgalClick(){
	nombre2 = Number(resultatEcran.innerHTML);
	if (operation == 1){
		resultatEcran.innerHTML = nombre1 + nombre2 ;
	}else if(operation == 2){
			resultatEcran.innerHTML = nombre1 * nombre2;
		}else if(operation == 3){
				resultatEcran.innerHTML = nombre1 - nombre2;
			}else if(operation == 4){
				resultatEcran.innerHTML = nombre1 / nombre2;
			}
                else {
                    resultatEcran.innerHTML = "YOU LOOSE"
                }
}
function boutonCClick(){
                                          
	resultatEcran.innerHTML = 0;
}