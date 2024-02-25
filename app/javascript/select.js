

// 月選択
document.addEventListener('click', function() {
    var selectBox = document.querySelector('.selectbox-3 select');
    // var resultElement = document.getElementById('result');
  
    selectBox.addEventListener('change', function() {
      var selectedValues = selectBox.value.split(',');
  
      // 各値に対して処理を行う
      selectedValues.forEach(function(selectedValue) {
        // ここで各値に対する処理を行う
        console.log(selectedValue);
        console.log(selectedValues);
  
        // サーバーサイドへの送信などが必要であれば、ここで行う
        fetch('/items/' + selectedValues[1] + '/skill_edit', {
        // fetch('/items/' + selectedValues[1] + '/update_selected_day', {
          // fetch('/items/skill_edit',{ 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
          },
          body: JSON.stringify({selectedDay: selectedValues[0] ,selectedid:selectedValues[1],selectedno:selectedValues[2]})
        })
        .then(response => {
          // HTMLレスポンスを取得
          return response.text();
          // return response.json();
        })
        .then(data => {

          // ここで取得したデータを使って表示を更新するなどの処理を行う
     
        //  window.location.href = '/items/skill_edit';
         window.location.href = '/items/skill_edit?selectedDay=' + selectedValues[0] + '&selectedid=' + selectedValues[1] + '&selectedno=' + selectedValues[2];

        });
      });
    });
  });
  
