const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const availableItems = [
  { id: 1, name: "Product A", price: 20 },
  { id: 2, name: "Product B", price: 30 },
  { id: 3, name: "Product C", price: 25 }
];

let cart = [];

function displayAvailableItems() {
  return new Promise(resolve => {
    console.log("Available Products:");
    availableItems.forEach(product => {
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
    resolve();
  });
}

function getUserInput() {
  return new Promise((resolve, reject) => {
    const id = parseInt(prompt("Enter the product ID:"));
    const quantity = parseInt(prompt("Enter the quantity:"));

    if (!Number.isInteger(id) || !Number.isInteger(quantity)) {
      reject("Invalid input. Please enter valid numbers.");
    } else {
      resolve({ id, quantity });
    }
  });
}

function addToCart(selectedProduct, quantity) {
  return new Promise((resolve, reject) => {
    const itemInCart = cart.find(item => item.id === selectedProduct.id);

    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({ ...selectedProduct, quantity });
    }

    console.log("Item added to cart.");
    resolve();
  });
}

function calculateTotalPrice(item) {
  return item.price * item.quantity;
}

async function checkout() {
  try {
    await displayAvailableItems();
    const { id, quantity } = await getUserInput();

    const selectedProduct = availableItems.find(product => product.id === id);

    if (selectedProduct) {
      await addToCart(selectedProduct, quantity);

      const totalPrice = calculateTotalPrice(cart[cart.length - 1]);
      console.log(`Total Price: $${totalPrice}`);
      console.log("Thank you for shopping!");
    } else {
      console.log("Invalid product ID. Please try again.");
    }
  } catch (error) {
    console.error(error);
  }
}

checkout();