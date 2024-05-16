const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

// const toDos =JSON.parse(localStorage.getItem("キー名")でローカルストレージからキー名の配列を取得
// JSON.parseでJSON型の値をjsの型に戻す
const toDos = JSON.parse(localStorage.getItem("toDos"));

// もしローカルストレージにtoDosデータがある際はaddメソッドでページに表示
if (toDos) {
  // toDosの配列の数だけ毎回addする
  toDos.forEach((todo) => {
    add(todo);
  });
}

// フォームの値が送信されるとその値をaddメソッドでページに表示
form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

// addメソッド
function add(todo) {
  // inputに入力された値をtodoTextとして定義する
  let todoText = input.value;

  // もしtoDosのデータがあればそのtext変数の値をtodoTextとして定義する
  if (todo) {
    todoText = todo.text;
  }

  // 空文字でエンターを押された時に処理を行わない
  if (todoText) {
    // liに<li>タグの属性を付与する・・・createElement("li")は<li>タグの属性を付与する
    const li = document.createElement("li");

    // liにtodoTextの値はテキストとして付与する
    li.innerText = todoText;

    // list-group-itemというクラスを付与
    li.classList.add("list-group-item");

    // もしtoDosにデータがあり、なおかつコンプリート状態だとliにコンプリート状態を付与
    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through");
      saveData();
    }

    //右クリックされるとリストを消すという属性を付与
    li.addEventListener("contextmenu", function (event) {
      // 右クリックで出てくるメニューを非表示
      event.preventDefault();
      li.remove();

      //localStorageに削除したことをセーブする
      saveData();
    });

    //左クリックされるとコンプリート状態になったり戻したりする属性を付与
    li.addEventListener("click", function () {
      // トグルでクラス名を切り替えることが出来る
      li.classList.toggle("text-decoration-line-through");

      //localStorageにコンプリートの状態をセーブ
      saveData();
    });

    // id=ulの子要素として追加
    ul.appendChild(li);

    // input valueの値を初期化
    input.value = "";

    //liを追加したことをセーブ
    saveData();
  }
}
//saveメソッド
function saveData() {
  // html上のil属性を全て取得してlistsとして定義
  const lists = document.querySelectorAll("li");

  // toDos配列を定義
  const toDos = [];

  // listsのテキスト要素をtoDos配列に渡す
  // forEach処理配列の数だけ繰り返す、一つ一つの要素の名前はlistとする
  lists.forEach((li) => {
    toDos.push({
      // listのテキストと、listのクラス名がtext～かどうかのチェック状態をtodoとする
      text: li.innerText,
      completed: li.classList.contains("text-decoration-line-through"),
    });
  });
  // localStorage.setItem("キー名", "値")でローカルストレージに保存
  // ローカルストレージに保存するためにJSON形式に変更
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
