// jQuery(document.body).text("Teste 1")

// document.getElementById("title").innerHTML += " Peter";

// var sHtml = document.getElementById("title").innerHTML + " Peter";

// document.write(sHtml);


// var listPessoas = document.getElementsByTagName("li");

// var iIndex = 1;
// for(var iLoop in listPessoas){
// 	listPessoas[iLoop].innerHTML = iIndex+" - "+listPessoas[iLoop].innerHTML;	
// 	iIndex++;
// }

// for(var iLoop in listPessoas){
// 	listPessoas[iLoop].innerHTML = parseFloat(iLoop)+1+" - "+listPessoas[iLoop].innerHTML;
// }

// for(iLoop = 0; iLoop < listPessoas.length; iLoop++){
// 	listPessoas[iLoop].innerHTML = iLoop+1 + " - " + listPessoas[iLoop].innerHTML;
// }

/* Para utilizar o framework jQuery, utilizar $ ou jQuery*/
// $("li").text("Novo texto");
// ou
//jQuery("li").text("Novo texto");

// $("li").text("Novo texto").attr("id", "li")

// $("li").click(function(evt){
// 	console.log(this);
// });

// $("li").each(function(index, val){
// 	$(val).text(index+1+" "+$(val).text());
// });

// var index = 1;
// $("button").click(function(){
// 	$(".list").append("<li>"+index+" - "+$(".name").val()+"</li>");
// 	$(".name").val("");
// 	index++;
// });

// var index = 1;
// function addItem(){
// 	if($(".name").val() != ""){
// 		$(".list").append("<li>"+index+" - "+$(".name").val()+"</li>");
// 		$(".name").val("");
// 		index++;	
// 	}else{
// 		alert("Por favor, informe o nome do aluno.")
// 	}

// 	var count = $(".list").length;

// 	// console.log($(".alunos").text = $(".alunos").text + $(".list").length());
// 	console.log($(".alunos").text = $(".list").length);
// }

// $(".send").click(addItem);

$(".clear").click(function(){
	$(".list").empty();
	index = 1;
});

// $("form").submit(function(){
// 	var value = $(this).find("input").val();
// 	$("ul").append("<li>"+value+"</li>");
// 	$("input").val("");
// 	return false;
// });

$("form").submit(function(){
	// var value = $(this).find("input").val('');

	var value = 'vdadfbsfb agdb d  sb tst sdfg 30/03/1989 vfgdfg s gsbgbsf  set gdbdfb tr bs bsf';
	// var regexp = /[0-9]/;

	// console.log(regexp.exec(value));
	
	// console.log(value.replace(/[1-9]/g, 0));

	console.log(value.match(/\d{2}\/\d{2}\/\d{4}/igm));
	// console.log(value.search(/[a]/ig));

	// if regexp.text(value){

	// }
	// $("ul").append("<li>"+value+"</li>");
	// $("input").val("");
	return false;
});

$("form").animate({color:"#F00"}, 2000);