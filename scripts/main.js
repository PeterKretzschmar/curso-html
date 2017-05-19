// var varString = "String";
// var varArray = [123,321,"rtsetestse",varString];

// console.log(varArray);

// function toggleMenu(menu){
// 	document.querySelector(menu).classList.toggle('active');
// }

// var a = 0;
// while (a < varArray.length){
// 	console.log(varArray[a]);
// 	a++;
// }

var childrenList = [1.3, 1, 1.2, 1.6, 1.7, 1.8]

var looper = 1.4;
var rodaGigante = 1.2;
var barcoViking = 1.3;
var montRussaMad = 1.5;

// var iLoop = 0;

// console.log("Brinquedo Looper");
// while (iLoop < childrenList.length){
// 	console.log(childrenList[iLoop] >= looper ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);
// 	iLoop++;
// }
// console.log("---------------------------");

// console.log("Brinquedo Roda Gigante");
// iLoop = 0;
// while (iLoop < childrenList.length){
// 	console.log(childrenList[iLoop] >= rodaGigante ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);
// 	iLoop++;
// }
// console.log("---------------------------");

// console.log("Brinquedo Barco Viking");
// iLoop = 0;
// while (iLoop < childrenList.length){
// 	console.log(childrenList[iLoop] >= barcoViking ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);
// 	iLoop++;
// }
// console.log("---------------------------");

// console.log("Brinquedo Montanha Russa de Madeira");
// iLoop = 0;
// while (iLoop < childrenList.length){
// 	console.log(childrenList[iLoop] >= montRussaMad ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);
// 	iLoop++;
// }

// console.log("Brinquedo Looper");
// for(var iLoop = 0; iLoop<childrenList.length; iLoop++){
// 	console.log(childrenList[iLoop] >= looper ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Roda Gigante");
// for(var iLoop = 0; iLoop<childrenList.length ; iLoop++){
// 	console.log(childrenList[iLoop] >= rodaGigante ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Barco Viking");
// for(var iLoop = 0; iLoop<childrenList.length ; iLoop++){
// 	console.log(childrenList[iLoop] >= barcoViking ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Montanha Russa de Madeira");
// for(var iLoop = 0; iLoop<childrenList.length ; iLoop++){
// 	console.log(childrenList[iLoop] >= montRussaMad ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }

// console.log("Brinquedo Looper");
// for(var iLoop in childrenList){
// 	console.log(childrenList[iLoop] >= looper ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Roda Gigante");
// for(var iLoop in childrenList){
// 	console.log(childrenList[iLoop] >= rodaGigante ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Barco Viking");
// for(var iLoop in childrenList){
// 	console.log(childrenList[iLoop] >= barcoViking ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }
// console.log("---------------------------");

// console.log("Brinquedo Montanha Russa de Madeira");
// for(var iLoop in childrenList){
// 	console.log(childrenList[iLoop] >= montRussaMad ? "Acesso liberado: "+childrenList[iLoop] : "Acesso negado: "+childrenList[iLoop]);	
// }


function verifAcessoBrinquedo(varArChildren, varLim, varBrinquedo){
	
	// console.log(varBrinquedo);

	// for(var iLoop in varArChildren){
	// 	console.log(varArChildren[iLoop] >= varLim ? "Acesso liberado: "+varArChildren[iLoop] : "Acesso negado: "+varArChildren[iLoop]);	
	// }

	// console.log("---------------------------");

	// var sLog = varBrinquedo;
	// sLog += "\n";

	var sLog = "";

	for(var iLoop in varArChildren){
		// sLog += varArChildren[iLoop] >= varLim ? "Acesso liberado: "+varArChildren[iLoop] : "Acesso negado: "+varArChildren[iLoop];
	
		sLog += "Acesso " + (varArChildren[iLoop] >= varLim ? "Liberado" : "Negado") + ": " + varArChildren[iLoop];
		sLog += "\n";
	}

	document.getElementById("lblBrinquedo").innerHTML = varBrinquedo;	
	document.getElementById("txtListaAcesso").innerHTML = sLog;	
}


function verifAcessoBrinquedoLooper(){
	verifAcessoBrinquedo(childrenList, looper, "Brinquedo Looper");
}

function verifAcessoBrinquedoRodaGigante(){

	verifAcessoBrinquedo(childrenList, rodaGigante, "Brinquedo Roda Gigante");
}

function verifAcessoBrinquedoBarcoViking(){
	verifAcessoBrinquedo(childrenList, barcoViking, "Brinquedo Barco Viking");
}

function verifAcessoBrinquedoMontanhaRussa(){
	verifAcessoBrinquedo(childrenList, montRussaMad, "Brinquedo Montanha Russa de Madeira");
}
