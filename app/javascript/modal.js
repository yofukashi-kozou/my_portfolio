

  document.addEventListener('turbolinks:load', function() {
    var deleteBtns = document.getElementsByClassName('delete-btn');
    var modal = document.getElementById('confirmation-modal');
    var confirmYesBtn = document.getElementById('confirm-yes');



     // データ属性からURLを取得
    var itemsDeleteUrl = document.getElementById('confirmation-modal').dataset.itemsDeleteUrl;

    Array.from(deleteBtns).forEach(function(deleteBtn) {
      deleteBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showModal();
      });
    });

    confirmYesBtn.addEventListener('click', function() {
      hideModal();
;
      window.location.href = skillEditUrl;
    });




    function showModal() {
      modal.style.display = 'block';
    }

    function hideModal() {
      modal.style.display = 'none';
    }
  });





// 更新

  document.addEventListener('turbolinks:load', function() {
    var updateBtns = document.getElementsByClassName('update-btn');
    var modal = document.getElementById('confirmation-modal-update');
    var confirmYesBtn = document.getElementById('confirm-yes');

    console.log("通った");
    alert('turbolinks:load event fired');

     // データ属性からURLを取得
    var itemsUpdateUrl = document.getElementById('confirmation-modal-update').dataset.itemsUpdateUrl;

    Array.from(updateBtns).forEach(function(updateBtn) {
      updateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showModal();
      });
    });

    confirmYesBtn.addEventListener('click', function() {
      hideModal();
;
      window.location.href = itemsUpdateUrl;
    });




    function showModal() {
      modal.style.display = 'block';
    }

    function hideModal() {
      modal.style.display = 'none';
    }
  });

