


const inputWord = prompt("inserisci una parola");

const letterArray = inputWord.split('');

console.log(letterArray);

let reverseWord = '';

for(let i = letterArray.length - 1; i >= 0; i--){
    reverseWord += letterArray[i];
}
