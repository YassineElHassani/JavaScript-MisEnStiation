let addItemButton = document.getElementById('addItemsBtn');
let itemInput = document.getElementById('itemInput');
let itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', () => {
    let itemText = itemInput.value;

    if(itemText.length > 0) {
        let newItem = document.createElement('li');
        newItem.textContent = itemText;
        newItem.classList.add("itemSelect");
        itemList.appendChild(newItem);

        let removeItem = document.createElement("img");
        removeItem.src = "../../images/remove.png";
        removeItem.height = 25;
        removeItem.width = 25;
        removeItem.style.right = "10";
        newItem.appendChild(removeItem);

        removeItem.addEventListener("click", () => {
            newItem.remove();
        });
    } else {
        alert("Please fill the input before you adding item!");
    }

    itemInput.value = '';
});
