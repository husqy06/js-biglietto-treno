
/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS: introduzione della parte grafica con CSS 

*/   

alert("Benvenuto su Boolean Train");

var numeroKm = prompt("Quanti chilometri desidetera percorrere?");
var etaCliente = prompt("Quanti anni ha?");

var costoBiglietto;

if(etaCliente < 18) {
    costoBiglietto = ((numeroKm * 0.21) / 100) * 80;
    alert("Costo biglietto " + costoBiglietto + "€" );
}
else if (etaCliente > 65) {
    costoBiglietto = ((numeroKm * 0.21) / 100) * 60;
    alert("Costo biglietto " + costoBiglietto + "€" );
}
else {
    costoBiglietto = numeroKm * 0.21;
    alert("Costo biglietto " + costoBiglietto + "€" );
}