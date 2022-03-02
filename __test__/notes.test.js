const fs = require("fs");
const { createNewNote, deleteNote } = require("../lib/notes");
const notes = require("../db/db.json");

jest.mock("fs");

test("create a note", () => {
    const note = createNewNote({
        title: "Test Title",
        text: "Test Text",
        id: 1
    }, notes);
    expect(note.title).toBe("Test Title");
    expect(note.text).toBe("Test Text");
    expect(note.id).toBe(1);
});
