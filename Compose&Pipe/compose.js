// These tasks should be performed serially
// 1st : add items to cart
// 2nd :  calculate discount
//  3rd : buy item & empty the cart


// These are 'args' of compose function
const useCart = [];
const item = { name: "Laptop", price: 1100.00 };

// Step 1 : adding item to cart
const addItemToCart = (cart, item) => {
    return cart.concat([item])
};
// step 2 : calculate discount if any
const calculateDiscount = (cart) => {
    const updatedCart = cart.map((item) => {
        const discount = (item.price * 20) / 100;
        return {
            item: item.name,
            price: (item.price - discount).toFixed(2)
        }
    })
    return updatedCart;
}
// Step 3 : Buy item
const buyItem = (cart) => {
    cart = [];
    return cart;
}

// COMPOSE FUNCTION
const compose = (buyItem, calculateDiscount, addItemToCart) => {
    return (cart, item) => {
        return buyItem(calculateDiscount(addItemToCart(cart, item)))
    }
}

// PIPE FUNCTION
const pipe = (buyItem, calculateDiscount, addItemToCart) => {
    return (cart, item) => {
        return addItemToCart(calculateDiscount(buyItem(cart, item)))
    }
}

// lets take : buyItem --> f, calculateDiscount --> g, addItemToCart --> h
// const compose = (f,g,h) => (x,y) => f(g(h)) 

// step 3 : purchase the item
const purchaseItem = compose(buyItem, calculateDiscount, addItemToCart); // compose fun is returning another function

// step 4 : final reciept
const puchasedItemsArray = purchaseItem(useCart, item);  //Here useCart--->cart && item--->item of line no 23

// puchasedItemsArray.forEach((elem) => {
//     console.log(elem)
// })

console.log("Check cart after purchase with Compose", puchasedItemsArray);
console.log("Check cart after purchase with Pipe",pipe(addItemToCart,calculateDiscount,buyItem)(useCart, item));