const fs = require("fs");
const path = require("path");

// This function will create a new note
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

// This function will delete a note
function deleteNote(id, notesArray) {
    // This will filter out the notes that is not equal to the id
    const newArray = notesArray.filter(note => note.id !== id);
    // This will write the new array to the db.json file
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(newArray, null, 2)
    );
    return newArray;
}

module.exports = { createNewNote, deleteNote };
