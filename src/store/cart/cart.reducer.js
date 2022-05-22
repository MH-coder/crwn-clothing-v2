import { CART_ACTIONS_TYPES } from "./cart.types";

// REDUCER
export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        case CART_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }

        default:
            return state
            break;
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    total: 0
}