const products = [
    { name: "logitech-g502", price: 50, image: "logitech-g502-hero-001.png" },
    { name: "White Shark HEADSET GH-1841 LION", price: 110, image: "casque-micro-gaming-white-shark-lion-gh-1841-silver.jpg" },
    { name: "white shark Microphone Gamer Nagara DSM-02", price: 299, image: "1.jpg" },
    { name: "RTX 4090", price: 8000, image: "asus-rog-strix-rtx-4090-24gb.jpg" },
    { name: "playstation 5 controller", price: 359, image: "r.jpg" },
];

const productContainer = document.querySelector('.product-list');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout');

let cart = [];

products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="add-to-cart" data-index="${index}">Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
});
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.dataset.index);
        const selectedProduct = products[index];
        cart.push(selectedProduct);
        updateCart();
        console.log("clicked")
    });
});



function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});
