const readline = require('readline');

const availableItems = [
  { id: 1, name: "T-shirt", price: 15, quantity: 10 },
  { id: 2, name: "Mug", price: 10, quantity: 8 },
  { id: 3, name: "Book", price: 25, quantity: 25 },
  {id:  4, name: "airJordan", price: 150, quantity: 3},
  {id: 5, name: "swedPants", price: 65, quantity: 12},
  {id: 6, name: "baseBall Cap", price: 5, quantity: 5}
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
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter the product ID: ', id => {
      rl.question('Enter the quantity: ', quantity => {
        rl.close();
        resolve({ id: parseInt(id), quantity: parseInt(quantity) });
      });
    });
  });
}

function addToCart(selectedProduct, quantity) {
  return new Promise(resolve => {
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
  //use try...catch error for error handling
  try {
    await displayAvailableItems();
    const { id, quantity } = await getUserInput();

    const selectedProduct = availableItems.find(product => product.id === id);

    if (selectedProduct) {
      await addToCart(selectedProduct, quantity);
      //create an array of totalPrice as last index and access it 
      const totalPrice = calculateTotalPrice(cart.at(-1)); //same as cart.[cart.length] -1
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
