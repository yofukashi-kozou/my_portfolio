// document.addEventListener('click', function(){
//   console.log("削除ボタン")
// });

// document.addEventListener('DOMContentLoaded', function()
//    {
//     var deleteBtns = document.getElementsByClassName('delete-btn');
//     var modal = document.getElementById('confirmation-modal');
//     var confirmYesBtn = document.getElementById('confirm-yes');

//      // データ属性からURLを取得
//     var itemsDeleteUrl = document.getElementById('confirmation-modal').dataset.itemsDeleteUrl;

//     console.log(itemsDeleteUrl);

//     Array.from(deleteBtns).forEach(function(deleteBtn) {
//       deleteBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         showModal();
//       });
//     });

//     confirmYesBtn.addEventListener('click', function() {
//       hideModal();
// ;
//       window.location.href = skillEditUserUrl;

//     });




//     function showModal() {
//       modal.style.display = 'block';
//     }

//     function hideModal() {
//       modal.style.display = 'none';
//     }
//   });





// 更新
  // updateBtn.forEach('click',function(){ 
//   document.addEventListener('click', function() {
//     var updateBtns = document.getElementsByClassName('update-btn');
//     var modal = document.getElementById('confirmation-modal-update');
//     var confirmYesBtn = document.getElementById('update-confirm-yes');

//     console.log("通った更新");
    

//      // データ属性からURLを取得
//     var itemsUpdateUrl = document.getElementById('confirmation-modal-update');

//     console.log(itemsUpdateUrl);

//     Array.from(updateBtns).forEach(function(updateBtn) {
//       updateBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         showModal();
//       });
//     });

//     confirmYesBtn.addEventListener('click', function() {
//       hideModal();
// ;
      
//     });




//     function showModal() {
//       modal.style.display = 'block';
//     }

//     function hideModal() {
//       modal.style.display = 'none';

//     }
//   });

  


// 追加
document.addEventListener('DOMContentLoaded', function(){
// createBtn.forEach('click',function(){ 
// document.addEventListener('click', function() {
  var createBtns = document.getElementsByClassName('create-btn');
  var modal = document.getElementById('confirmation-modal-add');
  var confirmYesBtn = document.getElementById('add-confirm-yes');
  let modalLearningTimeDisplay = document.getElementById('modalLearningTimedisplay');
  var itemNameDisplay = document.getElementById('itemNameDisplay');
  

   // データ属性からURLを取得
  var itemsCreateUrl = document.getElementById('confirmation-modal-add')

  console.log("追加");
  console.log(modalLearningTimeDisplay );
  console.log(forms[1] );
  console.log(forms[2] );
  

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
  });


  function showModal() {
    modal.style.display = 'block';
  }

  function hideModal() {
    modal.style.display = 'none';

  }
});
