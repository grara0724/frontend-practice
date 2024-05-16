import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//   id: 123456,
//   title: "二回目のメモです",
//   body: "プログラミングマスター",
// });

// console.log(NotesAPI.getAllNotes());
// NotesAPI.deleteNote(327600);

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteSelect() {
    console.log("ノートが選択されました");
  },
});

console.log(NotesAPI.getAllNotes());
