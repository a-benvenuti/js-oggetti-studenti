/*
- Creare un oggetto che descriva uno studente con le
  seguenti proprietà: nome, cognome e età. Stampare a
  schermo attraverso il for in tutte le proprietà.
*/
var objStudente = {
   nome: "Franco",
   cognome: "Rossi",
   eta: 18
};

for (var key in objStudente) {
  console.log(key + "->" + objStudente[key]);
}
/*
- Creare un array di oggetti di studenti. Ciclare su tutti gli
  studenti e stampare per ognuno nome e cognome
*/
var arrayStudenti = [
  {
    nome: "Franco",
    cognome: "Rossi",
    eta: 18
  },
  {
    nome: "Maria",
    cognome: "Verdi",
    eta: 28
  },
  {
    nome: "Filippo",
    cognome: "Bianchi",
    eta: 31
  }
];

for (var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome, arrayStudenti[i].cognome);
}
/*
- Dare la possibilità all’utente attraverso 3 prompt di
  aggiungere un nuovo oggetto studente inserendo
  nell’ordine: nome, cognome e età.
*/
