import { CATEGORIES_TYPES } from "./categories.types";

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_TYPES.MAP_CATEGORIES:
            return {
                ...state,
                categoriesMap: payload
            }

        default:
            return state;
    }
}

export const INITIAL_STATE = {
    categoriesMap: []
}