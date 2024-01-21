

  document.addEventListener('DOMContentLoaded', function() {
    var deleteBtns = document.getElementsByClassName('delete-btn');
    var modal = document.getElementById('confirmation-modal');
    var confirmYesBtn = document.getElementById('confirm-yes');

    console.log("通った削除");

     // データ属性からURLを取得
    var itemsDeleteUrl = document.getElementById('confirmation-modal').dataset.itemsDeleteUrl;

    console.log(itemsDeleteUrl);

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

  document.addEventListener('DOMContentLoaded', function() {
    var updateBtns = document.getElementsByClassName('update-btn');
    var modal = document.getElementById('confirmation-modal-update');
    var confirmYesBtn = document.getElementById('confirm-yes');

    console.log("通った更新");
    

     // データ属性からURLを取得
    var itemsUpdateUrl = document.getElementById('confirmation-modal-update').dataset.itemsUpdateUrl;

    console.log(itemsUpdateUrl);

    Array.from(updateBtns).forEach(function(updateBtn) {
      updateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        showModal();
      });
    });

    confirmYesBtn.addEventListener('click', function() {
      hideModal();
;
      window.location.href = afterDeleteUrl;
    });




    function showModal() {
      modal.style.display = 'block';
    }

    function hideModal() {
      modal.style.display = 'none';
    }
  });



// 追加

document.addEventListener('DOMContentLoaded', function() {
  var createBtns = document.getElementsByClassName('create-btn');
  var modal = document.getElementById('confirmation-modal-add');
  var confirmYesBtn = document.getElementById('confirm-yes');
  let modalLearningTimeDisplay = document.getElementById('modalLearningTimedisplay');
  var itemNameDisplay = document.getElementById('itemNameDisplay');
  

   // データ属性からURLを取得
  var itemsCreateUrl = document.getElementById('confirmation-modal-add').dataset.itemsCreateUrl;

  console.log("通ったフォーム");
  console.log(modalLearningTimeDisplay );


  

  Array.from(createBtns).forEach(function(createBtn) {
    createBtn.addEventListener('click', function(event) {
      event.preventDefault();
      var itemName = document.forms[1].elements[1].value;
      var learningTime = document.forms[1].elements[2].value;
      itemNameDisplay.textContent = itemName;
      modalLearningTimeDisplay.textContent = learningTime ;
     

      console.log(itemName);

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


