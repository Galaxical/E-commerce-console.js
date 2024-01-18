const { clear } = require('console');
const { read } = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Product data (using a concise array of objects)
const items = [
  { id: 1, name: "T-shirt", price: 15, quantity: 10 },
  { id: 2, name: "Mug", price: 10, quantity: 5 },
  { id: 3, name: "Book", price: 25, quantity: 3 }
];

let cart = [];

//display products
function displayItems(cart){
  console.clear();
  console.log("Available Items: ");
  //work for each product user selected to display name and id
  items.forEach(item => {
    console.log(`${item.id}. ${item.name} - ${item.price}`);
  })

  //add a choosen item to cart
  function addToCart(){
    readline.question("Enter item ID: ", (itemIdString) =>{
      const itemId = parseInt(itemIdString);
      const item = items.find(item => item.id === itemId);
    })

    if (item && item.quantity > 0){
      const quantity = parseInt(readline.question("Enter quantity: "));
      if (quantity > item.quantity){
        console.log("Not enough stock available")
      }else{
        cart.push({
          items,
          quantity
        });
        item.quantity -= quantity;
        console.log(`${Product.name} added to cart`);
      }
    }else{
      console.log("Product not found or out of stock");
    }
  }};

//fucntion to view cart
function viewCart(){
  console.clear();
  console.log("Your cart:");
  //notify user if cart is empty
  if (cart.legnth === 0){
    console.log("Cart is empty");
  } else{ //check for total initial total price to zer
    let totalPrice = 0;
    //calculate each item in the cart
    cart.forEach(item =>{
      console.log(`${item.name} - ${item.quantity} x ${item.price} 
      = ${item.quantity} * ${item.price}`);
      totalPrice += item.quantity * item.price;
    });
    console.log(`Total price: $$(totalPrince)`);
    }
  }

  //function to checkout cart
  function checkout(){
    console.clear();
    console.log("Checkout successful..");
    console.log("Thank you for your purchase");
    cart = [] //clear cart
  }

  //creating the user interaction loops

  while (true){
    displayItems();

    readline.question("Enter your choice (1-4 or 5 to exit): ", (choiceString) => {
      const choice = parseInt(choiceString);

      switch(choice){
        case 1:
          displayItems();
          break;
        case 2:
          addToCart();
          break;
        case 3:
          viewCart();
          break;
        case 4:
          checkout();
          break;
        case 5:
          console.log("Exiting...");
          break;
        default:
          console.log("Invalid choice");
    
      }
    });
  }