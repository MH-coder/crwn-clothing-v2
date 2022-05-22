import { CART_ACTIONS_TYPES } from "./cart.types"

// HELPER FUNCTIONS
const addCartItem = (cartItems, productToAdd) => {
    //find if cart contains the productToAdd
    const existingCartItem = cartItems.find((item) => {
        return item.id === productToAdd.id
    })
    //if found increment quantity
    if (existingCartItem) {
        return cartItems.map((item) => {
            return item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        })
    }

    //return new array with applied conditions/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find((item) => {
        return item.id === cartItemToRemove.id
    })

    if (cartItemToRemove.quantity === 1) {
        return cartItems.filter((cartItem) => (
            cartItem.id !== cartItemToRemove.id
        ))
    }

    if (existingCartItem) {
        return cartItems.map((item) => {
            return item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        })
    }
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    const existingCartItem = cartItems.find((item) => {
        return item.id === cartItemToDelete.id
    })

    if (existingCartItem) {
        return cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemToDelete.id
        })
    }
}

// ACTIIONS
export const setIsCartOpen = (bool) => ({ type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN, payload: bool })

const updateCartItemsReducer = (newCartItems) => {
    const newCartitemsCount = newCartItems.reduce((count, cartItem) => {
        return count + cartItem.quantity
    }, 0)

    const newTotalPrice = newCartItems.reduce((total, cartItem) => {
        return total + (cartItem.quantity * cartItem.price);
    }, 0)

    return ({
        type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: {
            cartItems: newCartItems,
            cartItemsCount: newCartitemsCount,
            total: newTotalPrice
        }
    })
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return updateCartItemsReducer(newCartItems)
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return updateCartItemsReducer(newCartItems)
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, cartItemToDelete)
    return updateCartItemsReducer(newCartItems)
}