//Declare variables for the buttons that will require interaction
let upButton = document.querySelector('#quantity-up')
let dwnButton = document.querySelector('#quantity-down')
let removeButton = document.querySelector('.remove')

//Declare the variables used
let quantity = 1
let totalPrice = 0
let itemPrice = 15

//This function updates the Quantity value on the web page
function updateQty(displayQty) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQty
}

//This function updates the Total Price displayed on the web page
function totPrice(displayTotal) {
    let totalPrice = document.querySelector('.total-price')
    totalPrice.innerHTML = displayTotal
}

//This section controls what happens when the Remove button is clicked
//The updateQty and totPrice functions are called to update the web page
//   with the Quantity and the Total Price set to 0
removeButton.addEventListener('click', function(e) {
    quantity = 0
    updateQty(`Quantity: ${quantity}`)
    totPrice(`Total Price available at checkout $ ${quantity.toFixed(2)})`)
} )

//This section controls what happens when the '+'' button is clicked
//The Quantity is incremented by 1 each time the '+' button is clicked
//The Total Price is calculated by multiplying the quantity by 15 (itemPrice)
//The updateQty and totPrice functions are called to update the web page 
//    with the updated Quantity and the Total Price
upButton.addEventListener('click', function(e) {
    updateQty(`Quantity: ${++quantity}`)
    let tPrice = itemPrice * quantity
    totPrice(`Total Price available at checkout $ ${tPrice.toFixed(2)})`)
} )

//This section controls what happens when the '-' button is clicked
//The Quantity is decreased by 1 each time the '-' button is clicked
//If the Quantity will not decrease below 0, when the Quantity reaches 0, an
//    alert message will display with 'The Cart is Empty'
//The Total Price is calculated by multiplying the quantity by 15 (itemPrice)
//The updateQty and totPrice functions are called to update the web page 
//    with the updated Quantity and the Total Price
dwnButton.addEventListener('click', function(e) {
    if(quantity > 0) {
        quantity-- 
    } else {
        window.alert('The Cart is Empty')
    }
    updateQty(`Quantity: ${quantity}`)
    let tPrice = itemPrice * quantity
    totPrice(`Total Price available at checkout $ ${tPrice.toFixed(2)})`)
} )
    

