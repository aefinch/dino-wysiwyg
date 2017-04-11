var dinoArray = [];

$.ajax('./db/dinosaurs.json').done(function(data){
	dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("You've made a huge mistake", error);
});

function makeDom(myArraytoPrint){
	var myDomString = "";
	for (var i=0; i<myArraytoPrint.length; i++){
		myDomString +=`<div class="dinoCard">`;
		myDomString +=`<header><h1>${myArraytoPrint[i].type}</h1></header>`;
		myDomString +=`<section>`;
		myDomString +=`<img src="${myArraytoPrint[i].img}">`;
		myDomString +=`<p class="bio">${myArraytoPrint[i].bio}</p>`;
		myDomString +=`</section>`;
		myDomString +=`<footer>${myArraytoPrint[i].info}</footer>`;
		myDomString +=`</div>`;
	}
	$("#dinosaurs").html(myDomString);
}