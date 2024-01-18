//set up product cart: id, name, price, quantity

const products = [
    {id: 1, name: "T-shirt", price: 25, quantity: 5},
    {id: 2, name: "airJordan", price: 150, quantity: 2},
    {id: 3, name: "sweadPants", price: 65, quantity: 3},
    {id: 4, name: "baseBall Cap", price: 5, quantity: 2}
];

//Add functions for core functionality
//firstly to display products

function displayProduct(){
    console.table(products);
}

//Next, add products to cart or choose desired products

function addToCart(){
    const product = product.find(product => product.id === productID);
    if(product && product.quantity > 0){
        //Add to cart using seperate array log
        cart.push(product);
        product.quantity--;
        console.log(`${product.name} added to the cart`);
    } else{
        console.log("Product not found")
    }
}

//Let user view cart

function viewCart(){
    console.table(cart);
}

//check out

function checkout(){
    //calculate total price

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
    console.log("Total price: ", totalPrice);
    //payment processing
    console.log("payment successful");
    cart = []; //to clear the cart
}