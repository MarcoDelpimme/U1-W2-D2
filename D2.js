/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 120;
let b = 60;

if (a > b) {
  console.log("il numero piu grande è: " + a);
} else if (a < b) {
  console.log("il numero piu grande è:" + b);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb1 = 5;
let numb2 = 20;

if (numb2 != numb1) {
  console.log("il numero è :not equal");
} else if ((numb2 = numb1)) {
  console.log("il numero è :equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb3 = 5;
let numb4 = 20;

if (numb4 % numb3 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb5 = 4;
let numb6 = 4;

if (numb5 + numb6 === 8) {
  console.log("la loro addizione è uguale a :8");
} else {
  console.log("non è uguale");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prodotto = 30;
let totalShoppingCart = prodotto;
let shippingCost = 10;
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita");
} else if (totalShoppingCart < 50) {
  console.log(
    "Non avendo superato la soglia di 50 euro per la spedizione gratuita, tua spedizione ha un costo fisso pari a 10 quindi il totale è",
    totalShoppingCart + shippingCost
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blackfridaypercent = 20;
let fullsaleimport = (blackfridaypercent / 100) * prodotto; //importo totale del prodotto scontato al 20%

console.log(fullsaleimport);

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita, il totale è:", prodotto - fullsaleimport);
} else if (fullsaleimport < 50) {
  console.log(
    "Non avendo superato la soglia di 50 euro per la spedizione gratuita, la tua spedizione ha un costo fisso pari a 10 quindi il totale è",
    prodotto - fullsaleimport + shippingCost
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numb7 = 25;
let numb8 = 15;
let numb9 = 35;

if (numb7 < numb8) {
  let prot = numb7; // variabile prot è il numb7 poi se il numb7 lo equivalgo al numb8 gli cambio il valore
  numb7 = numb8;
  numb7 = prot;
}

if (numb8 < numb9) {
  let prot = numb8;
  numb8 = numb9;
  numb9 = prot;
}

if (numb7 < numb8) {
  let prot = numb7;
  numb7 = numb8;
  numb8 = prot;
}
console.log(numb7, numb8, numb9);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb10 = 100;
let numb11 = "100";

console.log(typeof numb10);
console.log(typeof numb11);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numb12 = 80;
let numb13 = 100;
console.log(numb12 % 2 === 0);
console.log(numb13 % 3 === 0);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9] = 100;
console.log(array);
