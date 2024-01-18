// Product data (using a concise array of objects)
const products = [
  { id: 1, name: "T-shirt", price: 15, quantity: 10 },
  { id: 2, name: "Mug", price: 10, quantity: 5 },
  { id: 3, name: "Book", price: 25, quantity: 3 }
];

// Cart array (initialized as empty)
let cart = [];

// Function to display products in a user-friendly format
function displayProducts() {
    console.clear();
    console.log("Available Products:");
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
}

// Function to add a product to the cart with error handling
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product && product.quantity > 0) {
        cart.push(product);
        product.quantity--;
        console.log(`${product.name} added to cart`);
    } else {
        console.log("Product not found or out of stock");
    }
}

// Function to display the cart contents
function viewCart() {
    console.clear();
    console.log("Your Cart:");
    if (cart.length === 0) {
        console.log("Your cart is empty");
    } else {
        cart.forEach(product => {
            console.log(`${product.name} - $${product.price}`);
        });
    }

// Function to handle checkout with a clear message
function checkout() {
    console.clear();
    console.log("Checkout Successful!")
    console.log("Thank you for your purchase!");
    cart = []; // Clear the cart
}

// Main loop for user interaction, tailored for Node.js environment
const readline = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
});
readline.question("Enter your name: ", (name) => {
  // Process the name here
});

while (true) {
    displayProducts();
    readline.question('"Enter your name: ", (cart) => {const choice = parseInt(choiceString);
        
        switch (choice) {
            case 1:
                displayProducts();
                break;
            
            case 2:
                readline.question("Enter product ID: ", (productIdString) => {
                    const productId = parseInt(productIdString);
                    addToCart(productId);
                });
                break;
            
            case 3:
                viewCart();
                break;
            
            case 4:
                checkout();
                break;
            
            case 5:
                console.log("Exiting...");
                process.exit();
                break;
            default:
                console.log("Invalid choice");
    }
  });
}}
