export default class NotesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
    <div class="notesSidebar">
    <button class="notesAdd" type="button">ノートを追加</button>
    <div class="notesList">
        <div class="notesList-item">
        </div>
    </div>
</div>
<div class="notesPreview">
    <input type="text" class="notesTitle" placeholder="タイトルを記入">
    <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
</div>`;

    const btnAddNote = this.root.querySelector(".notesAdd");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();

    });
  }
}
