var updateButtons = document.querySelectorAll('#updateButton');


// document.addEventListener('DOMContentLoaded', function() {
    updateButtons.forEach(function(button) {
       
        const modal = document.getElementById('update-modal');
    
        button.addEventListener('click', function(event) {

    
    const form = document.getElementById('update-form');

    const modalContent = document.getElementById('update-modal-content');

    var itemId = document.getElementById('item-id').value;
    var itemId2 = button.getAttribute('update-button-id');
    const learningtime = document.getElementById("learningTime").value;
  
    console.log("itemId2" );
    console.log(itemId2 );
    console.log(learningtime );

// 新しい変数を定義
let targetLearningTime = null;

// 全てのフォーム要素を取得
const forms = document.querySelectorAll('form');

// 指定したitemId
const targetItemId = itemId2; // 取得したいitemIdをここに指定

// フォームごとに処理を行う
forms.forEach(form => {
  // FormDataオブジェクトを作成し、フォームのデータを収集する
  const formData = new FormData(form);

  // フォームのデータからitem_idとlearning_timeを取得する
  const itemId = formData.get('item[item_id]');
  const learningTime = formData.get('item[learning_time]');

  // itemIdが指定した値と一致する場合、そのlearningTimeを新しい変数に代入する
  if (itemId === targetItemId) {
    targetLearningTime = learningTime;
    // 一度該当のlearningTimeが見つかったら、ループを抜ける
    return;
  }
});

// 指定したitemIdに関連するlearningTimeの値を出力する
console.log('Target Learning Time: ', targetLearningTime);


    // form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      formData.append('item[item_id]',itemId2 );
      formData.append('item[learning_time]',targetLearningTime  );

      console.log(formData);
      console.log(form);
      console.log(itemId);

      formData.forEach((value, key) => {
        console.log(key + ': ' + value);
    });

   


      fetch(`/items/${itemId2}/items_update`, {
        method: 'PATCH',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        // body: binaryData
        body: formData // フォームデータを送信する
        // body: JSON.stringify(jsonData)
      })
      
      .then(response => response.json())
      .then(data => {
        console.log(data);

        var updatedItemId = data.update_item_id;
        console.log("通った更新2.5");
        console.log(updatedItemId);
        showModal(updatedItemId );
      })

    });
        

    
    function showModal(updatedItemId) {
    console.log("通った更新3");
    console.log(updatedItemId);
    //   modalContent.innerText = `更新された項目: ${updatedItem.name}`;
    var modalContent = document.querySelector('.update-modal-content');
    console.log("通った更新4");
    console.log(modalContent);

    document.getElementById('updateItemIdArea').innerHTML = `<p>${updatedItemId.name}の学習時間を保存しました！</p>`;
      modal.style.display = 'block';
    }
  });