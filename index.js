// Write your code here...

//Challenge #1
//Fetch all the menu items from http://localhost:3000/menu. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.

//First I need to:
//[x] write a function that takes in a url and returns a fetch with that url
//[x] call that function, passing in the url from the json server, chaining on a .then that takes the menu arr and iterates across it, passing in a callback function that renders the menu
//[x] set the variable of the menu items div in the global scope
//[x] write a function that renders the menu by creating a span element, setting that span text equal to the keys.value of the menu item, and appending it to the DOM


function returnMenu(url) {
    return fetch(url)
    .then(res => res.json())
}

returnMenu('http://localhost:3000/menu')
.then(menuArr => menuArr.forEach(renderMenu))

const menuItems = document.querySelector("#menu-items")

function renderMenu(menu) {
    const span = document.createElement('span')
    span.textContent = menu.name
    menuItems.appendChild(span)
}

