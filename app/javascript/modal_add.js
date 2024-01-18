
// 追加

document.addEventListener('turbolinks:load', function() {
    var createBtns = document.getElementsByClassName('create-btn');
    var modal = document.getElementById('confirmation-modal-add');
    var confirmYesBtn = document.getElementById('confirm-yes');

     // データ属性からURLを取得
    var itemsCreateUrl = document.getElementById('confirmation-modal-add').dataset.itemsCreateUrl;

    console.log("通った");

    Array.from(createBtns).forEach(function(createBtn) {
      createBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showModal();
      });
    });

    confirmYesBtn.addEventListener('click', function() {
      hideModal();
;
      window.location.href = itemsCreateUrl;
    });


    function showModal() {
      modal.style.display = 'block';
    }

    function hideModal() {
      modal.style.display = 'none';
    }
  });
