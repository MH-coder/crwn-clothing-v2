import { createContext, useEffect, useState, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartItemsCount: 0,
    setCartItemsCount: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    total: 0,
    setTotal: () => { }
})

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

const CART_ACTIONS_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
            break;

        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
            break;

        default:
            throw new Error(`Un-Handeled type error ${type} in CART REDUCER`)
            break;
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    total: 0
}

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartItemsCount, total }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const setIsCartOpen = (bool) => {
        dispatch({ type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN, payload: bool })
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartitemsCount = newCartItems.reduce((count, cartItem) => {
            return count + cartItem.quantity
        }, 0)

        const newTotalPrice = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price);
        }, 0)

        dispatch({
            type: CART_ACTIONS_TYPES.SET_CART_ITEMS, payload: {
                cartItems: newCartItems,
                cartItemsCount: newCartitemsCount,
                total: newTotalPrice
            }
        })
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)

    }

    const deleteItemFromCart = (cartItemToDelete) => {
        const newCartItems = deleteCartItem(cartItems, cartItemToDelete)
        updateCartItemsReducer(newCartItems)

    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, removeItemFromCart, deleteItemFromCart, total }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}