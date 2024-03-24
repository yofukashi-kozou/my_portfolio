document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('update-form');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'PATCH',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        showModal(data.updatedItem);
      })
      .catch(error => console.error('Error:', error));
    });
  
    function showModal(updatedItem) {
      modalContent.innerText = `更新された項目: ${updatedItem.name}`;
      modal.style.display = 'block';
    }
  });