var nomeUtente = prompt ("Inserisci il tuo nome")
console.log(nomeUtente);

var cognomeUtente = prompt ("inserisci il tuo cognome")
console.log();

var colorePreferito = prompt ("Inserisci il tuo colore preferito")
console.log();

document.getElementById("persona").innerHTML = nomeUtente + cognomeUtente + colorePreferito + "21";