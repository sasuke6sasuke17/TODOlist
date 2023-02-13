import "./styles.css";
const onClickAdd = () => {
  //　テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value; //inputTextにadd_textを入れる
  document.getElementById("add_text").value = ""; //追加を押したときに、入力欄をリセットする

  createIncompleteList(inputText); //未完了のTODOの中に項目を作る、createIncompleteListという関数を作る
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

const createIncompleteList = (text) => {
  //　li生成
  const li = document.createElement("li"); //createElementでliタグを作る
  const div = document.createElement("div"); //createElementでdivタグを作る
  div.className = "list_row";
  const pTag = document.createElement("p"); //createElementでpタグを作る

  //削除ボタン
  const deleteButton = document.createElement("button"); //deleteButtonという名前でボタンを作る
  deleteButton.innerText = "削除"; //なんという名前のボタンかを決める必要があるのでinnerTextで名前をつける
  deleteButton.addEventListener("click", () => {
    // const deleteTarget = div.parentNode;
    // console.log(deleteTarget);
    //document.getElementById("incomplete_list").removeChild(deleteTarget);
    deleteFromIncompleteList(div.parentNode);
  });

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode); //親要素のdiv＝liを削除する

    //完了リスト追加
    const addTarget = pTag.parentNode;
    // console.log(addTarget);
    const text = addTarget.firstElementChild.innerText;
    // console.log(addTarget);
    //divの中身を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    // 戻すbutton
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //　戻すbuttonの処理
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親要素を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document
        .getElementById("complete_list")
        .removeChild(deleteTarget.parentNode);

      // テキストの取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    //　完了したTODO liタグ生成
    addTarget.appendChild(pTag); //divタグの中にpタグを作る
    addTarget.appendChild(backButton);
    pTag.innnerText = text;

    //　完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(pTag);
  pTag.innerText = text;
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //　未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button") //追加ボタン設置
  .addEventListener("click", () => onClickAdd()); //addボタンを押したら処理
