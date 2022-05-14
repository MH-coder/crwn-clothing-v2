import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const newCartitemsCount = cartItems.reduce((count, cartItem) => {
            return count + cartItem.quantity
        }, 0)
        setCartItemsCount(newCartitemsCount)

        const totalPrice = cartItems.reduce((total, cartItem) => {
            return total + (cartItem.quantity * cartItem.price);
        }, 0)
        setTotal(totalPrice)
    }, [cartItems])

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const deleteItemFromCart = (cartItemToDelete) => {
        setCartItems(deleteCartItem(cartItems, cartItemToDelete))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, removeItemFromCart, deleteItemFromCart, total }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}