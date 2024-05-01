
  const addButton = document.getElementById('addButton');
  

  addButton.addEventListener('click', function(event) {


 const addItemTextarea = document.getElementById("addButton");
    const addLearningTimeTextarea = document.getElementById("addButton");
    const addItemLength = addItemTextarea.value.length;
    const addLearningTimeLength = addLearningTimeTextarea.value.length;
    
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemLearningTime = document.getElementById('itemLearningtime').value;
    // const categoryId = document.getElementById('').value;
     const categoryId = document.getElementById('categoryid').value;
     const categoryName = document.getElementById('categoryname').value;
     const createdAt = document.getElementById('createdat').value;
    var userId = addButton.getAttribute('add-button-id');
    const modal = document.getElementById('add-modal');

    console.log(categoryName);

    const formData = {
      item: {
        name: itemName,
        learning_time: itemLearningTime,
        categories_id: categoryId,
        user_id: userId,
        created_at: createdAt
      }
    };

    console.log(formData );

    fetch('/items/' + userId + '/items_create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log("通った追加3");
      var addItemId = data.add_item_id;

      showModal(addItemId);
    })
    .catch(error => console.error('Error:', error));
  // }
  });

  function showModal(addItemId){
    var modal = document.getElementById('add-modal'); 
    const categoryName = document.getElementById('categoryname').value;
    console.log("通った更新3");
    console.log(addItemId);
    //   modalContent.innerText = `更新された項目: ${updatedItem.name}`;
    var modalContent = document.querySelector('.add-modal-content');
    console.log("通った更新4");
    // console.log(modalContent);

    document.getElementById('addItemIdArea').innerHTML = `<p>${categoryName}に${addItemId.name}を${addItemId.learning_time}で追加しました！</p>`;
      modal.style.display = 'block';
    }

