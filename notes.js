const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();
  const checkDuplicateNote = notes.find((note) => note.title === title);
  debugger;
  if (!checkDuplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const saveNotes = (note) => {
  const data = JSON.stringify(note);
  fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json");
    const dataJson = data.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const keepNote = notes.filter((note) => note.title !== title);
  if (notes.length === keepNote.length) {
    console.log(chalk.bgRed("No note found!"));
  } else {
    saveNotes(keepNote);
    console.log(chalk.bgGreen("Note removed!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(chalk.green(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);
  if (findNote) {
    console.log("Title:" + findNote.title);
    console.log("Body:" + findNote.body);
  } else {
    console.log("Note not found!");
  }
};

module.exports = { addNotes, removeNote, listNotes, readNote };
