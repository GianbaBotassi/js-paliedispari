// Chiedi all'user di inserire una parola e inseriscila nel DOM
const inputWord = prompt("inserisci una parola");
document.getElementById("input_word").innerHTML = inputWord;

// Creo funzione per verificare se palindromo
function checkPal(word){
    // Splitta in un array tutte le lettere della parola inserita
    const letterArray = word.split('');

    // Dichiara variabile per parola al contrario
    let reverseWord = '';

    // Cicla lettere array al contrario
    for(let i = letterArray.length - 1; i >= 0; i--){
        reverseWord += letterArray[i];
    }

    // Dichiara variabile esito
    let outcome = "Falso"

    // Verifica con condizione se la parola inserita è un palindromo (uguale alla parola scritta al contrario)
    if(word === reverseWord){
        outcome = "Vero";
    }

    // Immetti nel DOM la parola invertita
    document.getElementById("reverse_word").innerHTML = reverseWord;

    // Immetti nel DOM l'esito
    document.getElementById("outcome").innerHTML = outcome;
}

// Verifica funzione in base alla parola inserita nel prompt
checkPal(inputWord);



