const addedItems = [];

function addItem() {
  const input = document.getElementById('myInput');
  const list = document.getElementById('list');

  if (input.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = input.value;

    const markButton = document.createElement('button');
    markButton.textContent = 'Mark as Purchased';
    markButton.onclick = function() {
      li.classList.toggle('purchased');
    };

    li.appendChild(markButton);
    list.appendChild(li);
    addedItems.push(input.value);
    input.value = '';
  }
}

function clearList() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  addedItems.length = 0;
}
