var deleteButtons = document.querySelectorAll('#deleteButton');
const modal = document.getElementById('modal');

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // 削除ボタンから削除対象のアイテムIDを取得
    var itemId = button.getAttribute('delete-button-id');
   
    // アイテムIDを使って削除リクエストを送信
    fetch(`/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    })
    .then(response => response.json())
    .then(data => {
        var deletedItemId = data.deleted_item_id;
        console.log(deletedItemId);
        console.log("通った削除4");
        // レスポンスの処理
        showModal(deletedItemId);
      })
    .catch(error => console.error('Error:', error));
  });
});

function showModal(deletedItemId) {
  console.log("通った削除3");
  console.log(deletedItemId);
  // モーダルでの表示処理を実装
  // 例: モーダルのテキストエリアに削除された項目のIDを表示
  var modalContent = document.querySelector('.modal-content');
  document.getElementById('deletedItemIdArea').innerHTML = `<p>${deletedItemId}を削除しました！</p>`;
  modal.style.display = 'block';

}