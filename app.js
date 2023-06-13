const { addNote, showList } = require ('./notes.js');

const nota1 = {"id": "1","title": "Nota 1","content": "87"};
const nota2 = {"id": "2","title": "Nota 2","content": "92"};
const nota3 = {"id": "3","title": "Nota 3","content": "100"};
const nota4 = {"id": "4","title": "Nota 3","content": "97"};
const nota5 = {"id": "5","title": "Nota 5","content": "80"};

const notas = [];

addNote(notas, nota1);
addNote(notas, nota2);
addNote(notas, nota3);
addNote(notas, nota4);
addNote(notas, nota5);

showList(notas);