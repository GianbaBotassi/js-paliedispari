// // Chiedi a utente se pari o dispari
// const sceltaGioco = prompt("Scegli pari o dispari").toLowerCase();
// document.getElementById("scelta_gioco").innerHTML = sceltaGioco;

// // Chiedi a utente un numero da 1 a 5
// const inputNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
// document.getElementById("numUser").innerHTML = inputNumero;

// Genera numero random per computer
const randomNumber = mathRandomMinMax(1, 5);
document.getElementById("numBot").innerHTML = randomNumber;

// Eseguo funzione ed inserisco nel DOM il messaggio di chi vince
document.getElementById("messaggio").innerHTML = pariDispari(sceltaGioco, inputNumero, randomNumber);

// FUNCTIONS

// Math random function from min to max
function mathRandomMinMax(min, max){
    return Math.floor(Math.random() * max) + min;
}

// IsEven function
function isOdd(number){
    let outcome = false;
    if(number % 2 === 1){
        outcome = true; 
    }
    return outcome;
}

// Function even Odd
function pariDispari(choice, yourNumber, randomNumber){

    // Sommo i numeri e ottengo la somma (const number)
    const number = yourNumber + randomNumber;

    let message = "Hai perso";

    if(isOdd(number) && choice === "dispari" || !isOdd(number) && choice === "pari"){
        message = "Hai vinto"
    }
    return message;
}


