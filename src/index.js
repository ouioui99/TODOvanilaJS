import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div作成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタン作成
  completeButton.addEventListener("click", () => {
    //未完了リストからinnerTextを取得
    const completeTaget = completeButton.parentNode;
    const text = completeTaget.firstChild.innerText;
    //未完了リストからcompleteButtonの親要素(div)を削除
    deleteDiv(completeTaget);

    //divの中身を初期化
    completeTaget.textContent = null;
    //liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    //戻すボタン作成
    returnButton.addEventListener("click", () => {
      //returnbuttonの親要素(list-row)取得
      const returnTaget = returnButton.parentNode;
      const returnText = returnTaget.firstChild.innerText;
      //要素削除
      document.getElementById("complete-list").removeChild(returnTaget);
      //completeボタン等際作成が手間なために初期化ではなくdivタグ再生成
      const divReturn = document.createElement("div");
      divReturn.className = "list-row";
      const liReturn = document.createElement("li");
      liReturn.innerText = returnText;

      divReturn.appendChild(liReturn);
      divReturn.appendChild(completeButton);
      divReturn.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(divReturn);
    });

    completeTaget.appendChild(li);
    completeTaget.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(completeTaget);
  });

  //削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグdivを未完了リストから削除
    deleteDiv(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //div削除関数
  const deleteDiv = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
