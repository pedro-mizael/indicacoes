
function change(card) {

	const myNodelist = document.querySelectorAll("div > input");
	for (let i = 0; i < myNodelist.length; i++) {
	  if (myNodelist[i].checked != true) {
	  	let nochecked = myNodelist[i].value;
	  	document.getElementById(nochecked).style = "opacity: 0;";
	  } else {
	  	let checked = myNodelist[i].value;
	  	document.getElementById(checked).style = "position: relative; opacity: 1;";
	  }
	}

}


function nextcard() {

	const myNodelist = document.querySelectorAll("div > input");
	let select = "";
	let next = "";
	
		for (let i = 0; i < myNodelist.length; i++) {

		  if (myNodelist[i].checked == true) {
		  	select = "input" + i;
		  	next = parseInt(i + 1);
			  	if (next >= myNodelist.length) {
			  		next = "input0";
			  	} else {
			  		next = "input" + parseInt(i + 1);
			  		
			  	}


		  } 
		}
	  	document.getElementById(next).checked = true;
	  	change(select);


}

function prevcard() {
	
	const myNodelist = document.querySelectorAll("div > input");
	let select = "";
	let prev = "input0";
	
		for (let i = 0; i < myNodelist.length; i++) {

		  if (myNodelist[i].checked == true) {
		  	select = "input" + i;
		  	prev = parseInt(i - 1);
		  	if (prev == -1) {
		  		prev = "input" + parseInt(myNodelist.length -1)
		  	} else {
		  		prev = "input" + prev;
		  	}

		  } 
		}
	  	document.getElementById(prev).checked = true;
	  	change(select);

}

function scrool(container, to) {

	if (to == 'next') {
		document.getElementById(container.id).scrollLeft += 200;
	} else {
		document.getElementById(container.id).scrollLeft -= 200;

	}
	if (container.scrollLeft == 0) {
		document.getElementById("prevmobile").style = "opacity: 0";
	} else {
		document.getElementById("prevmobile").style = "opacity: 80%";
	}

}

function inscroll(container) {
	if (container.scrollLeft == 0) {
		document.getElementById("prevmobile").style = "opacity: 0";
	} else {
		document.getElementById("prevmobile").style = "opacity: 1";
	}
}



function theme(image) {

	let item = document.getElementById(image.id);
	let position = document.getElementById(image.id).style.left;

	if (position == "0px") {

		let wid = document.querySelector('.theme');
		wid = parseInt(wid.clientWidth - 28);

		//Trocando o Switch
		item.style = "left:"+ wid +"px; ";
		item.src = "./svg/moon.svg";
		document.getElementById("theme-container").style = "background-color: #342D5B;";

		//Aplicando Tema
		let container = document.querySelectorAll('.container');
		document.getElementById("body-tag").style = "background-color: #383838";
		for (let cont of container) {
			let title = cont.querySelector('p');
			let card = cont.querySelector('.cards');
			title.style = "color: white"
			cont.style = "background-color: #121212;";
			card.style = "opacity: 1; position: relative; right: auto; border: solid 1px #4D1236"
		}

	} else {

		//Trocando o Switch
		item.style.left = "0px";
		item.src = "./svg/sun.svg";
		document.getElementById("theme-container").style = "background-color: #059FD1;";

		//Aplicando o Tema
		let container = document.querySelectorAll('.container');
		document.getElementById("body-tag").style = "background-color: #D9D9D9";

		for (let cont of container) {
			let title = cont.querySelector('p');
			let card = cont.querySelector('.cards');
			title.style = "color: grey"
			cont.style = "background-color: white;"
			card.style = "opacity: 1; position: relative; right: auto; border: solid 1px #922569;"
		}
	}
}


//function "onchange(filtro)" vvv //
function filter(input) {
	let item = input.value;
	let cards = document.querySelectorAll('.small-card');
	for (let card of cards) {
		let title = card.querySelector('.card-title h4')
		let text = card.querySelector('.card-description p');
		title = title.textContent.toLowerCase();
		text = text.textContent.toLowerCase();
		item = item.toLowerCase();

		if (title.includes(item) | text.includes(item)) {
			card.style.display = "flex";
		} else {
			card.style.display = "none";
		}
	
	}
}

