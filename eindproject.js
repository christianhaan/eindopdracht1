const readlineSync = require("readline-sync");

function stelVraag(vraag) {
	return readlineSync.question(vraag).toLowerCase();
}

function vraag1() {
	switch (stelVraag("het regent buiten wat ga je doen? \n A= binnen blijven     B= naar buiten")) {
		case 'a':
			vraag2();
			break;
		case 'b':
			vraag5();
			break;
	}
}

function vraag2() {
	switch (stelVraag("ga je naar de wc of eten pakken? \n A= naar de WC, B= eten pakken")) {
		case 'a':
			vraag3();
			break;
		case 'b':
			console.log("je doet de rest van de dag niks");
			break;
	}
}

function vraag3() {
	switch (stelVraag("wat ga je nu doen? \n A= je favoritie eten maken, B= ander eten pakken")) {
		case 'a':
			console.log('je bent extreem blij door het eten wat je hebt gemaakt')
			break;
		case 'b':
			vraag4();
			break;
	}
}

function vraag4() {
	switch (stelVraag("je hebt spijt, wat is de volgende stap? \n A= je maakt toch je favoritie eten, B= je besluit niks te doen")) {
		case 'a':
			console.log("je bent extreem blij door het eten wat je hebt gemaakt")
			break;
		case 'b':
			console.log('je gaat de rest van de dag tv kijken')
			break;
	}
}


function vraag5() {
	switch (stelVraag("je gaat naar de winkel wat haal je? \n A= je haalt chips en ander junkfood, B= je haalt fruit")) {
		case 'a':
			vraag6();
			break;
		case 'b':
			console.log('je gaat lekker gezond blijven en besluit te gaan sporten');
			break;
	}
}

function vraag6() {
	switch (stelVraag("je moet afrekenen en nu? \n A= je rekent alles af zoals het hoort, B= je steelt 2 dingen")) {
		case 'a':
			console.log('je gaat lekker eten op een pakje in het park');
			break;
		case 'b':
			vraag7();
			break;
	}
}

function vraag7() {
	switch (stelVraag("ONEE!! het allarm gaat af. SNEL MAAK EEN KEUZE! \n A= je gaat rennen om niet gepakt te worden, B= je blijft staan en geeft eerlijk de spullen terug")) {
		case 'a':
			vraag8();
			break;
		case 'b':
			console.log('je krijgt alleen een waarschuwing dat je het niet nog een keer mag doen en mag daarna weer naar huis.');
			break;
	}
}

function vraag8() {
	switch (stelVraag("je bent aan het rennen maar waar heen eingelijk? \n A= je rent richting je huis, B= je rent van je huis af")) {
		case 'a':
			console.log('er stond politie bij je huis te wachten op je en werd toch gepakt.');
			break;
		case 'b':
			vraag9();
			break;
	}
}

function vraag9() {
	switch (stelVraag("er rijden meerdere politie auto's langs je en vind dit niet prettig, wat ga je doen? \n A= je loopt door en doet alsof er niks aan de hand is, B= je verstopt je in een paar bosjes")){
		case 'a':
			console.log('je komt veilig thuis');
			break;
		case 'b':
			vraag10();
			break;
	}
}

function vraag10() {
	switch (stelVraag("een agent zag je in de bosjes gaan en besluit te gaan kijken waarom je in de bosjes dook. \n A= je blijft stil liggen in de bosjes in de hoop dat de agent je niet vind, B= je gaat toch weer rennen")){
		case 'a':
			console.log('de agent zag je niet en gaat dus weer weg en je kunt nu toch rustig naar huis');
			break;
		case 'b':
			console.log('de agent begint achter je aan te rennen komt er opeens een politie auto uit een zijstraat en je word alsnog gepakt');
			vraag11();
			break;
	}
}

function vraag11() {
	switch (stelVraag("je bent gepakt en moet nu voor de rechter komen. \n A= je geeft toe dat je gestolen hebt, B= je roept je op je zwijg recht, C= je blijft zeggen dat je onschuldig bent")){
		case 'a':
			console.log('je krijgt alleen een boete omdat je zo eerlijk was');
			break;
		case 'b':
			console.log('de rechter heeft je schuldig bevonden van het stelen en geeft je als straf: geld boete, winkel verbod van een jaar en 40 uur taakstraf');
			break;
		case 'c':
			console.log('de rechter vind je niet schuldig en je mag dus weer naar huis');
	}
}

vraag1();