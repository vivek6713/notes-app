// load or import our files
// const getNotes = require("./notes.js");
// const validator = require("validator");
// const chalk = require("chalk");
// console.log(getNotes());
// console.log(validator.isEmail("test@email.com"));
// console.log(chalk.red("successfully done!"));
// challenge : install chalk and log green text

// import or load core node module, here we import filesystem module
// const fs = require("fs");
// write file in sysncronous way, overwrite the file
// fs.writeFileSync("note.txt", "i am vb");

// challenge : Append text to note txt

// fs.appendFileSync("note.txt", "node is cool!");

// get argument from cli
// const command = process.argv;

const yargs = require("yargs");
const notes = require("./notes.js");

// add command add, remove, read, list

// add command
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add body option",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "remove note",
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// read command
yargs.command({
  command: "read",
  describe: "read note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// list command
yargs.command({
  command: "list",
  describe: "list new note",
  handler() {
    notes.listNotes();
  },
});
yargs.parse();
