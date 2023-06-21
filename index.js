// Write your code here...

//Challenge #1
//Fetch all the menu items from http://localhost:3000/menu. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.

//First I need to:
//[x] write a function that takes in a url and returns a fetch with that url
//[x] call that function, passing in the url from the json server, chaining on a .then that takes the menu arr and iterates across it, passing in a callback function that renders the menu
//[x] set the variable of the menu items div in the global scope
//[x] write a function that renders the menu by creating a span element, setting that span text equal to the keys.value of the menu item, and appending it to the DOM

//Challenge #2
//When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the #dish section element.

//Then I need to:
//[x] set the variable of the dish section in the global scope
//[x] write a function that renders the menu item on the page by setting the HTML elements equal to the keys.values from the server
//[x] add to the .then on the returnMenu function that renders the first dish by calling renderdish and passing in the menuArr with a [0] to locate as first in the array


function returnMenu(url) {
    return fetch(url)
    .then(res => res.json())
}

returnMenu('http://localhost:3000/menu')
.then(menuArr => {
    menuArr.forEach(renderMenu)
    renderDish(menuArr[0])
})

const menuItems = document.querySelector("#menu-items")
const dishDisplay = document.querySelector("#dish")
const img = document.querySelector("#dish-image")
const dishName = document.querySelector("#dish-name")
const dishDescr = document.querySelector("#dish-description")
const dishPrice = document.querySelector("#dish-price")


function renderMenu(menu) {
    const span = document.createElement('span')
    span.textContent = menu.name
    menuItems.appendChild(span)
}

function renderDish(menu) {
    img.src = menu.image
    dishName.textContent = menu.name
    dishDescr.textContent = menu.description
    dishPrice.textContent = menu.price
}


