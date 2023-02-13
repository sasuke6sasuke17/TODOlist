import "./styles.css";
const onClickAdd = () => {
  //　テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete_list").removeChild(target);
};

const createIncompleteList = (text) => {
  //　li生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list_row";
  const pTag = document.createElement("p");

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = div.parentNode;
    // console.log(deleteTarget);
    //document.getElementById("imcomplete_list").removeChild(deleteTarget);
    deleteFromIncompleteList(deleteTarget);
  });

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

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
    addTarget.appendChild(pTag);
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
  document.getElementById("imcomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
