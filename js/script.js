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
var studenteNew = objStudente;
do {
  studenteNew.nome = prompt("Inserisci il nome del nuovo studente");
  studenteNew.nome = studenteNew.nome.charAt(0).toUpperCase() + studenteNew.nome.slice(1);
} while (!isNaN(studenteNew.nome));

do {
  studenteNew.cognome = prompt("Inserisci il cognome del nuovo studente");
  studenteNew.cognome = studenteNew.cognome.charAt(0).toUpperCase() + studenteNew.cognome.slice(1);
} while (!isNaN(studenteNew.cognome));

do {
  studenteNew.eta = parseInt(prompt("Inserisci l'età del nuovo studente"));
} while (isNaN(studenteNew.eta));

arrayStudenti.push(studenteNew);
console.log(arrayStudenti);
// -----------------------------------EXTRA / PROVE-----------------------------------------------
//  stampo il mio array sotto forma di lista a schermo
var listaArray = document.getElementById('lista_array');
for (var i = 0; i < arrayStudenti.length; i++) {
  if (arrayStudenti[i] === studenteNew) {
    listaArray.innerHTML += "<li id='new_elem'>" + arrayStudenti[i]['nome']  + " " + arrayStudenti[i]['cognome'] + " " + arrayStudenti[i]['eta'] + "</li>";
  } else {
    listaArray.innerHTML += "<li>" + arrayStudenti[i]['nome']  + " " + arrayStudenti[i]['cognome'] + " " + arrayStudenti[i]['eta'] + "</li>";
  }
}
