// Time to go shopping for stable supplies!
//
// Create a program that tracks items added to a shopping cart.
//
// Initialize the program with an array of objects, representing a cart that already contains 3 items, 
// where each object represents an item with a name (string) and a price (number).
//
// There should be a function that accepts:
// - the array of objects representing items in the cart 
// - an object representing an item to add, also containing a name and price.
// 
// The function should:
// - add a new entry to the array of items in the cart
// - log out a message that lets the user know the name of the item added to the cart
// - return the total number of items in the cart.
//
// Separately, use the return value of the function to log out how many items are in the cart.
//
// BONUS: Inside the function, log out "You can no longer use the express checkout!"
// if there are 7 or more items in the cart.

// Solution: //

let cart = [
    {
        name: "Horse Food",
        price: 50
    },
    {
        name: "Bedding",
        price: 199
    },
    {
        name: "Stable Brush",
        price: 25
    }
];

function addToCart(cart, item) {
    cart.push(item);

    console.log(item.name + " was added to your shopping cart.");

    if (cart.length >= 7) {
        console.log("you can no longer use the express lane, please wait in the normal checkout lane.");
    }
    return cart.length;
};

let itemCount = addToCart(cart, { name: "Heybale", price: 30 });

console.log("There are " + itemCount + " items in your shopping cart.");

// end of problem.js //