// Chiedi all'user di inserire una parola e inseriscila nel DOM
const inputWord = prompt("inserisci una parola");
document.getElementById("input_word").innerHTML = inputWord;

// Splitta in un array tutte le lettere della parola inserita
const letterArray = inputWord.split('');

// Dichiara variabile per parola la contrario
let reverseWord = '';

// Cicla lettere array al contrario
for(let i = letterArray.length - 1; i >= 0; i--){
    reverseWord += letterArray[i];
}

// Immetti nel DOM la parola invertita
document.getElementById("reverse_word").innerHTML = reverseWord;


// Verifica con condizione se la parola inserita è un palindromo (uguale al contraio)
let outcome;

if(inputWord === reverseWord){
    outcome = "Vero";
}else(outcome = "Falso");


// Immetti nel DOM l'esito
document.getElementById("outcome").innerHTML = outcome;


