import { CATEGORIES_TYPES } from "./categories.types"

export const setCategoriesMap = (categoryMap) => (
    { type: CATEGORIES_TYPES.MAP_CATEGORIES, payload: categoryMap }
)
