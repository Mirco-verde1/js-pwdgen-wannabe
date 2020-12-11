
var name = prompt('Come ti chiami?');

var surname = prompt("Qual'è il tuo cognome");

var birth = prompt('Anno di nascita?');

var color = prompt('Il tuo colore preferito?')

var anno = new Date().getFullYear();

document.getElementById('datiPersona').innerText = (name + surname + birth + anno + color);
