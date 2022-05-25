import { createSelector } from 'reselect'

const cartReducerSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
    [cartReducerSelector],
    (cart) => cart.cartItems
)

export const isCartOpenSelector = createSelector(
    [cartReducerSelector],
    (cart) => cart.isCartOpen
)

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce((count, cartItem) => {
        return count + cartItem.quantity
    }, 0)
)
export const cartTotalSelector = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce((total, cartItem) => {
        return total + (cartItem.quantity * cartItem.price);
    }, 0)
)