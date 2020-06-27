/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  //console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.tBodies[0].innerHTML = ' ';

}
var tBody;
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tBody=table.tBodies[0];
  for (let index = 0; index < cart.items.length; index++) {
    var tr = document.createElement('tr');
    tr.setAttribute('id',index);
    var tdRemove = document.createElement('td');
    tdRemove.textContent = 'X';
    tdRemove.classList.add('remover');
    tdRemove.id=index;
    var tdProduct =document.createElement('td');
    tdProduct.textContent=cart.items[index].product;
    var tdQuntity =document.createElement('td');
    tdQuntity.textContent=cart.items[index].quantity;
    tr.appendChild(tdRemove);
    tr.appendChild(tdProduct);
    tr.appendChild(tdQuntity);
    table.appendChild(tr);
    }
}
function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
if (event.target.classList.contains('remover')) 
{
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
location.reload();
  renderCart();

}


}

// This will initialize the page and draw the cart on screen
renderCart();
