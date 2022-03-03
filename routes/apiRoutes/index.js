const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

const { createNewNote, deleteNote } = require("../../lib/notes");

let notes = require("../../db/db.json");

// Get all notes
router.get("/notes", (req, res) => {
  res.json(notes);
});

// Post a new note
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();

  const note = createNewNote(req.body, notes);
  res.json(note);
});

// Delete a note by id
router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const newArray = deleteNote(id, notes);
  notes = newArray
  res.json(newArray);
});

module.exports = router;