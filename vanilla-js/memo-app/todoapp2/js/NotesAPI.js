export default class NotesAPI {
  // すべてのメモを取得するAPI
  static getAllNotes() {
    //localStorageにない場合はparseしているので文字列でからの配列を返す
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  // メモを保存するAPI
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    //  =>拡張for文　noteの要素を全部取り出して、noteのidとnoteToSaveのidが一致するかの判断
    const existingNote = notes.find((note) => note.id == noteToSave.id);
    // 編集or更新 更新の場合つまりIDが元からある場合はIDは変わらない
    if (existingNote) {
      existingNote.title = noteToSave.title;
      existingNote.body = noteToSave.body;
      existingNote.updated = new Date().toISOString();
    } else {
      // noteToSave.id = Math.floor(Math.random() * 1000000);
      // noteToSave.updated = new Date().toISOString();
      // notes.push(noteToSave);
      noteToSave.id = noteToSave.id;
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  // メモを削除するAPI
  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    // 送られてきたidと一致しない際はnewNotesに保存する
    const newNotes = notes.filter((note) => note.id !== id);

    localStorage.setItem("notes", JSON.stringify(newNotes));
  }
}
