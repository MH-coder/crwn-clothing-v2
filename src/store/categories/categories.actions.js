import { CATEGORIES_TYPES } from "./categories.types"

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export const setCategoriesMap = (categoryMap) => (
    { type: CATEGORIES_TYPES.MAP_CATEGORIES, payload: categoryMap }
)

export const fetchCategoriesStart = () => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_START, payload: null })

export const fetchCategoriesSuccess = (categoryMap) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoryMap })

export const fetchCategoriesFailed = (error) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, payload: error })