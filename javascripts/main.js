$.ajax('./db/dinosaurs.json').done(function(data){
	var dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArraytoPrint){
	var myDomString = "";
	for (var i=0; i<myArraytoPrint.length; i++){
		if (i%3===0){
			myDomString +=`<div class="row">`;
		}
		myDomString +=`<div class="dinoCard col-md-4">`;
		myDomString +=`<header><h1>${myArraytoPrint[i].type}</h1></header>`;
		myDomString +=`<section>`;
		myDomString +=`<img src="${myArraytoPrint[i].img}">`;
		myDomString +=`<p class="bio">${myArraytoPrint[i].bio}</p>`;
		myDomString +=`</section>`;
		myDomString +=`<footer>${myArraytoPrint[i].info}</footer>`;
		myDomString +=`</div>`;
		if (i%3===2){
			myDomString +=`</div>`;
		}
	}
	$("#dinosaurs").html(myDomString);
}

$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");	
	$("#textbox").val("").focus();
});
	$("#textbox").keyup(mirrorText);
	function mirrorText	(e){
		var selectedCard = $(".dottedBorder");
		var bioTyped = $("#textbox").val();
		var bio = selectedCard.find("p.bio");
		if (bioTyped !==""){
		bio.html(bioTyped);
		}
		if (e.keyCode===13){
			$("#textbox").val("");
		}
	}