// Chiedi a utente se pari o dispari
const sceltaGioco = prompt("Scegli pari o dispari (in minuscolo)");
document.getElementById("scelta_gioco").innerHTML = sceltaGioco;

// Chiedi a utente un numero da 1 a 5
const inputNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
document.getElementById("numUser").innerHTML = inputNumero;

// Eseguo funzione con prompt
pariDispari(sceltaGioco, inputNumero);

// FUNZIONI

// Creo funzione pari e dispari
function pariDispari(scelta, numero){
    // Genero numero random per computer
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById("numBot").innerHTML = randomNumber;

    // Calcolo somma numeri scelti
    const somma = numero + randomNumber; 

    // Dichiaro variabili esito e variabile messaggio
    let esito, messaggio;

    if(somma % 2){
        esito = "dispari";
        if(scelta === "dispari"){
            messaggio = "Hai vinto";
        }else{
            messaggio = "Hai perso";
        }
    }else{
        esito = "pari";
        if(scelta === "pari"){
            messaggio = "Hai vinto";
        }else{
            messaggio ="Hai perso";
        }
    }

    // Inserisco nel DOM l'esito
    document.getElementById("result").innerHTML = esito;

    // Inserisco nel DOM il messaggio di chi vince
    document.getElementById("messaggio").innerHTML = messaggio;
}





