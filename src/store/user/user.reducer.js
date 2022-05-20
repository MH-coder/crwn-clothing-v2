import { USER_ACTIONS_TYPES } from "./user.types";

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTIONS_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
            break;

        default:
            return state
            break;
    }
}

const INITIAL_STATE = {
    currentUser: null
}