//declare a readline variable with const
const readline = require('readline');

//declare an array of items using const
const availableItems = [
  { id: 1, name: "T-shirt", price: 15, quantity: 10 },
  { id: 2, name: "Mug", price: 10, quantity: 8 },
  { id: 3, name: "Book", price: 25, quantity: 25 },
  {id:  4, name: "airJordan", price: 150, quantity: 3},
  {id: 5, name: "swedPants", price: 65, quantity: 12},
  {id: 6, name: "baseBall Cap", price: 5, quantity: 5}
];

//create an empty array using let
let cart = [];

//write a function to display products for user
function displayAvailableItems() {
  //the promise...resolve function is applied here
  return new Promise(resolve => {
    console.log("Available Products:");
    availableItems.forEach(product => {
      //console.log the available concatenated products
      console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
    resolve();
  });
}

//create a function to get user input
function getUserInput() {
//use the promise...return function
  return new Promise(resolve => {
    //declare a variable rl to create interface 
    //for the user the give input: 
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    //apply readline.question operation

    rl.question('Enter the product ID: ', id => {
      rl.question('Enter the quantity: ', quantity => {
        rl.close();
        resolve({ id: parseInt(id), quantity: parseInt(quantity) });
      });
    });
  });
}

//write function to add to selected goods to cart
function addToCart(selectedProduct, quantity) {
 //apply the promise..resolve operation
  return new Promise(resolve => {
    //create a variable "itemInCart" to hold the selected item 
    const itemInCart = cart.find(item => item.id === selectedProduct.id);

    // give a conditional to process the addition of products from user
    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({ ...selectedProduct, quantity });
    }

    console.log("Item added to cart.");
    resolve();
  });
}

//calculate the total price of selected item
function calculateTotalPrice(item) {
  return item.price * item.quantity;
}

//write an asynch funct to checkout simultaneously
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
