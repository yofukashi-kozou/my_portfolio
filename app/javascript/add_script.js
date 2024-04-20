var addButtons = document.querySelectorAll('#addButton');



addButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

      const form = document.getElementById('add-form');
      const itemLearningTime = document.getElementById("itemLearningTime");
      const itemNameInput = document.getElementById("itemNameInput");
      const addItemModal = document.getElementById("addItemModal");
       const addedItemName = document.getElementById("addedItemName");
      const closeModalButton = document.getElementById("closeModalButton");

      // var userId = button.getAttribute('create-button-id');
      var userId = document.getElementById("userId").value;
      var userId2 = button.getAttribute('add-button-id');

      const formData = new FormData(form);

      console.log("通った追加2");
      console.log("userName=");
      console.log(userId);

      console.log("itemName");
      console.log(itemNameInput);

      console.log("userId2");
      console.log(userId2);
      console.log(typeof(userId2));
      var userId2Number = parseInt(userId2)
      console.log(typeof(userId2Number ));

      console.log("formData");
      console.log(formData);

      for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // const itemName = itemNameInput.value;
      // var userId = button.getAttribute(' create-button-id');

      // fetch(form.action, {
      fetch(`/items/${userId2Number}/items_create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
        },
        body: formData // フォームデータを送信する
      })
      .then(response => response.json())
      .then(data => {
        console.log("通った");
        console.log(data);
        // モーダルに追加された項目名を表示
        // addedItemName.textContent = data.name;
        // モーダルを表示
        // addItemModal.style.display = "block";

        // var deletedItemId = data.deleted_item_id;
        console.log(data.name);
        console.log(deletedItemId);
        console.log("通った削除4");
        // レスポンスの処理
        // showModal();
        var addItemId = data.add_item_id;
        showModal(addItemId );

      })

    });
  });
  
    // closeModalButton.addEventListener("click", function() {
    //   // モーダルを非表示
    //   addItemModal.style.display = "none";
    //   // 入力フィールドをクリア
    //   itemNameInput.value = "";
    // });
  
  