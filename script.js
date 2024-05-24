const products = [
    { name: "logitech-g502", price: 50, image: "logitech-g502-hero-001.png" },
    { name: "White Shark HEADSET GH-1841 LION", price: 110, image: "casque-micro-gaming-white-shark-lion-gh-1841-silver.jpg" },
    { name: "white shark Microphone Gamer Nagara DSM-02", price: 299, image: "1.jpg" },
    { name: "RTX 4090", price: 8000, image: "asus-rog-strix-rtx-4090-24gb.jpg" },
    { name: "playstation 5 controller", price: 359, image: "61uQKdWCfAL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Gigabyte GeForce RTX 3060 Ti", price: 1899 , image: "téléchargement.jfif" },
    { name: "Elgato Stream Deck Mini", price: 59 , image: "615JEWGsK1L._AC_UF894,1000_QL80_.jpg" },  
    { name: "Razer Cobra Pro Wireless Gaming Mouse", price: 119.73 , image: "71tuAoPh-LL._AC_UF894,1000_QL80_.jpg" },
    { name: "Gaming PC", price: 1465.45 , image: "png-clipart-intel-megaport-gaming-computer-personal-computer-intel-electronics-computer-thumbnail.png", description: "- GeForce RTX 4080 | AMD Ryzen 7 5800X3D " },
    { name: "Razer RZ03-04470200-R3U1 Ornata V3 X Gaming Keyboard", price: 38 , image: "71pqfvJKW5L._AC_SL1500_.jpg" },
    { name: "Gaming chair", price: 145 , image: "71+hOg9faYL._AC_SL1500_.jpg" },
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
        ${product.name === "Gaming PC" ? `<button class="show-more">View More</button>` : ''}
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

document.querySelector('.show-more').addEventListener('click', () => {
    const productIndex = products.findIndex(product => product.name === "Gaming PC");
    const product = products[productIndex];
    alert(product.description);
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
