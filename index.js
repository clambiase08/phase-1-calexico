

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
const cartForm = document.querySelector('#cart-form')
const cartInput = document.querySelector('#cart-amount')
let numInCart = document.querySelector('#number-in-cart')

function renderMenu(menu) {
    const span = document.createElement('span')
    span.textContent = menu.name
    menuItems.appendChild(span)
    
    span.addEventListener('click', () => renderDish(menu))
}

function renderDish(menu) {
    img.src = menu.image
    dishName.textContent = menu.name
    dishDescr.textContent = menu.description
    dishPrice.textContent = menu.price
    numInCart.textContent = menu.number_in_bag
}

//This is the part I need to really focus on!

cartForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newCart = parseInt(cartInput.value)
    numInCart.textContent = parseInt(numInCart.textContent) + newCart
    e.target.reset()
})

