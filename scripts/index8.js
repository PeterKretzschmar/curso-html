
function Child(name, height){
	this.name = name;
	this.height = height;

	this.check = function (lim){
		return this.height >= lim;
	}
}

var childrenList = [
	new Child("Aiorefer", 1.3),
	new Child("Malesta", 1.6),
	new Child("Wololo", 1),
	new Child("Tapreola", 1.9),
	new Child("Seu Cú", 1.2)
]


function check(limitador, lista){
	for(var it in lista){
		console.log(("Acesso "+lista[it].check(limitador)?"Liberado":"Negado")+": "+lista[it].name+" "+lista[it].height)
	}
}

var looper=1.4;
check(looper, childrenList);

var rodaGigante = 1.2;
check(rodaGigante, childrenList);

var barcoViking = 1.3;
check(barcoViking, childrenList);

var montRussaMad = 1.5;
check(montRussaMad, childrenList);