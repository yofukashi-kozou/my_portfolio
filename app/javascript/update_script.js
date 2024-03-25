var updateButtons = document.querySelectorAll('#updateButton');
const modal = document.getElementById('update-modal');

// document.addEventListener('DOMContentLoaded', function() {
    updateButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {

    
    const form = document.getElementById('update-form');
    const modalContent = document.getElementById('update-modal-content');
  
    // form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      console.log("通った更新2");
      console.log("formData=");
      console.log(formData);
      console.log("form=");
      console.log(form);
      console.log("modal=");
      console.log(modal);



      fetch(form.action, {
        method: 'PATCH',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
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