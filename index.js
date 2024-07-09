document.addEventListener("DOMContentLoaded", () => {
    // Get references to the input field, buttons, and list container
    const inputField = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const clearButton = document.getElementById("clear-button");
    const shoppingList = document.getElementById("shopping-list");
  
    // Retrieve the saved list from localStorage or initialize an empty array
    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
  
    // Function to render the shopping list
    const renderList = () => {
      // Clear the current list in the DOM
      shoppingList.innerHTML = '';
  
      // Iterate over the items array and create list elements for each item
      items.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
  
        // If the item is marked as purchased, apply the purchased class
        if (item.purchased) {
          listItem.classList.add("purchased");
        }
  
        // Add an event listener to each list item for marking as purchased
        listItem.addEventListener("click", () => {
          item.purchased = !item.purchased; // Toggle the purchased status
          localStorage.setItem('shoppingList', JSON.stringify(items)); // Update localStorage
          renderList(); // Re-render the list
        });
  
        // Append the list item to the shopping list in the DOM
        shoppingList.appendChild(listItem);
      });
    };
  
    // Function to add a new item to the list
    const addItem = () => {
      const newItem = inputField.value.trim(); // Get the input value and trim whitespace
  
      // If the input value is not empty, add the item to the list
      if (newItem !== "") {
        items.push({ name: newItem, purchased: false }); // Add new item object to the items array
        localStorage.setItem('shoppingList', JSON.stringify(items)); // Save the updated list to localStorage
        renderList(); // Re-render the list
        inputField.value = ''; // Clear the input field
      }
    };
  
    // Function to clear the entire list
    const clearList = () => {
      items = []; // Clear the items array
      localStorage.removeItem('shoppingList'); // Remove the list from localStorage
      renderList(); // Re-render the list
    };
  
    // Attach event listeners to the Add and Clear List buttons
    addButton.addEventListener("click", addItem);
    clearButton.addEventListener("click", clearList);
  
    // Initial render of the shopping list on page load
    renderList();
  });
  