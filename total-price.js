const cart = [
    {name: 'Phone', price: 88000, quantity: 1},
    {name: 'Watch', price: 8200, quantity: 3},
    {name: 'Shirt', price: 5500, quantity: 5},
    {name: 'Shoe', price: 3200, quantity: 2},
    {name: 'Pant', price: 4400, quantity: 5},
    {name: 'Laptop', price: 220000, quantity: 1},
]

let cartTotal = 0;
for (let product of cart){
    let productTotalPrice = product.price * product.quantity;
    cartTotal += productTotalPrice;
}
console.log(cartTotal);