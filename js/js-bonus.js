
// TEST
alert('Verifichiamo la tua cultura da 1 a NIENTE');

var rispostaAmer = '1492';
var rispostaPhone = '12';
var rispostaGiub = '2000';
var contenitore = document.getElementById('content');
var america = prompt("Quando è stata scoperta l'America?");
var phone = prompt("Qual'è l'ultima versione dell'Iphone?");
var giubileo = prompt("Quando l'ultimo Giubileo?")


if(america === rispostaAmer) { contenitore.innerText = ('Ok sei acculturato!!!:)') } else{contenitore.innerText = ('capra,capra,capra!!!')
};

if(phone === rispostaPhone) { contenitore.append("\nFacile sapere dell'Iphone è???!!!")} else{ contenitore.append('\nSei veramente scarso ragazzo!!!')}
;

if(giubileo === rispostaGiub) { contenitore.append('\nIl Vaticano ti contatterà anche a breve!!!')} else{ contenitore.append('\nPerò nemmeno la comunione ti meriteresti!!!')}
;


alert('Ci scusiamo anticipatamente per il NON senso logico del gioco!')
