function addNote(list, note) {
  list.push(note);
  console.log(`Has agregado una nota a la lista: Id: ${note.id} Title: ${note.title} Content: ${note.content}`);
}

function showList(list) {
  console.log(list);
}

module.exports={
  addNote : addNote,
  showList : showList
}