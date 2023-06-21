// As a user, I can:
//1. view all items in a menu section on page load
//2. view the details of the first menu item in dish detail section on page load
//3. click a menu item and see its details displayed in the dish detail section
//4. add menu items to my cart. the cart only needs to increment when the same dish is added and can reset when another dish is selected

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

//Challenge #3
//When the user clicks on the menu items on the left, they should see all the details for that specific menu item.

//Then I need to:
//[x] add an event listener to the span that when you click, calls on renderDish and passes in the menu object

//Challenge #4
//The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.
//For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.
//It is okay if the value resets in-between clicking on the menu items! It does not need to save state!

//Lastly, I need to:
//[x] declare the form, form input, and span number in cart variables in global scope (declare span as let since the value will change!)
//[x] add an event listener to the *form* that when you submit, declares a new variable equal to the integer value of what you submitted, then adds that to the integer value of the current text content to make it the new text content of the span variable
//[x] make sure you prevent default and reset the form in the event listener