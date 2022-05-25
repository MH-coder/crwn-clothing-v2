import { CATEGORIES_TYPES } from "./categories.types";

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesMap: payload,
                isLoading: false
            }
        case CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: error,
                isLoading: false
            }
        default:
            return state;
    }
}

export const INITIAL_STATE = {
    categoriesMap: [],
    isLoading: false,
    error: null
}