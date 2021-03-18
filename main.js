// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studenti = [
  {
    nome: 'franco',
    cognome: 'proietti',
    età: 17,
  },
]

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
};


// Creare un array di oggetti di studenti.
nuovoStudente = studenti.push( {
  nome: 'gigi',
  cognome: 'franchetti',
  età: 18,
},);
nuovoStudente = studenti.push( {
  nome: 'franco',
  cognome: 'rossi',
  età: 24,
},);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log(studenti);
// for (var i = 0; i < studenti.length; i++) {
//   console.log(studenti[i]);
// };
// nomiStudenti = [];
// cognomiStudenti = [];
// for (var i = 0; i < studenti.length; i++) {
//   nomiStudenti.push(studenti.nome);
//
// };

console.log(studenti.nome);
