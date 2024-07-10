const form = document.querySelector("form");
const input = document.querySelector("#input");
const addButton = document.querySelector("button#add");
const shoppingList = document.querySelector("ul.shopping-list");
const clearButton = document.querySelector("button#clear");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const item = input.value;

  const listItem = document.createElement("li");
  listItem.textContent = item;

  const markPurchasedButton = document.createElement("button");
  markPurchasedButton.textContent = "Mark Purchased";

  listItem.appendChild(markPurchasedButton);

  shoppingList.appendChild(listItem);

  input.value = "";
});

clearButton.addEventListener("click", function () {
  shoppingList.innerHTML = "";
});

shoppingList.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    const listItem = event.target.parentElement;
    listItem.style.textDecoration = "line-through"
  }
});
