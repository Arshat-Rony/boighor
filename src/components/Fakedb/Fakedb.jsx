const addtoDb = (id) => {
    const cartObj = getCart()
    if (!cartObj[id]) {
        cartObj[id] = 1;
    } else {
        cartObj[id] += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cartObj))
}
const getCart = () => {
    const cart = localStorage.getItem("cart")
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj
}

export { addtoDb, getCart } 