updateButton.addEventListener("click", function() {
    const introductionTextarea = document.getElementById("user_introduction");
    const introductionLength = introductionTextarea.value.length;

    // 文字数が50文字未満または200文字を超える場合、アラートを表示して更新ボタンを無効化する
    if (introductionLength < 50 || introductionLength > 200) {
        
        alert("自己紹介文は50文字以上、200文字以内で入力してください。");
        updateButton.disabled = true;
    } else {
        // 文字数が50文字以上かつ200文字以内の場合、更新ボタンを有効にする
        updateButton.disabled = false;
    }
});

const introductionTextarea = document.getElementById("user_introduction");

// テキストエリアの内容が変更されたときのイベントを設定
introductionTextarea.addEventListener("input", function() {
    const introductionLength = introductionTextarea.value.length;

    // テキストエリアの文字数が50文字以上かつ200文字以内の場合、更新ボタンを有効にする
    if (introductionLength < 50 || introductionLength > 200) {
        console.log("通った");
        updateButton.disabled = false;
        
    } else{
        updateButton.disabled = false;
    }
});